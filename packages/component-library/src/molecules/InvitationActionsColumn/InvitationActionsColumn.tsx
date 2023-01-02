/* eslint-disable comma-spacing */
import { Button } from '@mui/material'

interface InvitationActionsColumnProps {
  invitation: any
  actions: any
  displayedTexts: {
    joinTheTeam: string
    addToTeam: string
    deleteRequest: string
  }
}

export const InvitationActionsColumn = ({
  invitation,
  actions,
  displayedTexts
}: InvitationActionsColumnProps) => {
  const { type } = invitation
  const { emitDeleteInvitation, emitAddUser2Team, setDeleteInvitation } = actions

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
      <Button
        onClick={() => {
          emitAddUser2Team(invitation)
          setDeleteInvitation({
            invitationId: invitation.id
          })
        }}
        variant='contained'
        color='primary'
        size='small'
        style={{ marginRight: 10 }}
      >
        {type === 'lead2user' && displayedTexts.joinTheTeam}
        {type === 'user2lead' && displayedTexts.addToTeam}
      </Button>
      <Button
        onClick={() => {
          emitDeleteInvitation({
            id: invitation.id,
            from: invitation.from,
            to: invitation.to,
            type: invitation.type
          })
          setDeleteInvitation({
            invitationId: invitation.id
          })
        }}
        variant='outlined'
        color='secondary'
        size='small'
      >
        {displayedTexts.deleteRequest}
      </Button>
    </div>
  )
}
