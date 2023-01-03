import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme: any) => ({
  loaderWrapper: {
    height: '200px',
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loader: {
    border: `3px solid ${theme.palette.primary.main}`,
    borderTop: '3px solid transparent',
    animation: '$rotate 1s ease infinite',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '20px 0px'
  }
}))
