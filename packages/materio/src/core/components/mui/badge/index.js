// ** MUI Imports
import MuiBadge from '@mui/material/Badge'
import { UseBgColor } from '../../../hooks'

// ** Hooks Imports

const Badge = props => {
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
