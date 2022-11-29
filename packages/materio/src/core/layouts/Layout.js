// ** React Import
import { useEffect, useRef } from 'react'

// ** External imports
import { Toaster } from 'react-hot-toast'

import { HorizontalLayout } from './HorizontalLayout'
import { VerticalLayout } from './VerticalLayout'

const Layout = props => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props

  // ** Ref
  const isCollapsed = useRef(settings.navCollapsed)

  useEffect(() => {
    if (hidden) {
      if (settings.navCollapsed) {
        saveSettings({ ...settings, navCollapsed: false, layout: 'vertical' })
        isCollapsed.current = true
      } else {
        saveSettings({ ...settings, layout: 'vertical' })
      }
    } else {
      if (isCollapsed.current) {
        saveSettings({
          ...settings,
          navCollapsed: true,
          layout: settings.lastLayout
        })
        isCollapsed.current = false
      } else {
        saveSettings({ ...settings, layout: settings.lastLayout })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  if (settings.layout === 'horizontal') {
    return (
      <HorizontalLayout {...props}>
        <Toaster
          position='top-right'
          toastOptions={{ className: 'react-hot-toast', duration: 10000 }}
          containerStyle={{
            top: 70,
            left: 0,
            position: 'sticky'
          }}
        />
        {children}
      </HorizontalLayout>
    )
  }

  return (
    <VerticalLayout {...props}>
      <Toaster
        position='bottom-center'
        toastOptions={{ className: 'react-hot-toast', duration: 10000 }}
      />
      {children}
    </VerticalLayout>
  )
}

export default Layout
