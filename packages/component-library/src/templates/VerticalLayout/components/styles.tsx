import React from 'react'

// ** MUI Imports
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import ListItemButton from '@mui/material/ListItemButton'
import MuiListSubheader from '@mui/material/ListSubheader'
import { styled } from '@mui/material/styles'
import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer'
import MuiToolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

import { themeConfig } from '@nuwe/materio'

export const AppBar: React.FC<any> = styled(MuiAppBar)(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

export const Toolbar: React.FC<any> = styled(MuiToolbar)(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out'
}))

export const appBarFixedStyles = (appBarBlur: any, theme: any, skin: string, hexToRGBA: any) => {
  return {
    px: `${theme.spacing(5)} !important`,
    ...(appBarBlur && { backdropFilter: 'blur(8px)' }),
    boxShadow: theme.shadows[skin === 'bordered' ? 0 : 3],
    backgroundColor: hexToRGBA(theme.palette.background.paper, appBarBlur ? 0.85 : 1),
    ...(skin === 'bordered' && {
      border: `1px solid ${theme.palette.divider}`,
      borderTopWidth: 0
    })
  }
}

const MenuItemTextWrapper: React.FC<any> = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
}))

const MenuGroupToggleRightIcon: React.FC<any> = styled(ChevronRight)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'transform .25s ease-in-out'
}))

const MenuGroupToggleLeftIcon: React.FC<any> = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: 'transform .25s ease-in-out'
}))

const MenuNavLink: React.FC<any> = styled(ListItemButton)(({ theme }: { theme: any }) => ({
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
    }
  }
}))

const MenuItemTextMetaWrapper: React.FC<any> = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' })
})

const ListSubheader: React.FC<any> = styled((props) => (
  <MuiListSubheader component='li' {...props} />
))(({ theme }) => ({
  lineHeight: 1,
  display: 'flex',
  position: 'static',
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(2),
  backgroundColor: 'transparent'
}))

const TypographyHeaderText: React.FC<any> = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  lineHeight: 'normal',
  letterSpacing: '0.21px',
  textTransform: 'uppercase',
  color: theme.palette.text.disabled,
  fontWeight: theme.typography.fontWeightMedium
}))

const MenuHeaderWrapper: React.FC<any> = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle: React.FC<any> = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink: React.FC<any> = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const SwipeableDrawer: React.FC<any> = styled(MuiSwipeableDrawer)({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  }
})

const StyledBoxForShadow: React.FC<any> = styled(Box)(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  '&.d-block': {
    display: 'block'
  }
}))

export {
  MenuItemTextWrapper,
  MenuGroupToggleRightIcon,
  MenuGroupToggleLeftIcon,
  MenuNavLink,
  MenuItemTextMetaWrapper,
  ListSubheader,
  TypographyHeaderText,
  MenuHeaderWrapper,
  HeaderTitle,
  StyledLink,
  SwipeableDrawer,
  StyledBoxForShadow
}
