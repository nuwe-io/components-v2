import { Sections } from './components'

import { HideContent } from '../../atoms'

interface DummyFunnelChartProps {
  data: any
  maxValue: number
  csize: number
  chartHeight: number
  width: number
  canvasRef: any
  hideSections: boolean
}

export const DummyFunnelChart = ({
  data,
  maxValue,
  csize,
  chartHeight,
  width,
  canvasRef,
  hideSections
}: DummyFunnelChartProps) => {
  return (
    <div style={{ maxHeight: chartHeight / 2 + 50, overflow: 'hidden', width: width + 4 }}>
      <div
        style={{
          marginLeft: 2,
          marginTop: -(chartHeight / 2),
          display: 'flex',
          flexDirection: 'column',
          width: width,
          height: chartHeight * 2,
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div style={{ width, position: 'absolute', top: chartHeight / 2 }}>
          <div style={{ height: chartHeight, backgroundColor: 'transparent', display: 'flex' }}>
            <HideContent hide={hideSections}>
              <Sections
                data={data}
                chartHeight={chartHeight}
                maxValue={maxValue}
                csize={csize}
                width={width}
              />
            </HideContent>
          </div>
        </div>
        <div style={{ width: width, height: chartHeight }}>
          <canvas ref={canvasRef} width={width} height={chartHeight} />
        </div>
      </div>
    </div>
  )
}
