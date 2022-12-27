import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: any) => ({
  divLink: {
    marginRight: '15px',
    textAlign: 'center',
    verticalAlign: 'center',
    cursor: 'pointer',
    lineHeight: '30px',
    borderBottom: (props: any) =>
      props.selected ? '2px solid ' + theme.palette.primary.main : 'none',
    '& a': {
      color: (props: any) =>
        props.selected ? theme.palette.primary.main : theme.palette.text.secondary
    }
  },
  tabLink: {
    fontSize: '.65rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.7rem'
    },
    '&:hover': {
      textDecoration: (props: any) => (props.selected ? 'none' : 'underline')
    }
  }
}))
