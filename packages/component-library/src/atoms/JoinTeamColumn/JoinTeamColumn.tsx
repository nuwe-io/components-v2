/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

interface JoinTeamColumnProps {
  data: {
    invitation: {
      team: {
        id: string
      }
    }
    isAvailableToJoin: boolean
    participation: {
      invitation: {
        status: string
      }
    }
    team: {
      id: string
    }
    event: {
      id: string
      url: string
    }
  }
  actions: {
    emitSendInvitation: (invitation: any) => void
    setInvitationStatus: (invitation: any) => void
  }
  displayedTexts: {
    sendRequestLabel: string
    requestSentLabel: string
    viewMyTeamLabel: string
  }
}

export const JoinTeamColumn = ({ data, actions, displayedTexts }: JoinTeamColumnProps) => {
  const { invitation, isAvailableToJoin, participation, team, event } = data
  const { emitSendInvitation, setInvitationStatus } = actions

  if (
    isAvailableToJoin ||
    participation.invitation.status === 'accepted' ||
    invitation.team.id === team?.id
  ) {
    if (participation.invitation.status === 'unsent' && invitation.team.id !== team?.id)
      return (
        <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Chip
            label={displayedTexts.sendRequestLabel}
            color='secondary'
            size='small'
            style={{
              width: 135,
              cursor: 'pointer',
              borderRadius: 4
            }}
            onClick={() => {
              emitSendInvitation({ ...invitation, type: 'user2lead' })
              setInvitationStatus({
                ...invitation,
                status: 'sent',
                teamId: invitation.team.id,
                view: 'teams'
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

    if (participation.invitation.status === 'accepted' || invitation.team.id === team?.id)
      return (
        <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
          <Chip
            label={displayedTexts.viewMyTeamLabel}
            color='primary'
            size='small'
            onClick={() => window.open(`/dev/event/teams/${event.url}/myteam`, '_self')}
            style={{
              width: 135,
              cursor: 'pointer',
              borderRadius: 4
            }}
          />
        </div>
      )
  }

  return <p>-</p>
}
