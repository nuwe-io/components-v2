/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

interface InviteToTeamColumnProps {
  data: any
  actions: any
  displayedTexts: {
    inviteLabel: string
    requestSentLabel: string
    teammateLabel: string
  }
}

export const InviteToTeamColumn = ({ data, actions, displayedTexts }: InviteToTeamColumnProps) => {
  const { invitation, participation, user } = data
  const { emitSendInvitation, setInvitationStatus } = actions

  if (!participation.hasTeam && participation.invitation.status === 'unsent')
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={displayedTexts.inviteLabel}
          color='secondary'
          size='small'
          style={{
            width: 135,
            borderRadius: 4,
            cursor: 'pointer'
          }}
          onClick={() => {
            emitSendInvitation({ ...invitation, type: 'lead2user' })
            setInvitationStatus({
              ...invitation,
              status: 'sent',
              userId: invitation.to.user.id,
              view: 'participants'
            })
          }}
        />
      </div>
    )

  if (participation.invitation.status === 'sent')
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={displayedTexts.requestSentLabel}
          color='warning'
          size='small'
          variant='outlined'
          style={{
            width: 135,
            borderRadius: 4
          }}
        />
      </div>
    )

  if (participation.invitation.status === 'accepted' && invitation.to.user.id !== user.id)
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={displayedTexts.teammateLabel}
          color='primary'
          size='small'
          variant='outlined'
          style={{
            borderRadius: 4,
            width: 135
          }}
        />
      </div>
    )

  return <p>-</p>
}
