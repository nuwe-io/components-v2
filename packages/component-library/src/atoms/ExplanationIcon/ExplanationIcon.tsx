import { Box } from '@mui/system'
import { StyledExplanationIcon } from './styles'

interface ExplanationIconProps {
  Icon: any
  action: string
  description: string
}

export const ExplanationIcon = ({ Icon, action, description }: ExplanationIconProps) => {
  return (
    <StyledExplanationIcon>
      <Box>
        <Icon color='primary' style={{ fontSize: 50 }} />
      </Box>
      <h4>{action}</h4>
      <p>{description}</p>
    </StyledExplanationIcon>
  )
}
