import { InternalError, InternalErrorProps } from './InternalError'

export default {
  title: 'Templates/InternalError',
  component: InternalError
}

const Template = (args: InternalErrorProps) => <InternalError {...args} />

export const Default = Template.bind({}) as any

Default.args = {
  backToHomeTitle: 'Back to Home',
  homeUrl: '/',
  url: 'https://nuwe.io',
  Head: ({ children }: { children: any }) => <div>{children}</div>
}
