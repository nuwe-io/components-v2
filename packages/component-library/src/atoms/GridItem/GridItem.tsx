import Grid from '@mui/material/Grid'

interface GridItemProps {
  sm?: number
  lg?: number
  children: React.ReactNode
}

export const GridItem = (props: GridItemProps) => (
  <Grid item xs={12} sm={props.sm} lg={props.lg}>
    {props.children}
  </Grid>
)
