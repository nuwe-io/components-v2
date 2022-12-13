import IconButton from '@mui/material/IconButton'
import PropTypes from 'prop-types'

// ** Icons Imports
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'

export const ModeToggler = (props) => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = (mode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

ModeToggler.propTypes = {
  settings: PropTypes.object.isRequired,
  saveSettings: PropTypes.func.isRequired
}
