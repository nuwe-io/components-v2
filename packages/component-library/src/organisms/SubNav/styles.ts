import { Link, styled } from '@mui/material'

const SubNavContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  margin: '0 auto',
  alignItems: 'top',
  justifyContent: 'space-between',
  height: '85px',
  overflowX: 'auto',
  overflowY: 'hidden'
}))

const Container = styled('div')(() => ({
  margin: '5px 0px'
}))

interface BreadcrumbLinkProps {
  index: number
  length: number
  theme: any
}

const BreadcrumbLink = styled(Link)(({ index, length, theme }: BreadcrumbLinkProps) => ({
  fontWeight: index === length - 1 ? 'bold' : 'normal',
  fontSize: '0.55rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.65rem'
  }
}))

const Separator = styled('div')(({ theme }) => ({
  minHeight: 3,
  width: '100%',
  backgroundColor: theme.palette.background.default
}))

const Tab = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left'
}))

const DivLink = styled('div', {
  shouldForwardProp: (prop: any) => !['selected'].includes(prop)
})(({ theme, selected }: any) => ({
  margin: '0px 0px 0px 0px',
  padding: '0px 15px 0px 15px',
  textAlign: 'center',
  verticalAlign: 'center',
  minWidth: '100px',
  lineHeight: '30px',
  borderBottom: selected ? '2px solid ' + theme.palette.primary.main : 'none'
}))

const TabLink = styled('a', { shouldForwardProp: (prop: any) => !['selected'].includes(prop) })(
  ({ theme, selected }: any) => ({
    color: selected ? theme.palette.primary.main : theme.palette.text.primary,
    fontSize: '0.8rem',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem'
    }
  })
)

const ActionButton = styled('div')(() => ({
  display: 'none',
  '@media (min-width: 500px)': {
    display: 'flex'
  }
}))

export {
  SubNavContainer,
  Container,
  BreadcrumbLink,
  Separator,
  Tab,
  DivLink,
  TabLink,
  ActionButton
}
