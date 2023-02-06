import React, { useState } from 'react'

// ** Config Import
import { buildAbilityFor } from '@nuwe/lib'

import { AbilityContext } from './AbilityContext'

import { AuthEntity, Status } from '../../domain'
import { useAuthStatus } from '../useAuthStatus'

export interface AclGuardProps {
  aclAbilities: any
  children: any
  guestGuard: React.ReactNode
  router: {
    replace: (path: string) => void
    push: (path: string) => void
    route: string
  }
  BlankLayout: React.FC<{ children: React.ReactNode }>
  NotAuthorized: React.FC<any>
}

export const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard, router, BlankLayout, NotAuthorized } = props
  const [ability, setAbility] = useState(undefined)

  // ** Hooks
  const auth = useAuthStatus() as AuthEntity

  // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
  if (guestGuard || router.route === '/404' || router.route === '/500' || router.route === '/') {
    return <>{children}</>
  }

  // User is logged in, build ability for the user based on his role
  // user  === none
  if (auth.user && auth.user.companyAuth && !ability) {
    setAbility(buildAbilityFor(auth.user.companyAuth, aclAbilities.subject))
  }

  // Check the access of current user and render pages
  if (ability && ability.can(aclAbilities.action, aclAbilities.subject)) {
    return (
      <AbilityContext.Provider value={{ ability, user: auth.user }}>
        {children}
      </AbilityContext.Provider>
    )
  }

  if (auth.status === Status.loading) return null

  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  )
}
