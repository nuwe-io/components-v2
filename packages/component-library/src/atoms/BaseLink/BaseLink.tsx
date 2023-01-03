import { Link } from '@mui/material'

import { useStyles } from './styles'

interface BaseLinkProps {
  id?: string
  selected: boolean
  name: string
  onClick?: () => void
  href?: string
}

export const BaseLink = ({ selected, name, ...props }: BaseLinkProps) => {
  const { tabLink, divLink } = useStyles({
    selected
  })

  return (
    <div key={name} className={divLink}>
      <Link className={tabLink} {...props}>
        {name}
      </Link>
    </div>
  )
}
