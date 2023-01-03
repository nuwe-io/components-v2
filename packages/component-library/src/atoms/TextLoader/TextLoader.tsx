import { Typography } from '@mui/material'
import { useStyles } from './styles'

export const TextLoader = () => {
  const { loaderWrapper, loader } = useStyles()

  return (
    <div className={loaderWrapper}>
      <span className={loader} />
      <Typography variant='body2'>{'Actualizando datos...'}</Typography>
    </div>
  )
}
