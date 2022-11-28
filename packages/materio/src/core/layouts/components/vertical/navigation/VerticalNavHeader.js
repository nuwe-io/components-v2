// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icons
import CircleOutline from 'mdi-material-ui/CircleOutline'
import Close from 'mdi-material-ui/Close'
import RecordCircleOutline from 'mdi-material-ui/RecordCircleOutline'

// ** Configs
import themeConfig from 'src/shared/materio/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props) => {
  // ** Props
  const {
    hidden,
    navHover,
    settings,
    saveSettings,
    collapsedNavWidth,
    toggleNavVisibility,
    navigationBorderWidth,
    menuLockedIcon: userMenuLockedIcon,
    menuUnlockedIcon: userMenuUnlockedIcon,
    verticalNavMenuBranding: userVerticalNavMenuBranding
  } = props

  // ** Hooks & Vars
  const theme = useTheme()
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

  const MenuLockedIcon = () =>
    userMenuLockedIcon || (
      <RecordCircleOutline
        sx={{
          fontSize: '1.25rem',
          pointerEvents: 'none',
          ...menuCollapsedStyles,
          transition: 'opacity .25s ease-in-out'
        }}
      />
    )

  const MenuUnlockedIcon = () =>
    userMenuUnlockedIcon || (
      <CircleOutline
        sx={{
          fontSize: '1.25rem',
          pointerEvents: 'none',
          ...menuCollapsedStyles,
          transition: 'opacity .25s ease-in-out'
        }}
      />
    )

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: menuHeaderPaddingLeft() }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
              width={30}
              height={25}
              version='1.1'
              viewBox='0 0 45 45'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M22.615 35.6708V8.68264L16.9883 5.43406V33.8741L14.1028 35.5416V3.76812L8.98107 0.811087C4.98948 -1.49345 0 1.38723 0 5.99632V38.3571C0 41.646 2.54063 44.0549 5.44636 44.3276V9.04772C5.44636 7.65331 6.57675 6.52295 7.97115 6.52295H8.47611V43.8042C8.64585 43.7258 8.81436 43.6385 8.98107 43.5423L22.615 35.6708ZM25.5005 34.0048L37.0063 27.362C40.9979 25.0574 40.9979 19.296 37.0063 16.9915L34.0126 15.2631V24.0813L31.1272 25.7475V13.5971L25.5005 10.3486V34.0048Z'
                fill='#5EBF0D'
              />
            </svg>
            <HeaderTitle
              variant='h6'
              sx={{ ...menuCollapsedStyles, ...(navCollapsed && !navHover ? {} : { ml: 3 }) }}
            >
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}

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
          {navCollapsed ? MenuUnlockedIcon() : MenuLockedIcon()}
        </IconButton>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
