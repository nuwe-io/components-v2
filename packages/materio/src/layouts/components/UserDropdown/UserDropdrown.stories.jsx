/* eslint-disable import/no-anonymous-default-export */
import themeConfig from '@configs/themeConfig'

import UserDropdownComponent from './UserDropdown'

export default {
  title: 'core/components',
  component: UserDropdownComponent
}

const Template = args => <UserDropdownComponent {...args} />

export const UserDropdown = Template.bind({})
UserDropdown.args = {
  settings: themeConfig
}
