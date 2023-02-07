// ** MUI Imports
import Box from '@mui/material/Box'

import { Logo } from 'atoms'

import { HorizontalNavigation } from './HorizontalNavigation'
import { StyledLink } from './styles'

export const HorizontalAppBar = (props: any) => {
  // ** Props
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding
  } = props

  return (
    <Box
      sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      {userHorizontalAppBarBranding ? (
        userHorizontalAppBarBranding(props)
      ) : (
        <>
          <StyledLink>
            <Logo />
          </StyledLink>
          <HorizontalNavigation {...props} />
        </>
      )}
      {userHorizontalAppBarContent ? userHorizontalAppBarContent(props) : null}
    </Box>
  )
}
