// ** React Imports
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'

import PropTypes from 'prop-types'

// ** MUI Imports
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import BugOutlined from 'mdi-material-ui/BugOutline'
import CogOutline from 'mdi-material-ui/CogOutline'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import LogoutVariant from 'mdi-material-ui/LogoutVariant'

import { DialogContact } from '../ContactDialog'
import { styles } from './styles'

const UserDropdown = props => {
  // ** Props
  const { settings, user, logout, feedBack, texts, goToSettings, goToProfile } =
    props

  // ** States
  const [show, setShow] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  // ** Hooks
  const router = useRouter()

  // ** Vars
  const { direction } = settings

  const handleDropdownOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = url => {
    if (url) {
      router.push(url)
    }
    setAnchorEl(null)
  }

  const handleDropdownCloseNewWindows = url => {
    if (url) window.open(url, '_blank')

    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleDropdownClose()
  }

  const handleContact = async () => {
    setShow(true)
    handleDropdownClose()
  }

  const menuItems = [
    {
      title: texts.profile,
      Icon: AccountOutline,
      onClick: goToProfile
    },
    {
      title: texts.settings,
      Icon: CogOutline,
      onClick: goToSettings
    },
    {
      title: texts.contact,
      Icon: EmailOutline,
      onClick: handleContact
    },
    {
      title: texts.feedback,
      Icon: BugOutlined,
      onClick: () =>
        handleDropdownCloseNewWindows(
          'https://forms.clickup.com/20463730/f/kgg3j-18865/EADM21P4CELDYPQW7E'
        )
    },
    {
      title: texts.logout,
      Icon: LogoutVariant,
      onClick: handleLogout
    }
  ]

  return (
    <Fragment>
      <Badge
        overlap='circular'
        onClick={handleDropdownOpen}
        sx={{ ml: 2, cursor: 'pointer' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <Avatar
          alt='John Doe'
          onClick={handleDropdownOpen}
          sx={{ width: 40, height: 40 }}
          src={user.image}
        />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 4 } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: direction === 'ltr' ? 'right' : 'left'
        }}
      >
        <Box sx={{ pt: 2, pb: 3, px: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Badge
              overlap='circular'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar
                alt={user.name}
                src={user.image}
                sx={{ width: '2.5rem', height: '2.5rem' }}
              />
            </Badge>
            <Box
              sx={{
                ml: 3,
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column'
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{user.username}</Typography>
              <Typography
                variant='body2'
                sx={{ fontSize: '0.8rem', color: 'text.disabled' }}
              >
                {user.role}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 0, mb: 1 }} />
        {menuItems.map(({ Icon, title, onClick }, index) => (
          <CustomMenuIcon key={index} title={title} onClick={onClick}>
            <Icon sx={{ mr: 2 }} />
          </CustomMenuIcon>
        ))}
      </Menu>
      <DialogContact feedBack={feedBack} show={show} setShow={setShow} />
    </Fragment>
  )
}

UserDropdown.propTypes = {
  settings: PropTypes.object,
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string
  }),
  logout: PropTypes.func,
  goToSettings: PropTypes.func,
  goToProfile: PropTypes.func,
  feedBack: PropTypes.func,
  texts: PropTypes.shape({
    profile: PropTypes.string,
    settings: PropTypes.string,
    contact: PropTypes.string,
    feedback: PropTypes.string,
    logout: PropTypes.string
  })
}

UserDropdown.defaultProps = {
  settings: {},
  user: {
    name: 'John Doe',
    username: 'johndoe',
    role: 'admin',
    image:
      'https://avatars.githubusercontent.com/u/6614183?s=400&u=2a0c8728f854686597b91c9f9e8d501458b07d75&v=4'
  },
  logout: () => {},
  goToSettings: () => {},
  goToProfile: () => {},
  feedBack: () => {},
  texts: {
    profile: 'Profile',
    settings: 'Settings',
    contact: 'Contact',
    feedback: 'Feedback',
    logout: 'Logout'
  }
}

const CustomMenuIcon = ({ title, onClick, children }) => (
  <MenuItem sx={{ py: 2 }} onClick={onClick}>
    <Box sx={styles}>
      {children}
      {title}
    </Box>
  </MenuItem>
)

export default UserDropdown
