import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Figma = ({ url }: any) => {
  if (url)
    return (
      <iframe
        width='100%'
        height='100%'
        src={url}
        allowFullScreen={true}
        frameBorder='0'
        key={url}
        title={url}
      />
    )
  return null
}

interface FigmaCardProps {
  figmaURL: string
  width: any
  height: any
}

const FigmaCard = ({ figmaURL, width, height }: FigmaCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        marginTop: '30px'
      }}
    >
      <CardContent
        sx={{
          padding: '0px !important',
          display: 'flex',
          justifyContent: 'center',
          width,
          height,
          overflow: 'hidden'
        }}
      >
        <Figma url={figmaURL} />
      </CardContent>
    </Card>
  )
}

export default FigmaCard

FigmaCard.defaultProps = {
  figmaURL: '',
  width: '100%',
  height: '100%',
  hidden: false
}
