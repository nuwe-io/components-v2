import { Link } from '@mui/material'

import { useStyles } from './styles'

interface BreadCrumbLinkProps {
  route: {
    name: string
    href: string
  }
  index: number
  length: number
}

export const BreadCrumbLink = ({ route, ...props }: BreadCrumbLinkProps) => {
  const { breadcrumbLink } = useStyles({ index: props.index, length: props.length })

  return (
    <Link
      id={`breadcrumb-${route.name}`}
      color='inherit'
      key={route.name}
      className={breadcrumbLink}
      href={route.href}
    >
      {route.name.toUpperCase()}
    </Link>
  )
}
