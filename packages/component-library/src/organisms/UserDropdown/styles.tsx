import React from 'react'

import { styled } from '@mui/material'

export const styles = {
  py: 2,
  px: 4,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  color: 'text.primary',
  textDecoration: 'none',
  '& svg': {
    fontSize: '1.375rem',
    color: 'text.secondary'
  }
}

// ** Styled Components
export const BadgeContentSpan: React.FC<any> = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
}))
