import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

const HorizontalLayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  ...(themeConfig.horizontalMenuAnimation && { overflow: 'clip' })
})

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
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

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

export { HorizontalLayoutWrapper, Toolbar, ContentWrapper }
