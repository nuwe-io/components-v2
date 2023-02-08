import { NotAuthorized, NotAuthorizedProps } from './NotAuthorized'

export default {
  title: 'Templates/NotAuthorized',
  component: NotAuthorized
}

const Template = (args: NotAuthorizedProps) => <NotAuthorized {...args} />

export const Default = Template.bind({}) as any

Default.args = {
  logoutTitle: 'Logout',
  backToHomeTitle: 'Back to Home',
  homeUrl: '/',
  url: 'https://nuwe.io',
  Head: ({ children }: { children: any }) => <div>{children}</div>
}
