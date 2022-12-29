// ** MUI Imports
import MuiTimelineDot from '@mui/lab/TimelineDot'
import { useTheme } from '@mui/material/styles'

// ** Util Import
import { hexToRGBA } from '../../../utils/hex-to-rgba'

interface TimelineDotProps {
  sx?: any
  skin: 'light' | 'light-static' | 'filled'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  variant?: 'outlined' | 'filled' | undefined
}

export const TimelineDot = (props: TimelineDotProps) => {
  // ** Props
  const { sx, skin, color, variant } = props

  // ** Hook
  const theme = useTheme()

  const colors = {
    primary: {
      boxShadow: 'none',
      color: theme.palette.primary.main,
      backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12)
    },
    secondary: {
      boxShadow: 'none',
      color: theme.palette.secondary.main,
      backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12)
    },
    success: {
      boxShadow: 'none',
      color: theme.palette.success.main,
      backgroundColor: hexToRGBA(theme.palette.success.main, 0.12)
    },
    error: {
      boxShadow: 'none',
      color: theme.palette.error.main,
      backgroundColor: hexToRGBA(theme.palette.error.main, 0.12)
    },
    warning: {
      boxShadow: 'none',
      color: theme.palette.warning.main,
      backgroundColor: hexToRGBA(theme.palette.warning.main, 0.12)
    },
    info: {
      boxShadow: 'none',
      color: theme.palette.info.main,
      backgroundColor: hexToRGBA(theme.palette.info.main, 0.12)
    },
    grey: {
      boxShadow: 'none',
      color: theme.palette.grey[500],
      backgroundColor: hexToRGBA(theme.palette.grey[500], 0.12)
    }
  }

  return (
    <MuiTimelineDot
      {...props}
      sx={color && skin === 'light' && variant === 'filled' ? Object.assign(colors[color], sx) : sx}
    />
  )
}

TimelineDot.defaultProps = {
  color: 'grey',
  variant: 'filled'
}
