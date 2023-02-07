import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import Settings from 'mdi-material-ui/CogOutline'

import { UserDropdown, UserDropdownProps } from './UserDropdown'

export default {
  title: 'Organisms/UserDropdown',
  component: UserDropdown
}

const Template = (args: UserDropdownProps) => <UserDropdown {...args} />

export const Logout = Template.bind({}) as any

Logout.args = {
  user: {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150'
  },
  titles: {
    logout: 'Logout',
    reportProblem: 'Report a problem',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login'
  },
  problemReportUrl: 'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E',
  items: [],
  logout: () => {},
  naviagate: (url: string) => console.log(url),
  openWindow: (url: string, target?: string) => window.open(url, target)
}

export const LoggedIn = Template.bind({}) as any

LoggedIn.args = {
  user: {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    isLoggedIn: true
  },
  problemReportUrl: 'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E',
  titles: {
    logout: 'Logout',
    reportProblem: 'Report a problem',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login'
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
  ],
  navigate: (url: string) => console.log(url),
  openWindow: (url: string, target?: string) => window.open(url, target),
  logout: () => {},
  openContactDialog: () => {},
  goToLogin: () => {}
}
