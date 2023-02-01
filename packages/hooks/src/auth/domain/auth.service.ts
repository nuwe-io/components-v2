export const authService = (authRepository: any) => {
  const login = async (data: any) => {
    const res = await authRepository.login(data)
    if (res?.status !== 200 || res.code === 401) return false

    return res.data
  }

  const signup = async (data: any) => authRepository.signup(data)

  const companyStatus = async () => {
    const userId = sessionStorage.getItem('userId')

    if (userId) return userId

    const res = await authRepository.companyStatus()
    if (res?.status === 200) {
      sessionStorage.setItem('userId', res.data.auth.id)
      return res.data.auth.id
    }

    sessionStorage.removeItem('userId')
    return false
  }

  const logout = async () => {
    sessionStorage.removeItem('userId')
    return authRepository.logout()
  }

  const getUserById = async (id: number) => authRepository.getUserById(id)

  const verifyVotinSignUp = async (data: any, url: string) => {
    const res = await authRepository.verifyVotinSignUp(data, url)
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
