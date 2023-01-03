/* eslint-disable react-hooks/exhaustive-deps */
import { currentLanguage } from '@nuwe/lib'
import { useEffect, useState } from 'react'

import { CountdownDummy } from './Countdown.container'

interface CountdownProps {
  date: string
  title: string
  isEvent: boolean
  displayedTexts: {
    daysLabel: string
    hoursLabel: string
    minutesLabel: string
    title: string
    timeoutLabel: string
  }
}

export const Countdown = ({ date, title, isEvent, displayedTexts }: CountdownProps) => {
  const { language } = currentLanguage()

  const [secondsLeft, setSecondsLeft] = useState<number>(
    (Date.parse(date) - Date.parse(new Date().toString())) / 1000
  )

  const timeOut = new Date(date) < new Date()

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft === 0) {
        clearInterval(interval)
      } else {
        setSecondsLeft(secondsLeft - 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    if (!timeOut) {
      setSecondsLeft((Date.parse(date) - Date.parse(new Date().toString())) / 1000)
    }
  }, [date])

  const days = Math.floor(secondsLeft / 24 / 60 / 60)
  const hoursLeft = Math.floor(secondsLeft - days * 86400)
  const hours = Math.floor(hoursLeft / 3600)
  const minutesLeft = Math.floor(hoursLeft - hours * 3600)
  const minutes = Math.floor(minutesLeft / 60)

  const eventDate = new Date(date)
  const month = eventDate.getUTCMonth() + 1
  const day = eventDate.getUTCDate()
  const year = eventDate.getUTCFullYear()

  return (
    <CountdownDummy
      title={title}
      days={days}
      hours={hours}
      minutes={minutes}
      timeOut={timeOut}
      month={month}
      day={day}
      year={year}
      language={language ? language : 'en'}
      isEvent={isEvent}
      displayedTexts={displayedTexts}
    />
  )
}

Countdown.defaultProps = {
  date: '',
  title: '',
  daysLabel: 'time_days',
  hoursLabel: 'time_hours',
  minutesLabel: 'time_minutes',
  timeoutLabel: 'finished_on_label',
  hideFinishedOnDate: false
}
