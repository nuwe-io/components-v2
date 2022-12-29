import { useTranslation } from 'react-i18next'

interface TranslationsProps {
  text: string
  ns: string
  lowerCase?: boolean
  scope?: string[] | string | undefined
}

export const Translations = ({ text, ns, lowerCase, scope }: TranslationsProps) => {
  const { t } = useTranslation(scope)
  const value = t(text, { ns })
  return <>{lowerCase ? value.toLowerCase() : value}</>
}

export const TranslationsDevs = ({
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
}: TranslationsProps) => {
  return <Translations text={text} ns={ns} lowerCase={lowerCase} scope={scope} />
}

export const TranslationsBusiness = ({
  text = '',
  ns = 'common',
  lowerCase = false,
  scope = ['common', 'event', 'events', 'login', 'position', 'positions', 'report', 'account']
}: TranslationsProps) => {
  return <Translations text={text} ns={ns} lowerCase={lowerCase} scope={scope} />
}

export const TranslationsBackoffice = ({
  text = '',
  ns = 'common',
  lowerCase = false,
  scope = ['common', 'event', 'events', 'login', 'position', 'positions', 'report', 'account']
}: TranslationsProps) => {
  return <Translations text={text} ns={ns} lowerCase={lowerCase} scope={scope} />
}

export const useTranslations = (scope: string[] | string | undefined = ['common']) => {
  const { t } = useTranslation(scope)
  return { translate: (text: string, ns: string) => t(text, { ns }) }
}

export const useTranslationsDevs = () => {
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
  return useTranslations(scope)
}

export const useTranslationsBusiness = () => {
  const scope = ['common', 'event', 'events', 'login', 'position', 'positions', 'report', 'account']
  return useTranslations(scope)
}

export const useTranslationsBackoffice = () => {
  const scope = ['common', 'event', 'events', 'login', 'position', 'positions', 'report', 'account']
  return useTranslations(scope)
}
