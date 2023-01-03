import { LinearProgress, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

import { useStyles } from './style'

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
    | undefined
  textAndValue?: boolean
  isSecondary?: boolean
}

/**
 * Progress bar ui
 */
export const ProgressBar = memo(
  ({
    color = '#569B51',
    height = '15px',
    isSecondary = false,
    label = false,
    labelColor = '#000',
    labelPosition = 'bottom',
    radius = '10px',
    text = '',
    textAndValue = false,
    textVariant = 'body1',
    value = 0,
    width = '100%'
  }: ProgressBarProps) => {
    const muiTheme = useTheme()

    const { progress } = useStyles({
      width,
      height,
      color,
      background: muiTheme.palette.divider,
      value,
      radius,
      labelColor
    })

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
          sx={{ height: '10px', borderRadius: '10px' }}
          color={isSecondary ? 'secondary' : 'primary'}
          variant='determinate'
          value={value}
        />
      </>
    )
  }
)

ProgressBar.displayName = 'ProgressBar'
