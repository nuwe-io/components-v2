import { fetch, methods } from '@nuwe/lib'

const routes = (API_URL: string) => ({
  login: `${API_URL}/auth/companies/login`,
  logout: `${API_URL}/auth/logout`,
  companyStatus: `${API_URL}/auth/companies/check`,
  getUserById: `${API_URL}/users/`,
  signup: `${API_URL}/auth/companies/signup-invite`,
  verifyVotinSignUp: (url: string) => `${API_URL}/auth/events/${url}verify`
})

export interface IAuthRepository {
  login: (API_URL: string, data: any) => Promise<any>
  companyStatus: (API_URL: string) => Promise<any>
  logout: (API_URL: string) => Promise<any>
  getUserById: (API_URL: string, id: number) => Promise<any>
  signup: (API_URL: string, data: any) => Promise<any>
  verifyVotinSignUp: (API_URL: string, data: any, url: string) => Promise<any>
}

export const authRepository = {
  login: async (API_URL: string, data: any) =>
    fetch({ url: routes(API_URL).login, method: methods.post, data }),
  companyStatus: async (API_URL: string) =>
    fetch({ url: routes(API_URL).companyStatus, method: methods.get }),
  logout: async (API_URL: string) => fetch({ url: routes(API_URL).logout, method: methods.get }),
  getUserById: async (API_URL: string, id: number) =>
    fetch({ url: `${routes(API_URL).getUserById}${id}`, method: methods.get }),
  signup: async (API_URL: string, data: any) =>
    fetch({ url: routes(API_URL).signup, method: methods.post, data }),
  verifyVotinSignUp: async (API_URL: string, data: any, url: string) =>
    fetch({ url: routes(API_URL).verifyVotinSignUp(url), method: methods.post, data })
}
