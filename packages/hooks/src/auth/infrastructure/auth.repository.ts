import { fetch, methods } from '@nuwe/lib'

const routes = (API_URL: string) => ({
  login: `${API_URL}/auth/companies/login`,
  logout: `${API_URL}/auth/logout`,
  companyStatus: `${API_URL}/auth/companies/check`,
  getUserById: `${API_URL}/users/`,
  signup: `${API_URL}/auth/companies/signup-invite`
})

export const authRepository = (API_URL: string) => ({
  login: async (data: any) => fetch({ url: routes(API_URL).login, method: methods.post, data }),
  companyStatus: async () => fetch({ url: routes(API_URL).companyStatus, method: methods.get }),
  logout: async () => fetch({ url: routes(API_URL).logout, method: methods.get }),
  getUserById: async (id: number) =>
    fetch({ url: `${routes(API_URL).getUserById}${id}`, method: methods.get }),
  signup: async (data: any) => fetch({ url: routes(API_URL).signup, method: methods.post, data }),
  verifyVotinSignUp: async (data: any, url: string) =>
    fetch({ url: `${API_URL}/auth/events/${url}/verify`, method: methods.post, data })
})
