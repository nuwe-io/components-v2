export const technologiesServices = (projectsRepository: any) => {
  const getAllTechnologies = async () => {
    const response = await projectsRepository.getAllTechnologies()
    return response
  }
  return {
    getAllTechnologies
  }
}
