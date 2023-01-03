import { StyledStackItem } from './styles'

interface StackItemProps {
  text: string
}

export const StackItem = ({ text }: StackItemProps) => {
  return (
    <StyledStackItem>
      <p>{text}</p>
    </StyledStackItem>
  )
}
