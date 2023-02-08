// ** React Imports
import { Fragment } from 'react'

// ** Next Imports

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import MuiListItem from '@mui/material/ListItem'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import clsx from 'clsx'

// ** Theme Config Import
import { Link } from '@mui/material'
import { businessThemeConfig as themeConfig, hexToRGBA } from '@nuwe/materio'

// ** Custom Components
const ListItem: any = styled(MuiListItem)(({ theme }) => ({
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

export const HorizontalNavLink = (props: any) => {
  // ** Props
  const { item, settings, hasParent, isCoulmn, type, router } = props

  // ** Hook & Vars
  const { menuTextTruncate } = themeConfig
  const Wrapper = !hasParent ? List : Fragment

  const handleURLQueries = (pathToCheck: string) => {
    if (type === 'subNav') return router.pathname === pathToCheck
    return router.pathname.includes(pathToCheck)
  }

  const itemPath = item.path.replace(router.basePath, '')

  const isNavLinkActive = () => router.pathname === itemPath || handleURLQueries(itemPath)

  const theme = useTheme()

  //<CanViewNavLink navLink={item}>

  return (
    <Wrapper
      {...(!hasParent
        ? { component: 'div', sx: { py: settings.skin === 'bordered' ? 2.625 : 2.75 } }
        : {})}
    >
      <Link href={`${item.path}`}>
        <ListItem
          component={'a'}
          className={clsx({ active: isNavLinkActive() })}
          target={item.openInNewTab ? '_blank' : undefined}
          onClick={(e: any) => {
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
  )
}
