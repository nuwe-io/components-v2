/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

import { Translations, useTranslations } from '@nuwe/lib'
import { actionsSwal, actionsSwalDefaultValues } from '@shared/utils/swal/swal'

interface SwitchRolesColumnProps {
  data: any
  actions: any
}

export const SwitchRolesColumn = ({ data, actions }: SwitchRolesColumnProps) => {
  const { switchRoles } = data
  const { emitAsignTeamLeader, setSwitchRoles } = actions

  const { translate } = useTranslations()

  if (switchRoles.isEnabled && switchRoles.currentUser.id !== switchRoles.member.id)
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={<Translations ns='teams' text='switch_roles_label' />}
          color='secondary'
          size='small'
          style={{
            marginLeft: 10,
            width: 110,
            cursor: 'pointer',
            borderRadius: 4
          }}
          onClick={() => {
            actionsSwal(
              {
                ...actionsSwalDefaultValues,
                title: translate('you_are_going_to_switch_roles_with_your_teammate', 'teams'),
                text: translate('your_teammate_will_become_team_leader', 'teams'),
                confirmButtonText: translate('yes_continue', 'teams'),
                cancelButtonText: translate('cancel', 'teams')
              },
              {
                actionConfirm: () => {
                  emitAsignTeamLeader({
                    team: {
                      id: switchRoles.team.id,
                      leader: {
                        current: {
                          id: switchRoles.currentUser.id
                        },
                        new: {
                          id: switchRoles.member.id
                        }
                      }
                    }
                  })
                  setSwitchRoles({
                    old: { id: switchRoles.currentUser.id },
                    new: { id: switchRoles.member.id },
                    switchIsEnabled: false
                  })
                },
                cancelActionConfirm: () => {}
              }
            )
          }}
        />
      </div>
    )

  return <span />
}
