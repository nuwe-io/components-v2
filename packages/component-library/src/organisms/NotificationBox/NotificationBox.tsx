import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

//** Nuwe libs
import { createdAt } from '@nuwe/lib'

import { SimpleAvatar } from '../../atoms'

// ** Styled Avatar component
const AvatarStyled = styled(SimpleAvatar)({
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
  displayedTexts: {
    zeroMinAgo: string
    now: string
    newTeamRequest: string
    teamRequestAccepted: string
    teamUpdate: string
    newNotification: string
    wantsToJoin: string
    invitedYou: string
    addedYou: string
    joinedYourTeam: string
    leftYourTeam: string
    newTeamLeader: string
    userWasKicked: string
  }
}

export const NotificationBox = ({ notification, displayedTexts }: NotificationBoxProps) => {
  const type = notification.type

  const date = notification.hasOwnProperty('user') && createdAt(notification.createdAt)

  const timestamp = date === displayedTexts.zeroMinAgo ? displayedTexts.now : date

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
    if (type === 'user2leadAccepted') return displayedTexts.addedYou
    if (type === 'lead2userAccepted') return displayedTexts.joinedYourTeam
    if (type === 'userLeftTeam') return displayedTexts.leftYourTeam
    if (type === 'newTeamLeader') return displayedTexts.newTeamLeader
    if (type === 'leaderKicksUser') return displayedTexts.userWasKicked
    else return displayedTexts.newNotification
  }

  return notification.hasOwnProperty('user') ? (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <AvatarStyled src={notification.user.image} />
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
