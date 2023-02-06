import { AuthEntity, Status } from '../../domain'

interface Action {
  type?: string
  key?: string
  payload: any
}

export const actionTypes = {
  UPDATE_LOADING: 'SET_LOADING',
  REJECT_AUTH: 'REJECT_AUTH',
  AUTHORIZE: 'AUTHORIZE'
}

export const initialState: AuthEntity = {
  status: Status.loading,
  user: null
}

const updateLoading = (state: AuthEntity, payload: Status) => ({
  ...state,
  status: payload
})

const authorize = (state: AuthEntity, payload: unknown) => {
  return {
    ...state,
    status: Status.authorized,
    user: payload
  }
}

const reject = (state: AuthEntity) => ({
  ...state,
  status: Status.unauthorized,
  user: null
})

const actionMap = new Map<string, any>([
  [actionTypes.UPDATE_LOADING, updateLoading],
  [actionTypes.AUTHORIZE, authorize],
  [actionTypes.REJECT_AUTH, reject]
])

export const authStatusReducer = (state: AuthEntity = initialState, { type, payload }: Action) => {
  const action = actionMap.get(type)
  return action ? action(state, payload) : state
}
