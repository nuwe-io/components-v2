import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer'
  },
  avatar: {
    width: 30,
    height: 30,
    fontSize: 16,
    marginRight: 10,
    backgroundColor: 'rgba(86, 155, 81, 0.8)'
  }
}))

export default useStyles
