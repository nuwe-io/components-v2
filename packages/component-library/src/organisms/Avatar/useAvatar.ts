import { useContext } from 'react'
import { AvatarContext } from './AvatarContext'

export const useAvatar = () => useContext(AvatarContext)
