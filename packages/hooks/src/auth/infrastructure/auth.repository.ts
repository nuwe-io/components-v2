import { fetch, methods } from '@nuwe/lib'

const routes = (API_URL: string) => ({
  companyLogin: `${API_URL}/auth/companies/login`,
  adminLogin: `${API_URL}/auth/admins/login`,
  logout: `${API_URL}/auth/logout`,
  companyStatus: `${API_URL}/auth/companies/check`,
  adminStatus: `${API_URL}/auth/admins/check`,
  getUserById: `${API_URL}/users/`,
  signup: `${API_URL}/auth/companies/signup-invite`,
  verifyVotinSignUp: (url: string) => `${API_URL}/auth/events/${url}verify`
})

export interface IAuthRepository {
  login: (API_URL: string, type: AuthTypes, data: any) => Promise<any>
  companyStatus: (API_URL: string, type: AuthTypes) => Promise<any>
  logout: (API_URL: string) => Promise<any>
  getUserById: (API_URL: string, id: number) => Promise<any>
  signup: (API_URL: string, data: any) => Promise<any>
  verifyVotinSignUp: (API_URL: string, data: any, url: string) => Promise<any>
}

export enum AuthTypes {
  company = 'company',
  admin = 'admin'
}

export const authRepository = {
  login: async (API_URL: string, type: AuthTypes, data: any) => {
    const loginOptions = {
      company: () => fetch({ url: routes(API_URL).companyLogin, method: methods.post, data }),
      admin: () => fetch({ url: routes(API_URL).adminLogin, method: methods.post, data })
    }
    return loginOptions[type]()
  },
  companyStatus: async (API_URL: string, type: AuthTypes) => {
    const statusOptions = {
      company: () => fetch({ url: routes(API_URL).companyStatus, method: methods.get }),
      admin: () => fetch({ url: routes(API_URL).adminStatus, method: methods.get })
    }
    return statusOptions[type]()
  },
  logout: async (API_URL: string) => fetch({ url: routes(API_URL).logout, method: methods.get }),
  getUserById: async (API_URL: string, id: number) =>
    fetch({ url: `${routes(API_URL).getUserById}${id}`, method: methods.get }),
  signup: async (API_URL: string, data: any) =>
    fetch({ url: routes(API_URL).signup, method: methods.post, data }),
  verifyVotinSignUp: async (API_URL: string, data: any, url: string) =>
    fetch({ url: routes(API_URL).verifyVotinSignUp(url), method: methods.post, data })
}
