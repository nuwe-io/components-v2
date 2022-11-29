/* eslint-disable import/no-anonymous-default-export */

import BlankLayoutComponent from './BlankLayout'

export const Template = args => <BlankLayoutComponent {...args} />

export const BlankLayout = Template.bind({})

BlankLayout.args = {
  hideNav: false
}
