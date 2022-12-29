import Grid from '@mui/material/Grid'
import useId from '@mui/material/utils/useId'

/**
 * ! Icons Imports:
 * ! You need to import all the icons which come from the API or from your server and then add these icons in 'icons' variable.
 * ! If you need all the icons from the library, use "import * as Icon from 'mdi-material-ui'"
 * */

import CardStatisticsVertical from 'src/shared/materio/@core/components/card-statistics/card-stats-vertical'

interface CardStatsVerticalProps {
  data: any
  minMaxWidth?: string
  ns?: string
}

const CardStatsVertical = ({ data, minMaxWidth = '240px, 1fr', ns }: CardStatsVerticalProps) => {
  const id = useId()

  if (data) {
    return (
      <Grid
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(${minMaxWidth}))`,
          gap: '2rem'
        }}
      >
        {data.map((item: any, i: number) => {
          return <CardStatisticsVertical ns={ns} key={`${id}-${i}`} {...item} icon={item.icon} />
        })}
      </Grid>
    )
  } else {
    return null
  }
}

export default CardStatsVertical
