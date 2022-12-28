import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    overflowY: 'scroll',
    height: '370px',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '& h2': {
      '@media (max-width: 450px)': {
        fontSize: '.8rem'
      }
    },
    '& h4': {
      '@media (max-width: 450px)': {
        fontSize: '1rem'
      }
    }
  },
  title: {
    margin: '1rem 0rem'
  },
  subtitle: {
    margin: '15px 0px'
  }
}))
