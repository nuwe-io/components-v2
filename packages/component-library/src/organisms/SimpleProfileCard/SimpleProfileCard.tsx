import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Skeleton,
  TextField,
  Typography,
  useTheme
} from '@mui/material'
import Link from 'next/link'

import { ButtonLoader } from '../../atoms'
import { AvatarIconButton } from '../../molecules'
import { Avatar } from '../Avatar'

interface SimpleProfileCardProps {
  user: any
  isProfile?: boolean
  toggleOpen?: (() => void) | null
  services?: any
  displayedTexts: {
    accountImageSettings: string
    username: string
    imageDropwdonSelector: string
    cancel: string
    selectImage: string
    upload: string
    udpateProfileAvatar: string
    viewMyProfile: string
  }
}

export const SimpleProfileCard = ({
  user,
  isProfile = false,
  toggleOpen,
  services,
  displayedTexts
}: SimpleProfileCardProps) => {
  if (!user) return <Skeleton variant='rectangular' width='100%' height={300} />

  return (
    <Card>
      <EditProfile onClick={toggleOpen ? toggleOpen : undefined} isProfile={isProfile} />
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <ProfileIcon
          isProfile={isProfile}
          user={user}
          services={services}
          displayedTexts={displayedTexts}
        />
        <div style={{ marginLeft: isProfile ? '10px' : 0 }}>
          <Typography fontWeight='700' variant='h6'>
            {user?.username}
          </Typography>
          <Typography variant='subtitle2'>{user?.email}</Typography>
          <Typography
            variant='caption'
            style={{
              textDecoration: 'underline'
            }}
          >
            <ViewProfile isProfile={isProfile} displayedTexts={displayedTexts} />
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

interface EditProfileProps {
  isProfile: boolean
  onClick?: () => void
}

const EditProfile = ({ onClick, isProfile }: EditProfileProps) => {
  if (isProfile)
    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClick}>
          <EditIcon fontSize='medium' /> {/*<EditIcon fontSize='18' /> */}
        </IconButton>
      </div>
    )

  return null
}

interface ProfileDialogProps {
  open: boolean
  toggleOpen: () => void
  save: () => void
  user: any
  onChange: (key: string, value: any) => void
  displayedTexts: {
    editProfile: string
    editProfileDescription: string
    username: string
    email: string
    saveChanges: string
    name: string
  }
}

export const ProfileDialog = ({
  open,
  toggleOpen,
  save,
  user,
  onChange,
  displayedTexts
}: ProfileDialogProps) => {
  return (
    <Dialog open={open} onClose={toggleOpen}>
      <DialogTitle sx={{ m: 0, p: 2, mb: 1 }} fontWeight='600' align='center'>
        <IconButton
          aria-label='close'
          onClick={toggleOpen}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ minHeight: '300px' }}>
        <Typography gutterBottom fontWeight='600' align='center'>
          {displayedTexts.editProfile}
        </Typography>
        <DialogContentText sx={{ marginBottom: 6 }}>
          <Typography gutterBottom variant='body2' align='center'>
            {displayedTexts.editProfileDescription}
          </Typography>
        </DialogContentText>
        <TextField
          onChange={(e: any) => onChange('name', e.target.value)}
          fullWidth
          margin='normal'
          label={displayedTexts.name}
          value={user?.name}
        />
        <TextField
          onChange={(e: any) => onChange('username', e.target.value)}
          fullWidth
          margin='normal'
          name='username'
          label={displayedTexts.username}
          value={user?.username}
        />
        <TextField
          onChange={(e: any) => onChange('email', e.target.value)}
          fullWidth
          margin='normal'
          name='email'
          label={displayedTexts.email}
          value={user?.email}
        />
        <ButtonLoader /*sx={{ marginTop: '10px' }}*/ loading={false} onClick={save}>
          {displayedTexts.saveChanges}
        </ButtonLoader>
      </DialogContent>
    </Dialog>
  )
}

interface ProfileIconProps {
  isProfile: boolean
  user: any
  services?: any
  displayedTexts: {
    accountImageSettings: string
    username: string
    imageDropwdonSelector: string
    cancel: string
    selectImage: string
    upload: string
  }
}

const ProfileIcon = ({ isProfile, user, services, displayedTexts }: ProfileIconProps) => {
  const theme = useTheme() as any

  if (isProfile)
    return (
      <Avatar
        onlySource
        //width='75px'
        image={user.image}
        id={user.id}
        label={user?.name}
        name={user?.username}
        services={services}
        displayedTexts={displayedTexts}
      />
    )

  return (
    <AvatarIconButton
      disabled
      src={user.image}
      label={user?.username}
      color={theme?.palette.primary.main}
    />
  )
}

interface ViewProfileProps {
  isProfile: boolean
  displayedTexts: {
    udpateProfileAvatar: string
    viewMyProfile: string
  }
}

const ViewProfile = ({ isProfile, displayedTexts }: ViewProfileProps) => {
  const theme = useTheme() as any

  if (isProfile)
    return <Typography variant='caption'>{displayedTexts.udpateProfileAvatar}</Typography>

  return (
    <Link href='/account' passHref>
      <a style={{ color: theme.palette.text.primary }} href='/account'>
        {displayedTexts.viewMyProfile}
      </a>
    </Link>
  )
}
