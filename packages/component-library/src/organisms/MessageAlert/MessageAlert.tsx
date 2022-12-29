/* eslint-disable no-extra-parens */
import { Alert, Button, ButtonGroup, Collapse, Typography, useTheme } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded'
import SaveIcon from '@mui/icons-material/Save'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { Translations } from '@nuwe/lib'
import { CustomAvatar } from '@nuwe/materio'
import { ButtonLoader } from '../../atoms'

interface ActionAlertGroupProps {
  save?: () => void
  deleteAction?: () => void
  launch?: () => void
  severity?: 'error' | 'warning' | 'info' | 'success'
  cancel?: () => void
}

const ActionAlertGroup = ({
  save,
  deleteAction,
  launch,
  severity,
  cancel
}: ActionAlertGroupProps) => {
  const theme = useTheme()
  const buttonVarian = 'contained'
  const buttonColor = { backgroundColor: theme.palette.warning.main }
  const buttonStyle = { variant: buttonVarian, style: buttonColor }

  return (
    <ButtonGroup disabled={severity === 'error'} variant='contained' disableElevation>
      {cancel && (
        <ButtonLoader
          //size='medium'
          key='cancel'
          aria-label='cancel'
          showStartIcon
          startIcon={<CloseIcon fontSize='inherit' />}
          onClick={() => cancel()}
          {...buttonStyle}
        >
          {'Cancel'}
        </ButtonLoader>
      )}
      {save && (
        <ButtonLoader
          //size='medium'
          key='save'
          aria-label='save'
          onClick={() => save()}
          showStartIcon
          startIcon={<SaveIcon fontSize='inherit' />}
          {...buttonStyle}
        >
          {'Save'}
        </ButtonLoader>
      )}
      {deleteAction && (
        <Button
          style={{ backgroundColor: theme.palette.warning.main }}
          aria-label='delete'
          size='medium'
          onClick={() => deleteAction()}
          startIcon={<DeleteIcon fontSize='inherit' />}
          {...buttonStyle}
        >
          {'Delete'}
        </Button>
      )}
      {launch && (
        <Button
          aria-label='open'
          size='medium'
          onClick={() => launch()}
          startIcon={<LaunchRoundedIcon fontSize='inherit' />}
          {...buttonStyle}
        >
          {'Open'}
        </Button>
      )}
    </ButtonGroup>
  )
}

const Avatar = styled(CustomAvatar)({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})
const MenuItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75)
}))
const MenuItemSubtitle = styled(Typography)({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

interface NotificationAlertProps {
  notification: any
}

const NotificationAlert = ({ notification }: NotificationAlertProps) => {
  const type = notification.type

  const title = () => {
    if (type === 'lead2user' || type === 'user2lead')
      return <Translations ns='notifications' text='new_team_request' />
    if (type === 'lead2userAccepted' || type === 'user2leadAccepted')
      return <Translations ns='notifications' text='team_request_accepted' />
    if (type === 'userLeftTeam' || type === 'newTeamLeader' || type === 'leaderKicksUser')
      return <Translations ns='notifications' text='team_update' />
    else return <Translations ns='notifications' text='new_notification' />
  }

  const message = () => {
    if (type === 'user2lead') return <Translations ns='notifications' text='wants_to_join' />
    if (type === 'lead2user') return <Translations ns='notifications' text='invited_you' />
    if (type === 'user2leadAccepted') return <Translations ns='notifications' text='added_you' />
    if (type === 'lead2userAccepted')
      return <Translations ns='notifications' text='joined_your_team' />
    if (type === 'userLeftTeam') return <Translations ns='notifications' text='left_your_team' />
    if (type === 'newTeamLeader') return <Translations ns='notifications' text='new_team_leader' />
    if (type === 'leaderKicksUser')
      return <Translations ns='notifications' text='user_was_kicked' />
    else return <Translations ns='notifications' text='new_notification' />
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Avatar alt='Avatar' src={notification.user.image} />
      <Box
        sx={{ mx: 4, flex: '1 1', display: 'flex', overflow: 'hidden', flexDirection: 'column' }}
      >
        <MenuItemTitle>{title()}</MenuItemTitle>
        <MenuItemSubtitle variant='body2'>
          {notification.user.username} {message()}
        </MenuItemSubtitle>
      </Box>
      <Typography variant='caption' sx={{ color: 'text.disabled' }}>
        {notification.date}
      </Typography>
    </Box>
  )
}

interface MessageAlertProps {
  simple?: boolean
  open: boolean
  title?: string
  save?: () => void
  cancel: () => void
  variant?: 'filled' | 'outlined' | 'standard'
  severity: 'error' | 'warning' | 'info' | 'success'
  launch?: () => void
  deleteAction?: () => void
  isNotification?: boolean
  notification?: any
}

export const MessageAlert = ({
  simple,
  open,
  title,
  save,
  cancel,
  variant,
  severity,
  launch,
  deleteAction,
  isNotification,
  notification
}: MessageAlertProps) => {
  return (
    <Collapse style={{ background: 'transparent' }} in={open}>
      {isNotification ? (
        <Alert icon={false} severity='success' onClose={() => cancel()}>
          <NotificationAlert notification={notification} />
        </Alert>
      ) : (
        <Alert
          action={
            simple ? (
              () => cancel()
            ) : (
              <ActionAlertGroup
                launch={launch}
                deleteAction={deleteAction}
                severity={severity}
                save={save}
                cancel={cancel}
              />
            )
          }
          variant={variant}
          style={{ margin: '10px 0px' }}
          severity={severity}
        >
          {title}
        </Alert>
      )}
    </Collapse>
  )
}

MessageAlert.defaultProps = {
  simple: false,
  variant: 'outlined',
  severity: 'warning',
  title: 'Hey, there are some unsaved changes. Save them before changing the page!'
}
