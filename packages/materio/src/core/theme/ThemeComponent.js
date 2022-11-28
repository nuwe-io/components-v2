// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider
} from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

// ** Module imports
import themeConfig from 'configs/themeConfig'
import UserThemeOptions from 'layouts/UserLayout/UserThemeOptions'

// ** Theme Override Imports
import GlobalStyling from './globalStyles'
import overrides from './overrides'
import themeOptions from './ThemeOptions'
import typography from './typography'

const ThemeComponent = props => {
  // ** Props
  const { settings, children } = props

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings)

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig)

  // ** Deep Merge Component overrides of core and user
  const mergeComponentOverrides = (theme, settings) =>
    deepmerge({ ...overrides(theme, settings) }, UserThemeOptions()?.components)

  // ** Deep Merge Typography of core and user
  const mergeTypography = theme =>
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme, settings)} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
