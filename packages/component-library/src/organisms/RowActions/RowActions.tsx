// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports

import Menu from '@mui/material/Menu'

import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

// ** Icons Imports

import DeleteOutline from 'mdi-material-ui/DeleteOutline'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import PencilOutline from 'mdi-material-ui/PencilOutline'

const MenuItemLink = styled('a')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  padding: theme.spacing(1.5, 4),
  color: theme.palette.text.primary
}))

interface RowActionsProps {
  deleteUser: () => void
  href: string
  showView: boolean
}

export const RowActions = ({ deleteUser, href, showView }: RowActionsProps) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    deleteUser()
    handleRowOptionsClose()
  }

  return (
    <>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <DotsVertical />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem sx={{ p: 0 }}>
          <div style={{ display: showView ? 'block' : 'none' }}>
            <Link href={href} passHref>
              <MenuItemLink>
                <EyeOutline fontSize='small' sx={{ mr: 2 }} />
                View
              </MenuItemLink>
            </Link>
          </div>
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose}>
          <PencilOutline fontSize='small' sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <DeleteOutline fontSize='small' sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}
