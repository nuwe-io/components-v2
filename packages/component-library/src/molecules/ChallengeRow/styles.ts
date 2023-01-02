import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  wrapperChallenges: {
    display: 'grid',
    textAlign: 'center',
    alignItems: 'center',
    gridTemplateColumns: '1.2fr 1fr 1fr 0.8fr ',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '.7fr 1fr 1fr 1fr 0.8fr '
    },
    '& #powered': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    }
  },
  sponsor: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
      marginTop: 7,
      marginBottom: 5,
      padding: '5px 0px'
    },
    '& img': {
      width: '30px',
      height: '30px',
      margin: '0px 5px',
      '@media (max-width: 600px)': {
        width: '20px',
        height: '20px'
      }
    }
  },
  max: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& p': {
      marginLeft: '.5rem'
    },
    '& svg': {
      width: '30px',
      height: '30px',
      '@media (max-width: 900px)': {
        width: '20px',
        height: '20px'
      },
      '@media (max-width: 390px)': {
        width: '15px',
        height: '15px'
      }
    }
  },
  itemContainer: {
    border: '2px solid #404560',
    borderRadius: '5px',
    margin: '.5rem 0rem',
    padding: '.5rem 1rem'
  }
}))

export default useStyles
