import { LinearProgress, Typography } from '@mui/material'
import { memo } from 'react'

interface ProgressBarProps {
  width?: string
  height?: string
  color?: string
  labelColor?: string
  value: number
  radius?: string
  label?: boolean
  labelPosition?: string
  text?: string
  textVariant?:
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
  textAndValue?: boolean
  isSecondary?: boolean
}

/**
 * Progress bar ui
 */
export const ProgressBar = memo(
  ({
    height = '10px',
    isSecondary = false,
    label = false,
    labelPosition = 'bottom',
    radius = '10px',
    text = '',
    textAndValue = false,
    textVariant = 'body1',
    value = 0,
    width = '100%'
  }: ProgressBarProps) => {
    return (
      <>
        {label && labelPosition === 'top' && <span>{`${value}%`}</span>}
        {textAndValue && (
          <div style={{ display: 'flex', width: width, justifyContent: 'space-between' }}>
            <Typography variant={textVariant}>{text}</Typography>
            <Typography variant={textVariant}>{`${value}%`}</Typography>
          </div>
        )}

        <LinearProgress
          sx={{ height: height, borderRadius: radius }}
          color={isSecondary ? 'secondary' : 'primary'}
          variant='determinate'
          value={value}
        />
      </>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
