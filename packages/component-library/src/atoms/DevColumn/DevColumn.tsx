import { Avatar, Typography, useTheme } from '@mui/material'
import { useStyles } from './style'

interface DevColumnProps {
  username: string
  image: string
  onlyAvatar?: boolean
}

export const DevColumn = ({ username, image, onlyAvatar }: DevColumnProps) => {
  const theme = useTheme()

  const classes = useStyles({ onlyAvatar, theme })

  return (
    <div
      className={classes.container}
      onClick={() => window.open(`https://nuwe.io/dev/profile/${username}`, '_blank')}
      role='presentation'
    >
      <Avatar src={image} className={classes.avatar}>
        {username.charAt(0)}
      </Avatar>
      {onlyAvatar ? null : <Typography variant='body1'>{username}</Typography>}
    </div>
  )
}
