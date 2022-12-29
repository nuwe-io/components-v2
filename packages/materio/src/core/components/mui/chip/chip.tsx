// ** MUI Imports
import MuiChip from '@mui/material/Chip'

// ** Hooks Imports
import { UseBgColor } from '../../../hooks/useBgColor'

interface ChipProps {
  sx?: any
  skin: 'light' | 'light-static' | 'filled'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

const Chip = (props: ChipProps) => {
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
    <MuiChip
      {...props}
      variant='filled'
      {...(skin === 'light' && { className: 'MuiChip-light' })}
      sx={skin === 'light' && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}

export default Chip
