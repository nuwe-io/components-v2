// ** MUI Imports
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'

// ** Styled Components
import { ListSubheader, TypographyHeaderText } from './styles'

interface VerticalNavSectionTitleProps {
  item: any
  navHover: any
  settings: any
  collapsedNavWidth: any
  navigationBorderWidth: any
}

export const VerticalNavSectionTitle = (props: VerticalNavSectionTitleProps) => {
  // ** Props
  const { item, navHover, settings, collapsedNavWidth, navigationBorderWidth } = props

  // ** Hook
  const theme = useTheme() as any

  // ** Vars
  const { skin, navCollapsed } = settings

  const conditionalStyling = () => {
    if (skin === 'semi-dark' && theme.palette.mode === 'light') {
      return {
        color: `rgba(${theme.palette.customColors.dark}, 0.38)`,
        '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
          borderColor: `rgba(${theme.palette.customColors.dark}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`
        }
      }
    } else if (skin === 'semi-dark' && theme.palette.mode === 'dark') {
      return {
        color: `rgba(${theme.palette.customColors.light}, 0.38)`,
        '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
          borderColor: `rgba(${theme.palette.customColors.light}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`
        }
      }
    } else {
      return {
        color: theme.palette.text.disabled,
        '& .MuiDivider-root:before, & .MuiDivider-root:after, & hr': {
          borderColor: `rgba(${theme.palette.customColors.main}, ${
            navCollapsed && !navHover ? 0.3 : 0.12
          })`
        }
      }
    }
  }

  //  <CanViewNavSectionTitle navTitle={item}>
  //     </CanViewNavSectionTitle>

  return (
    <ListSubheader
      className='nav-section-title'
      sx={{
        ...conditionalStyling(),
        ...(navCollapsed && !navHover
          ? {
              py: 3.5,
              pr: (collapsedNavWidth - navigationBorderWidth - 24) / 8 - 1,
              pl: (collapsedNavWidth - navigationBorderWidth - 24) / 8 + 0.25
            }
          : { px: 0, py: 1.75 })
      }}
    >
      <Divider
        textAlign='left'
        sx={{
          m: 0,
          lineHeight: 'normal',
          ...(navCollapsed && !navHover
            ? { width: 22 }
            : {
                width: '100%',
                textTransform: 'uppercase',
                '&:before, &:after': { top: 7, transform: 'none' },
                '& .MuiDivider-wrapper': { px: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' }
              })
        }}
      >
        {navCollapsed && !navHover ? null : (
          <TypographyHeaderText noWrap>item.sectionTitle</TypographyHeaderText>
        )}
      </Divider>
    </ListSubheader>
  )
}
