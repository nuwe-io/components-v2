import Grid from '@mui/material/Grid'

interface GridItemProps {
  xs?: number
  sm?: number
  lg?: number
  xl?: number
  children: React.ReactNode
}

export const GridItem = (props: GridItemProps) => (
  <Grid item xs={props.xs || 12} sm={props.sm} lg={props.lg} xl={props.xl || 5}>
    {props.children}
  </Grid>
)
