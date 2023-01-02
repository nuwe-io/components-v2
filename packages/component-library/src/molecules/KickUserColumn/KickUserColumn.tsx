/* eslint-disable comma-spacing */
import { Chip } from '@mui/material'

import { actionsSwal, actionsSwalDefaultValues } from '@shared/utils/swal/swal'

interface KickUserColumnProps {
  data: any
  actions: any
  displayedTexts: {
    kickUserLabel: string
    youAreGoingToKickYourTeammate: string
    yourTeammateWill_beKickedOffTheTeam: string
    yesContinue: string
    cancel: string
  }
}

export const KickUserColumn = ({ data, actions, displayedTexts }: KickUserColumnProps) => {
  const { switchRoles } = data
  const { emitLeaveTeam } = actions

  if (switchRoles.isEnabled && switchRoles.currentUser.id !== switchRoles.member.id)
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
        <Chip
          label={displayedTexts.kickUserLabel}
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
                title: displayedTexts.youAreGoingToKickYourTeammate,
                text: displayedTexts.yourTeammateWill_beKickedOffTheTeam,
                confirmButtonText: displayedTexts.yesContinue,
                cancelButtonText: displayedTexts.cancel
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
