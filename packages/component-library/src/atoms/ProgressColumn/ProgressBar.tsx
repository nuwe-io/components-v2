import { LinearProgress, Typography } from '@mui/material'
import { memo } from 'react'

/**
 * Progress bar ui
 */

interface ProgressBarProps {
  isSecondary: boolean
  label: boolean
  labelPosition: 'top' | 'center'
  text: string
  textAndValue: boolean
  textVariant: string
  value: number
}

export const ProgressBar = memo(
  ({
    isSecondary,
    label,
    labelPosition,
    text,
    textAndValue,
    textVariant,
    value
  }: ProgressBarProps) => {
    return (
      <>
        {label && labelPosition === 'top' && <span>{`${value}%`}</span>}
        {textAndValue && (
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <Typography variant={textVariant}>{text}</Typography>
            <Typography variant={textVariant}>{`${value}%`}</Typography>
          </div>
        )}

        <LinearProgress
          sx={{ height: '10px', borderRadius: '2px' }}
          color={isSecondary ? 'secondary' : 'primary'}
          variant='determinate'
          value={value}
        />
      </>
    )
  }
)
