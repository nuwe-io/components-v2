import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

import { BlankLayoutWrapper } from './BlankLayout.styles'

export interface BlankLayoutProps {
  children: React.ReactNode
}

export const BlankLayout = ({ children }: BlankLayoutProps) => {
  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      <Box
        className='app-content'
        sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      >
        {children}
      </Box>
    </BlankLayoutWrapper>
  )
}
