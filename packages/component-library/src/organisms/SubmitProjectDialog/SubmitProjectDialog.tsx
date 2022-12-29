/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  actionsSwal,
  actionsSwalDefaultValues,
  errorSwal,
  errorSwalDefaultValues
} from 'src/shared/utils/swal/swal'

import { useTechnologies } from 'src/shared/materio/views/ui/Autocomplete/useTechnologies'

import { projectsServices } from 'src/shared/context/projects/domain/projects.services'
import { projectsRespository } from 'src/shared/context/projects/infrastructure/projects.repository'

import { eventServices } from 'src/event/domain/services/event.services'
import { eventRepository } from 'src/event/infrastructure/repository/event.repository'

import { SubmitProjectDialogView } from './SubmitProjectDialog.container'

import { SatisfactionSurveyDialog } from '../SatisfactionSurveyDialog'

import { useTranslations } from '@nuwe/lib'

const { submitIndividualChallenge, submitTeamChallenge } = projectsServices(projectsRespository)
const { getUserTeamFromEvent, getEventById } = eventServices(eventRepository)

const indexedArray = (arr, key) =>
  arr.reduce((acc, el) => {
    acc[el[key]] = el

    return acc
  }, {})

const verify = (data) => {
  let aux = []
  data.forEach((element) => {
    if (aux.includes(element)) {
      aux.splice(2, 1)
      const remove = aux?.filter((item) => item !== element)
      aux = remove
    } else {
      aux.push(element)
    }
  })

  return aux
}

interface SubmitProjectDialogProps {
  open: boolean
  setSendSolution: (value: boolean) => void
  challenge: any
  user: any
  setChallengeUserSubmit: (value: boolean) => void
  setProject: (value: any) => void
}

export const SubmitProjectDialog = ({
  open,
  setSendSolution,
  challenge,
  user,
  setChallengeUserSubmit,
  setProject
}: SubmitProjectDialogProps) => {
  const { technologies, loading } = useTechnologies(open)
  const [indexedTechs, setIndexedTechs] = useState([])
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({})
  const [dataScienceChecksError, setDataScienceChecksError] = useState(false)
  const [openSurvey, setOpenSurvey] = useState(false)

  const { translate } = useTranslations()

  const techsInProjects = challenge?.stack?.map((tech: any) => tech.name)

  useEffect(() => {
    if (!loading) setIndexedTechs(indexedArray(technologies, 'name'))
  }, [loading])

  useEffect(() => {
    if (challenge && user) {
      challenge.type === 'Grupal'
        ? setData({
            title: challenge.title,
            description: '',
            fromEvent: '',
            challengeId: challenge._id,
            projectURL: '',
            technologies: [],
            teamId: ''
          })
        : setData({
            title: challenge.title,
            description: '',
            fromEvent: '',
            challengeId: challenge._id,
            projectURL: '',
            technologies: [],
            userId: user.id
          })
    }
  }, [user, challenge])

  const handlerData = (e: any, value: any, key: string) => {
    if (key === 'technologies')
      return setData({
        ...data,
        [key]: verify(value)
      })

    return setData({
      ...data,
      [key]: e.target.value
    })
  }

  const submitIndividual = async (stack) => {
    const response = await submitIndividualChallenge({
      ...data,
      technologies: stack,
      type: challenge.type,
      category: challenge.subCategory
    })
    if (response.status === 201) {
      // successSwal({
      //   ...successSwalDefaultValues,
      //   title: translate('congratulations', 'teams'),
      //   text: translate('solution_correctly_submitted', 'teams'),
      //   didOpen: () => {
      //     setSendSolution(false)
      //     setChallengeUserSubmit({ userId: user?.id })
      //   }
      // })
      setSendSolution(false)
      setChallengeUserSubmit({ userId: user?.id })
      setOpenSurvey(true)
    }
  }

  const submitTeam = async (stack) => {
    const event = await getEventById(challenge.from.id)

    const userTeam = await getUserTeamFromEvent(user.id, event.data.eventURL)

    if (userTeam.data?.error) {
      return errorSwal({
        ...errorSwalDefaultValues,
        title: 'Error',
        text: translate('you_need_a_team_to_submit_the_solution', 'teams'),
        didOpen: () => {
          setLoader(false)
          setSendSolution(false)
        }
      })
    }

    const project = {
      ...data,
      technologies: stack,
      teamId: userTeam.data.team.id,
      fromEvent: event.data.id
    }

    actionsSwal(
      {
        ...actionsSwalDefaultValues,
        title: translate('check_your_team_members_before_submit', 'teams'),
        text: translate('make_sure_all_solution_participants_are_on_your_team', 'teams'),
        confirmButtonText: translate('yes_continue', 'teams'),
        cancelButtonText: translate('cancel', 'teams')
      },
      {
        actionConfirm: async () => {
          const response = await submitTeamChallenge(project)

          if (setProject) setProject(project)

          if (response.status === 201) {
            // successSwal({
            //   ...successSwalDefaultValues,
            //   title: translate('congratulations', 'teams'),
            //   text: translate('solution_correctly_submitted', 'teams'),
            //   didOpen: () => {
            //     setSendSolution(false)
            //     setChallengeUserSubmit({ userId: user?.id })
            //   }
            // })
            setSendSolution(false)
            setChallengeUserSubmit({ userId: user?.id })
            setOpenSurvey(true)
          }
        },
        cancelActionConfirm: () => setLoader(false)
      }
    )
  }

  // {challengeId:"62681de227d76e001cb3a5e5", userId:"609ffaf58d8475001f18191d"}
  const submitSolution = async () => {
    setLoader(true)

    if (challenge?.subCategory === 'Data Science') {
      const checks = {
        predictions: false,
        app: false
      }

      const userAndRepo = data.projectURL.split('github.com/').pop()

      const url = `https://raw.githubusercontent.com/${userAndRepo}/main/`

      // const checkApp = axios.get(url + 'app.py')

      await Promise.all([axios.get(url + 'predictions.json')])
        .then(() => {
          setDataScienceChecksError(false)
          checks.predictions = true
          checks.app = true
        })
        .catch(() => {
          setDataScienceChecksError(true)
          setLoader(false)
        })

      if (!checks.predictions || !checks.app) return
    }

    const stack = data.technologies.map((key) => indexedTechs[key]._id)

    challenge.type === 'Grupal' ? submitTeam(stack) : submitIndividual(stack)
  }

  return (
    <>
      <SubmitProjectDialogView
        challenge={challenge}
        open={open}
        handlerData={handlerData}
        techsInProjects={techsInProjects}
        data={data}
        setSendSolution={setSendSolution}
        submitSolution={submitSolution}
        loader={loader}
        loading={loading}
        dataScienceChecksError={dataScienceChecksError}
      />
      <SatisfactionSurveyDialog
        challenge={{ id: challenge?.id }}
        event={{ id: challenge?.lastChallenge && challenge?.from?.id }}
        user={{ id: user?.id }}
        popup={{ open: openSurvey, close: () => setOpenSurvey(false) }}
      />
    </>
  )
}
