import { FallbackSpinner as FallbackSpinnerComponent } from './index'

export default {
  title: 'core/components',
  component: FallbackSpinnerComponent
}

const Template = args => <FallbackSpinnerComponent {...args} />

export const FallbackSpinner = Template.bind({})
