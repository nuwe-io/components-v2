// ** Theme Override Imports
import { PropTypes } from 'prop-types'
import { themeConfig } from '../../configs'
import GlobalStyling from './globalStyles'
import overrides from './overrides'
import themeOptions from './ThemeOptions'
import typography from './typography'
import UserThemeOptions from './UserThemeOptions'

export const ThemeComponentService = (themeProps) => {
  const innerThemeComponentService = ({ settings, children }) => {
    const {
      CssBaseline,
      GlobalStyles,
      createTheme,
      responsiveFontSizes,
      ThemeProvider,
      deepmerge,
      AdapterDayjs,
      LocalizationProvider
    } = themeProps

    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = themeOptions(settings)

    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = createTheme(coreThemeConfig)

    // ** Deep Merge Component overrides of core and user
    const mergeComponentOverrides = (theme, settings) =>
      deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components)

    // ** Deep Merge Typography of core and user
    const mergeTypography = (theme) => deepmerge(typography(theme), UserThemeOptions()?.typography)

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
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
          {children}
        </LocalizationProvider>
      </ThemeProvider>
    )
  }

  innerThemeComponentService.propTypes = {
    settings: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  }

  return innerThemeComponentService
}
