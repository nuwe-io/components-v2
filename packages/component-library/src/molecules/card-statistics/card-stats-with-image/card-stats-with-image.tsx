// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import { Chip } from '../../../atoms'

// ** Styled component for the image
const Img = styled('img')({
  right: 7,
  bottom: 0,
  height: 177,
  position: 'absolute'
})

interface CardStatsCharacterProps {
  data: {
    title: string
    chipColor:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | undefined
    chipText: string
    src: string
    stats: string
    trend: string
    trendNumber: string
  }
}

const CardStatsCharacter = ({ data }: CardStatsCharacterProps) => {
  // ** Vars
  const { title, chipColor, chipText, src, stats, trend, trendNumber } = data

  return (
    <Card sx={{ overflow: 'visible', position: 'relative' }}>
      <CardContent>
        <Typography sx={{ mb: 6.5, fontWeight: 600 }}>{title}</Typography>
        <Box
          sx={{
            mb: 1.5,
            rowGap: 1,
            width: '55%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
          }}
        >
          <Typography variant='h5' sx={{ mr: 1.5 }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            variant='caption'
            sx={{ color: trend === 'negative' ? 'error.main' : 'success.main' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Chip
          size='small'
          skin='light'
          label={chipText}
          color={chipColor}
          sx={{
            height: 20,
            fontWeight: 500,
            fontSize: '0.75rem',
            '& .MuiChip-label': { lineHeight: '1.25rem' }
          }}
        />
        <Img src={src} alt={title} />
      </CardContent>
    </Card>
  )
}

export default CardStatsCharacter

CardStatsCharacter.defaultProps = {
  trend: 'positive',
  chipColor: 'primary'
}
