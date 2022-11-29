import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import { PropTypes } from 'prop-types'

export const FigmaCard = ({ figmaURL, width, height }) => {
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

const Figma = ({ url }) => {
  if (url)
    return <iframe width='100%' height='100%' src={url} allowFullScreen={true} frameBorder='0' />
  return null
}

FigmaCard.propTypes = {
  figmaURL: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.any,
  hidden: PropTypes.bool
}

FigmaCard.defaultProps = {
  figmaURL: '',
  width: '100%',
  height: '100%',
  hidden: false
}
