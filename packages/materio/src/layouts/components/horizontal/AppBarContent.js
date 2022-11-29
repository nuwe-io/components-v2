import { Fragment } from 'react'

// ** External imports
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

// ** Components
import LanguageDropdown from '@core/layouts/components/LanguageDropdown'
import ModeToggler from '@core/layouts/components/ModeToggler'

import UserDropdown from '@layouts/components/UserDropdown/UserDropdown'

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

  return <Box sx={{ display: 'flex', alignItems: 'center' }}>{render[status]}</Box>
}

AppBarContent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string
  }),
  status: PropTypes.oneOf(['loading', 'authorized']),
  logout: PropTypes.func,
  settings: PropTypes.object,
  saveSettings: PropTypes.func
}

export default AppBarContent
