/* eslint-disable react-hooks/exhaustive-deps */
import { actionsSwal, actionsSwalDefaultValues, errorSwal, errorSwalDefaultValues } from '@nuwe/lib'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { useTechnologies } from '@nuwe/hooks'

import { submitProjectDialogRepository } from './SubmitProjectDialog.repository'
import { submitProjectDialogServices } from './SubmitProjectDialog.services'

import { SubmitProjectDialogView } from './SubmitProjectDialog.container'

import { SatisfactionSurveyDialog } from '../SatisfactionSurveyDialog'

const { submitIndividualChallenge, submitTeamChallenge, getUserTeamFromEvent, getEventById } =
  submitProjectDialogServices(submitProjectDialogRepository)

const indexedArray = (arr: any, key: any) =>
  arr.reduce((acc: any, el: any) => {
    acc[el[key]] = el

    return acc
  }, {})

const verify = (data: any) => {
  let aux: any = []
  data.forEach((element: any) => {
    if (aux.includes(element)) {
      aux.splice(2, 1)
      const remove = aux?.filter((item: any) => item !== element)
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
  setChallengeUserSubmit: (value: any) => void
  setProject: (value: any) => void
  displayTexts: {
    actionCancel: string
    actionSubmit: string
    buildPortfolio: string
    cancel: string
    challengeYourself: string
    checkYourTeamMembersBeforeSubmit: string
    close: string
    dataRepoError: string
    fillInAllTheRequiredFields: string
    findAJob: string
    first: string
    gainExperience: string
    getSkillsReport: string
    haveFun: string
    inputRepoLink: string
    inputSolutionDescription: string
    inputSolutionStack: string
    jobChange: string
    learn: string
    letUsKnowIfYouHaveAnyComments: string
    makeSureAllSolutionParticipantsAreOnYourTeam: string
    networking: string
    second: string
    selectYour3MostRelevantMotivations: string
    solutionSuccessfullySubmitted: string
    submit: string
    submitFormTitle: string
    supercoolSolutionBuiltWithSuperpowers: string
    teamwork: string
    testAHackathon: string
    thankYouForYourParticipation: string
    third: string
    yesContinue: string
    youNeedATeamToSubmitTheSolution: string
  }
}

export const SubmitProjectDialog = ({
  open,
  setSendSolution,
  challenge,
  user,
  setChallengeUserSubmit,
  setProject,
  displayTexts
}: SubmitProjectDialogProps) => {
  const { technologies, loading } = useTechnologies(open)
  const [indexedTechs, setIndexedTechs] = useState<any>({})
  const [loader, setLoader] = useState<boolean>(false)
  const [data, setData] = useState<any>({})
  const [dataScienceChecksError, setDataScienceChecksError] = useState<boolean>(false)
  const [openSurvey, setOpenSurvey] = useState<boolean>(false)

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

  const handleData = (e: any, value: any, key: string) => {
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

  const submitIndividual = async (stack: any) => {
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

  const submitTeam = async (stack: any) => {
    const event = await getEventById(challenge.from.id)

    const userTeam = await getUserTeamFromEvent(user.id, event.data.eventURL)

    if (userTeam.data?.error) {
      return errorSwal({
        ...errorSwalDefaultValues,
        title: 'Error',
        text: displayTexts.youNeedATeamToSubmitTheSolution,
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
        title: displayTexts.checkYourTeamMembersBeforeSubmit,
        text: displayTexts.makeSureAllSolutionParticipantsAreOnYourTeam,
        confirmButtonText: displayTexts.yesContinue,
        cancelButtonText: displayTexts.cancel
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

    const stack = data.technologies.map((key: any) => indexedTechs[key]._id)

    challenge.type === 'Grupal' ? submitTeam(stack) : submitIndividual(stack)
  }

  return (
    <>
      <SubmitProjectDialogView
        challenge={challenge}
        open={open}
        handleData={handleData}
        techsInProjects={techsInProjects}
        data={data}
        setSendSolution={setSendSolution}
        submitSolution={submitSolution}
        loader={loader}
        loading={loading}
        dataScienceChecksError={dataScienceChecksError}
        displayedTexts={displayTexts}
      />
      <SatisfactionSurveyDialog
        challenge={{ id: challenge?.id }}
        event={{ id: challenge?.lastChallenge && challenge?.from?.id }}
        user={{ id: user?.id }}
        popup={{ open: openSurvey, close: () => setOpenSurvey(false) }}
        displayedTexts={displayTexts}
      />
    </>
  )
}
