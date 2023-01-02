// ** MUI Imports
import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Translations } from 'src/shared/utils/translation/Translations'

interface CardImgTopProps {
  title: string
  text: string
  img: string
  clickeable?: boolean
  action?: () => void
  ns: string
}

const CardImgTop = ({ title, text, img, clickeable, action, ns }: CardImgTopProps) => {
  return (
    <Card>
      <CardActionArea disabled={!clickeable} onClick={action}>
        <CardMedia sx={{ height: '14.5625rem' }} image={img} />
        <CardContent>
          <Typography variant='h6' sx={{ mb: 2 }}>
            <Translations ns={ns} text={title} />
          </Typography>
          <Typography variant='body2'>
            <Translations ns={ns} text={text} />
          </Typography>
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
