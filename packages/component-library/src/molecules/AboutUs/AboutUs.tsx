import { Typography } from '@mui/material'
import { useStyles } from './styles'

import { Translations } from '@nuwe/lib'

interface TextBodyProps {
  children: React.ReactNode
}

const TextBody = ({ children }: TextBodyProps) => {
  const { subtitle } = useStyles()

  return (
    <Typography className={subtitle} variant='body1' align='justify' color='textSecondary'>
      {children}
    </Typography>
  )
}

export const AboutUs = () => {
  const { root, title } = useStyles()

  return (
    <div className={root}>
      <Typography className={title} variant='h5'>
        <Translations ns='auth' text='about_title' />
      </Typography>
      <TextBody>
        <Translations ns='auth' text='about_text_one' />
      </TextBody>
    </div>
  )
}
