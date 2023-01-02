import { Skeleton } from '@mui/material'
import { CardTopUsers } from '../CardTopUsers'

interface TopRankingProps {
  data: any[]
  displayedTexts: {
    topRanking: string
    position: string
  }
}

export const TopRanking = ({ data, displayedTexts }: TopRankingProps) => {
  if (!data)
    return (
      <Skeleton variant='rectangular' style={{ borderRadius: '5px' }} width={'100%'} height={300} />
    )

  return <CardTopUsers users={data} displayedTexts={displayedTexts} />
}
