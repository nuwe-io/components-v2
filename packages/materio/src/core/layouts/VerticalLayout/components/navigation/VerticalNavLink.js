// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Configs Import
import themeConfig from '@configs/themeConfig'

// ** Custom Components Imports
import UserIcon from '@layouts/components/UserIcon'

// ** Utils
import { handleURLQueries } from '@core/layouts/utils'

// ** Styled Components
const MenuNavLink = styled(ListItemButton)(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  transition: 'padding-left .25s ease-in-out',
  '&.active': {
    '&, &:hover': {
      boxShadow: theme.shadows[3],
      backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`
    },
    '& .MuiTypography-root, & .MuiListItemIcon-root': {
      color: `${theme.palette.common.white} !important`
    },
    '&.active': {
      background: `transparent !important`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRadius: '0px !important'
    }
  }
}))

const MenuItemTextMetaWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const VerticalNavLink = ({
  item,
  parent,
  navHover,
  settings,
  navVisible,
  isSubToSub,
  collapsedNavWidth,
  toggleNavVisibility,
  navigationBorderWidth
}) => {
  // ** Hooks
  const theme = useTheme()
  const router = useRouter()

  // ** Vars
  const { skin, navCollapsed } = settings
  const IconTag = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon

  const conditionalBgColor = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        color: `rgba(${theme.palette.customColors.dark}, 0.87)`,
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.dark}, 0.04)`
        }
      }
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        color: `rgba(${theme.palette.customColors.light}, 0.87)`,
        '&:hover': {
          backgroundColor: `rgba(${theme.palette.customColors.light}, 0.04)`
        }
      }
    } else return {}
  }

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    } else {
      return false
    }
  }

  return (
    <ListItem
      disablePadding
      className='nav-link'
      disabled={item.disabled || false}
      sx={{ mt: 1.5, px: '0 !important' }}
    >
      <Link passHref href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          component={'a'}
          className={isNavLinkActive() ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
            if (navVisible) {
              toggleNavVisibility()
            }
          }}
          sx={{
            py: 2.25,
            ...conditionalBgColor(),
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            pl:
              navCollapsed && !navHover
                ? (collapsedNavWidth - navigationBorderWidth - 24) / 8
                : 5.5,
            pr:
              navCollapsed && !navHover
                ? ((collapsedNavWidth - navigationBorderWidth - 24) / 2 - 5) / 4
                : 3.5
          }}
        >
          {isSubToSub ? null : (
            <ListItemIcon
              sx={{
                color: 'text.primary',
                transition: 'margin .25s ease-in-out',
                ...(navCollapsed && !navHover ? { mr: 0 } : { mr: 2.5 }),
                ...(parent ? { ml: 1.25, mr: 3.75 } : {}) // This line should be after (navCollapsed && !navHover) condition for proper styling
              }}
            >
              <UserIcon
                icon={IconTag}
                componentType='vertical-menu'
                iconProps={{
                  sx: {
                    fontSize: '0.875rem',
                    ...(!parent ? { fontSize: '1.5rem' } : {}),
                    ...(parent && item.icon ? { fontSize: '0.875rem' } : {})
                  }
                }}
              />
            </ListItemIcon>
          )}

          <MenuItemTextMetaWrapper
            sx={{
              ...(isSubToSub ? { ml: 9 } : {}),
              ...(navCollapsed && !navHover ? { opacity: 0 } : { opacity: 1 })
            }}
          >
            <Typography
              {...((themeConfig.menuTextTruncate ||
                (!themeConfig.menuTextTruncate && navCollapsed && !navHover)) && {
                noWrap: true
              })}
            >
              {item.title}
            </Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  ml: 1.25,
                  height: 20,
                  fontWeight: 500,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
