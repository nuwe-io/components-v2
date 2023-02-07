import Icon from '@mui/icons-material/People'

import { UserIcon, UserIconProps } from './UserIcon'

export default {
  title: 'Atoms/UserIcon',
  component: UserIcon
}

const Template = (args: UserIconProps) => <UserIcon {...args} />

export const Default = Template.bind({}) as any

Default.args = {
  icon: Icon,
  iconProps: {},
  componentType: 'search'
}
