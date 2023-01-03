import { CircularChart } from './CircularChart'

interface TripleCircularChartProps {
  bottom: { color: string; value: number }
  primary: { color: string; value: number }
  secondary: { color: string; value: number }
  tertiary: { color: string; value: number }
  size: number
  thickness: number
}

export const TripleCircularChart = ({
  bottom,
  primary,
  secondary,
  tertiary,
  thickness,
  size
}: TripleCircularChartProps) => {
  return (
    <CircularChart
      defaultChildren={true}
      size={size}
      thickness={thickness}
      top={primary}
      bottom={bottom}
    >
      <CircularChart
        defaultChildren={true}
        top={secondary}
        bottom={bottom}
        size={size - size / 5}
        thickness={thickness}
      >
        <CircularChart
          defaultChildren={true}
          top={tertiary}
          bottom={bottom}
          size={size - size / 2.5}
          thickness={thickness + 1}
        />
      </CircularChart>
    </CircularChart>
  )
}

TripleCircularChart.defaultProps = {
  size: 150,
  thickness: 2
}
