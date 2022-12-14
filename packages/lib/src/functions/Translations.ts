import { useTranslation } from 'react-i18next'

export const Translations = ({
  text = '',
  ns = 'common',
  lowerCase = false,
  scope = [
    'common',
    'dashboard',
    'events',
    'event',
    'challenges',
    'challenge',
    'profile',
    'login',
    'register',
    'auth',
    'ocean',
    'teams',
    'notifications'
  ]
}) => {
  const { t } = useTranslation(scope)
  const value = t(text, { ns })
  return lowerCase ? value.toLowerCase() : value
}

export const useTranslations = () => {
  const scope = [
    'common',
    'dashboard',
    'events',
    'event',
    'challenges',
    'challenge',
    'profile',
    'login',
    'register',
    'auth',
    'ocean',
    'teams',
    'notifications'
  ]
  const { t } = useTranslation(scope)
  return { translate: (text: string, ns: string) => t(text, { ns }) }
}
