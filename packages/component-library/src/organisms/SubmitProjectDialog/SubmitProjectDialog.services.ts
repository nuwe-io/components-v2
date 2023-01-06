export const submitProjectDialogServices = (submitProjectDialogRepository: any) => {
  const submitIndividualChallenge = async (data: any) => {
    const response = await submitProjectDialogRepository.submitIndividualChallenge(data)

    return response
  }

  const submitTeamChallenge = async (data: any) => {
    const response = await submitProjectDialogRepository.submitTeamChallenge(data)
    return response
  }

  const getUserTeamFromEvent = async (userId: string, eventURL: string) =>
    submitProjectDialogRepository.getUserTeamFromEvent(userId, eventURL)

  const getEventById = async (id: string) => submitProjectDialogRepository.getEventById(id)

  return {
    submitIndividualChallenge,
    submitTeamChallenge,
    getUserTeamFromEvent,
    getEventById
  }
}
