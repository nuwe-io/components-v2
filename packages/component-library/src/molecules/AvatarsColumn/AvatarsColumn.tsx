import { Avatar, Container, Link, Tooltip } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup'
import { useRouter } from 'next/router'
import useStyles from './style'

interface AvatarsColumnProps {
  members: {
    image: string
    username: string
  }[]
}

export const AvatarsColumn = ({ members }: AvatarsColumnProps) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Container className={classes.rankingAvatarContainerTeam}>
      <Tooltip
        classes={{
          tooltip: classes.tooltipBackground,
          arrow: classes.tooltipArrow
        }}
        title={members?.map((member, index) => (
          <div key={index} className={classes.map}>
            <div key={index} className={classes.info}>
              <Avatar
                src={member.image}
                className={`${classes.avatar} ${classes.primary}`}
                style={{ marginRight: 8 }}
              >
                {member?.username.charAt(0)}
              </Avatar>
              <Link
                href={`/profile/${member?.username}`}
                underline='none'
                onClick={(e) => {
                  e.preventDefault()
                  router.push(`/profile/${member?.username}`)
                }}
                className={classes.tooltipLink}
              >
                {member.username}
              </Link>
            </div>
          </div>
        ))}
        arrow
        //interactive
      >
        <AvatarGroup max={3} className={classes.group}>
          <Avatar
            src={members[0].image}
            className={`${classes.avatar} ${classes.primary}`}
            style={{
              border: 0
            }}
          >
            {members[0]?.username.charAt(0)}
          </Avatar>
          {members?.length > 1 && (
            <Avatar
              className={`${classes.avatar} ${classes.secondary}`}
              style={{
                border: 0
              }}
            >{`+${members?.length - 1}`}</Avatar>
          )}
        </AvatarGroup>
      </Tooltip>
    </Container>
  )
}
