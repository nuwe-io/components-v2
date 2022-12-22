import { useSettings } from '@nuwe/materio'
import { ModeToggler } from './ModeToggler'

const Template = (args: any) => {
  const { settings, saveSettings } = useSettings()
  return <ModeToggler {...args} settings={settings} saveSettings={saveSettings} />
}

export const Default = Template.bind({})
