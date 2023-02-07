import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import Settings from 'mdi-material-ui/CogOutline'

import { UserDropdown, UserDropdownProps } from './UserDropdown'

export default {
  title: 'Organisms/UserDropdown',
  component: UserDropdown
}

const Template = (args: UserDropdownProps) => <UserDropdown {...args} />

export const Default = Template.bind({}) as any

Default.args = {
  router: {
    push: (url: string) => console.log(url),
    pathname: ''
  },
  user: {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150'
  },
  logout: () => {},
  titles: {
    logout: 'Logout',
    reportProblem: 'Report a problem',
    blog: 'Blog'
  },
  items: [
    {
      Icon: AccountOutline,
      text: 'My Account',
      onClick: () => console.log('My Account')
    },
    {
      Icon: AccountMultipleOutline,
      text: 'My Team',
      onClick: () => console.log('My Team')
    },
    {
      Icon: Settings,
      text: 'Settings',
      onClick: () => console.log('Settings')
    }
  ]
}
