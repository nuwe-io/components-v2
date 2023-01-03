// ** MUI Imports
import { CardActionArea } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface EventCardProps {
  sponsors?: any[]
  isOutlined?: boolean
  imageURL?: string
  title?: string
  type?: string
  startTime: string
  onCardClick?: () => void
}

export const EventCard = ({
  sponsors,
  isOutlined,
  imageURL,
  title,
  type,
  startTime,
  onCardClick
}: EventCardProps) => {
  return (
    <CardActionArea onClick={onCardClick} sx={{ height: 376, borderRadius: '5px' }}>
      <Card variant={isOutlined ? 'outlined' : 'elevation'} sx={{ minHeight: '100%' }}>
        <CardMedia
          sx={{ height: '8.5rem' }}
          image={imageURL || '/images/cards/background-user.png'}
        />
        <CardContent
          sx={{
            minHeight: 238,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              mt: 5.75,
              mb: 8.75,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ mr: 2, mb: 3, display: 'flex', flexDirection: 'column', minHeight: '50px' }}>
              <Typography variant='h6'>{title}</Typography>
              <Typography variant='caption'>{type}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              gap: 2,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 44
            }}
          >
            <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
              {new Date(startTime).toLocaleDateString()}
            </Typography>
            <AvatarGroup max={5}>
              {sponsors?.map((sponsor) => (
                <Avatar key={sponsor.id} alt={sponsor.name} src={sponsor.logo} />
              ))}
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
