import { useRouter } from 'next/router'

import { cumulativeObjectGen } from '@nuwe/lib'
import BreadcrumbsList from './BreadCrumbList'
import { Tab } from './styles'
import TabLink from './TabLink'

interface BreadcrumbNavProps {
  navigation: any
  displayedTexts: {
    routeName: string
  }
}

const BreadcrumbNav = ({ navigation, displayedTexts }: BreadcrumbNavProps) => {
  const router = useRouter()

  const routes = router.asPath === '/' ? ['business'] : ('business' + router.asPath).split('/')
  const breadcrumbs = cumulativeObjectGen(routes, 'home')

  return (
    <div>
      <BreadcrumbsList routes={breadcrumbs} />
      <Tab>
        {navigation?.map((route: any) => {
          return (
            <TabLink
              key={route.name}
              selected={route.selected}
              route={route}
              displayedTexts={displayedTexts}
            />
          )
        })}
      </Tab>
    </div>
  )
}

export default BreadcrumbNav
