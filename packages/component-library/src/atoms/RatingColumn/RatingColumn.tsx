import { Rating } from '@mui/material'

interface RatingColumnProps {
  value: number
}

export const RatingColumn = ({ value }: RatingColumnProps) => (
  <Rating name='read-only-rating' value={value} readOnly />
)
