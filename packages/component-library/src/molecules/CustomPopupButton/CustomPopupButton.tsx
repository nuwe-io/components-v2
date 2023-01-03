import Button from '@mui/material/Button'
import React from 'react'

interface CustomPopupButtonProps {
  text: string
  disabled?: boolean
  ElementToDisplay: any
}

export const CustomPopupButton = ({
  text,
  disabled,
  ElementToDisplay,
  ...props
}: CustomPopupButtonProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button size='small' variant='contained' disabled={disabled} onClick={() => setOpen(true)}>
        {text}
      </Button>
      <ElementToDisplay open={open} handleClose={() => setOpen(false)} {...props} />
    </>
  )
}
