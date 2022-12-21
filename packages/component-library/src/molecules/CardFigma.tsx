import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface FigmaCardProps {
  figmaURL: string
  width: number
  height: number
  hidden: boolean
}

export const FigmaCard = ({ figmaURL, width, height }: FigmaCardProps) => {
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

interface FigmaProps {
  url: string
}

const Figma = ({ url }: FigmaProps) => {
  if (url) {
    return (
      <iframe
        title={url}
        width='100%'
        height='100%'
        src={url}
        allowFullScreen={true}
        frameBorder='0'
      />
    )
  }

  return null
}
