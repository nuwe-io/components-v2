// ** React Imports
import { createContext, useEffect, useState } from 'react'

import { themeConfig } from '../../configs'

import { Settings } from '../../../types'

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode as Settings['mode'],
  footer: themeConfig.footer,
  layout: themeConfig.layout,
  lastLayout: themeConfig.layout,
  direction: themeConfig.direction,
  navHidden: themeConfig.navHidden,
  appBarBlur: themeConfig.appBarBlur,
  navCollapsed: themeConfig.navCollapsed,
  contentWidth: themeConfig.contentWidth,
  toastPosition: themeConfig.toastPosition,
  verticalNavToggleType: themeConfig.verticalNavToggleType,
  subNavType: 'account',
  subNavProps: {},
  skin: (themeConfig.layout === 'horizontal' && themeConfig.skin === 'semi-dark'
    ? 'default'
    : themeConfig.skin) as Settings['skin'],
  appBar:
    themeConfig.layout === 'horizontal' && themeConfig.appBar === 'hidden'
      ? 'fixed'
      : themeConfig.appBar
}

const staticSettings: Settings = {
  appBar: initialSettings.appBar,
  footer: initialSettings.footer,
  layout: initialSettings.layout,
  navHidden: initialSettings.navHidden,
  lastLayout: initialSettings.lastLayout,
  toastPosition: initialSettings.toastPosition,
  subNavType: initialSettings.subNavType,
  subNavProps: initialSettings.subNavProps
}

const restoreSettings = () => {
  let settings = null
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedData = window.localStorage.getItem('settings')
      if (storedData) {
        settings = { ...JSON.parse(storedData), ...staticSettings }
      } else {
        settings = initialSettings
      }
    } else {
      settings = initialSettings
    }
  } catch (err) {
    console.error(err)
  }

  return settings
}

// set settings in localStorage
const storeSettings = (settings: Settings) => {
  const initSettings = Object.assign({}, settings)
  delete initSettings.appBar
  delete initSettings.footer
  delete initSettings.layout
  delete initSettings.navHidden
  delete initSettings.lastLayout
  delete initSettings.toastPosition

  if (typeof window !== 'undefined' && window.localStorage)
    window.localStorage.setItem('settings', JSON.stringify(initSettings))
}

// ** Create Context
export const SettingsContext = createContext<any>({
  saveSettings: (_settings: Settings) => {},
  settings: initialSettings
})

interface SettingsProviderProps {
  children: React.ReactNode
  pageSettings?: Settings
}

export const SettingsProvider = ({ children, pageSettings }: SettingsProviderProps) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })
  useEffect(() => {
    const restoredSettings = restoreSettings()
    if (restoredSettings) {
      setSettings({ ...restoredSettings })
    }
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSettings])

  useEffect(() => {
    if (settings.layout === 'horizontal' && settings.skin === 'semi-dark') {
      saveSettings({ ...settings, skin: 'default' })
    }
    if (settings.layout === 'horizontal' && settings.appBar === 'hidden') {
      saveSettings({ ...settings, appBar: 'fixed' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout])

  const saveSettings = (updatedSettings: Settings) => {
    storeSettings(updatedSettings)
    setSettings(updatedSettings)
  }

  return (
    <SettingsContext.Provider value={{ saveSettings, settings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const SettingsConsumer = SettingsContext.Consumer
