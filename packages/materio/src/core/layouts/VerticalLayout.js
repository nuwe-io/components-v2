// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/shared/materio/configs/themeConfig'

// ** Components
import Customizer from 'src/shared/materio/@core/components/customizer'
import ScrollToTop from 'src/shared/materio/@core/components/scroll-to-top'
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'

// ** Styled Component
import DatePickerWrapper from 'src/shared/materio/@core/styles/libs/react-datepicker'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = (props) => {
  // ** Props
  const { hidden, settings, children, scrollToTop } = props

  // ** Vars
  const { skin, navHidden, contentWidth } = settings
  const { navigationSize, disableCustomizer, collapsedNavigationSize } = themeConfig
  const navWidth = navigationSize
  const navigationBorderWidth = skin === 'bordered' ? 1 : 0
  const collapsedNavWidth = collapsedNavigationSize

  // ** States
  const [navHover, setNavHover] = useState(false)
  const [navVisible, setNavVisible] = useState(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        {navHidden &&
        themeConfig.layout === 'vertical' &&
        !(navHidden && settings.lastLayout === 'horizontal') ? null : (
          <Navigation
            navWidth={navWidth}
            navHover={navHover}
            navVisible={navVisible}
            setNavHover={setNavHover}
            setNavVisible={setNavVisible}
            collapsedNavWidth={collapsedNavWidth}
            toggleNavVisibility={toggleNavVisibility}
            navigationBorderWidth={navigationBorderWidth}
            {...props}
          />
        )}
        <MainContentWrapper className='layout-content-wrapper'>
          <AppBar toggleNavVisibility={toggleNavVisibility} {...props} />

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
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {disableCustomizer || hidden ? null : <Customizer />}

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
