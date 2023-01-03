import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  bottom: {
    color: ({ bottomColor }: any) => bottomColor
  },
  top: {
    position: 'absolute',
    color: ({ topColor }: any) => topColor,
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}))
