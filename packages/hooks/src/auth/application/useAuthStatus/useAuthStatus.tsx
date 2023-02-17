import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

import { authService, Status } from '../../domain'
import { authRepository } from '../../infrastructure'

import { actionTypes, authStatusReducer, initialState } from './authStatus.reducer'

const AuthStatusContext = createContext(undefined) as any

const { login, logout, companyStatus, getUserById, signup, verifyVotinSignUp } =
  authService(authRepository)

export const AuthStatusProvider = ({
  API_URL,
  children,
  router,
  authType
}: {
  API_URL: string
  children?: React.ReactNode
  router: any
  authType: string
}) => {
  const [state, dispatch] = useReducer(authStatusReducer, initialState)

  const handleUpdate = (type: string, payload?: unknown) => dispatch({ type, payload })
  const authorize = useCallback((user: unknown) => handleUpdate(actionTypes.AUTHORIZE, user), [])
  const reject = useCallback(() => handleUpdate(actionTypes.REJECT_AUTH), [])
  const updateLoading = (status: Status) => handleUpdate(actionTypes.UPDATE_LOADING, status)

  const updateUserIfNull = useCallback(async () => {
    const statusResponse = await companyStatus(API_URL, authType)
    if (statusResponse) {
      const user = await getUserById(API_URL, statusResponse)
      return authorize(user.data)
    }

    return reject()
  }, [authorize, reject, API_URL, authType])

  useEffect(() => {
    updateUserIfNull()
  }, [updateUserIfNull])

  const handleLogin = async (data: any) => {
    updateLoading(Status.loading)
    const res = await login(authType, API_URL, data)

    if (!res) {
      reject()
      return false
    }

    authorize(res.user)
    return res.user
  }

  const handleVotingVerification = async (data: any, url: string) => {
    const res: any = await verifyVotinSignUp(API_URL, data, url)

    if (res) {
      authorize(res.data)
      return Promise.resolve(true)
    }

    reject()
    return Promise.reject(false)
  }

  const handleSignup = async (data: any) => {
    updateLoading(Status.loading)
    const res = await signup(API_URL, data)
    if (!res) {
      reject()
      return false
    }

    authorize(res.data)
    router.push('/home')
    return true
  }

  const handlerLogout = () => {
    updateLoading(Status.loading)
    logout(API_URL).then(() => {
      reject()
      router.push('/login')
    })
  }

  const value = {
    ...state,
    signup: handleSignup,
    logout: handlerLogout,
    login: handleLogin,
    verifyVotinSignUp: handleVotingVerification
  }

  return <AuthStatusContext.Provider value={value}>{children}</AuthStatusContext.Provider>
}

export const useAuthStatus = () => {
  const context = useContext(AuthStatusContext)

  if (context === undefined) {
    throw new Error('useAuthStatus must be used within an AuthProvider')
  }

  return context
}
