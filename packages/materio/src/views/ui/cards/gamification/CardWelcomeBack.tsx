// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 13,
  bottom: 0,
  height: 200,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    height: 165,
    position: 'static'
  }
}))

interface CardWelcomeBackProps {
  title: string
  message1: string
  message2?: string
  width?: any
}

const CardWelcomeBack = ({ title, message1, message2, width }: CardWelcomeBackProps) => {
  return (
    <Card sx={{ position: 'relative', overflow: 'visible', mt: { xs: 0, sm: 14.4, md: 0 }, width }}>
      <CardContent sx={{ p: (theme) => theme.spacing(7.25, 7.5, 7.75, 7.5) }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' sx={{ mb: 6.5 }}>
              {title}
            </Typography>
            <Typography variant='body2'>{message1}</Typography>
            {message2 && <Typography variant='body2'>{message2}</Typography>}
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img alt='Avatar' src={'/dev/images/cards/illustration-john.png'} />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWelcomeBack
