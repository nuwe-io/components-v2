// ** MUI Imports
import MuiBadge from '@mui/material/Badge'

// ** Hooks Imports
import { UseBgColor } from '../../../hooks/useBgColor'

interface BadgeProps {
  sx?: any
  skin: 'light' | 'light-static' | 'filled'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

const Badge = (props: BadgeProps) => {
  // ** Props
  const { sx, skin, color } = props

  // ** Hook
  const bgColors = UseBgColor()

  const colors = {
    primary: { ...bgColors.primaryLight },
    secondary: { ...bgColors.secondaryLight },
    success: { ...bgColors.successLight },
    error: { ...bgColors.errorLight },
    warning: { ...bgColors.warningLight },
    info: { ...bgColors.infoLight }
  }

  return (
    <MuiBadge
      {...props}
      sx={
        skin === 'light' && color ? Object.assign({ '& .MuiBadge-badge': colors[color] }, sx) : sx
      }
    />
  )
}

export default Badge
