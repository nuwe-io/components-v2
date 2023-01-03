/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

import { actionsSwal, actionsSwalDefaultValues } from '@nuwe/lib'

interface SwitchRolesColumnProps {
  data: any
  actions: any
  displayedTexts: {
    switchRolesLabel: string
    youAreGoingToSwitchRolesWithYourTeammate: string
    yourTeammateWillBecomeTeamLeader: string
    yesContinue: string
    cancel: string
  }
}

export const SwitchRolesColumn = ({ data, actions, displayedTexts }: SwitchRolesColumnProps) => {
  const { switchRoles } = data
  const { emitAsignTeamLeader, setSwitchRoles } = actions

  if (switchRoles.isEnabled && switchRoles.currentUser.id !== switchRoles.member.id)
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={displayedTexts.switchRolesLabel}
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
                title: displayedTexts.youAreGoingToSwitchRolesWithYourTeammate,
                text: displayedTexts.yourTeammateWillBecomeTeamLeader,
                confirmButtonText: displayedTexts.yesContinue,
                cancelButtonText: displayedTexts.cancel
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
