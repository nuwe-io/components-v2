import useSWR from 'swr'

import { technologiesRepository } from './useTechnologies.repository'
import { technologiesServices } from './useTechnologies.services'

export const TechnologiesHook = (BACKEND_URL: string) => {
  const { getAllTechnologies } = technologiesServices(technologiesRepository(BACKEND_URL))

  return {
    useTechnologies: (open: boolean) => {
      const { data, error } = useSWR(open ? 'technologies' : null, getAllTechnologies)
      return {
        technologies: data && data.data.data,
        loading: !data && !error,
        error: data?.error
      }
    }
  }
}
