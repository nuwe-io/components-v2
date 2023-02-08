import AccountMultipleOutline from 'mdi-material-ui/AccountMultipleOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import Preview from 'mdi-material-ui/ApplicationOutline'
import Insights from 'mdi-material-ui/ChartBarStacked'
import Settings from 'mdi-material-ui/CogOutline'
import Security from 'mdi-material-ui/LockOutline'
import ShieldOutline from 'mdi-material-ui/Play'
import Ranking from 'mdi-material-ui/PodiumGold'
import HomeOutline from 'mdi-material-ui/ViewDashboardOutline'

import { UserLayout, UserLayoutProps } from './UserLayout'

export default {
  title: 'Templates/UserLayout',
  component: UserLayout
}

export const Default = (args: UserLayoutProps) => <UserLayout {...args} />

const navigationElements = () => [
  {
    title: 'Home',
    icon: HomeOutline,
    path: '/home'
  },
  {
    title: 'Account',
    icon: ShieldOutline,
    path: '/account'
  }
]

const subNavElements = () => ({
  account: () => [
    {
      title: 'Account',
      icon: AccountOutline,
      path: '/account'
    },
    {
      title: 'Team',
      icon: AccountMultipleOutline,
      path: '/account/team'
    },
    {
      title: 'Security',
      icon: Security,
      path: '/account/security'
    }
  ],
  event: ({ url }: { url: string }) => [
    {
      title: 'Ranking',
      icon: Ranking,
      path: `/events/${url}`
    },
    {
      title: 'Analytics',
      icon: Insights,
      path: `/events/${url}/analytics`
    },
    {
      title: 'Preview event',
      icon: Preview,
      path: `/events/${url}/preview`
    }
  ]
})

Default.args = {
  children: <div>Content</div>,
  horizontalNavItems: navigationElements,
  subNavElements: subNavElements,
  verticalNavItems: navigationElements,
  i18n: {
    language: 'en',
    changeLanguage: () => {}
  },
  languages: {
    spanish: 'Español',
    english: 'English'
  },
  user: {
    name: 'John Doe',
    email: 'john@nuwe.io',
    isLoggedIn: true
  },
  titles: {
    logout: 'Logout',
    reportProblem: 'Report a problem',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login'
  },
  problemReportUrl: 'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E',
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
  router: {
    pathname: '/home',
    basePath: '/business'
  },
  naviagate: (url: string) => console.log(url),
  openWindow: (url: string, target?: string) => window.open(url, target),
  navigate: () => {},
  logout: () => {},
  openContactDialog: () => {},
  goToLogin: () => {}
}
