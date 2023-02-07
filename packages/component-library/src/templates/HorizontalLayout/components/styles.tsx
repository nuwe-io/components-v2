import { businessThemeConfig as themeConfig, hexToRGBA } from '@nuwe/materio'

// ** MUI Imports
import MuiListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

// ** Styled Components
const ListItem: React.FC<any> = styled(MuiListItem)(({ theme }) => ({
  cursor: 'pointer',
  paddingTop: theme.spacing(2.25),
  paddingBottom: theme.spacing(2.25),
  '&:hover': {
    background: theme.palette.action.hover
  }
}))

const NavigationMenu: React.FC<any> = styled(Paper)(({ theme }) => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: theme.spacing(2, 0),
  maxHeight: 'calc(100vh - 13rem)',
  backgroundColor: theme.palette.background.paper,
  ...(themeConfig.menuTextTruncate ? { width: 260 } : { minWidth: 260 }),
  '&::-webkit-scrollbar': {
    width: 6
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 20,
    background: hexToRGBA(theme.palette.mode === 'light' ? '#B0ACB5' : '#575468', 0.6)
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: 20,
    background: 'transparent'
  },
  '& .MuiList-root': {
    paddingTop: 0,
    paddingBottom: 0
  },
  '& .menu-group.Mui-selected': {
    borderRadius: 10,
    backgroundColor: theme.palette.action.hover
  }
}))

const StyledLink: React.FC<any> = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

export { ListItem, NavigationMenu, StyledLink }
