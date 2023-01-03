import { useStyles } from './style'

interface SectionsProps {
  data: any
  chartHeight: number
  maxValue: number
  csize: number
  width: number
}

export const Sections = ({ data, chartHeight, maxValue, csize, width }: SectionsProps) => {
  const { section } = useStyles()

  return data.map((current: any) => (
    <div
      style={{
        height: chartHeight - maxValue / 2 / csize + 42,
        minWidth: width / data.length
      }}
      className={section}
      onClick={() => current.action()}
      key={current.text}
      role='presentation'
    />
  ))
}
