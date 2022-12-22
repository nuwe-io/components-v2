import { Link } from '@mui/material'

import useStyles from './styles'

interface BaseLinkProps {
  selected: boolean
  name: string
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
