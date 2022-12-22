import { Theme } from '@mui/material/styles'

export * from './atoms'
export * from './molecules'

declare module '@mui/styles/defaultTheme' {
  type DefaultTheme = Theme
}
