// ** MUI Imports

import MuiCard from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MuiTextField from '@mui/material/TextField'

// Styled Card component
export const Card: any = styled(MuiCard)(({ theme }) => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  marginBottom: '10px',
  backgroundImage:
    theme.palette.mode === 'light'
      ? 'url(https://images.unsplash.com/photo-1458302488426-c9fe676e00b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHRlY25vbG9nJUMzJUFEYXxlbnwwfDB8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=900&q=60)'
      : 'url(https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80)'
}))

// Styled TextField component
export const TextField: any = styled(MuiTextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper
  },
  [theme.breakpoints.up('sm')]: {
    width: 450
  }
}))
