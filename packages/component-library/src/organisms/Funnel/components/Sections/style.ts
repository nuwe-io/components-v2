import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  section: {
    '&:hover': {
      border: '2px dashed white',
      cursor: 'pointer'
    }
  }
}))
