import { AuthTypes, IAuthRepository } from '../infrastructure/auth.repository'

export const authService = (authRepository: IAuthRepository) => {
  const login = async (type: string, apiUrl: string, data: any) => {
    const res = await authRepository.login(apiUrl, AuthTypes[type], data)
    if (res?.status !== 200 || res.code === 401) return false

    return res.data
  }

  const signup = async (apiUrl: string, data: any) => authRepository.signup(apiUrl, data)

  const companyStatus = async (apiUrl: string, type: string) => {
    const userId = sessionStorage?.getItem('userId')

    if (userId) return userId

    const res = await authRepository.companyStatus(apiUrl, AuthTypes[type])

    if (res?.status === 200) {
      sessionStorage?.setItem('userId', res.data.auth.id)
      return res.data.auth.id
    }

    sessionStorage?.removeItem('userId')
    return false
  }

  const logout = async (apiUrl: string) => {
    sessionStorage.removeItem('userId')
    return authRepository.logout(apiUrl)
  }

  const getUserById = async (apiUrl: string, id: number) => authRepository.getUserById(apiUrl, id)

  const verifyVotinSignUp = async (apiUrl: string, data: any, url: string) => {
    const res = await authRepository.verifyVotinSignUp(apiUrl, data, url)
    if (res?.status !== 200) return Promise.reject(false)
    return Promise.resolve('Verification success')
  }

  return {
    signup,
    login,
    getUserById,
    companyStatus,
    verifyVotinSignUp,
    logout
  }
}
