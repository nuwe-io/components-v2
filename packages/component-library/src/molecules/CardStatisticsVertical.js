import Grid from '@mui/material/Grid'
import { PropTypes } from 'prop-types'

/**
 * ! Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from 'mdi-material-ui'"
 * */

import CardStatisticsVertical from 'src/shared/materio/@core/components/card-statistics/card-stats-vertical'

const CardStatsVertical = ({ data, minMaxWidth = '240px, 1fr', ns }) => {
  if (data) {
    return (
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minMaxWidth}))`,
          gap: '2rem'
        }}
      >
        {data.map((item, index) => {
          return <CardStatisticsVertical ns={ns} key={index} {...item} icon={item.icon} />
        })}
      </Grid>
    )
  } else {
    return null
  }
}

CardStatsVertical.propTypes = {
  data: PropTypes.array,
  minMaxWidth: PropTypes.string,
  ns: PropTypes.string
}

export default CardStatsVertical
