import React from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
import {
  HorizontalAppBarContent,
  HorizontalAppBarContentProps,
  VerticalAppBarContent
} from '../AppBarContent'

import { Layout } from '../Layout'

// ** Hook Import
import { useSettings } from '@nuwe/materio'

export interface UserLayoutProps extends HorizontalAppBarContentProps {
  children?: React.ReactNode
  horizontalNavItems: any
  subNavElements: any
  verticalNavItems: any
  router: {
    pathname: string
    push: (path: string) => void
  }
}

export const UserLayout = ({
  children,
  horizontalNavItems,
  subNavElements,
  verticalNavItems,
  i18n,
  languages,
  navigate,
  logout,
  user,
  titles,
  items,
  problemReportUrl,
  openWindow,
  openContactDialog,
  goToLogin,
  router
}: UserLayoutProps) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()

  const hidden = useMediaQuery((_theme: any) => _theme.breakpoints.down('lg'), { noSsr: true })

  return (
    <>
      <Layout
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        router={router}
        {...(settings.layout === 'horizontal'
          ? {
              // ** Navigation Items
              horizontalNavItems: horizontalNavItems(),
              subNavElements: subNavElements(),
              // ** AppBar Content
              horizontalAppBarContent: () => (
                <HorizontalAppBarContent
                  settings={settings}
                  saveSettings={saveSettings}
                  i18n={i18n}
                  languages={languages}
                  navigate={navigate}
                  logout={logout}
                  user={user}
                  titles={titles}
                  items={items}
                  problemReportUrl={problemReportUrl}
                  openWindow={openWindow}
                  openContactDialog={openContactDialog}
                  goToLogin={goToLogin}
                />
              )
            }
          : {
              // ** Navigation Items
              verticalNavItems: verticalNavItems(),
              subNavElements: subNavElements(),
              verticalAppBarContent: (props: any) => (
                <VerticalAppBarContent
                  hidden={hidden}
                  settings={settings}
                  saveSettings={saveSettings}
                  toggleNavVisibility={props.toggleNavVisibility}
                  i18n={i18n}
                  languages={languages}
                  navigate={navigate}
                  logout={logout}
                  user={user}
                  titles={titles}
                  items={items}
                  problemReportUrl={problemReportUrl}
                  openWindow={openWindow}
                  openContactDialog={openContactDialog}
                  goToLogin={goToLogin}
                />
              )
            })}
      >
        {children}
      </Layout>
    </>
  )
}
