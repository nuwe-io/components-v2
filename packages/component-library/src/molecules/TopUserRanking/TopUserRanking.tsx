import { Card, Skeleton, Typography } from '@mui/material'

import { AvatarIconButton } from '../AvatarButtonIcon'

const palette = [
  '76c893',
  'FFAC81',
  'FF928B',
  'efc3e6',
  'FEC3A6',
  'EFE9AE',
  'CDEAC0',
  'd9ed92',
  'f08080',
  '95d5b2'
]

interface TopUserRankingProps {
  usersList: any
}

export const TopUserRanking = ({ usersList }: TopUserRankingProps) => {
  if (!usersList) return <Skeleton variant='rectangular' width='100%' height='100%' />

  return (
    <Card sx={{ padding: 2, width: '100%' }}>
      <Typography variant='body1' fontWeight={800}>
        Users top ranking
      </Typography>
      <Typography gutterBottom variant='body2' fontWeight={500}>
        {"This is nuwe's top community ranking professionals"}
      </Typography>
      {usersList?.map((user: any, index: number) => (
        <div key={user?.username}>
          <div
            style={{
              display: 'flex',
              padding: '10px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AvatarIconButton
                width='40px'
                disabled
                src={user?.image}
                label={user?.username}
                color={`#${palette[index]}`}
              />
              <div>
                <Typography variant='body1'>{user?.username}</Typography>
                <Typography variant='caption'>{user?.category}</Typography>
              </div>
            </div>
            <div style={{ textAlign: 'end' }}>
              <Typography fontWeight='600' variant='body1'>
                {user?.rank}
              </Typography>
              <Typography variant='caption'>{'points'}</Typography>
            </div>
          </div>
        </div>
      ))}
    </Card>
  )
}
