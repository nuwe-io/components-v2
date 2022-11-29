// ** MUI Imports
import Box from '@mui/material/Box'
import { themeConfig } from '../../../../../configs'

// ** Config Import

// ** Menu Components
import HorizontalNavItems from './HorizontalNavItems'
const Navigation = props => {
  return (
    <Box
      className='menu-content'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          '& > *': {
            '&:not(:last-child)': { mr: 2 },
            ...(themeConfig.menuTextTruncate && { maxWidth: 220 })
          }
        }}
      >
        <HorizontalNavItems {...props} />
      </Box>
    </Box>
  )
}

export default Navigation
