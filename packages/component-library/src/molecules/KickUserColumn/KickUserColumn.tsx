/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

import { Translations, useTranslations } from '@nuwe/lib'
import { actionsSwal, actionsSwalDefaultValues } from '@shared/utils/swal/swal'

interface KickUserColumnProps {
  data: any
  actions: any
}

export const KickUserColumn = ({ data, actions }: KickUserColumnProps) => {
  const { switchRoles } = data
  const { emitLeaveTeam } = actions

  const { translate } = useTranslations()

  if (switchRoles.isEnabled && switchRoles.currentUser.id !== switchRoles.member.id)
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={<Translations ns='teams' text='kick_user_label' />}
          color='error'
          variant='outlined'
          size='small'
          style={{
            marginLeft: 10,
            width: 80,
            cursor: 'pointer',
            borderRadius: 4
          }}
          onClick={() => {
            actionsSwal(
              {
                ...actionsSwalDefaultValues,
                title: translate('you_are_going_to_kick_your_teammate', 'teams'),
                text: translate('your_teammate_will_be_kicked_off_the_team', 'teams'),
                confirmButtonText: translate('yes_continue', 'teams'),
                cancelButtonText: translate('cancel', 'teams')
              },
              {
                actionConfirm: () => {
                  emitLeaveTeam({ id: switchRoles.team.id, member: { id: switchRoles.member.id } })
                },
                /* tslint:disable:no-empty-function */
                cancelActionConfirm: () => {}
              }
            )
          }}
        />
      </div>
    )

  return <span />
}
