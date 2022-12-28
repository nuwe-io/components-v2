import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((_theme: any) => ({
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 5
  },
  title: {
    fontSize: '0.9rem'
  },
  divider: {
    fontSize: '2rem',
    marginRight: 5
  },
  counter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  panels: {
    display: 'flex',
    marginBottom: 5
  },
  num: {
    fontSize: '2rem'
  },
  txt: {
    fontSize: '0.5rem'
  },
  paper: {
    border: 0,
    backgroundColor: 'transparent'
  }
}))
