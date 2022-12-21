import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const fallbackLng = 'en'

i18n

  // Enables the i18next backend
  .use(Backend)

  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    backend: {
      /* translation file path */
      loadPath: '/business/locales/{{lng}}/{{ns}}.json'
    },
    fallbackLng,
    debug: false,
    ns: ['common', 'event', 'events', 'login', 'position', 'positions', 'report', 'account'],
    keySeparator: false,
    load: 'all',
    react: {
      useSuspense: true
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

export default i18n
