export enum Status {
  loading = 'loading',
  authorized = 'authorized',
  unauthorized = 'unauthorized'
}

interface IAuthState {
  status: Status
  user?: unknown | null
}

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

export const initialState: IAuthState = {
  status: Status.loading,
  user: null
}

const updateLoading = (state: IAuthState, payload: Status) => ({
  ...state,
  status: payload
})

const authorize = (state: IAuthState, payload: unknown) => {
  return {
    ...state,
    status: Status.authorized,
    user: payload
  }
}

const reject = (state: IAuthState) => ({
  ...state,
  status: Status.unauthorized,
  user: null
})

const actionMap = new Map<string, any>([
  [actionTypes.UPDATE_LOADING, updateLoading],
  [actionTypes.AUTHORIZE, authorize],
  [actionTypes.REJECT_AUTH, reject]
])

export const authStatusReducer = (state: IAuthState = initialState, { type, payload }: Action) => {
  const action = actionMap.get(type)
  return action ? action(state, payload) : state
}
