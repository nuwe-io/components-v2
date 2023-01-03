import { Chip } from '@mui/material'

import { useStyles } from './styles'

interface ChipOptionProps {
  value: string
  condition: boolean
  updateSelected: (e: any) => void
  selectedAvatar?: React.ReactElement
  defaultAvatar?: React.ReactElement
}

export const ChipOption = ({
  value = '',
  condition = false,
  updateSelected = (e: any) => console.log('updateSelected'),
  selectedAvatar,
  defaultAvatar,
  ...props
}: ChipOptionProps) => {
  const { root } = useStyles({ condition })

  return (
    <Chip
      clickable
      variant='outlined'
      size='medium'
      key={value}
      name={value}
      label={value}
      className={root}
      onClick={updateSelected}
      avatar={condition ? selectedAvatar : defaultAvatar}
      component='button'
      {...props}
    />
  )
}
