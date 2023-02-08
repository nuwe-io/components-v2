// ** MUI Components
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// ** Styled Components
export const BoxWrapper = styled(Box)(({ theme }: any) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))
