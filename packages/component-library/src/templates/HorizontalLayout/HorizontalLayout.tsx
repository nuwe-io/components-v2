// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import { DatePickerWrapper, hexToRGBA } from '@nuwe/materio'

// ** Components
import { ScrollToTop } from 'molecules'

// ** Styled Component
import { HorizontalAppBar as AppBarContent, HorizontalNavigation as Navigation } from './components'
import { ContentWrapper, HorizontalLayoutWrapper, Toolbar } from './HorizontalLayout.styles'

export const HorizontalLayout = (props: any) => {
  // ** Props
  const {
    hidden,
    children,
    settings,
    scrollToTop,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent
  } = props

  const { skin, appBar, navHidden, appBarBlur, contentWidth, subNavType, subNavProps } = settings

  const navProps = { ...props, horizontalNavItems: props.subNavElements[subNavType](subNavProps) }

  const customSx = {
    alignItems: 'center',
    color: 'text.primary',
    justifyContent: 'center',
    ...(appBar === 'static' && { zIndex: 13 }),
    backgroundColor: (theme: any) => theme.palette.background.default,
    ...(skin === 'bordered' && {
      borderBottom: (theme: any) => `1px solid ${theme.palette.divider}`
    }),
    transition:
      'border-bottom 0.1s ease-in-out, backdrop-filter .1s ease-in-out, box-shadow .1s ease-in-out',
    ...(appBar === 'fixed'
      ? appBarBlur && {
          backdropFilter: 'blur(8px)',
          backgroundColor: (theme: any) => hexToRGBA(theme.palette.background.paper, 0.85)
        }
      : {})
  }

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      <AppBar
        color='default'
        elevation={0}
        className='layout-navbar-and-nav-container'
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        sx={customSx}
      >
        <Box
          className='layout-navbar'
          sx={{
            width: '100%',
            ...(navHidden ? {} : { borderBottom: (theme) => `1px solid ${theme.palette.divider}` })
          }}
        >
          <Toolbar
            className='navbar-content-container'
            sx={{
              mx: 'auto',
              ...(contentWidth === 'boxed' && { '@media (min-width:1440px)': { maxWidth: 1440 } }),
              minHeight: (theme: any) => `${theme.mixins.toolbar.minHeight - 1}px !important`
            }}
          >
            <AppBarContent
              {...props}
              hidden={hidden}
              settings={settings}
              saveSettings={saveSettings}
            />
          </Toolbar>
        </Box>
      </AppBar>

      <AppBar
        color='default'
        position='static'
        className='layout-navbar-and-nav-container'
        sx={customSx}
      >
        {navHidden ? null : (
          <Box className='layout-horizontal-nav' sx={{ width: '100%' }}>
            <Toolbar
              className='horizontal-nav-content-container'
              sx={{
                mx: 'auto',
                ...(contentWidth === 'boxed' && {
                  '@media (min-width:1440px)': { maxWidth: 1440 }
                }),
                minHeight: (theme: any) =>
                  `${theme.mixins.toolbar.minHeight - (skin === 'bordered' ? 1 : 0)}px !important`
              }}
            >
              {(userHorizontalNavMenuContent && userHorizontalNavMenuContent(props)) || (
                <Navigation type='subNav' {...navProps} />
              )}
            </Toolbar>
          </Box>
        )}
      </AppBar>

      <ContentWrapper
        className='layout-page-content'
        sx={{
          ...(contentWidth === 'boxed' && {
            mx: 'auto',
            '@media (min-width:1440px)': { maxWidth: 1440 },
            '@media (min-width:1200px)': { maxWidth: '100%' }
          })
        }}
      >
        {children}
      </ContentWrapper>

      <DatePickerWrapper sx={{ zIndex: 11 }}>
        <Box id='react-datepicker-portal'></Box>
      </DatePickerWrapper>

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </HorizontalLayoutWrapper>
  )
}
