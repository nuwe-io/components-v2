// ** MUI Imports
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

import { useSettings } from '../../hooks/useSettings'
import LanguageDropdown from '../components/shared-components/LanguageDropdown'
import ModeToggler from '../components/shared-components/ModeToggler'

import { BlankLayoutWrapper } from './BlankLayoutWrapper'

/**
 * @name BlankLayout
 * @description Blank layout
 * @param {*} param0
 * @returns
 */
const BlankLayout = ({ hideNav, children }) => {
  const { settings, saveSettings } = useSettings()

  return (
    <BlankLayoutWrapper className='layout-wrapper'>
      {!hideNav && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            padding: 10
          }}
        >
          <LanguageDropdown settings={settings} saveSettings={saveSettings} />
          <ModeToggler settings={settings} saveSettings={saveSettings} />
        </div>
      )}
      <Box
        className='app-content'
        sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}
      >
        {children}
      </Box>
    </BlankLayoutWrapper>
  )
}

BlankLayout.propTypes = {
  /**
   * Hide navigation tool elements
   */
  hideNav: PropTypes.bool,
  /**
   * Children
   */
  children: PropTypes.node
}

BlankLayout.defaultProps = {
  hideNav: false
}

export default BlankLayout
