import React from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

import { useSettings } from '@nuwe/materio'

import { LanguageDropdown, ModeToggler } from 'molecules'
import { UserDropdown } from 'organisms'
import { BlankLayoutWrapper, ComponentsWrapper } from './BlankLayout.styles'

export interface BlankLayoutProps {
  hideNav?: boolean
  i18n: any
  languages: {
    [key: string]: string
  }
  children: React.ReactNode
  titles: {
    logout: string
    reportProblem: string
    blog: string
    contact: string
    login: string
  }
  openWindow: (url: string, target?: string) => void
  openContactDialog: () => void
  goToLogin: () => void
  logout: () => void
  navigate: (url: string) => void
  items?: {
    hide?: boolean
    Icon: React.FC<any>
    text: string
    onClick: React.MouseEventHandler<HTMLLIElement> | undefined
  }[]
}

export const BlankLayout = ({
  hideNav,
  i18n,
  languages,
  children,
  titles,
  openWindow,
  openContactDialog,
  goToLogin,
  items,
  logout,
  navigate
}: BlankLayoutProps) => {
  const { settings, saveSettings } = useSettings()

  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      {!hideNav && (
        <ComponentsWrapper>
          <LanguageDropdown
            settings={settings}
            saveSettings={saveSettings}
            i18n={i18n}
            languages={languages}
          />
          <ModeToggler settings={settings} saveSettings={saveSettings} />
          <UserDropdown
            navigate={navigate}
            items={items}
            user={{ name: '', image: '', isLoggedIn: false }}
            titles={titles}
            problemReportUrl='https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E'
            openWindow={openWindow}
            openContactDialog={openContactDialog}
            logout={logout}
            goToLogin={goToLogin}
          />
        </ComponentsWrapper>
      )}
      <Box
        className='app-content'
        sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      >
        {children}
      </Box>
    </BlankLayoutWrapper>
  )
}
