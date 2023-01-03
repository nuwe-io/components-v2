import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import { companyAuth } from '@nuwe/lib'

interface CompanyRolesProps {
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
  value: string
}

export const CompanyRoles = ({ onChange, value }: CompanyRolesProps) => {
  return (
    <Select
      size='small'
      fullWidth
      variant='outlined'
      margin='dense'
      value={companyAuth.find((item) => item.id === value || item.name === value)?.name ?? value}
      renderValue={(selectedValue) => <Typography variant='body1'>{selectedValue}</Typography>}
      onChange={onChange}
    >
      {companyAuth.map((item) => (
        <MenuItem
          key={item.id}
          value={item.name}
          style={{
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant='body1'>{item.name}</Typography>
          <Typography variant='body2' color='gray'>
            {item.description}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  )
}
