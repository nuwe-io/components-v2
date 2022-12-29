import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { createdAt, Translations } from '@nuwe/lib'
import CustomAvatar from '@nuwe/materio'

// ** Styled Avatar component
const Avatar = styled(CustomAvatar)({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75)
}))

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

interface NotificationBoxProps {
  notification: any
}

export const NotificationBox = ({ notification }: NotificationBoxProps) => {
  const type = notification.type

  const date = notification.hasOwnProperty('user') && createdAt(notification.createdAt)

  const timestamp =
    date === <Translations ns='notifications' text='zero_min_ago' /> ? (
      <Translations ns='notifications' text='now' />
    ) : (
      date
    )

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

  return notification.hasOwnProperty('user') ? (
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
        {timestamp}
      </Typography>
    </Box>
  ) : (
    <span />
  )
}
