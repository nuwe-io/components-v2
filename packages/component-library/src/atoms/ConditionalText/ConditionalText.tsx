import { Typography } from '@mui/material'

import { useStyles } from './styles'

interface ConditionalTextProps {
  show: string
  variant:
    | 'body2'
    | 'body1'
    | 'h6'
    | 'h5'
    | 'h4'
    | 'h3'
    | 'h2'
    | 'h1'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'inherit'
    | 'button'
    | undefined
}

export const ConditionalText = ({
  show = '',
  variant = 'body2',
  ...props
}: ConditionalTextProps) => {
  const { helperText } = useStyles()

  return (
    show && (
      <Typography variant={variant} className={helperText} {...props}>
        {show}
      </Typography>
    )
  )
}
