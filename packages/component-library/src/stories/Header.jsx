import { Logo } from 'materio'
import PropTypes from 'prop-types'

import './header.css'

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <Logo />
  </header>
)

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired
}

Header.defaultProps = {
  user: null
}
