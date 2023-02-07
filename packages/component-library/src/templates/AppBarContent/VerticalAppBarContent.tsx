// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

// ** Components
import { LanguageDropdown, ModeToggler } from 'molecules'
import { UserDropdown, UserDropdownProps } from 'organisms'

export interface VerticalAppBarContentProps extends UserDropdownProps {
  settings: any
  saveSettings: any
  hidden: boolean
  toggleNavVisibility: () => void
  i18n: {
    changeLanguage: (lang: string) => void
    language: string
  }
  languages: {
    [key: string]: string
  }
  router?: any
}

export const VerticalAppBarContent = ({
  settings,
  saveSettings,
  toggleNavVisibility,
  i18n,
  hidden,
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
}: VerticalAppBarContentProps) => {
  return (
    <Box
      sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <MenuIcon />
          </IconButton>
        ) : null}

        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
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
    </Box>
  )
}
