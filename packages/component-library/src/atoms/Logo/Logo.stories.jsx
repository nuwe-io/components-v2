import { Logo as LogoComponent } from './Logo'

const Template = (args) => <LogoComponent {...args} />

export const Logo = Template.bind({})

export const LogoIcon = Template.bind({})
LogoIcon.args = {
  onlyIcon: true
}
