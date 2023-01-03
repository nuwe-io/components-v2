import { CircularChart } from './CircularChart'

interface DoubleCircularChartProps {
  bottom: { color: string; value: number }
  primary: { color: string; value: number }
  secondary: { color: string; value: number }
  size: number
  thickness: number
}

export const DoubleCircularChart = ({
  bottom,
  primary,
  secondary,
  thickness,
  size
}: DoubleCircularChartProps) => {
  return (
    <CircularChart defaultChildren size={size} thickness={thickness} top={primary} bottom={bottom}>
      <CircularChart
        defaultChildren
        top={secondary}
        bottom={bottom}
        size={size - size / 3.5}
        thickness={thickness + 1}
      />
    </CircularChart>
  )
}

DoubleCircularChart.defaultProps = {
  bottom: { color: '#404560', value: 100 },
  primary: { color: '#5ebf0d', value: 20 },
  secondary: { color: '#6772e5', value: 10 },
  size: 150,
  thickness: 2
}
