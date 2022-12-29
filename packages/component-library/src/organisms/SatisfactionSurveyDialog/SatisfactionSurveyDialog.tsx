import { useState } from 'react'

import axios from 'axios'

import { useTranslations } from '@nuwe/lib'
import { SatisfactionSurveyDialogView } from './SatisfactionSurveyDialog.container.jsx'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface SatisfactionSurveyDialogProps {
  challenge: any
  event: any
  user: any
  popup: any
  landingCheck: boolean
}

export const SatisfactionSurveyDialog = ({
  challenge,
  event,
  user,
  popup,
  landingCheck
}: SatisfactionSurveyDialogProps) => {
  const { translate } = useTranslations()

  const [state, setState] = useState({
    challenge: {
      answers: {
        level: 0,
        comment: ''
      }
    },
    event: {
      answers: {
        level: 0,
        comment: '',
        motivations: ['', '', '']
      }
    },
    error: false
  })

  const setMotivation = {
    first: (val: any) =>
      setState({
        ...state,
        event: {
          ...state.event,
          answers: {
            ...state.event.answers,
            motivations: [
              val,
              state.event.answers.motivations[1],
              state.event.answers.motivations[2]
            ]
          }
        }
      }),
    second: (val: any) =>
      setState({
        ...state,
        event: {
          ...state.event,
          answers: {
            ...state.event.answers,
            motivations: [
              state.event.answers.motivations[0],
              val,
              state.event.answers.motivations[2]
            ]
          }
        }
      }),
    third: (val: any) =>
      setState({
        ...state,
        event: {
          ...state.event,
          answers: {
            ...state.event.answers,
            motivations: [
              state.event.answers.motivations[0],
              state.event.answers.motivations[1],
              val
            ]
          }
        }
      })
  }

  const setChallengeAnswers = (answer: any) =>
    setState({
      ...state,
      challenge: {
        ...state.challenge,
        answers: { ...state.challenge.answers, [answer.key]: answer.value }
      }
    })
  const setEventAnswers = (answer: any) =>
    setState({
      ...state,
      event: { ...state.event, answers: { ...state.event.answers, [answer.key]: answer.value } }
    })

  const setDialogError = () => setState({ ...state, error: true })

  const handleSubmit = () => {
    const challengeSurvey = {
      user: {
        id: user?.id
      },
      from: {
        id: challenge?.id,
        type: 'challenge'
      },
      type: 'satisfactionSurvey',
      satisfactionAnswers: {
        level: state.challenge.answers.level,
        comment: state.challenge.answers.comment
      }
    }

    const eventSurvey = {
      user: {
        id: user?.id
      },
      from: {
        id: event?.id,
        type: 'event'
      },
      type: 'satisfactionSurvey',
      satisfactionAnswers: {
        level: state.event.answers.level,
        comment: state.event.answers.comment,
        motivations: state.event.answers.motivations.filter((motivation) => motivation)
      }
    }

    if (!state.challenge.answers.level || (event?.id && !state.event.answers.level))
      return setDialogError()

    axios.post(`${API_URL}surveys`, challengeSurvey, { withCredentials: true }).then(() => {
      if (event?.id) axios.post(`${API_URL}surveys`, eventSurvey, { withCredentials: true })
      popup.close()
    })
  }

  const labels = () => {
    return {
      success: landingCheck
        ? translate('thank_you_for_your_participation', 'teams')
        : translate('solution_successfully_submitted', 'teams'),
      close: translate('close', 'teams'),
      submit: translate('submit', 'teams'),
      error: translate('fill_in_all_the_required_fields', 'teams')
    }
  }

  return (
    <SatisfactionSurveyDialogView
      popup={popup}
      labels={labels}
      eventId={event?.id}
      setChallengeAnswers={setChallengeAnswers}
      setEventAnswers={setEventAnswers}
      setMotivation={setMotivation}
      handleSubmit={handleSubmit}
      showError={state.error}
    />
  )
}
