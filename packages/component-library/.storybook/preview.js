import { useMemo } from 'react'

import { SettingsConsumer, SettingsProvider, ThemeComponent, themeConfig } from 'materio'

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
          <ThemeComponent settings={theme}>
            <Story />
          </ThemeComponent>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  )
}

export const decorators = [withMuiTheme]
