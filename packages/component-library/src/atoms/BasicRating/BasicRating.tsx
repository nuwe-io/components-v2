import { useState } from 'react'

import { Star } from '@mui/icons-material'
import { Rating } from '@mui/material'

interface BasicRatingProps {
  defaultValue: number
  userId: string
  setRating: (userId: string, rating: number | null) => void
}

export function BasicRating({ defaultValue, userId, setRating }: BasicRatingProps) {
  const [value, setValue] = useState<number | null>(defaultValue)

  return (
    <Rating
      name='simple-controlled'
      value={value}
      precision={0.5}
      max={5}
      icon={<Star color='primary' />}
      onChange={(_event, newValue) => {
        setValue(newValue)
        setRating(userId, newValue)
      }}
    />
  )
}
