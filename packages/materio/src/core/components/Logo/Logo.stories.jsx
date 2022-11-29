import { Logo as LogoComponent } from './Logo'

export default {
  title: 'core/components',
  component: LogoComponent
}

const Template = args => <LogoComponent {...args} />

export const Logo = Template.bind({})
