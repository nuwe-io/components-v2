import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

// Styled component for Blank Layout component
export const BlankLayoutWrapper: React.FC<any> = styled(Box)(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative'
  }
}))

export const ComponentsWrapper: React.FC<any> = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: 1,
  padding: theme.spacing(2)
}))
