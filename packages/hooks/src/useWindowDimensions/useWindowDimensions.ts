/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export interface WindowDimensions {
  width: number
  height: number
}

export function useWindowDimensions(
  maxWidthSm: number | null = null,
  maxWidthMd: number | null = null
) {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window

      return {
        width,
        height
      }
    }
    if (isLoading) {
      setWindowDimensions(getWindowDimensions())
      setIsLoading(false)
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    ...windowDimensions,
    isVertical: windowDimensions.height > windowDimensions.width,
    isSmall: maxWidthSm ? windowDimensions.width <= maxWidthSm : null,
    isMedium: maxWidthMd ? windowDimensions.width < maxWidthMd : null,
    isLoading
  }
}
