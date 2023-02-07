// ** React Imports
import React, { useEffect } from 'react'

import { AuthEntity, Status } from '../../domain'
import { useAuthStatus } from '../useAuthStatus'

export interface GuestGuardProps {
  children: React.ReactNode
  fallback: React.ReactNode
  router: {
    replace: (path: string) => void
  }
}

export const GuestGuard = (props: GuestGuardProps) => {
  const { children, fallback, router } = props
  const auth = useAuthStatus() as AuthEntity

  useEffect(() => {
    if (auth.status === Status.authorized) router.replace('/')
  }, [router, auth.status, auth.user])

  if (
    auth.status === Status.loading ||
    (auth.status === Status.unauthorized && auth.user !== null)
  ) {
    return fallback
  }

  return <>{children}</>
}
