import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((_theme) => ({
  rankingAvatarContainerTeam: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    padding: 0
  },
  avatar: {
    border: 0,
    width: 30,
    height: 30,
    fontSize: 16
  },
  primary: {
    backgroundColor: 'rgba(86, 155, 81, 0.8)'
  },
  secondary: {
    border: 0,
    fontSize: 12,
    marginLeft: -5,
    backgroundColor: 'rgba(103, 114, 229, 0.8)',
    color: 'white'
  },
  group: {
    marginRight: 10
  },
  rankingPointsText: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 1
  },
  tooltipBackground: {
    backgroundColor: '#14151F'
  },
  tooltipArrow: {
    color: '#14151F'
  },
  tooltipLink: {
    color: 'white'
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  map: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 0',
    marginBottom: 10
  }
}))

export default useStyles
