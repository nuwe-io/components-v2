import { Skeleton } from '@mui/material'
import CardTopUsers from '@nuwe/materio'

interface TopRankingProps {
  data: any[]
}

export const TopRanking = ({ data }: TopRankingProps) => {
  if (!data)
    return (
      <Skeleton variant='rectangular' style={{ borderRadius: '5px' }} width={'100%'} height={300} />
    )

  return <CardTopUsers users={data} />
}
