/* eslint-disable import/no-anonymous-default-export */

import { DiamondSharp, HomeMaxOutlined, ShieldOutlined } from '@mui/icons-material'
import UserLayout from './UserLayout'

const args = {
  status: 'authorized',
  user: {
    name: 'John Doe',
    username: 'John Doe',
    role: 'admin',
    avatar: 'https://randomuser.me/api/?gender=female&results=1'
  },
  logout: () => {},
  horizontalNavItems: () => [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: HomeMaxOutlined
    },
    {
      title: 'Events',
      path: '/events',
      icon: ShieldOutlined
    },
    {
      title: 'Challenges',
      path: '/challenges',
      icon: DiamondSharp
    }
  ],
  router: {
    pathname: '/dashboard',
    asPath: '/dashboard',
    query: {}
  }
}

const Template = () => <UserLayout {...args} />

export const Default = Template.bind({})
