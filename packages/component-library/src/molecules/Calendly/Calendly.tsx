import { DummyCalendly } from './Calendly.container'

interface CalendlyProps {
  url: string
  name: string
  email: string
  hideLandingPageDetails?: boolean
  hideEventTypeDetails?: boolean
}

export const Calendly = ({
  url = '',
  name = '',
  email = '',
  hideLandingPageDetails,
  hideEventTypeDetails
}: CalendlyProps) => {
  const data = {
    name,
    email
  }

  const settings = {
    primaryColor: '417658',
    textColor: 'FFFFFF',
    backgroundColor: '14151F',
    hideLandingPageDetails,
    hideEventTypeDetails
  }

  return <DummyCalendly url={url} data={data} settings={settings} />
}
