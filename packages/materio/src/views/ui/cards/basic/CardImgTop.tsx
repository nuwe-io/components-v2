// ** MUI Imports
import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

interface CardImgTopProps {
  img: string
  clickeable?: boolean
  action?: () => void
  displayedTexts: {
    title: string
    text: string
  }
}

const CardImgTop = ({ img, clickeable, action, displayedTexts }: CardImgTopProps) => {
  return (
    <Card>
      <CardActionArea disabled={!clickeable} onClick={action}>
        <CardMedia sx={{ height: '14.5625rem' }} image={img} />
        <CardContent>
          <Typography variant='h6' sx={{ mb: 2 }}>
            {displayedTexts.title}
          </Typography>
          <Typography variant='body2'>{displayedTexts.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardImgTop

CardImgTop.defaultProps = {
  title: 'none',
  text: 'none',
  img: 'https://wallpaperbat.com/img/562551-abstract-pc-wallpaper.jpg',
  clickeable: false,
  action: null
}
