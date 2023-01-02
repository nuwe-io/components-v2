// const AuthEntity = ({ status }) => Object.freeze({ status })

// export default AuthEntity

const AuthEntity = {
  status: 'Unauthorized',
  isAuthorized: false,
  isLoading: false,
  isLoggedIn: false
}
export default AuthEntity
