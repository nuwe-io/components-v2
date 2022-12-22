const BASEURL = 'https://countriesnow.space/api/v0.1/countries'
const CODE_SLUG = '/codes'

type Country = {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}

type CountryCodes = {
  name: string
  code: string
  dial_code: string
}

const CountriesAPI = () => {
  const fetchCountries = async () =>
    fetch(BASEURL, { method: 'GET', redirect: 'follow' })
      .then((resp) => resp.json())
      .then((data) =>
        data?.data.map((country: Country) => {
          return { name: country.country, cities: country.cities }
        })
      )

  const fetchCodes = async () =>
    fetch(BASEURL + CODE_SLUG, { method: 'GET', redirect: 'follow' })
      .then((resp) => resp.json())
      .then((data) => data?.data.map((country: CountryCodes) => country.dial_code))

  return {
    fetchCountries,
    fetchCodes
  }
}

export default CountriesAPI
