// ** MUI Imports
import Box from '@mui/material/Box'
import { Fragment } from 'react'

// ** Components
import LanguageDropdown from 'core/layouts/components/shared-components/LanguageDropdown'
import ModeToggler from 'core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'layouts/UserDropdown.js/UserDropdown'

const AppBarContent = props => {
  const { settings, saveSettings, user, status, logout } = props

  const render = {
    loading: null,
    authorized: (
      <Fragment>
        <LanguageDropdown settings={settings} saveSettings={saveSettings} />
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <UserDropdown logout={logout} user={user} settings={settings} />
      </Fragment>
    )
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>{render[status]}</Box>
  )
}

export default AppBarContent
