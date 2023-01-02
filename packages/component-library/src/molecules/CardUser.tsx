// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useId from '@mui/material/utils/useId'

import { Countdown } from './Countdown'

interface CardUserProps {
  actionText?: string
  avatar?: string
  background?: string
  callAction?: () => void
  event?: any
  friends?: any[]
  friendsLabel?: string
  isEvent?: boolean
  maxFriends?: number
  name?: string
  text?: string
  ns?: string
  displayedTexts: {
    daysLabel: string
    hoursLabel: string
    minutesLabel: string
    title: string
    timeoutLabel: string
  }
}

//* This component should in another repo
export const CardUser = ({
  actionText,
  avatar,
  background,
  callAction,
  event,
  friends = [],
  friendsLabel,
  isEvent,
  maxFriends = 0,
  name,
  text,
  displayedTexts
}: CardUserProps) => {
  const id = useId()
  const eventIsFinished = isEvent ? new Date(event?.endTime) < new Date() : false

  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image={background} />
      {!isEvent && (
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            width: 75,
            height: 75,
            left: '1.313rem',
            top: '10.28125rem',
            position: 'absolute',
            border: (theme) => `0.25rem solid ${theme.palette.common.white}`
          }}
        />
      )}
      <Box
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: (theme) => `0.25rem solid ${theme.palette.background.paper}`,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: (theme) => theme.palette.background.default
        }}
      >
        <div style={{ marginLeft: 10, marginTop: 5 }}>
          <svg
            width={35}
            height={35}
            version='1.1'
            viewBox='0 0 45 45'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22.615 35.6708V8.68264L16.9883 5.43406V33.8741L14.1028 35.5416V3.76812L8.98107 0.811087C4.98948 -1.49345 0 1.38723 0 5.99632V38.3571C0 41.646 2.54063 44.0549 5.44636 44.3276V9.04772C5.44636 7.65331 6.57675 6.52295 7.97115 6.52295H8.47611V43.8042C8.64585 43.7258 8.81436 43.6385 8.98107 43.5423L22.615 35.6708ZM25.5005 34.0048L37.0063 27.362C40.9979 25.0574 40.9979 19.296 37.0063 16.9915L34.0126 15.2631V24.0813L31.1272 25.7475V13.5971L25.5005 10.3486V34.0048Z'
              fill='#5EBF0D'
            />
          </svg>
        </div>
      </Box>
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            flexFlow: 'column'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>{name}</Typography>
            <Typography variant='caption'>{text}</Typography>
          </Box>
          <Button
            onClick={callAction}
            style={{ width: '150px', margin: '15px 0px' }}
            variant='contained'
          >
            {actionText}
          </Button>
        </Box>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
            {isEvent && (
              <Countdown
                date={countDownDate({ eventIsFinished, event })}
                title={countDownTitle({ eventIsFinished, event })}
                isEvent
                displayedTexts={displayedTexts}
              />
            )}
            {!isEvent && friendsLabel}
          </Typography>
          {maxFriends > 0 && (
            <AvatarGroup max={5}>
              {friends.map((friend) => (
                <Tooltip key={id} title={friend.name} arrow>
                  <Avatar src={friend.logo} alt={friend.name} />
                </Tooltip>
              ))}
            </AvatarGroup>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

const countDownTitle = ({ eventIsFinished, event }: countDownDateProps) => {
  if (eventIsFinished) return 'finished_on_label'
  if (new Date(event.startTime) > new Date()) return 'starts_at_label'
  return 'ends_in_label'
}

interface countDownDateProps {
  eventIsFinished: boolean
  event: any
}

const countDownDate = ({ eventIsFinished, event }: countDownDateProps) => {
  if ((eventIsFinished && !event?.active) || (!eventIsFinished && event?.active))
    return event?.endTime
  return event?.startTime
}
