import { Typography } from '@mui/material'

import { ProgressBar } from './ProgressBar'

interface ProgressColumnProps {
  value: number
}

export const ProgressColumn = ({ value }: ProgressColumnProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginRight: '40px' }}>
      <Typography variant='body1'>{`${value}%`}</Typography>
      <ProgressBar value={value} text={''} label={false} />
    </div>
  )
}
