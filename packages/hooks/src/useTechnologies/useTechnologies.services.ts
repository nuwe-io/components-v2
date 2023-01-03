export const technologiesServices = (projectsRespository: any) => {
  const getAllTechnologies = async () => {
    const response = await projectsRespository.getAllTechnologies()
    return response
  }
  return {
    getAllTechnologies
  }
}
