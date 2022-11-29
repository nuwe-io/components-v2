import Fab from '@mui/material/Fab'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

import ScrollToTop from '@core/components/scroll-to-top'

export const ScrollToTopSection = ({ scrollToTop, ...props }) => {
  if (scrollToTop) return scrollToTop(props)

  return (
    <ScrollToTop className='mui-fixed'>
      <Fab color='primary' size='small' aria-label='scroll back to top'>
        <ArrowUp />
      </Fab>
    </ScrollToTop>
  )
}
