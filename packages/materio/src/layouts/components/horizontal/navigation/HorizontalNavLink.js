// ** React Imports
import { Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import MuiListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import clsx from 'clsx'

// ** Theme Config Import
import themeConfig from '@configs/themeConfig'

// ** Custom Components Imports
import UserIcon from '@layouts/components/UserIcon'

// import CanViewNavLink from layouts/components/acl/CanViewNavLink'

// ** Util Import
import { hexToRGBA } from '@core/utils/hex-to-rgba'

const ListItem = styled(MuiListItem)(({ theme }) => ({
  width: 'auto',
  paddingTop: theme.spacing(2.25),
  color: theme.palette.text.primary,
  paddingBottom: theme.spacing(2.25),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&.active, &.active:hover': {
    backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
  },
  '&.active .MuiTypography-root, &.active .MuiListItemIcon-root': {
    color: theme.palette.primary.main
  }
}))

const HorizontalNavLink = props => {
  // ** Props
  const { item, settings, hasParent, isCoulmn } = props

  // ** Hook & Vars
  const router = useRouter()
  const { navSubItemIcon, menuTextTruncate } = themeConfig
  const IconTag = item.icon ? item.icon : navSubItemIcon
  const Wrapper = !hasParent ? List : Fragment

  const handleURLQueries = () => {
    if (Object.keys(router.query).length && item.path) {
      const arr = Object.keys(router.query)

      return router.asPath.includes(item.path) && router.asPath.includes(router.query[arr[0]])
    }
  }

  const isNavLinkActive = () => router.pathname === item.path || handleURLQueries()

  const theme = useTheme()

  //<CanViewNavLink navLink={item}>

  return (
    <Wrapper
      {...(!hasParent
        ? {
            component: 'div',
            sx: { py: settings.skin === 'bordered' ? 2.625 : 2.75 }
          }
        : {})}
    >
      <Link href={`${item.path}`} passHref>
        <ListItem
          component={'a'}
          disabled={item.disabled}
          className={clsx({ active: isNavLinkActive() })}
          target={item.openInNewTab ? '_blank' : undefined}
          onClick={e => {
            if (item.path === undefined) {
              e.preventDefault()
              e.stopPropagation()
            }
          }}
          sx={{
            ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
            ...(!hasParent
              ? {
                  px: 5.5,
                  borderRadius: 0.5,
                  '&.active, &.active:hover': {
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    borderBottom: `2px solid ${theme.palette.primary.main}`
                  }
                }
              : { px: 5 })
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: isCoulmn ? 'column' : 'row',
                alignItems: 'center',
                ...(menuTextTruncate && { overflow: 'hidden' })
              }}
            >
              <ListItemIcon sx={{ color: 'text.primary', mr: !hasParent ? 2 : 3 }}>
                <UserIcon
                  icon={IconTag}
                  componentType='horizontal-menu'
                  iconProps={{
                    sx:
                      IconTag === navSubItemIcon
                        ? { fontSize: '0.875rem' }
                        : { fontSize: '1.375rem' }
                  }}
                />
              </ListItemIcon>
              <Typography {...(menuTextTruncate && { noWrap: true })}>{item.title}</Typography>
            </Box>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  ml: 1.6,
                  height: 20,
                  fontWeight: 500,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' }
                }}
              />
            ) : null}
          </Box>
        </ListItem>
      </Link>
    </Wrapper>

    /* </CanViewNavLink> */
  )
}

export default HorizontalNavLink
