/* eslint-disable comma-spacing */
import { Button } from '@mui/material'
import { Translations, useTranslations } from '@nuwe/lib'

interface InvitationActionsColumnProps {
  invitation: any
  actions: any
}

export const InvitationActionsColumn = ({ invitation, actions }: InvitationActionsColumnProps) => {
  const { type } = invitation
  const { emitDeleteInvitation, emitAddUser2Team, setDeleteInvitation } = actions

  const { translate } = useTranslations()

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
        {type === 'lead2user' && translate('join_the_team', 'teams')}
        {type === 'user2lead' && translate('add_to_team', 'teams')}
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
        <Translations ns='teams' text='delete_request' />
      </Button>
    </div>
  )
}
