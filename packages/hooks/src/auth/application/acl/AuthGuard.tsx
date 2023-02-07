// ** React Imports
import { useEffect } from 'react'

import { AuthEntity, Status } from '../../domain'
import { useAuthStatus } from '../useAuthStatus'

export interface AuthGuardProps {
  children: React.ReactNode
  fallback: React.ReactNode
  router: {
    replace: (path: string) => void
    push: (path: string) => void
    route: string
  }
}

export const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback, router } = props

  const auth = useAuthStatus() as AuthEntity
  const { push } = router

  useEffect(() => {
    if (auth.status === Status.unauthorized) push('/login')
  }, [push, auth])

  if (auth.status === 'loading' || auth.user === null) return fallback

  return <>{children}</>
}
