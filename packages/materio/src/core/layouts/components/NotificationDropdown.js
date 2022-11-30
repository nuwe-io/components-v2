/* eslint-disable react-hooks/exhaustive-deps */
// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import MuiMenu from '@mui/material/Menu'
import MuiMenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'

// ** Custom Components Imports
import CustomChip from '@core/components/mui/chip'

import { NotificationBox } from '@components/organisms'
import { useNotifications } from '@shared/context/notifications/application/hooks'

import { useTranslations } from '@shared/utils/translation/Translations'
import { useRouter } from '../../hooks'

const NotificationDropdown = props => {
  const {} = useNotifications()

  // ** Props
  const { settings, notifications, updateNotification, getNotifications, clearNotifications } =
    props

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)
  const [showDialog, setShowDialog] = useState(false)

  const { translate } = useTranslations()

  const NEW = translate('new', 'notifications')
  const VIEW_ALL = translate('view_all', 'notifications')
  const NOTIFICATIONS = translate('notifications', 'notifications')

  // ** Hook
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  // ** Vars
  const { direction } = settings

  const router = useRouter()

  useEffect(() => {
    const getUserNotifications = async () => getNotifications()
    getUserNotifications()
  }, [])

  const handleDropdownOpen = event => {
    clearNotifications()
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => setAnchorEl(null)

  const handleDropdownClick = async notification => {
    if (notification && notification.hasOwnProperty('id')) {
      await updateNotification({ ...notification, clicked: true })

      if (notification.type === 'lead2user' || notification.type === 'user2lead') {
        router.push(`/event/teams/${notification.url}/requests`)
      }
      if (
        notification.type === 'lead2userAccepted' ||
        notification.type === 'user2leadAccepted' ||
        notification.type === 'userLeftTeam' ||
        notification.type === 'newTeamLeader'
      ) {
        router.push(`/event/teams/${notification.url}/myteam`)
      }
    }

    setShowDialog(false)
    handleDropdownClose()
  }

  const handleReadAllNotifications = () => {
    setShowDialog(true)
    handleDropdownClose()
  }

  const ScrollWrapper = ({ children }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
          {children}
        </PerfectScrollbar>
      )
    }
  }

  return (
    <Fragment>
      <IconButton
        color='inherit'
        aria-haspopup='true'
        onClick={handleDropdownOpen}
        aria-controls='customized-menu'
        sx={{ marginRight: 5 }}
        disabled={notifications.length === 0}
      >
        <Badge
          badgeContent={notifications.filter(current => !current.clicked).length}
          color='secondary'
        >
          <BellOutline />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
      >
        <MenuItem disableRipple>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>{NOTIFICATIONS}</Typography>
            {notifications.length > 0 && notifications.some(current => !current.clicked) && (
              <CustomChip
                skin='light'
                size='small'
                label={`${notifications.filter(current => !current.clicked).length} ` + NEW}
                color='primary'
                sx={{
                  height: 20,
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  borderRadius: '10px'
                }}
              />
            )}
          </Box>
        </MenuItem>
        <ScrollWrapper>
          {notifications.length > 0 &&
            notifications.slice(0, 5).map(notification => {
              return (
                <MenuItem
                  key={`dropdown-notification-${notification.id}`}
                  onClick={() => handleDropdownClick(notification)}
                  sx={{
                    backgroundColor: !notification.clicked && 'rgba(170, 170, 170, 0.1)',
                    '&:hover': {
                      backgroundColor: !notification.clicked && 'rgba(140, 140, 140, 0.2)'
                    }
                  }}
                >
                  <NotificationBox notification={notification} />
                </MenuItem>
              )
            })}
        </ScrollWrapper>
        {notifications.length > 5 && (
          <MenuItem
            disableRipple
            sx={{
              py: 3.5,
              borderBottom: 0,
              borderTop: theme => `1px solid ${theme.palette.divider}`
            }}
          >
            <Button fullWidth variant='contained' onClick={handleReadAllNotifications}>
              {`${VIEW_ALL} (${notifications.length})`}
            </Button>
          </MenuItem>
        )}
      </Menu>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <Box sx={{ borderRadius: '10px', width: '500px' }}>
          <MenuItem disableRipple>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 600 }}>{NOTIFICATIONS}</Typography>
                {notifications.length > 0 && notifications.some(current => current.clicked) && (
                  <CustomChip
                    skin='light'
                    size='small'
                    label={`${notifications.filter(current => !current.clicked).length}` + NEW}
                    color='primary'
                    sx={{
                      height: 20,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      borderRadius: '10px',
                      marginLeft: 2
                    }}
                  />
                )}
              </div>
              <Button
                color='secondary'
                variant='outlined'
                size='small'
                onClick={() => setShowDialog(false)}
              >
                Close
              </Button>
            </Box>
          </MenuItem>
          <ScrollWrapper sx={{ height: '100%' }}>
            {notifications.length > 0 &&
              notifications.map(notification => {
                return (
                  <MenuItem
                    key={`dialog-notification-${notification.id}`}
                    onClick={() => handleDropdownClick(notification)}
                    sx={{
                      backgroundColor: !notification.clicked && 'rgba(170, 170, 170, 0.1)',
                      '&:hover': {
                        backgroundColor: !notification.clicked && 'rgba(140, 140, 140, 0.2)'
                      }
                    }}
                  >
                    <NotificationBox notification={notification} />
                  </MenuItem>
                )
              })}
          </ScrollWrapper>
        </Box>
      </Dialog>
    </Fragment>
  )
}

// ** Styled Menu component
const Menu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 400,
    overflow: 'hidden',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  '& .MuiMenu-list': {
    padding: 0
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`
}))

const styles = {
  maxHeight: 524,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0
  }
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles
})

export default NotificationDropdown
