import { Typography } from '@mui/material'

import { ProgressBar } from './ProgressBar'

interface ProgressColumnProps {
  value: number
  color: string
}

export const ProgressColumn = ({ value, color }: ProgressColumnProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginRight: '40px' }}>
      <Typography variant='body1'>{`${value}%`}</Typography>
      <ProgressBar value={value} height={'10px'} text={''} label={false} color={color} />
    </div>
  )
}
