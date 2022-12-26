import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  rune: {
    position: 'relative',
    zIndex: 2
  },
  bar: {
    position: 'relative',
    border: '2px solid #14151F',
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    left: (props) => props.left,
    background: '#14151F',
    zIndex: 1
  },
  range: {
    position: 'absolute',
    left: '26%',
    top: '-290%',
    fontSize: (props) => props.font
  },
  progress: {
    background: '#0974F2',
    width: '0%',
    height: '100%',
    padding: (props) => props.padding,
    borderRadius: '20px',
    boxShadow: '0px 3px 10px #0974F2B3'
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
