import { Popover } from '@mui/material'
import { styled } from '@mui/system'

export const CustomPopover = styled(Popover)({
  width: '70%',

  '@media screen and (max-width: 600px)': {
    width: '95%'
  }
})
