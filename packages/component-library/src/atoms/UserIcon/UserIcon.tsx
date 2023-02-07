/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

export interface UserIconProps {
  icon: React.ReactNode
  iconProps: any
  componentType: 'search' | 'vertical-menu' | 'horizontal-menu'
}
export const UserIcon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps, componentType } = props
  const IconTag = icon
  let styles
  if (componentType === 'search') {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
          color: 'blue',
          fontSize: '2rem'
        } */
  } else if (componentType === 'vertical-menu') {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
          color: 'red',
          fontSize: '1.5rem'
        } */
  } else if (componentType === 'horizontal-menu') {
    // Conditional Props based on component type, like have different font size or icon color
    /* styles = {
          color: 'green',
          fontSize: '1rem'
        } */
  } else {
    return null
  }

  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />
}
