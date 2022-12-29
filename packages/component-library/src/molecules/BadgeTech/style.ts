import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((_theme: any) => ({
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
  wrapperLogo: {
    position: 'absolute',
    top: (props: any) => props.top,
    left: (props: any) => props.left,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: (props: any) => props.width,
      height: (props: any) => props.height
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
