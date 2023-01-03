import { useACLContext } from '@nuwe/materio'
import { DivLink, TabLink as Tablink } from './styles'

interface TabLinkProps {
  route: any
  selected: boolean
  displayedTexts: {
    routeName: string
  }
}

const TabLink = ({ route, selected, displayedTexts }: TabLinkProps) => {
  const { ability } = useACLContext()

  return ability?.can('update', route.name) ? (
    <DivLink selected={selected}>
      <Tablink selected={selected} href={route.href} id={`tab-${route.name}`}>
        {displayedTexts.routeName}
      </Tablink>
    </DivLink>
  ) : null
}

export default TabLink
