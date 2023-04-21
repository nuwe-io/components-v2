import * as countryCodeJSON from './countryCodes.json'

export function getCountryCodeByLongName(longName: string): string | null {
  for (const countryCode in countryCodeJSON) {
    if (countryCodeJSON[countryCode] === longName) {
      return countryCode
    }
  }
  return null
}
