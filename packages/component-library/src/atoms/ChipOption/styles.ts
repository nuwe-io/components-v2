import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0rem 1rem',
    marginRight: '5px',
    marginTop: '10px',
    borderColor: ({ condition }) => (condition ? theme.palette.primary.main : ''),
    color: ({ condition }) => (condition ? theme.palette.primary.main : '')
  }
}))
