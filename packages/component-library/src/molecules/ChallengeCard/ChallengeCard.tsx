// ** React Imports
// import { useState } from 'react'

// ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'
// import Collapse from '@mui/material/Collapse'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'

// ** Icons Imports
// import ChevronUp from 'mdi-material-ui/ChevronUp'
// import ChevronDown from 'mdi-material-ui/ChevronDown'

import { Card, CardActionArea, CardContent, CardMedia, Tooltip, Typography } from '@mui/material'

import { Chip } from '../../atoms'

interface ChallengeCardProps {
  title: string
  subcategory: string
  description: string
  onClick: () => void
  image: string
  level: string[]
  type: string
}

export const ChallengeCard = ({
  title,
  subcategory,
  description,
  onClick,
  image,
  level,
  type
}: ChallengeCardProps) => {
  // ** State
  // const [collapse, setCollapse] = useState(false)

  // const handleClick = () => {
  //   setCollapse(!collapse)
  // }

  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia sx={{ height: '8rem' }} image={image} />
        <CardContent sx={{ minHeight: '160px' }}>
          <Typography gutterBottom variant='body1' sx={{ mb: 2 }}>
            {title}
          </Typography>
          {level?.map((item, index) => (
            <Chip
              key={index}
              skin='light'
              size='small'
              label={item}
              color='primary'
              sx={{ mr: 2, mt: 2, textTransform: 'capitalize' }}
            />
          ))}
          <Chip
            skin='light'
            size='small'
            label={type}
            color='secondary'
            sx={{ mr: 2, mt: 2, textTransform: 'capitalize' }}
          />
          <Chip
            skin='light'
            size='small'
            label={subcategory}
            variant='outlined'
            color='secondary'
            sx={{ mr: 2, mt: 2, textTransform: 'capitalize' }}
          />
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Tooltip title={description?.length > 45 ? description : ''} arrow>
          <Typography
            sx={{
              width: '300px',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }}
            variant='body2'
          >
            {description}
          </Typography>
        </Tooltip>
      </CardContent>
      {/* <CardActions className="card-action-dense">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button onClick={handleClick}>Details</Button>
          <IconButton size="small" onClick={handleClick}>
            {collapse ? <ChevronUp sx={{ fontSize: '1.875rem' }} /> : <ChevronDown sx={{ fontSize: '1.875rem' }} />}
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={collapse}>
        <Divider sx={{ m: 0 }} />
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  )
}
