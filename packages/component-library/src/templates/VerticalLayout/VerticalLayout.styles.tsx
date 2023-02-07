// ** React Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

export const Toolbar: React.FC<any> = styled(MuiToolbar)(({ theme }) => ({
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

const VerticalLayoutWrapper: React.FC<any> = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper: React.FC<any> = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper: React.FC<any> = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  paddingTop: theme.spacing(0),
  paddingRight: theme.spacing(6),
  paddingLeft: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

export { VerticalLayoutWrapper, MainContentWrapper, ContentWrapper }
