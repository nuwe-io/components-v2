import { projectsServices } from 'src/shared/context/projects/domain'
import { projectsRespository } from 'src/shared/context/projects/infrastructure/projects.repository'
import useSWR from 'swr'

const { getAllTechnologies } = projectsServices(projectsRespository)

export const useTechnologies = (open: boolean) => {
  const { data, error } = useSWR(open ? 'technologies' : null, getAllTechnologies)
  return {
    technologies: data && data.data.data,
    loading: !data && !error,
    error: data?.error
  }
}
