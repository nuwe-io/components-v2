import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    '@media (max-width: 880px)': {
      display: 'none'
    },
    '& button': {
      margin: '0px 10px',
      height: '40px',
      padding: '0px 2rem',
      borderRadius: '2px',
      border: 'none',
      cursor: 'pointer',
      color: '#FFF',
      transition: 'all .3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-3px)'
      }
    }
  },
  sendProjectsActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2rem',
    '& button': {
      margin: '0px 10px',
      height: '40px',
      padding: '0px 2rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      background: '#569B51',
      color: '#FFF',
      transition: 'all .3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-3px)'
      }
    }
  }
}))
