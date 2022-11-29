/* eslint-disable import/no-anonymous-default-export */

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
