import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { useStyles2 } from './styles'

export const ErrorReload = () => {
  const { finish } = useStyles2()
  const router = useRouter()

  return (
    <div className={finish}>
      <Typography variant='h4'>{'Algo ha salido mal'}</Typography>
      <Typography variant='body2'>
        {
          'Vuelve a intentarlo, y si el problema persiste por favor ponte en contacto con nosotros atraves de hello@nuwe.io'
        }
      </Typography>
      <Button onClick={() => router.reload()}>{'Volver a intentarlo'}</Button>
    </div>
  )
}
