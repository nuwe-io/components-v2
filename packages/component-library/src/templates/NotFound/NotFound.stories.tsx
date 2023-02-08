import { NotFound, NotFoundProps } from './NotFound'

export default {
  title: 'Templates/NotFound',
  component: NotFound
}

const Template = (args: NotFoundProps) => <NotFound {...args} />
export const Default = Template.bind({}) as any

Default.args = {
  logoutTitle: 'Logout',
  backToHomeTitle: 'Back to Home',
  homeUrl: '/',
  url: 'https://nuwe.io',
  Head: ({ children }: { children: any }) => <div>{children}</div>
}
