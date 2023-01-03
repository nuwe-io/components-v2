// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

// ** Third Party Components
import { useKeenSlider } from 'keen-slider/react'

const ThumbnailPlugin = (mainRef: any) => {
  return (slider: any) => {
    function removeActive() {
      slider.slides.forEach((slide: any) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx: any) {
      slider.slides[idx].classList.add('active')
    }
    function addClickEvents() {
      slider.slides.forEach((slide: any, idx: any) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }
    slider.on('created', () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main: any) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}

interface SwiperThumbnailsProps {
  direction: 'ltr' | 'rtl'
}

const SwiperThumbnails = ({ direction }: SwiperThumbnailsProps) => {
  // ** Hooks
  const theme = useTheme()

  const [sliderRef, instanceRef] = useKeenSlider({
    rtl: direction === 'rtl'
  })

  const [thumbnailRef] = useKeenSlider(
    {
      rtl: direction === 'rtl',
      slides: {
        perView: 4,
        spacing: 8
      },
      breakpoints: {
        [`(max-width: ${theme.breakpoints.values.sm}px)`]: {
          slides: {
            perView: 3,
            spacing: 8
          }
        }
      }
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <Box ref={sliderRef} className='keen-slider'>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-1.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-2.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-3.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-4.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-5.jpg' alt='swiper 5' />
        </Box>
      </Box>

      <Box sx={{ mt: 2 }} ref={thumbnailRef} className='keen-slider thumbnail'>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-1.jpg' alt='swiper 1' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-2.jpg' alt='swiper 2' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-3.jpg' alt='swiper 3' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-4.jpg' alt='swiper 4' />
        </Box>
        <Box className='keen-slider__slide'>
          <img src='/images/banners/banner-5.jpg' alt='swiper 5' />
        </Box>
      </Box>
    </>
  )
}

export default SwiperThumbnails
