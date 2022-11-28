import PropTypes from 'prop-types'
import React from 'react'

import { Button as ButtonMaterial } from '@mui/material'
/**
 * Primary UI component for user interaction
 */
export const Button = ({ label }) => {
  return <ButtonMaterial variant='contained'>{label}</ButtonMaterial>
}

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
}
