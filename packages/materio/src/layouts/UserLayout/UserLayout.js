import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
import Layout from '@core/layouts/Layout'

// ** Component Import
import HorizontalAppBarContent from '../components/horizontal/AppBarContent'
import VerticalAppBarContent from '../components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

const UserLayout = ({
  horizontalNavItems,
  verticalNavItems,
  subNavElements,
  user,
  logout,
  status,
  children
}) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()
  const acountStatusProps = { user, logout, status }

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/material-ui/react-use-media-query/,
   *  to know more about what values can be passed to this hook.
   */
  const hidden = useMediaQuery(_theme => _theme.breakpoints.down('lg'), {
    noSsr: true
  })

  const horizontalLayoutProps = {
    horizontalNavItems: horizontalNavItems && horizontalNavItems(),
    subNavElements: subNavElements && subNavElements(),
    horizontalAppBarContent: () => (
      <HorizontalAppBarContent
        {...acountStatusProps}
        settings={settings}
        saveSettings={saveSettings}
      />
    )
  }

  const verticalLayoutProps = {
    verticalNavItems: verticalNavItems && verticalNavItems(),
    subNavElements: subNavElements && subNavElements(),
    verticalAppBarContent: props => (
      <VerticalAppBarContent
        {...acountStatusProps}
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        toggleNavVisibility={props.toggleNavVisibility}
      />
    )
  }

  const layoutProps = settings.layout === 'horizontal' ? horizontalLayoutProps : verticalLayoutProps

  return (
    <Layout hidden={hidden} settings={settings} saveSettings={saveSettings} {...layoutProps}>
      {children}
    </Layout>
  )
}

export default UserLayout
