import { http } from '@nuwe/lib'
import { BASE_URL } from '../../config'

export const submitProjectDialogRepository: Record<string, any> = {
  getUserTeamFromEvent: async (userId: string, eventURL: string) =>
    http.get(`${BASE_URL}teams/user/${userId}/event/${eventURL}`),
  getEventById: async (id: string) => http.get(`${BASE_URL}events/${id}`),
  submitTeamChallenge: async (data: any) => {
    const url = `${BASE_URL}projects/team`
    const response = await http.post(url, { body: data })
    return response
  },
  submitIndividualChallenge: async (data: any) => {
    const url = `${BASE_URL}projects/individual`
    const response = await http.post(url, { body: data })

    return response
  }
}
