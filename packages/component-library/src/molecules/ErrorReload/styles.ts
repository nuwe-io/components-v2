import { makeStyles } from '@mui/styles'

export const useStyles2 = makeStyles(() => ({
  finish: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem 0px',
    '& p': {
      width: '40%',
      textAlign: 'center',
      margin: '.5rem 0rem'
    }
  }
}))
