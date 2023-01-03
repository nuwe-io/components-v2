/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { useCountDown } from '@nuwe/hooks'

interface ProgressColumnProps {
  seconds: number
  url: string
  displayedTexts: {
    redirecting: string
    seconds: string
  }
}

export const RedirectCountDown = ({ seconds, url, displayedTexts }: ProgressColumnProps) => {
  const counter = useCountDown(seconds)

  const router = useRouter()

  if (counter === 0) router.push(url)

  return (
    <Typography>
      {displayedTexts.redirecting} {counter} {displayedTexts.seconds}
      ...
    </Typography>
  )
}
