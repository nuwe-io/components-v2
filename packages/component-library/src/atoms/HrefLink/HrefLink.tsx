import { BaseLink } from '../BaseLink'

interface HrefLinkProps {
  name: string
  href: string
  selected: boolean
}

export const HrefLink = ({ name, href, selected }: HrefLinkProps) => (
  <BaseLink name={name} href={href} selected={selected} />
)
