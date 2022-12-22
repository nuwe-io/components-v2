export type Mode = 'light' | 'dark'
export type Skin = 'default' | 'semi-dark' | 'bordered'
export type ThemeColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'

export type Settings = {
  themeColor?: ThemeColor
  mode?: Mode
  footer?: string
  layout?: string
  lastLayout?: string
  direction?: string
  navHidden?: boolean
  appBarBlur?: boolean
  navCollapsed?: boolean
  contentWidth?: string
  toastPosition?: string
  verticalNavToggleType?: string
  subNavType?: string
  subNavProps?: any
  skin?: Skin
  appBar?: string
}
