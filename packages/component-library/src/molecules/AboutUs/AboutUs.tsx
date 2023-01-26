import { Typography } from '@mui/material'

import { useStyles } from './styles'

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

interface AboutUsProps {
  displayTexts: { aboutTitle: string; aboutTextOne: string }
}

export const AboutUs = ({ displayTexts }: AboutUsProps) => {
  const { root, title } = useStyles()

  return (
    <div className={root}>
      <Typography className={title} variant='h5'>
        {displayTexts.aboutTitle}
      </Typography>
      <TextBody>{displayTexts.aboutTextOne}</TextBody>
    </div>
  )
}
