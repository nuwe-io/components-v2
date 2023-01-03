import { InlineWidget } from 'react-calendly'

interface DummyCalendlyProps {
  url: string
  settings: any
  data: any
}

export const DummyCalendly = ({ url, settings, data }: DummyCalendlyProps) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '20px',
        overflow: 'hidden'
      }}
    >
      <InlineWidget
        url={url}
        pageSettings={settings}
        prefill={data}
        styles={{ height: 700, width: 1000 }}
      />
    </div>
  )
}
