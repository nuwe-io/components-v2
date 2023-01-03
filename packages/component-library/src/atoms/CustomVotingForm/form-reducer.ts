export const ActionType = {
  SET_POLL_ID: 'SET_POLL_ID',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_TITLE: 'SET_TITLE',
  SET_DESCRIPTIONS: 'SET_DESCRIPTIONS',
  UPDATE_QUESTION: 'UPDATE_QUESTION',
  UPDATE_COMMENTS: 'UPDATE_COMMENTS',
  POLL_NOT_FOUND: 'POLL_NOT_FOUND',
  INIT_QUESTIONS: 'INIT_QUESTIONS'
}

export const reducer = (state: any, action: any) => {
  const { actionType, payload } = action

  switch (actionType) {
    case ActionType.SET_POLL_ID:
      return {
        ...state,
        pollId: payload
      }

    case ActionType.INIT_QUESTIONS:
      return {
        ...state,
        questions: payload.questions,
        comments: payload.comments,
        title: payload.title,
        description: payload.description,
        pollId: payload.pollId,
        pollExists: true,
        loading: false
      }
    case ActionType.SET_TITLE:
      return {
        ...state,
        title: payload
      }

    case ActionType.SET_DESCRIPTIONS:
      return {
        ...state,
        descriptions: payload
      }

    case ActionType.SET_QUESTIONS:
      return {
        ...state,
        questions: payload
      }

    case ActionType.UPDATE_COMMENTS:
      return {
        ...state,
        comments: payload
      }

    case ActionType.UPDATE_QUESTION: {
      const { index, rating } = payload
      const updated = state.questions
      updated.map((q: any, i: number) => {
        if (i == index) {
          q.rating = rating
        }
      })

      return {
        ...state,
        questions: updated
      }
    }

    case ActionType.POLL_NOT_FOUND:
      return {
        ...state,
        pollExists: false,
        loading: false
      }
    default:
      return state
  }
}
