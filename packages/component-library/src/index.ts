import { Theme } from '@mui/material/styles'

export * from './atoms'
export * from './molecules'
export * from './organisms'
// export * from './views'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}
