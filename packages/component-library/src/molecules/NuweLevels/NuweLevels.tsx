import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { levels } from '@nuwe/lib'

interface NuweLevelsProps {
  value: string
  onChange: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void) | undefined
}

export const NuweLevels = ({ value, onChange }: NuweLevelsProps) => (
  <Select fullWidth size='small' value={value} variant='outlined' onChange={onChange} margin='none'>
    {levels.map((item) => (
      <MenuItem key={item.id} value={item.name}>
        {item.name || 'Junior'}
      </MenuItem>
    ))}
  </Select>
)
