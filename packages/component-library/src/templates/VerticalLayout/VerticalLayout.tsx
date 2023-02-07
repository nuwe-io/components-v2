// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

import {
  ContentWrapper,
  MainContentWrapper,
  Toolbar,
  VerticalLayoutWrapper
} from './VerticalLayout.styles'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import { businessThemeConfig as themeConfig, DatePickerWrapper } from '@nuwe/materio'

// ** Components
import { ScrollToTop } from 'molecules'
import { HorizontalNavigation as NavigationBottom } from 'templates/HorizontalLayout/components'
import { VerticalAppBar as AppBar, VerticalNavigation as Navigation } from './components'

export interface VerticalLayoutProps {
  settings?: any
  children?: React.ReactNode
  scrollToTop?: any
  subNavElements?: any
}

export const VerticalLayout = (props: VerticalLayoutProps) => {
  // ** Props
  const { settings, children, scrollToTop } = props

  // ** Vars
  const { skin, navHidden, contentWidth, subNavType, subNavProps } = settings
  const { navigationSize, collapsedNavigationSize } = themeConfig
  const navWidth = navigationSize
  const navigationBorderWidth = skin === 'bordered' ? 1 : 0
  const collapsedNavWidth = collapsedNavigationSize

  // ** States
  const [navHover, setNavHover] = useState(false)
  const [navVisible, setNavVisible] = useState(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  const navProps = {
    ...props,
    horizontalNavItems: props?.subNavElements[subNavType](subNavProps),
    isCoulmn: true
  }

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
          {!navHidden && (
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
                <NavigationBottom type='subNav' {...navProps} />
              </Toolbar>
            </Box>
          )}

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
