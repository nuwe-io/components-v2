// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import Navigation from '../../horizontal/navigation'

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = props => {
  // ** Props
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding
  } = props

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {userHorizontalAppBarBranding ? (
        userHorizontalAppBarBranding(props)
      ) : (
        <>
          <Link href='/' passHref>
            <StyledLink>{/*<Logo />*/}</StyledLink>
          </Link>
          <Navigation {...props} />
        </>
      )}
      {userHorizontalAppBarContent ? userHorizontalAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
