import { useSettings } from '@nuwe/materio'
import { ModeToggler } from './ModeToggler'

const Template = args => {
  const { settings, saveSettings } = useSettings()
  return <ModeToggler {...args} settings={settings} saveSettings={saveSettings} />
}

export const Default = Template.bind({})
