import { Logo as LogoComponent } from './Logo'

const Template = (args: any) => <LogoComponent {...args} />

export const Logo: any = Template.bind({})

export const LogoIcon: any = Template.bind({})

LogoIcon.args = {
  onlyIcon: true
}
