import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  '@keyframes rotate': {
    '0%': {
      transform: 'rotateZ(0deg)'
    },
    '100%': {
      transform: 'rotateZ(360deg)'
    }
  },
  rotation: {
    animation: '$rotate 30s ease infinite alternate',
    transformOrigin: 'center',
    transformBox: 'fill-box'
  },
  wrapper: {
    position: 'relative'
  },
  wrapperBadge: {
    position: 'relative'
  },
  diamond: {
    position: 'absolute',
    top: (props: any) => props.diamondTop,
    left: (props: any) => props.diamondLeft
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  starsFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%'
  },
  starLeft: {
    position: 'relative',
    left: (props: any) => props.left.left,
    top: (props: any) => props.left.top,
    transform: 'rotate(-20deg)'
  },
  starTop: {
    position: 'relative',
    right: (props: any) => props.top.right,
    top: (props: any) => props.top.top
  },
  starRight: {
    position: 'relative',
    right: (props: any) => props.right.right,
    top: (props: any) => props.right.top,
    transform: 'rotate(20deg)'
  }
}))
