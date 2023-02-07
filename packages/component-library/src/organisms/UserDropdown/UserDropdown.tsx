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
import EmailIcon from '@mui/icons-material/Email'
import LoginIcon from '@mui/icons-material/Login'
import BugOutlined from 'mdi-material-ui/BugOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'
import BlogIcon from 'mdi-material-ui/PostOutline'

// ** Styled Components
import { BadgeContentSpan } from './styles'

interface UserDropdownCardProps {
  name: string
  image: string
  isLoggedIn?: boolean
  type: 'Business' | 'Professional'
}
interface UserDropdownItemProps {
  hide?: boolean
  Icon: React.FC<any>
  text: string
  onClick: MouseEventHandler<HTMLLIElement> | undefined
}

interface DynamicMenuItemsProps {
  items?: UserDropdownItemProps[]
  showMenuItems?: boolean
  login: () => void
  loginText: string
}

export interface UserDropdownProps {
  user: {
    name: string
    image: string
    isLoggedIn?: boolean
  }
  problemReportUrl: string
  titles: {
    logout: string
    reportProblem: string
    blog: string
    contact: string
    login: string
  }
  items?: UserDropdownItemProps[]
  navigate: (url: string) => void
  openWindow: (url: string, target?: string) => void
  openContactDialog: () => void
  logout: () => void
  goToLogin: () => void
  children?: any
}

export interface UserDropdownBadgeProps {
  onClick: MouseEventHandler<HTMLDivElement>
  isLoggedIn?: boolean
  name: string
  image: string
}

export const UserDropdown = ({
  navigate,
  logout,
  user,
  titles,
  items,
  problemReportUrl,
  openWindow,
  openContactDialog,
  goToLogin
}: UserDropdownProps) => {
  const { name, image, isLoggedIn } = user

  // ** States
  const [anchorEl, setAnchorEl] = useState(null)

  //* Functions
  const handleDropdownOpen = (event: any) => setAnchorEl(event.currentTarget)

  const handleDropdownClose = (url?: string) => {
    if (url) navigate(url)

    setAnchorEl(null)
  }

  const handleDropdownCloseNewWindows = (url: string) => {
    if (url) openWindow(url, '_blank')
    setAnchorEl(null)
  }

  const openProblemReport = () => handleDropdownCloseNewWindows(problemReportUrl)
  const closeDialog = () => handleDropdownClose()

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  const handleContactDialog = () => {
    openContactDialog()
    handleDropdownClose()
  }

  const showMenuItems = items?.length !== 0 && isLoggedIn

  return (
    <Fragment>
      <UserDropdownBadge
        isLoggedIn={isLoggedIn}
        onClick={handleDropdownOpen}
        name={name}
        image={image}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeDialog}
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
        <UserDropdownCard isLoggedIn={isLoggedIn} name={name} image={image} type='Business' />
        {isLoggedIn && <Divider />}

        <DynamicMenuItems
          items={items}
          showMenuItems={showMenuItems}
          loginText={titles.login}
          login={goToLogin}
        />
        <Divider />
        <UserDropdownItem
          Icon={BlogIcon}
          text={titles.blog}
          onClick={() => handleDropdownCloseNewWindows('https://nuwe.io/blog')}
        />
        <Divider />
        <UserDropdownItem
          Icon={BugOutlined}
          text={titles.reportProblem}
          onClick={openProblemReport}
        />
        <UserDropdownItem Icon={EmailIcon} text={titles.contact} onClick={handleContactDialog} />
        <Divider />
        <UserDropdownItem Icon={LogoutVariant} text={titles.logout} onClick={handleLogout} />
      </Menu>
    </Fragment>
  )
}

const DynamicMenuItems = ({
  items,
  showMenuItems,
  login,
  loginText = 'Log In'
}: DynamicMenuItemsProps) => {
  if (showMenuItems)
    return (
      <>
        {items?.map((item: UserDropdownItemProps) => (
          <UserDropdownItem key={item?.text} {...item} />
        ))}
      </>
    )

  return <UserDropdownItem text={loginText} onClick={login} Icon={LoginIcon} />
}
const UserDropdownBadge = ({ onClick, name, image, isLoggedIn }: UserDropdownBadgeProps) => {
  if (!isLoggedIn)
    return (
      <Badge
        onClick={onClick}
        overlap='circular'
        sx={{ ml: 2, cursor: 'pointer', border: 'solid 2px', borderRadius: '50%' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <LoginIcon sx={{ width: 35, height: 35, padding: '0.3rem' }} />
      </Badge>
    )

  return (
    <Badge
      overlap='circular'
      onClick={onClick}
      sx={{ ml: 2, cursor: 'pointer' }}
      badgeContent={<BadgeContentSpan />}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
    >
      <Avatar alt={name} src={image} onClick={onClick} sx={{ width: 40, height: 40 }} />
    </Badge>
  )
}

const UserDropdownCard = ({ name, image, isLoggedIn, type }: UserDropdownCardProps) => {
  if (!isLoggedIn) return null

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
