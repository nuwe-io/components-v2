import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  root: {
    height: (props: any) => props.height,
    width: (props: any) => props.width,
    backgroundColor: (props: any) => props.background,
    borderRadius: (props: any) => props.radius,
    position: 'relative'
  },
  progress: {
    height: '100%',
    width: (props: any) => `${props.value}%`,
    backgroundColor: (props: any) => props.color,
    borderRadius: (props: any) => props.radius,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelvalue: {
    position: 'absolute',
    left: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: (props) => props.labelColor
  },
  labelTop: {
    color: (props) => props.labelColor
  }
}))
