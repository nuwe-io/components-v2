/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { useCountDown } from '@nuwe/hooks'
import { Translations } from '@nuwe/lib'

interface ProgressColumnProps {
  seconds: number
  url: string
}

export const RedirectCountDown = ({ seconds, url }: ProgressColumnProps) => {
  const counter = useCountDown(seconds)

  const router = useRouter()

  if (counter === 0) router.push(url)

  return (
    <Typography>
      <Translations ns='common' text='redirecting' /> {counter}{' '}
      <Translations ns='common' text='seconds' />
      ...
    </Typography>
  )
}
