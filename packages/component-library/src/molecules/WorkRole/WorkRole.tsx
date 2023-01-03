import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { roles } from '@nuwe/lib'
import React from 'react'

const options = [...new Set(roles?.map((item) => item?.roles?.map((role) => role)).flat())]

interface WorkRoleProps {
  updateValue: (event: React.ChangeEvent<any> | null, value: string) => void
  value: string
}

export const WorkRole = ({ updateValue, value: rowValue }: WorkRoleProps) => {
  const [value, setValue] = React.useState(rowValue)
  const [inputValue, setInputValue] = React.useState('')

  return (
    <Autocomplete
      fullWidth
      id='select-company-role'
      options={options}
      //variant='outlined'
      size='small'
      inputValue={inputValue}
      value={value}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      onChange={(_, newValue: any) => {
        setValue(newValue)
        updateValue(null, newValue)
      }}
      renderInput={(params: any) => <TextField key={params.value} size='small' {...params} />}
    />
  )
}
