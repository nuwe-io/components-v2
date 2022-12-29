import { MenuItem, Select, Typography } from '@mui/material'
import PropTypes from 'prop-types'

interface DropdownProps {
  array: string[]
  value: number
  onChange: (event: any, child: React.ReactNode) => void
  title: string
  titleVariant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit'
    | undefined
}

export const Dropdown = ({
  array,
  value,
  onChange,
  title,
  titleVariant = 'body2'
}: DropdownProps) => {
  return (
    <>
      <Typography variant={titleVariant}>{title}</Typography>
      <Select size='small' variant='outlined' margin='dense' value={value} onChange={onChange}>
        {array.map((element, index) => (
          <MenuItem key={index} value={index}>
            {element}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

Dropdown.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  titleVariant: PropTypes.string
}
