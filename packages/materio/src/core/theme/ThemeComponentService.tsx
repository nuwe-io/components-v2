// ** Theme Override Imports
import { Settings } from '../../../types'
import { themeConfig } from '../../configs'
import GlobalStyling from './globalStyles'
import overrides from './overrides'
import themeOptions from './ThemeOptions'
import typography from './typography'
import UserThemeOptions from './UserThemeOptions'

interface ThemeComponentServiceProps {
  CssBaseline: any
  GlobalStyles: any
  createTheme: any
  responsiveFontSizes: any
  ThemeProvider: any
  deepmerge: any
  AdapterDayjs: any
  LocalizationProvider: any
}

interface innerThemeComponentServiceProps {
  settings: Settings
  children: any
}

export const ThemeComponentService = (themeProps: ThemeComponentServiceProps) => {
  const innerThemeComponentService = ({ settings, children }: innerThemeComponentServiceProps) => {
    const { GlobalStyles, createTheme, responsiveFontSizes, deepmerge, AdapterDayjs } = themeProps

    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = themeOptions(settings)

    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = createTheme(coreThemeConfig)

    // ** Deep Merge Component overrides of core and user
    const mergeComponentOverrides = (theme: any, settings: Settings) =>
      deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components)

    // ** Deep Merge Typography of core and user
    const mergeTypography = (theme: any) =>
      deepmerge(typography(theme), UserThemeOptions()?.typography)

    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = createTheme(theme, {
      components: { ...mergeComponentOverrides(theme, settings) },
      typography: { ...mergeTypography(theme) }
    })

    // ** Set responsive font sizes to true
    if (themeConfig.responsiveFontSizes) {
      theme = responsiveFontSizes(theme)
    }

    return (
      <themeProps.ThemeProvider theme={theme}>
        <themeProps.LocalizationProvider dateAdapter={AdapterDayjs}>
          <themeProps.CssBaseline />
          <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
          {children}
        </themeProps.LocalizationProvider>
      </themeProps.ThemeProvider>
    )
  }

  return innerThemeComponentService
}
