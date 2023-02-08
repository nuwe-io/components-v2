import { BlankLayout, BlankLayoutProps } from './BlankLayout'

export default {
  title: 'Templates/BlankLayout',
  component: BlankLayout
}

const Template = (args: BlankLayoutProps) => <BlankLayout {...args} />

export const Default = Template.bind({}) as any

Default.args = {
  children: <div>Content</div>,
  languages: {
    spanish: 'Español',
    english: 'English'
  },
  i18n: {
    language: 'en',
    changeLanguage: () => {}
  },
  titles: {
    logout: 'Logout',
    reportProblem: 'Report a problem',
    blog: 'Blog',
    contact: 'Contact',
    login: 'Login'
  },
  problemReportUrl: 'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E',
  navigate: (url: string) => console.log(url),
  openWindow: (url: string, target?: string) => window.open(url, target),
  logout: () => {},
  openContactDialog: () => {},
  goToLogin: () => {}
}

export const HideNav = Template.bind({}) as any
HideNav.args = {
  ...Default.args,
  children: <div>This is a blank layout without the interactive elements</div>,
  hideNav: true
}
