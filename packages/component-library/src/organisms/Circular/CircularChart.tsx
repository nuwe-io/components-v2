import { Box, CircularProgress, Hidden, Typography, useTheme } from '@mui/material'
import { PropTypes } from 'prop-types'

import { Concentric } from 'components/atoms'

import { useStyles } from './style'

export const CircularChart = (props) => {
  const materialTheme = useTheme()

  const {
    top,
    bottom,
    size,
    thickness,
    marginTop,
    hideSubTotals,
    isRank,
    total,
    variant,
    defaultChildren
  } = props

  const classes = useStyles({ bottomColor: materialTheme.palette.divider, topColor: top.color })

  return (
    <Box position='relative' display='inline-flex'>
      <Box position='relative' display='inline-flex'>
        <CircularProgress
          variant='determinate'
          size={size}
          thickness={thickness}
          sx={{
            color: 'transparent'
          }}
          value={bottom?.value}
        />
        <Concentric>
          <CircularProgress
            variant='determinate'
            sx={{
              position: 'absolute',
              color: top.color,
              left: 0
            }}
            classes={{
              circle: classes.circle
            }}
            size={size}
            thickness={thickness}
            value={(top.value / total) * 100}
          />
        </Concentric>
        <Concentric marginTop={marginTop}>
          <Hidden xlDown={defaultChildren} xlUp={defaultChildren}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start'
              }}
            >
              <Typography color={isRank === true ? 'primary' : 'secondary'} variant={variant}>
                {top.value}
              </Typography>
              <Typography color={isRank === true ? 'primary' : 'secondary'} variant='caption'>
                {hideSubTotals === true ? '%' : `/${total}`}
              </Typography>
            </div>
          </Hidden>

          {props.children}
        </Concentric>
      </Box>
    </Box>
  )
}

CircularChart.propTypes = {
  total: PropTypes.number,
  top: { color: PropTypes.string, value: PropTypes.number },
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline'
  ]),
  hideSubTotals: PropTypes.bool,
  bottom: { color: PropTypes.string, value: PropTypes.number },
  size: PropTypes.number,
  children: PropTypes.node,
  isRank: PropTypes.bool,
  thickness: PropTypes.number,
  marginTop: PropTypes.number,
  defaultChildren: PropTypes.bool
}

CircularChart.defaultProps = {
  total: 100,
  top: { color: '#5ebf0d', value: 10 },
  bottom: { color: '#404560', value: 100 },
  hideSubTotals: false,
  isRank: true,
  score: 33,
  size: 100,
  thickness: 2,
  variant: 'h4',
  marginTop: 0,
  defaultChildren: false
}
