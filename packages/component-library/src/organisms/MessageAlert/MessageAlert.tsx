/* eslint-disable no-extra-parens */
import { Alert, Button, ButtonGroup, Collapse, Typography, useTheme } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded'
import SaveIcon from '@mui/icons-material/Save'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import { ButtonLoader, SimpleAvatar } from '../../atoms'

interface ActionAlertGroupProps {
  save?: () => void
  deleteAction?: () => void
  launch?: (() => Promise<boolean>) | null
  severity?: 'error' | 'warning' | 'info' | 'success'
  cancel?: () => void
}

interface buttonStyle {
  variant: 'text' | 'outlined' | 'contained'
  style: { backgroundColor: string }
}

const ActionAlertGroup = ({
  save,
  deleteAction,
  launch,
  severity,
  cancel
}: ActionAlertGroupProps) => {
  const theme = useTheme()
  const buttonColor = { backgroundColor: theme.palette.warning.main }
  const buttonStyle: buttonStyle = { variant: 'contained', style: buttonColor }

  return (
    <ButtonGroup disabled={severity === 'error'} variant='contained' disableElevation>
      {cancel && (
        <ButtonLoader
          size='medium'
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
          size='medium'
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

const AvatarStyled: any = styled(SimpleAvatar)({
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
  displayedTexts: {
    newTeamRequest: string
    teamRequestAccepted: string
    teamUpdate: string
    newNotification: string
    joinedYourTeam: string
    wantsToJoin: string
    invitedYou: string
    addedYou: string
    leftYourTeam: string
    newTeamLeader: string
    userWasKicked: string
  }
}

const NotificationAlert = ({ notification, displayedTexts }: NotificationAlertProps) => {
  const type = notification.type

  const title = () => {
    if (type === 'lead2user' || type === 'user2lead') return displayedTexts.newTeamRequest
    if (type === 'lead2userAccepted' || type === 'user2leadAccepted')
      return displayedTexts.teamRequestAccepted
    if (type === 'userLeftTeam' || type === 'newTeamLeader' || type === 'leaderKicksUser')
      return displayedTexts.teamUpdate
    else return displayedTexts.newNotification
  }

  const message = () => {
    if (type === 'user2lead') return displayedTexts.wantsToJoin
    if (type === 'lead2user') return displayedTexts.invitedYou
    if (type === 'user2leadAccepted') displayedTexts.addedYou
    if (type === 'lead2userAccepted') return displayedTexts.joinedYourTeam
    if (type === 'userLeftTeam') return displayedTexts.leftYourTeam
    if (type === 'newTeamLeader') return displayedTexts.newTeamLeader
    if (type === 'leaderKicksUser') return displayedTexts.userWasKicked
    else return displayedTexts.newNotification
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <AvatarStyled alt='Avatar' src={notification.user.image} />
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
  launch?: (() => Promise<boolean>) | null
  deleteAction?: () => void
  isNotification?: boolean
  notification?: any
  displayedTexts: {
    newTeamRequest: string
    teamRequestAccepted: string
    teamUpdate: string
    newNotification: string
    joinedYourTeam: string
    wantsToJoin: string
    invitedYou: string
    addedYou: string
    leftYourTeam: string
    newTeamLeader: string
    userWasKicked: string
  }
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
  notification,
  displayedTexts
}: MessageAlertProps) => {
  return (
    <Collapse style={{ background: 'transparent' }} in={open}>
      {isNotification ? (
        <Alert icon={false} severity='success' onClose={() => cancel()}>
          <NotificationAlert notification={notification} displayedTexts={displayedTexts} />
        </Alert>
      ) : (
        <Alert
          action={
            simple ? (
              ((() => cancel()) as any)
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
