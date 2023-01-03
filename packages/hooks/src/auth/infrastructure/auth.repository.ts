import { fetch, methods } from '@nuwe/lib'

const API_URL = process.env.NEXT_PUBLIC_API_URL

const routes = {
  login: `${API_URL}/auth/companies/login`,
  logout: `${API_URL}/auth/logout`,
  companyStatus: `${API_URL}/auth/companies/check`,
  getUserById: `${API_URL}/users/`,
  signup: `${API_URL}/auth/companies/signup-invite`
}

export const authRepository = {
  login: async (data: any) => fetch({ url: routes.login, method: methods.post, data }),
  companyStatus: async () => fetch({ url: routes.companyStatus, method: methods.get }),
  logout: async () => fetch({ url: routes.logout, method: methods.get }),
  getUserById: async (id: number) =>
    fetch({ url: `${routes.getUserById}${id}`, method: methods.get }),
  signup: async (data: any) => fetch({ url: routes.signup, method: methods.post, data }),
  verifyVotinSignUp: async (data: any, url: string) =>
    fetch({ url: `${API_URL}/auth/events/${url}/verify`, method: methods.post, data })
}
