import { Box } from '@mui/material'

/**
 * Component to render a concentric children components
 */

interface ConcentricProps {
  marginTop: number
  children: React.ReactNode
}

export const Concentric = (props: ConcentricProps) => {
  return (
    <Box
      top={props.marginTop}
      left={0}
      bottom={0}
      right={0}
      position='absolute'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      {props.children}
    </Box>
  )
}

Concentric.defaultProps = {
  marginTop: 0,
  children: null
}
