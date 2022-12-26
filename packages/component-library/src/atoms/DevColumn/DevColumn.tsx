import { Avatar, Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import useStyles from './style'

interface DevColumnProps {
  username: string
  image: string
}

export const DevColumn = ({ username, image }: DevColumnProps) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Box className={classes.container} onClick={() => router.push(`/profile/${username}`)}>
      <Avatar src={image} className={classes.avatar}>
        {username.charAt(0)}
      </Avatar>
      <Typography variant='body1'>{username}</Typography>
    </Box>
  )
}
