// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import { SimpleAvatar } from '../../../atoms'

interface CardStatsVerticalProps {
  title: string
  subtitle: string
  color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | undefined
  icon: any
  stats: string
  trend: string
  trendNumber: string
}

const CardStatsVertical = (props: CardStatsVerticalProps) => {
  // ** Props
  const { title, subtitle, color, icon, stats, trend, trendNumber } = props

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            mb: 5.5,
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <SimpleAvatar color={color} sx={{ boxShadow: 3, mr: 4 }}>
            {icon}
          </SimpleAvatar>
          <IconButton
            size='small'
            aria-label='settings'
            className='card-more-options'
            sx={{ color: 'text.secondary' }}
          >
            <DotsVertical />
          </IconButton>
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{title}</Typography>
        <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', mb: 1.5, alignItems: 'flex-start' }}>
          <Typography variant='h6' sx={{ mr: 2 }}>
            {stats}
          </Typography>
          <Typography
            component='sup'
            variant='caption'
            sx={{ color: trend === 'positive' ? 'success.main' : 'error.main' }}
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant='caption'>{subtitle}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardStatsVertical

CardStatsVertical.defaultProps = {
  color: 'primary',
  trend: 'positive'
}
