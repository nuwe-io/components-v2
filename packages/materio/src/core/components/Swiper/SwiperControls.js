// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

// ** Icons Imports
import ChevronLeft from 'mdi-material-ui/ChevronLeft'
import ChevronRight from 'mdi-material-ui/ChevronRight'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

export const SwiperControls = ({ direction, elements = [], mediaHeight = '210px' }) => {
  // ** States
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // ** Hook
  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: direction === 'rtl',
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setLoaded(true)
    }
  })

  return (
    <>
      <Box className='navigation-wrapper'>
        <Box ref={sliderRef} className='keen-slider'>
          {elements.map((element, i) => (
            <Card key={i} className='keen-slider__slide'>
              <CardMedia sx={{ height: mediaHeight }} image={element} />
            </Card>
          ))}
        </Box>
        {loaded && instanceRef.current && (
          <>
            <ChevronLeft
              className={clsx('arrow arrow-left', {
                'arrow-disabled': currentSlide === 0
              })}
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
            />

            <ChevronRight
              className={clsx('arrow arrow-right', {
                'arrow-disabled':
                  currentSlide === instanceRef.current.track.details.slides.length - 1
              })}
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
            />
          </>
        )}
      </Box>
      {loaded && instanceRef.current && (
        <Box className='swiper-dots'>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <Badge
                key={idx}
                variant='dot'
                component='div'
                className={clsx({
                  active: currentSlide === idx
                })}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
              ></Badge>
            )
          })}
        </Box>
      )}
    </>
  )
}
