/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

import { Translations } from '@nuwe/lib'

interface InviteToTeamColumnProps {
  data: any
  actions: any
}

export const InviteToTeamColumn = ({ data, actions }: InviteToTeamColumnProps) => {
  const { invitation, participation, user } = data
  const { emitSendInvitation, setInvitationStatus } = actions

  if (!participation.hasTeam && participation.invitation.status === 'unsent')
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={<Translations ns='teams' text='invite_label' />}
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
          label={<Translations ns='teams' text='request_sent_label' />}
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
          label={<Translations ns='teams' text='teammate_label' />}
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
