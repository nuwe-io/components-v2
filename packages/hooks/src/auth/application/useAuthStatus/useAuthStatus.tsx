/* eslint-disable react-hooks/exhaustive-deps */

import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'

import toast from 'react-hot-toast'

import { authService } from '../../domain'
import { authRepository } from '../../infrastructure'

const AuthStatusContext = createContext(undefined) as any

export const AuthStatusProvider = ({
  API_URL,
  children
}: {
  API_URL: string
  children?: React.ReactNode
}) => {
  const { login, logout, companyStatus, getUserById, signup, verifyVotinSignUp } = authService(
    authRepository(API_URL)
  )

  const router = useRouter()

  const [authStatus, setAuthStatus] = useState({
    status: 'loading',
    user: null
  })

  const accepted = (pre: any, user: any) => {
    return {
      ...pre,
      status: 'authorized',
      user
    }
  }

  const rejected = (pre: any) => {
    return {
      ...pre,
      status: 'unauthorized',
      user: null
    }
  }

  useEffect(() => {
    if (authStatus.user === null)
      companyStatus().then((statusResponse) => {
        if (statusResponse)
          return getUserById(statusResponse).then((user) => {
            setAuthStatus((pre) => accepted(pre, user.data))
          })

        return setAuthStatus((pre) => rejected(pre))
      })
  }, [])

  const handleLogin = async (data: any) => {
    setAuthStatus((pre) => ({ ...pre, status: 'loading' }))
    const res = await login(data)
    if (!res) {
      setAuthStatus((prev) => rejected(prev))

      return toast.error('Email or password are not correct, please try again.')
    }

    setAuthStatus((prev) => accepted(prev, res.data))
    return toast.success('Login success!')
  }

  const handleVotingVerification = async (data: any, url: string) => {
    const res: any = await toast.promise(verifyVotinSignUp(data, url), {
      loading: 'Loading...',
      success: 'Succesfully verified!',
      error: 'Verifcation code is not correct, please try again.'
    })

    if (res) return setAuthStatus((prev: any) => accepted(prev, res.data))

    return setAuthStatus((prev) => rejected(prev))
  }

  const handleSignup = async (data: any) => {
    setAuthStatus((pre) => ({ ...pre, status: 'loading' }))
    const res = await signup(data)
    if (!res) {
      setAuthStatus((prev) => rejected(prev))
      return toast.error(
        'It seems you are not linked to a company. Please contact your company admin or get in touch with hello@nuwe.io.'
      )
    }

    setAuthStatus((prev) => accepted(prev, res.data))
    toast.success('Signup success, welcome!')
    return router.push('/home')
  }

  const handlerLogout = () => {
    setAuthStatus((pre) => ({ ...pre, status: 'loading' }))
    logout().then(() => {
      setAuthStatus((pre) => rejected(pre))
      router.push('/login')
    })
  }

  const value = {
    ...authStatus,
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
