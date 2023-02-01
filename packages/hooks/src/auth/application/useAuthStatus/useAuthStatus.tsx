/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useReducer } from 'react'

import toast from 'react-hot-toast'

import { authService } from '../../domain'
import { authRepository } from '../../infrastructure'

import { actionTypes, authStatusReducer, initialState, Status } from './authStatus.reducer'

const AuthStatusContext = createContext(undefined) as any

export const AuthStatusProvider = ({
  API_URL,
  children,
  router
}: {
  API_URL: string
  children?: React.ReactNode
  router: any
}) => {
  const { login, logout, companyStatus, getUserById, signup, verifyVotinSignUp } = authService(
    authRepository(API_URL)
  )
  const [state, dispatch] = useReducer(authStatusReducer, initialState)

  const handleUpdate = (type: string, payload?: unknown) => dispatch({ type, payload })
  const authorize = (user: unknown) => handleUpdate(actionTypes.AUTHORIZE, user)
  const reject = () => handleUpdate(actionTypes.REJECT_AUTH)
  const updateLoading = (status: Status) => handleUpdate(actionTypes.UPDATE_LOADING, status)

  useEffect(() => {
    if (state.user === null && state.status === Status.authorized) updateUserIfNull()
  }, [state.user, state.status])

  const updateUserIfNull = async () => {
    const statusResponse = await companyStatus()
    if (!statusResponse) return reject()

    const user = await getUserById(statusResponse)
    if (!user) return reject()
    return authorize(user.data)
  }

  const handleLogin = async (data: any) => {
    updateLoading(Status.loading)
    const res = await login(data)

    if (!res) {
      reject()
      // return toast.error('Email or password are not correct, please try again.')
    }

    authorize(res.user)
    return res.user
    // return toast.success('Login success!')
  }

  const handleVotingVerification = async (data: any, url: string) => {
    const res: any = await toast.promise(verifyVotinSignUp(data, url), {
      loading: 'Loading...',
      success: 'Succesfully verified!',
      error: 'Verifcation code is not correct, please try again.'
    })

    if (res) return authorize(res.data)

    return reject()
  }

  const handleSignup = async (data: any) => {
    updateLoading(Status.loading)
    const res = await signup(data)
    if (!res) {
      reject()
      return toast.error(
        'It seems you are not linked to a company. Please contact your company admin or get in touch with hello@nuwe.io.'
      )
    }

    authorize(res.data)
    toast.success('Signup success, welcome!')
    return router.push('/home')
  }

  const handlerLogout = () => {
    updateLoading(Status.loading)
    logout().then(() => {
      reject()
      router.push('/login')
    })
  }

  return (
    <AuthStatusContext.Provider
      value={{
        ...state,
        signup: handleSignup,
        logout: handlerLogout,
        login: handleLogin,
        verifyVotinSignUp: handleVotingVerification
      }}
    >
      {children}
    </AuthStatusContext.Provider>
  )
}

export const useAuthStatus = () => {
  const context = useContext(AuthStatusContext)

  if (context === undefined) {
    throw new Error('useAuthStatus must be used within an AuthProvider')
  }

  return context
}
