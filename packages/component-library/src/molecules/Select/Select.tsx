import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MUISelect,
  SelectChangeEvent
} from '@mui/material'

interface SelectProps {
  label: string
  value: any
  options: any
  width?: string
  variant?: 'standard' | 'filled' | 'outlined'
  handlerChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void
  error: {
    status: boolean
    message: string
  }
  theme?: any
}

/**
 * Primary UI Select input component for user interaction
 */
export const Select = ({
  label,
  value,
  options,
  width,
  variant,
  handlerChange,
  error,
  theme,
  ...props
}: SelectProps) => {
  return (
    <Box {...props} style={{ width: width }}>
      <FormControl size='small' error={error.status} fullWidth variant={variant}>
        <InputLabel>{label}</InputLabel>
        <MUISelect fullWidth onChange={handlerChange} value={value} label={label}>
          {options.map((option: any, i: number) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
        <FormHelperText>{error.message}</FormHelperText>
      </FormControl>
    </Box>
  )
}

Select.defaultProps = {
  label: 'Select',
  width: '100px',
  value: '',
  options: [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' }
  ],
  variant: 'standard',
  handlerChange: null,
  error: {
    status: false,
    message: ''
  },
  theme: 'dark'
}
