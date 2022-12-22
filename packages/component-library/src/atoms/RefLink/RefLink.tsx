import { BaseLink } from 'components/atoms'

import { scrollToRef } from '@nuwe/lib'

interface RefLinkProps {
  selected: boolean
  route: string
  name: string
}

export const RefLink = ({ selected, route, name }: RefLinkProps) => (
  <BaseLink id={`tab-${name}`} name={name} selected={selected} onClick={() => scrollToRef(route)} />
)
