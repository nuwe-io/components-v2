import { Button } from '@mui/material'
import { TableHeader as TableHeaderComponent } from './TableHeader'

export default {
  title: 'core/components',
  component: TableHeaderComponent
}

const Template = args => <TableHeaderComponent {...args} />

const HeaderButton = () => <Button>Header Button</Button>

export const TableHeader = Template.bind({})
TableHeader.args = {
  value: 'Table Header',
  placeholder: 'Search',
  toggleTitle: 'Toggle',
  toggle: () => {},
  onChange: () => {},
  clearSearch: () => {},
  headerButton: () => <Button>Header Button</Button>
}
