import React from 'react'
import { AuthStatusProvider } from './useAuthStatus'

export const withAuthprovider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthStatusProvider
      API_URL='http://localhost:3001'
      router={{ push: (something: unknown) => console.log(something) }}
    >
      {children}
    </AuthStatusProvider>
  )
}
