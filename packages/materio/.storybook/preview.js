import themeConfig from '../src/configs/themeConfig'
import { ThemeComponentService } from '../src/core/theme/ThemeComponentService'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { SettingsConsumer, SettingsProvider } from '../src/core/context/settingsContext'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    title: 'Theme',
    description: 'Theme for your components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: 'light', left: '☀️', title: 'Light mode' },
        { value: 'dark', left: '🌙', title: 'Dark mode' }
      ]
    }
  }
}

// Add your theme configurations to an object that you can
// pull your desired theme from.
const THEMES = {
  light: themeConfig,
  dark: { ...themeConfig, mode: 'dark' }
}

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey])

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeComponentProvider settings={settings}>
            <Story />
          </ThemeComponentProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  )
}

const ThemeComponentProvider = ({ Story, settings }) => {
  return (
    <ThemeComponent settings={settings}>
      <Story />
    </ThemeComponent>
  )
}

const ThemeComponent = ThemeComponentService({
  CssBaseline,
  GlobalStyles,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  AdapterDayjs,
  LocalizationProvider,
  deepmerge
})

export const decorators = [withMuiTheme]
