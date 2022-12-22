// ** MUI Imports
import { Box, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import useId from '@mui/material/utils/useId'
import { useTheme } from '@mui/styles'

const defaultProps = {
  challenge: {
    type: 'Individual',
    level: ['Junior'],
    sponsors: [],
    title: 'The Googler',
    legend: "Femhack's front-end individual challenge",
    imageURL: 'https://challenges-asset-files.s3.us-east-2.amazonaws.com/Femhack/googlegirl.png',
    challengeURL: 'the-googler',
    category: 'Frontend',
    startTime: '2022-01-22T10:00:00.000Z',
    endTime: '2022-01-23T06:00:00.000Z'
  },
  url: 'https://nuwe.io',
  bigCard: false,
  isSmall: false,
  showCategory: true
}

interface CardChallengeProps {
  url: string
  challenge: any
  bigCard?: boolean
  isSmall?: boolean
  showCategory?: boolean
}

const onClickCardAction = (url: string) => () => {
  window.open(url, '_blank')
}

export const CardChallenge = ({
  url = defaultProps.url,
  challenge = defaultProps.challenge,
  bigCard = defaultProps.bigCard,
  isSmall = defaultProps.isSmall,
  showCategory = defaultProps.showCategory
}: CardChallengeProps) => {
  return (
    <CardActionArea onClick={onClickCardAction(url)}>
      <Card
        sx={{
          height: '362px'
        }}
      >
        <CardMedia
          component='img'
          sx={{ height: 170, objectFit: 'fill' }}
          image={challenge.imageURL}
        />
        <CardContent>
          <Typography variant='h6' sx={{ mb: 2 }}>
            {challenge.title}
          </Typography>
          <Box sx={{ margin: '1rem 0rem' }}>
            <Chips
              levels={challenge.level}
              category={challenge.category}
              showCategory={showCategory}
            />
          </Box>
          <Typography variant='body2' gutterBottom>
            {challenge.legend.length > (bigCard ? (isSmall ? 50 : 120) : 85)
              ? `${challenge.legend.substring(0, bigCard ? (isSmall ? 50 : 120) : 85)}...`
              : challenge.legend}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}

interface chipsProps {
  levels: string[]
  category: string
  showCategory: boolean
}

const Chips = ({ levels, category, showCategory }: chipsProps) => {
  const theme = useTheme()
  const id = useId()

  return (
    <Box style={{ display: 'flex' }}>
      {levels?.map((level, i) => (
        <Box
          key={`${id}-${i}`}
          style={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '20px',
            marginRight: 7
          }}
        >
          <Typography
            color='primary'
            variant='body2'
            align='center'
            style={{ padding: '.1rem .5rem' }}
          >
            {level}
          </Typography>
        </Box>
      ))}
      {showCategory && (
        <Box
          style={{
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: '20px'
          }}
        >
          <Typography
            color='secondary'
            variant='body2'
            align='center'
            style={{ padding: '.1rem .5rem' }}
          >
            {category}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
