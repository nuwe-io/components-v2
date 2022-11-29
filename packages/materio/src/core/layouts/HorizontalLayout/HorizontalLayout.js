// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

// ** Core imports
import DatePickerWrapper from '@core/styles/libs/react-datepicker'
import { hexToRGBA } from '@core/utils/hex-to-rgba'

import { ScrollToTopSection } from '../components/ScrollToTopSection'
import AppBarContent from './components/app-bar-content'

import { ContentWrapper, HorizontalLayoutWrapper, Toolbar } from './styles'

const HorizontalLayout = props => {
  // ** Props
  const { hidden, children, settings, scrollToTop, saveSettings } = props

  // ** Vars
  const { skin, appBar, navHidden, appBarBlur, contentWidth } = settings

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      <AppBar
        color='default'
        elevation={skin === 'bordered' ? 0 : 3}
        className='layout-navbar-and-nav-container'
        position={appBar === 'fixed' ? 'sticky' : 'static'}
        sx={{
          alignItems: 'center',
          color: 'text.primary',
          justifyContent: 'center',
          ...(appBar === 'static' && { zIndex: 13 }),
          backgroundColor: theme => theme.palette.background.paper,
          ...(skin === 'bordered' && {
            borderBottom: theme => `1px solid ${theme.palette.divider}`
          }),
          transition:
            'border-bottom 0.2s ease-in-out, backdrop-filter .25s ease-in-out, box-shadow .25s ease-in-out',
          ...(appBar === 'fixed'
            ? appBarBlur && {
                backdropFilter: 'blur(8px)',
                backgroundColor: theme => hexToRGBA(theme.palette.background.paper, 0.85)
              }
            : {})
        }}
      >
        <Box
          className='layout-navbar'
          sx={{
            width: '100%',
            ...(navHidden ? {} : { borderBottom: theme => `1px solid ${theme.palette.divider}` })
          }}
        >
          <Toolbar
            className='navbar-content-container'
            sx={{
              mx: 'auto',
              ...(contentWidth === 'boxed' && {
                '@media (min-width:1440px)': { maxWidth: 1440 }
              }),
              minHeight: theme => `${theme.mixins.toolbar.minHeight - 1}px !important`
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

      <ContentWrapper
        className='layout-page-content'
        sx={{
          ...(contentWidth === 'boxed' && {
            mx: 'auto',
            '@media (min-width:1440px)': { maxWidth: 1440 },
            '@media (min-width:1200px)': { maxWidth: '100%' }
          })
          // ...(window.location.href.includes('/teams') && { paddingTop: 0 })
        }}
      >
        {children}
      </ContentWrapper>

      <DatePickerWrapper sx={{ zIndex: 11 }}>
        <Box id='react-datepicker-portal'></Box>
      </DatePickerWrapper>

      <ScrollToTopSection scrollToTop={scrollToTop} props={props} />
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
