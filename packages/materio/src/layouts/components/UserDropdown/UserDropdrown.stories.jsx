/* eslint-disable import/no-anonymous-default-export */
import themeConfig from 'configs/themeConfig'

import UserDropdown from './UserDropdown'

export default {
  title: 'Materio/UserDropdown',
  component: UserDropdown
}

const Template = args => <UserDropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  settings: themeConfig
}
