// ** MUI Imports
import { styled } from '@mui/material/styles'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Zoom from '@mui/material/Zoom'

const ScrollToTopStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(10)
}))

interface ScrollToTopProps {
  children: React.ReactNode
  className?: string
}

const ScrollToTop = (props: ScrollToTopProps) => {
  // ** Props
  const { children, className } = props

  // ** init trigger
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true
  })

  const handleClick = () => {
    const anchor = document.querySelector('body')
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Zoom in={trigger}>
      <ScrollToTopStyled className={className} onClick={handleClick} role='presentation'>
        {children}
      </ScrollToTopStyled>
    </Zoom>
  )
}

export default ScrollToTop
