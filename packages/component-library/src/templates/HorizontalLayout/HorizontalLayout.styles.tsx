// ** MUI Imports
import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

// ** Icons Imports

// ** Theme Config Import
import { businessThemeConfig as themeConfig } from '@nuwe/materio'

// ** Components

// ** Styled Component

const HorizontalLayoutWrapper: React.FC<any> = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  ...(themeConfig.horizontalMenuAnimation && { overflow: 'clip' })
})

const Toolbar: React.FC<any> = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(0, 6)} !important`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(4)
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const ContentWrapper: React.FC<any> = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(6),
  paddingLeft: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

export { HorizontalLayoutWrapper, Toolbar, ContentWrapper }
