// ** MUI Import
import Grid from '@mui/material/Grid'

/**
 * ! Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from 'mdi-material-ui'"
 * */

// ** Demo Components Imports
import { CardStatsVertical as CardStatisticsVertical } from '../../../../core'

interface CardStatsVerticalProps {
  data: any
  minMaxWidth?: string
  ns?: string
}

const CardStatsVertical = ({ data, minMaxWidth = '240px, 1fr', ns }: CardStatsVerticalProps) => {
  if (data) {
    return (
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minMaxWidth}))`,
          gap: '2rem'
        }}
      >
        {data.map((item: any, index: number) => {
          return <CardStatisticsVertical ns={ns} key={index} {...item} icon={item.icon} />
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsVertical
