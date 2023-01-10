import { useEffect } from 'react'

import { Autocomplete, TextField } from '@mui/material'

import { Chip } from '../../atoms'

interface EmailAutocompleteProps {
  arrayValue: any
  error: boolean
  handleChange: (value: any) => void
  helperText: string
  label: string
  placeholder: string
  setError: (error: boolean) => void
}

export const EmailAutocomplete = ({
  arrayValue,
  error,
  handleChange,
  helperText,
  label,
  placeholder,
  setError,
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
          <Chip {...getTagProps({ index })} key={index} label={option} />
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
