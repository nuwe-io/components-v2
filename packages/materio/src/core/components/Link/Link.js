import NextLink from 'next/link'

import PropTypes from 'prop-types'

export const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  passHref: PropTypes.bool,
  children: PropTypes.node.isRequired
}
