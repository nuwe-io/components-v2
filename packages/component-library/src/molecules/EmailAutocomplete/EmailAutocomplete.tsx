import { useEffect } from 'react'

import { Autocomplete, TextField } from '@mui/material'
import PropTypes from 'prop-types'

import { Chip } from '../../atoms'

interface EmailAutocompleteProps {
  labelWithTranslation: string
  arrayValue: any
  handleChange: (value: any) => void
  label: string
  placeholder: string
  helperText: string
  error: boolean
  setError: (error: boolean) => void
}

export const EmailAutocomplete = ({
  arrayValue,
  setError,
  error,
  label,
  handleChange,
  helperText,
  placeholder,
  ...props
}: EmailAutocompleteProps) => {
  useEffect(() => {
    setError(arrayValue)
  }, [arrayValue, setError])

  return (
    <Autocomplete
      multiple
      freeSolo
      options={[].map(() => '')}
      value={arrayValue}
      onChange={(_e, value) => handleChange(value)}
      id={label}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip key={index} label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => {
        return (
          <TextField
            error={error}
            type='email'
            helperText={error ? helperText : ''}
            margin='normal'
            variant='outlined'
            label={label}
            placeholder={placeholder}
            {...params}
          />
        )
      }}
      {...props}
    />
  )
}

EmailAutocomplete.propTypes = {
  labelWithTranslation: PropTypes.string.isRequired,
  arrayValue: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}
