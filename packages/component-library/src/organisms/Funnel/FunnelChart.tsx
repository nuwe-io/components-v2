import { useTheme } from '@mui/material'
import { useEffect, useRef } from 'react'

import { DummyFunnelChart } from './FunnelChart.container'

interface FunnelChart {
  width: number
  height: number
  data: any
  theme: string
  hideSections: boolean
}

export const FunnelChart = ({ width, height, data, theme, hideSections }: FunnelChart) => {
  // Canvas DOM element reference
  const canvasRef = useRef(null)
  const thememui = useTheme()

  const sortedData = data.sort((a: any, b: any) => {
    if (a.value > b.value) {
      return -1
    }
    if (a.value < b.value) {
      return 1
    }

    return 0
  })

  // The last element of the data array must be cloned
  const chartData = [...sortedData, sortedData[sortedData.length - 1]]

  // The chart height must be height * 2
  const chartHeight = height * 2

  const chartColors = [
    '#4e9f0a',
    thememui.palette.primary.main,
    '#68d40e',
    '#84f02a',
    thememui.palette.primary.light,
    '#c1f794'
  ]

  /*  Array.prototype.max = function () {
    return Math.max.apply(null, this)
  }

  Array.prototype.min = function () {
    return Math.min.apply(null, this)
  }*/

  const max = data.map((current: any) => current.value).max()

  const csize = max / chartHeight

  useEffect(() => {
    const canvas = canvasRef.current as any

    const context = canvas.getContext('2d')

    let x = 0

    for (let i = 0; i < chartData.length - 1; i++) {
      context.beginPath()
      context.fillStyle = i < 5 ? chartColors[i] : chartColors[i - 1]
      context.moveTo(x, (max - chartData[i].value) / 2 / csize)
      context.lineTo(
        x + canvas.width / (chartData.length - 1),
        (max - chartData[i + 1].value) / 2 / csize
      )
      context.lineTo(x + canvas.width / (chartData.length - 1), chartHeight - max / 2 / csize)
      context.lineTo(x, chartHeight - max / 2 / csize)
      context.closePath()
      context.fill()

      context.font = '12px Montserrat'
      context.fillStyle = theme === 'dark' ? 'white' : 'black'
      context.fillText(chartData[i].text.toUpperCase(), x + 3, chartHeight - max / 2 / csize + 15)

      context.font = 'bold 20px Montserrat'
      context.fillStyle = theme === 'dark' ? 'white' : 'black'
      context.fillText(chartData[i].value, x + 3, chartHeight - max / 2 / csize + 38)

      x = x + canvas.width / (chartData.length - 1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DummyFunnelChart
      data={data}
      maxValue={max}
      csize={csize}
      chartHeight={chartHeight}
      width={width}
      canvasRef={canvasRef}
      hideSections={hideSections}
    />
  )
}

FunnelChart.defaultProps = {
  data: [],
  height: 300,
  width: 800,
  theme: 'dark',
  hideSections: false
}
