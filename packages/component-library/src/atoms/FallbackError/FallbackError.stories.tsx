import { FallbackError, FallbackErrorProps } from './FallbackError'

export default {
  title: 'Atoms/FallbackError',
  component: FallbackError
}

const Template = (args: FallbackErrorProps) => <FallbackError {...args} />

export const Default = Template.bind({}) as any
Default.args = {
  msg: 'Something went wrong'
}
