import useSWR from 'swr'
import { technologiesRepository } from './useTechnologies.repository'
import { technologiesServices } from './useTechnologies.services'

const { getAllTechnologies } = technologiesServices(technologiesRepository)

export const useTechnologies = (open: boolean) => {
  const { data, error } = useSWR(open ? 'technologies' : null, getAllTechnologies)
  return {
    technologies: data && data.data.data,
    loading: !data && !error,
    error: data?.error
  }
}
