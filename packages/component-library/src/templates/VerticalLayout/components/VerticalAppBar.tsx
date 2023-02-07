// ** MUI Imports
import { hexToRgb, useTheme } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'

// ** Util Import

//* Styled Components
import { AppBar, appBarFixedStyles, Toolbar } from './styles'

export interface VerticalAppBarProps {
  settings?: any
  verticalAppBarContent?: React.FC<any>
  toggleNavVisibility?: () => void
}

export const VerticalAppBar = (props: VerticalAppBarProps) => {
  // ** Props
  const { settings, verticalAppBarContent: userVerticalAppBarContent } = props

  // ** Hooks
  const theme = useTheme()
  const scrollTrigger = useScrollTrigger({ threshold: 0, disableHysteresis: true })

  // ** Vars
  const { skin, appBar, appBarBlur, contentWidth } = settings

  if (appBar === 'hidden') return null

  return (
    <AppBar
      elevation={0}
      className='layout-navbar'
      position={appBar === 'fixed' ? 'sticky' : 'static'}
    >
      <Toolbar
        className='navbar-content-container'
        sx={{
          ...(appBar === 'fixed' &&
            scrollTrigger && { ...appBarFixedStyles(appBarBlur, theme, skin, hexToRgb) }),
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)` }
          })
        }}
      >
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  )
}
