import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() => ({
  breadcrumbLink: ({ index, length }: { index: number; length: number }) => ({
    fontWeight: index === length - 1 ? 'bold' : 'normal',
    fontSize: '0.55rem'
  })
}))
