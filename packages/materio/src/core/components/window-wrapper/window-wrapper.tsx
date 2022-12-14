// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

interface WindowWrapperProps {
  children: React.ReactNode
}

const WindowWrapper = ({ children }: WindowWrapperProps) => {
  // ** State
  const [windowReadyFlag, setWindowReadyFlag] = useState<boolean>(false)
  const router = useRouter()
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

export default WindowWrapper
