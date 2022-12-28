/* eslint-disable multiline-ternary */
import { IconButton } from '@mui/material'
import { createContext, useContext, useEffect, useState } from 'react'

import { useTheme } from '@emotion/react'
import PropTypes from 'prop-types'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

export const SwitchThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

interface SwitchThemeProviderProps {
  children: React.ReactNode
}

export const SwitchThemeProvider = ({ children }: SwitchThemeProviderProps) => {
  const [theme, setTheme] = useState<string>('')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light')
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <SwitchThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SwitchThemeContext.Provider>
  )
}

SwitchThemeProvider.propTypes = {
  children: PropTypes.node
}

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useContext(SwitchThemeContext)

  const textPrimary = useTheme() as any

  return (
    <IconButton onClick={toggleTheme} style={{ position: 'relative', margin: '10px' }}>
      {theme === 'light' ? (
        <LightModeOutlinedIcon style={{ color: textPrimary.palette.text.primary }} />
      ) : (
        <DarkModeOutlinedIcon style={{ color: textPrimary.palette.text.primary }} />
      )}
    </IconButton>
  )
}
