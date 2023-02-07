// ** MUI Imports
import Box from '@mui/material/Box'

// ** Components
import { LanguageDropdown, ModeToggler } from 'molecules'
import { UserDropdown, UserDropdownProps } from 'organisms'

export interface HorizontalAppBarContentProps extends UserDropdownProps {
  settings?: any
  saveSettings?: any
  i18n: {
    changeLanguage: (lang: string) => void
    language: string
  }
  languages: {
    [key: string]: string
  }
}
export const HorizontalAppBarContent = ({
  settings,
  saveSettings,
  i18n,
  languages,
  navigate,
  logout,
  user,
  titles,
  items,
  problemReportUrl,
  openWindow,
  openContactDialog,
  goToLogin
}: HorizontalAppBarContentProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <ModeToggler settings={settings} saveSettings={saveSettings} />
      <LanguageDropdown
        languages={languages}
        i18n={i18n}
        settings={settings}
        saveSettings={saveSettings}
      />
      <UserDropdown
        navigate={navigate}
        logout={logout}
        user={user}
        titles={titles}
        items={items}
        problemReportUrl={problemReportUrl}
        openWindow={openWindow}
        openContactDialog={openContactDialog}
        goToLogin={goToLogin}
      />
    </Box>
  )
}
