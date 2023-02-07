// ** MUI Imports
import Box from '@mui/material/Box'

// ** Config Import
import { businessThemeConfig as themeConfig } from '@nuwe/materio'

// ** Menu Components
import { HorizontalNavItems } from './HorizontalNavItems'

export const HorizontalNavigation = (props: any) => {
  return (
    <Box
      className='menu-content'
      sx={{
        width: '100%',
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
  )
}
