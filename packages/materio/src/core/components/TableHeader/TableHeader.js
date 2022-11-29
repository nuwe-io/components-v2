import PropTypes from 'prop-types'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import Magnify from 'mdi-material-ui/Magnify'

import { styles } from './styles'

export const TableHeader = props => {
  // ** Props
  const {
    placeholder,
    toggleTitle,
    onChange,
    toggle,
    value,
    clearSearch,
    title: Title,
    headerButton: HeaderButton
  } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: Title ? 'space-between' : 'flex-end'
      }}
    >
      {Title && <Title />}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        {HeaderButton && <HeaderButton />}
        {toggle && (
          <Button sx={{ mb: 1, mr: 2, ml: 2 }} onClick={toggle} variant='contained'>
            {toggleTitle}
          </Button>
        )}
        <TextField
          size='small'
          variant='outlined'
          value={value}
          sx={styles.textField}
          placeholder={placeholder}
          onChange={onChange}
          InputProps={{
            startAdornment: <Magnify fontSize='small' />,
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={clearSearch}>
                <Close fontSize='small' />
              </IconButton>
            )
          }}
        />
      </Box>
    </Box>
  )
}

TableHeader.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  toggleTitle: PropTypes.string,
  onChange: PropTypes.func,
  toggle: PropTypes.func,
  clearSearch: PropTypes.func
}

TableHeader.defaultProps = {
  toggleTitle: 'Toggle'
}
