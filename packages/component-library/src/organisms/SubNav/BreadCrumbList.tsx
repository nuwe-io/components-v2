import { Breadcrumbs } from '@mui/material'

import BreadCrumbLink from './BreadCrumbLink'
import { Container } from './styles'

interface BreadcrumbsListProps {
  routes: any
}

const BreadcrumbsList = ({ routes }: BreadcrumbsListProps) => {
  return (
    <Container>
      <Breadcrumbs maxItems={4} separator='/' aria-label='breadcrumb'>
        {routes?.map((route: any, index: number) => (
          <BreadCrumbLink key={route} route={route} index={index} length={routes.length} />
        ))}
      </Breadcrumbs>
    </Container>
  )
}

export default BreadcrumbsList
