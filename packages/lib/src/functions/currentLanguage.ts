import { isBrowserSide } from './isBrowserSide'

export const currentLanguage = () => {
  const i18nextLng = isBrowserSide() && localStorage.getItem('i18nextLng')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  // const format = i18nextLng && i18nextLng === 'es' ? 'es-MX' : 'en-US'

  return { language: i18nextLng, date: { options, format: i18nextLng } }
}
