// ** React Imports
import { Fragment, MouseEventHandler, useState } from 'react'

// ** MUI Imports
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// ** Icons Imports
import BugOutlined from 'mdi-material-ui/BugOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import BlogIcon from 'mdi-material-ui/PostOutline'

// ** Styled Components
import { BadgeContentSpan } from './styles'

interface UserDropdownCardProps {
  name: string
  image: string
  type: 'Business' | 'Professional'
}
interface UserDropdownItemProps {
  hide?: boolean
  Icon: React.FC<any>
  text: string
  onClick: MouseEventHandler<HTMLLIElement> | undefined
}

export interface UserDropdownProps {
  children?: any
  router: {
    push: (url: string) => void
    pathname: string
  }
  user: {
    name: string
    image: string
  }
  titles: {
    logout: string
    reportProblem: string
    blog: string
  }
  logout: () => void
  items?: UserDropdownItemProps[]
}

export const UserDropdown = (props: UserDropdownProps) => {
  // ** Props
  const { router, logout, user, titles, items } = props

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  const handleDropdownOpen = (event: any) => setAnchorEl(event.currentTarget)

  const handleDropdownClose = (url?: string) => {
    if (url) router.push(url)

    setAnchorEl(null)
  }

  const handleDropdownCloseNewWindows = (url: string) => {
    if (url) window.open(url, '_blank')
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  const emptyItems = items?.length === 0

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        badgeContent={<BadgeContentSpan />}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt={user?.name}
          src={user?.image}
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <UserDropdownCard name={user?.name} image={user?.image} type='Business' />
        <Divider sx={{ mt: 2, mb: 3 }} />
        <UserDropdownItem
          Icon={BlogIcon}
          text={titles.blog}
          onClick={() => handleDropdownCloseNewWindows('https://nuwe.io/blog')}
        />
        {!emptyItems && <Divider />}
        {items?.map((item: UserDropdownItemProps) => (
          <UserDropdownItem key={item?.text} {...item} />
        ))}
        <Divider />
        <UserDropdownItem
          Icon={BugOutlined}
          text={titles.reportProblem}
          onClick={() =>
            handleDropdownCloseNewWindows(
              'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E'
            )
          }
        />
        <UserDropdownItem Icon={LogoutVariant} text={titles.logout} onClick={handleLogout} />
      </Menu>
    </Fragment>
  )
}

const UserDropdownCard = ({ name, image, type }: UserDropdownCardProps) => {
  return (
    <Box sx={{ pt: 2, pb: 3, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap='circular'
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
        >
          <Avatar alt={name} src={image} sx={{ width: '2.5rem', height: '2.5rem' }} />
        </Badge>
        <Box
          sx={{
            ml: 3,
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column'
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>{name}</Typography>
          <Typography variant='body2' sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
            {type}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const UserDropdownItem = ({ hide = false, Icon, text, onClick }: UserDropdownItemProps) => {
  if (hide) return null

  return (
    <MenuItem sx={{ py: 2 }} onClick={onClick}>
      <Icon
        sx={{
          mr: 2,
          fontSize: '1.375rem',
          color: 'text.secondary'
        }}
      />
      {text}
    </MenuItem>
  )
}
