// ** Next Import

// ** MUI Imports
import IconButton from '@mui/material/IconButton'

import { Logo } from 'atoms'

// ** Icons
import CircleOutline from 'mdi-material-ui/CircleOutline'
import Close from 'mdi-material-ui/Close'
import RecordCircleOutline from 'mdi-material-ui/RecordCircleOutline'

import { MenuHeaderWrapper } from './styles'

interface VerticalNavHeaderProps {
  hidden?: boolean
  navHover?: boolean
  settings?: any
  saveSettings?: any
  collapsedNavWidth?: number
  toggleNavVisibility?: any
  navigationBorderWidth?: number
  menuLockedIcon?: any
  menuUnlockedIcon?: any
  verticalNavMenuBranding?: any
}

export const VerticalNavHeader = (props: VerticalNavHeaderProps) => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth = 0,
    toggleNavVisibility,
    navigationBorderWidth = 0,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const { navCollapsed } = settings
  const menuCollapsedStyles = navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 }

  const menuHeaderPaddingLeft = () => {
    if (navCollapsed && !navHover) {
      if (userVerticalNavMenuBranding) {
        return 0
      } else {
        return (collapsedNavWidth - navigationBorderWidth - 30) / 8
      }
    } else {
      return 6
    }
  }

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? userVerticalNavMenuBranding(props) : <Logo />}

      {hidden ? (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={toggleNavVisibility}
          sx={{ p: 0, backgroundColor: 'transparent !important' }}
        >
          <Close fontSize='small' />
        </IconButton>
      ) : (
        <IconButton
          disableRipple
          disableFocusRipple
          onClick={() => saveSettings({ ...settings, navCollapsed: !navCollapsed })}
          sx={{ p: 0, color: 'text.primary', backgroundColor: 'transparent !important' }}
        >
          {navCollapsed
            ? MenuUnlockedIcon({ userMenuUnlockedIcon, menuCollapsedStyles })
            : MenuLockedIcon({ userMenuLockedIcon, menuCollapsedStyles })}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

const MenuLockedIcon = (props?: any) =>
  props?.userMenuLockedIcon || (
    <RecordCircleOutline
      sx={{
        fontSize: '1.25rem',
        pointerEvents: 'none',
        ...props?.menuCollapsedStyles,
        transition: 'opacity .25s ease-in-out'
      }}
    />
  )

const MenuUnlockedIcon = (props: any) =>
  props?.userMenuUnlockedIcon || (
    <CircleOutline
      sx={{
        fontSize: '1.25rem',
        pointerEvents: 'none',
        ...props?.menuCollapsedStyles,
        transition: 'opacity .25s ease-in-out'
      }}
    />
  )
