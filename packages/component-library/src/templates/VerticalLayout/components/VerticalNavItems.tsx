// ** Custom Menu Components
import { VerticalNavGroup } from './VerticalNavGroup'
import { VerticalNavLink } from './VerticalNavLink'
import { VerticalNavSectionTitle } from './VerticalNavSectionTitle'

const resolveNavItemComponent = (item: any) => {
  if (item.sectionTitle) return VerticalNavSectionTitle
  if (item.children) return VerticalNavGroup

  return VerticalNavLink
}

export interface VerticalNavItemsProps {
  verticalNavItems?: any
  parent?: any
  navVisible?: any
  isSubToSub?: any
  groupActive?: any
  setGroupActive?: any
  currentActiveGroup?: any
  setCurrentActiveGroup?: any
}

export const VerticalNavItems = (props: VerticalNavItemsProps) => {
  // ** Props
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map((item: any, index: number) => {
    const TagName = resolveNavItemComponent(item) as any

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}
