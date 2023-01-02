// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { BadgeRank } from '../BadgeRanks'

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
  rank: 'creator' | 'moderator' | 'admin' | 'artisan' | 'master' | 'explorer'
  displayedTexts: {
    cardAwardTitle: string
    cardAwardPoints: string
    cardAwardGrowing: string
    cardAwardButton: string
  }
}

const CardAward = ({ username, score, action, rank, displayedTexts }: CardAwardProps) => {
  const theme = useTheme()
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>
          {displayedTexts.cardAwardTitle} {username} 👋
        </Typography>
        <Typography variant='body2'>{displayedTexts.cardAwardPoints}</Typography>
        <Typography variant='h5' sx={{ mt: 3.5, color: 'primary.main' }}>
          {score}
        </Typography>
        <Typography variant='body2' sx={{ mb: 4.25 }}>
          {displayedTexts.cardAwardGrowing} 🚀
        </Typography>
        <Button onClick={action} size='small' variant='contained'>
          {displayedTexts.cardAwardButton}
        </Button>
        <RankSVG>
          <BadgeRank
            size='md'
            shadow={theme.palette.mode !== 'dark' ? false : true}
            animation={true}
            stars={-1}
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

CardAward.propTypes = {
  username: PropTypes.string,
  score: PropTypes.number,
  action: PropTypes.func
}

CardAward.defaultProps = {
  username: 'none',
  score: 0,
  action: () => console.log('need action'),
  rank: 'explorer'
}

export default CardAward
