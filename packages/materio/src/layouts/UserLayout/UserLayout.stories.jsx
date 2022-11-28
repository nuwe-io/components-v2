/* eslint-disable import/no-anonymous-default-export */
// ** Icon imports
import { DiamondStone } from 'mdi-material-ui'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import ShieldOutline from 'mdi-material-ui/ShieldOutline'

import UserLayout from './UserLayout'

const args = {
  status: 'authenticated',
  user: {
    name: 'John Doe',
    email: 'john@nuwe.io',
    avatar: 'https://randomuser.me/api/?gender=female&results=1'
  },
  logout: () => {},
  horizonalNavItems: () => [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: HomeOutline
    },
    {
      title: 'Events',
      path: '/events',
      icon: ShieldOutline
    },
    {
      title: 'Challenges',
      path: '/challenges',
      icon: DiamondStone
    }
  ]
}

const Template = () => <UserLayout {...args} />

export const Default = Template.bind({})
