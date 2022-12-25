import { useEffect, useState } from 'react'

export const useCountDown = (seconds: number) => {
  const [counter, setCounter] = useState<number>(seconds)

  useEffect(() => {
    if (counter === 0) return

    setTimeout(() => {
      setCounter(counter - 1)
    }, 1000)
  }, [counter])

  return counter
}
