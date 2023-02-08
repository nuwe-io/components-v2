// ** React Imports
import React, { useEffect, useState } from 'react'

export interface WindowWrapperProps {
  children: React.ReactNode
  router: any
}

export const WindowWrapper = ({ children, router }: WindowWrapperProps) => {
  // ** State
  const [windowReadyFlag, setWindowReadyFlag] = useState(false)
  useEffect(
    () => {
      if (typeof window !== 'undefined') {
        setWindowReadyFlag(true)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )
  if (windowReadyFlag) {
    return <>{children}</>
  } else {
    return null
  }
}
