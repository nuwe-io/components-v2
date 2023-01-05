import MUIGrid from '@mui/material/Grid'

interface ColumnProps {
  spacing?: number
  children: React.ReactNode
}

export const Column = (props: ColumnProps) => (
  <MUIGrid container direction='column' spacing={props.spacing || 4}>
    {props.children}
  </MUIGrid>
)

interface GridProps {
  spacing?: number
  children: React.ReactNode
  sx?: any
}

export const Grid = ({ children, spacing = 4, ...props }: GridProps) => (
  <MUIGrid container spacing={spacing} {...props}>
    {children}
  </MUIGrid>
)
