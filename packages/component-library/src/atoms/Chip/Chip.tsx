import MUIChip from '@mui/material/Chip'

interface ChipProps {
  label: string
  color?: 'secondary' | 'default' | 'primary' | 'error' | 'info' | 'success' | 'warning' | undefined
  variant?: 'filled' | 'outlined' | undefined
  size?: 'small' | 'medium' | undefined
  moreProps?: object
}

export const Chip = ({ label, color, variant, size, ...moreProps }: ChipProps) => (
  <MUIChip size={size} label={label} color={color} variant={variant} {...moreProps} />
)

Chip.defaultProps = {
  color: 'secondary',
  size: 'small',
  variant: 'outlined'
}
