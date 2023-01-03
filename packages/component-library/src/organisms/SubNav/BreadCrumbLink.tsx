import { BreadcrumbLink } from './styles'

interface BreadCrumbLinkProps {
  route: any
  index: number
  length: number
}

const BreadCrumbLink = ({ route, index, length }: BreadCrumbLinkProps) => {
  return (
    <BreadcrumbLink
      id={`breadcrumb-${route.name}`}
      color='inherit'
      key={route.name}
      //index={index}
      //length={length}
      href={route.href}
    >
      {route.name.toUpperCase()}
    </BreadcrumbLink>
  )
}

export default BreadCrumbLink
