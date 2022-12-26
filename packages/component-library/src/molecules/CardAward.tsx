// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { BadgeRank } from 'src/shared/components/molecules/BadgeRanks/BadgeRank'
import { Translations } from 'src/shared/utils/translation/Translations'

// Styled component for the trophy image
const RankSVG = styled('div')({
  right: 55,
  bottom: -10,
  width: '5.188rem',
  position: 'absolute',
  '@media (max-width: 360px)': {
    right: 15,
    bottom: -40
  }
})

interface CardAwardProps {
  username: string
  score: number
  action: () => void
  rank: string
}

export const CardAward = ({
  username = 'none',
  score = 0,
  action = () => console.log('need action'),
  rank = 'explorer'
}: CardAwardProps) => {
  const theme = useTheme()
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>
          <Translations ns='dashboard' text='card_award_title' /> {username} 👋
        </Typography>
        <Typography variant='body2'>
          <Translations ns='dashboard' text='card_award_points' />
        </Typography>
        <Typography variant='h5' sx={{ mt: 3.5, color: 'primary.main' }}>
          {score}
        </Typography>
        <Typography variant='body2' sx={{ mb: 4.25 }}>
          <Translations ns='dashboard' text='card_award_growing' /> 🚀
        </Typography>
        <Button onClick={action} size='small' variant='contained'>
          <Translations ns='dashboard' text='card_award_button' />
        </Button>
        <RankSVG>
          <BadgeRank
            size='md'
            shadow={theme.palette.mode !== 'dark' ? false : true}
            animation={true}
            stars={'none'}
            level={-1}
            rank={rank}
            lights={theme.palette.mode !== 'dark' ? false : true}
            locked={false}
          />
        </RankSVG>
      </CardContent>
    </Card>
  )
}
