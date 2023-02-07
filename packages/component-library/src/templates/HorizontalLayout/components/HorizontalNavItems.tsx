// ** Custom Navigation Components
import { HorizontalNavGroup } from './HorizontalNavGroup'
import { HorizontalNavLink } from './HorizontalNavLink'

const resolveComponent = (item: any) => {
  if (item.children) return HorizontalNavGroup

  return HorizontalNavLink
}

interface HorizontalNavItemsProps {
  horizontalNavItems?: any
  parent?: any
  navHover?: any
  settings?: any
  navVisible?: any
  isSubToSub?: any
  collapsedNavWidth?: any
  toggleNavVisibility?: any
  navigationBorderWidth?: any
  hasParent?: any
  router: any
}
export const HorizontalNavItems = (props: HorizontalNavItemsProps) => {
  const RenderMenuItems = props.horizontalNavItems?.map((item: any, index: number) => {
    const TagName = resolveComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}
