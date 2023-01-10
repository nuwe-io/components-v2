import {
  Box,
  Container,
  Drawer as MuiDrawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

import ChevronLeftIcon from '@mui/icons-material/ArrowBackIosRounded'
import ChevronRightIcon from '@mui/icons-material/ArrowForwardIosRounded'

import PropTypes from 'prop-types'

import { SwitchLang, SwitchTheme } from '../../molecules'

import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'

const drawerWidth = 250

const openedMixin = (theme: any) => ({
  width: drawerWidth,
  border: 'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  border: 'none',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 20,
  width: `calc(${theme.spacing(7)} + 1px)`,
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`
  },
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    }),
    [theme.breakpoints.up('sm')]: {
      width: '20px'
    }
  })
)

interface VerticalNavbarProps {
  items: any
  children: any
}

export const VerticalNavbar = ({ items, children }: VerticalNavbarProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()
  const pathname = router.pathname
  const theme = useTheme() as any

  const handleDrawerOpen = () => {
    setOpen(true)
    localStorage.setItem('drawerOpen', 'true')
  }

  const handleDrawerClose = () => {
    setOpen(false)
    localStorage.setItem('drawerOpen', 'false')
  }

  useEffect(() => {
    const openLocal = localStorage.getItem('drawerOpen') === 'true'
    setOpen(openLocal)
  }, [])

  const logo = {
    open: '/logo.png',
    close:
      'https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg'
  }

  return (
    <Container maxWidth='xl' style={{ overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Drawer variant='permanent' open={open}>
          <Box sx={{ padding: 1 }}>
            <img alt='logo' height='40px' src={open ? logo.open : logo.close} />
          </Box>
          <List>
            {items?.map((item: any) => (
              <Tooltip placement='right' arrow title={item.label} key={item.label}>
                <Link
                  style={{ textDecoration: 'none', color: theme.palette.secondary.main }}
                  href={item.href}
                >
                  <ListItem
                    style={{
                      backgroundColor:
                        item.href === pathname ? theme.palette.background.default : 'transparent'
                    }}
                    button
                    href={item.href}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              </Tooltip>
            ))}
          </List>
          <DrawerHeader>
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              {!open ? (
                <ChevronRightIcon color='secondary' />
              ) : (
                <ChevronLeftIcon color='secondary' />
              )}
            </IconButton>
          </DrawerHeader>
        </Drawer>
        <Container maxWidth='xl' sx={{ marginBottom: 10, width: '100%' }}>
          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <SwitchLang />
            <SwitchTheme />
          </div>
          {children}
        </Container>
      </Box>
    </Container>
  )
}

VerticalNavbar.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}
