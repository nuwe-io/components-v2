import { useStyles } from './style'

const BadgesSize = {
  sm: {
    badge: {
      width: '100px',
      height: '100px'
    },
    img: {
      I: {
        width: '35px',
        height: '35px',
        top: '34%',
        left: '32%'
      },
      II: {
        width: '25px',
        height: '25px',
        top: '32%',
        left: '37%'
      },
      III: {
        width: '25px',
        height: '25px',
        top: '32%',
        left: '37%'
      },
      IV: {
        width: '25px',
        height: '25px',
        top: '32%',
        left: '37%'
      },
      V: {
        width: '20px',
        height: '20px',
        top: '36%',
        left: '40%'
      }
    }
  },
  md: {
    badge: {
      width: '200px',
      height: '200px'
    },
    img: {
      I: {
        width: '70px',
        height: '70px',
        top: '35%',
        left: '32%'
      },
      II: {
        width: '60px',
        height: '60px',
        top: '30%',
        left: '35%'
      },
      III: {
        width: '60px',
        height: '60px',
        top: '30%',
        left: '35%'
      },
      IV: {
        width: '50px',
        height: '50px',
        top: '34%',
        left: '37%'
      },
      V: {
        width: '40px',
        height: '40px',
        top: '38%',
        left: '40%'
      }
    }
  },
  lg: {
    badge: {
      width: '300px',
      height: '300px'
    },
    img: {
      I: {
        width: '100px',
        height: '100px',
        top: '35%',
        left: '33%'
      },
      II: {
        width: '80px',
        height: '80px',
        top: '32%',
        left: '36%'
      },
      III: {
        width: '80px',
        height: '80px',
        top: '32%',
        left: '36%'
      },
      IV: {
        width: '80px',
        height: '80px',
        top: '32%',
        left: '36%'
      },
      V: {
        width: '70px',
        height: '70px',
        top: '36%',
        left: '38%'
      }
    }
  }
}

interface TechLogoProps {
  tech?: string
  type?: string
}

const TechLogo = ({ tech = '', type = '' }: TechLogoProps) => {
  return <img alt={type} src={`/techs/${tech}-${type}.svg`} />
}

interface TechProps {
  animation?: boolean
  level?: 'I' | 'II' | 'III' | 'IV' | 'V'
  lights?: boolean
  locked?: boolean
  shadow?: boolean
  size?: 'sm' | 'md' | 'lg'
  tech?: string
}

const TechI = ({
  level = 'I',
  locked = false,
  shadow = true,
  size = 'sm',
  tech = ''
}: TechProps) => {
  const { wrapper, wrapperLogo } = useStyles({
    width: BadgesSize[size].img[level].width,
    height: BadgesSize[size].img[level].height,
    top: BadgesSize[size].img[level].top,
    left: BadgesSize[size].img[level].left
  })

  return (
    <div className={wrapper}>
      {tech !== '' && (
        <div className={wrapperLogo}>
          <TechLogo tech={tech} type='I' />
        </div>
      )}
      {!locked ? (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 310 353'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Tech-I'>
            <g id='all'>
              <g id='container-shadow' filter={shadow ? 'url(#filterI0_d)' : ''}>
                <path
                  id='flag-left'
                  d='M49 319.064V211H132.5V290L53.117 321.848C51.146 322.639 49 321.188 49 319.064Z'
                  fill='#8C7A79'
                />
                <path
                  id='flag-right'
                  d='M260.5 319.064V211H177V290L256.383 321.848C258.354 322.639 260.5 321.188 260.5 319.064Z'
                  fill='#8C7A79'
                />
                <g id='body-shadow' filter={shadow ? 'url(#filterI1_d)' : ''}>
                  <g id='Group 206'>
                    <g id='Group 169'>
                      <g id='Group 166'>
                        <path
                          id='Union'
                          d='M146.876 32.4192L38.8764 91.17C33.4056 94.1461 30 99.8755 30 106.103L30 240.402C30 246.63 33.4055 252.359 38.8764 255.335L146.876 314.086C151.942 316.841 158.058 316.841 163.124 314.086L271.124 255.335C276.594 252.359 280 246.629 280 240.402L280 106.103C280 99.8755 276.594 94.1461 271.124 91.17L163.124 32.4192C158.058 29.6637 151.942 29.6637 146.876 32.4192Z'
                          fill='url(#paintI0_linear)'
                        />
                        <path
                          id='Union_2'
                          d='M146.757 54.4025L57.843 102.771C52.3928 105.736 49 111.444 49 117.648L49 228.352C49 234.556 52.3927 240.264 57.843 243.229L146.757 291.597C151.803 294.343 157.897 294.343 162.943 291.597L251.857 243.229C257.308 240.264 260.7 234.556 260.7 228.352L260.7 117.648C260.7 111.444 257.308 105.736 251.857 102.771L162.943 54.4025C157.897 51.6575 151.803 51.6575 146.757 54.4025Z'
                          fill='url(#paintI1_linear)'
                        />
                        <g id='Union_3' filter='url(#filterI2_f)'>
                          <path
                            d='M146.757 54.4025L57.843 102.771C52.3928 105.736 49 111.444 49 117.648L49 228.352C49 234.556 52.3927 240.264 57.843 243.229L146.757 291.597C151.803 294.343 157.897 294.343 162.943 291.597L251.857 243.229C257.308 240.264 260.7 234.556 260.7 228.352L260.7 117.648C260.7 111.444 257.308 105.736 251.857 102.771L162.943 54.4025C157.897 51.6575 151.803 51.6575 146.757 54.4025Z'
                            stroke='url(#paintI2_linear)'
                          />
                        </g>
                        <g id='Mask Group' opacity='0.5'>
                          <mask
                            id='maskI0'
                            maskUnits='userSpaceOnUse'
                            x='58'
                            y='62'
                            width='195'
                            height='223'
                          >
                            <path
                              id='Union_4'
                              d='M147.807 64.1811L66.417 108.417C61.2296 111.236 58 116.667 58 122.571L58 223.819C58 229.723 61.2296 235.154 66.4169 237.974L147.807 282.209C152.604 284.816 158.396 284.816 163.193 282.209L244.583 237.974C249.77 235.154 253 229.723 253 223.819L253 122.571C253 116.667 249.77 111.236 244.583 108.417L163.193 64.1811C158.396 61.5738 152.604 61.5738 147.807 64.1811Z'
                              fill='#A6D3DE'
                            />
                          </mask>
                          <g mask='url(#maskI0)'>
                            <path
                              id='Innershadow0.1fill'
                              d='M147.807 64.1811L66.417 108.417C61.2296 111.236 58 116.667 58 122.571L58 223.819C58 229.723 61.2296 235.154 66.4169 237.974L147.807 282.209C152.604 284.816 158.396 284.816 163.193 282.209L244.583 237.974C249.77 235.154 253 229.723 253 223.819L253 122.571C253 116.667 249.77 111.236 244.583 108.417L163.193 64.1811C158.396 61.5738 152.604 61.5738 147.807 64.1811Z'
                              fill='url(#paintI3_radial)'
                            />
                            <g id='Group 57'>
                              <path
                                id='Vector 5'
                                opacity='0.5'
                                d='M139.201 290.862L135.328 55.5172H175.672L171.799 290.862H139.201Z'
                                fill='url(#paintI4_linear)'
                              />
                              <path
                                id='Vector 6'
                                opacity='0.5'
                                d='M138.682 288.774L17.6553 86.8965L52.5949 66.724L166.913 272.475L138.682 288.774Z'
                                fill='url(#paintI5_linear)'
                              />
                              <path
                                id='Vector 7'
                                opacity='0.5'
                                d='M135.32 272.475L249.638 66.724L284.578 86.8964L163.551 288.774L135.32 272.475Z'
                                fill='url(#paintI6_linear)'
                              />
                              <rect
                                id='Rectangle 3'
                                x='58'
                                y='159.741'
                                width='195'
                                height='126.638'
                                fill='url(#paintI7_linear)'
                              />
                            </g>
                            <g id='Innershadow0.1fill_2' filter='url(#filterI3_i)'>
                              <path
                                d='M147.807 64.1811L66.417 108.417C61.2296 111.236 58 116.667 58 122.571L58 223.819C58 229.723 61.2296 235.154 66.4169 237.974L147.807 282.209C152.604 284.816 158.396 284.816 163.193 282.209L244.583 237.974C249.77 235.154 253 229.723 253 223.819L253 122.571C253 116.667 249.77 111.236 244.583 108.417L163.193 64.1811C158.396 61.5738 152.604 61.5738 147.807 64.1811Z'
                                fill='#BCB0AE'
                                fillOpacity='0.03'
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterI0_d'
              x='0'
              y='0.35257'
              width='310'
              height='351.714'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='15' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.92549 0 0 0 0 0.909804 0 0 0 0 0.913725 0 0 0 0.48 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterI1_d'
              x='24'
              y='30.3526'
              width='262'
              height='299.8'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='8' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.475 0 0 0 0 0.425521 0 0 0 0 0.425521 0 0 0 0.35 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterI2_f'
              x='48.2'
              y='51.5437'
              width='213.3'
              height='242.913'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterI3_i'
              x='58'
              y='62.2256'
              width='195'
              height='221.939'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.508333 0 0 0 0 0.437506 0 0 0 0 0.415139 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintI0_linear'
              x1='102.5'
              y1='63'
              x2='215'
              y2='286.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#EDE9EA' />
              <stop offset='1' stopColor='#BEB5B6' />
            </linearGradient>
            <linearGradient
              id='paintI1_linear'
              x1='101.5'
              y1='81.5'
              x2='198.5'
              y2='260.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3BBBB' />
              <stop offset='1' stopColor='#ECE8E9' />
            </linearGradient>
            <linearGradient
              id='paintI2_linear'
              x1='112'
              y1='75'
              x2='216.5'
              y2='263'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C9C2C3' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <radialGradient
              id='paintI3_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(155.5 173.195) rotate(90) scale(113.195 97.5)'
            >
              <stop stopColor='#DFD6D5' />
              <stop offset='1' stopColor='#918888' />
            </radialGradient>
            <linearGradient
              id='paintI4_linear'
              x1='155.5'
              y1='55.5172'
              x2='155.5'
              y2='290.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintI5_linear'
              x1='35.1251'
              y1='76.8102'
              x2='152.798'
              y2='280.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintI6_linear'
              x1='267.108'
              y1='76.8102'
              x2='149.435'
              y2='280.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintI7_linear'
              x1='155.5'
              y1='214.655'
              x2='154.912'
              y2='278.533'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#DEDADA' stopOpacity='0' />
              <stop offset='1' stopColor='#DECFCF' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 250 296'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path d='M19 295.5V183H102.5V262L19 295.5Z' fill='url(#paintILOCKED0_linear)' />
            <path d='M230.5 295.5V183H147V262L230.5 295.5Z' fill='url(#paintILOCKED1_linear)' />
            <path
              d='M125 0L3.58116e-05 67.9987L0 222.506L125 290.505L250 222.506L250 67.9987L125 0Z'
              fill='url(#paintILOCKED2_linear)'
            />
            <path
              d='M124.85 22L19 79.5814L19 210.419L124.85 268L230.7 210.419L230.7 79.5814L124.85 22Z'
              fill='url(#paintILOCKED3_linear)'
            />
            <g filter='url(#filterILOCKED0_f)'>
              <path
                d='M124.85 22L19 79.5814L19 210.419L124.85 268L230.7 210.419L230.7 79.5814L124.85 22Z'
                fill='url(#paintILOCKED4_linear)'
              />
            </g>
            <g opacity='0.5'>
              <mask
                id='maskILOCKED0'
                maskUnits='userSpaceOnUse'
                x='28'
                y='32'
                width='195'
                height='227'
              >
                <path
                  d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                  fill='url(#paintILOCKED5_linear)'
                />
              </mask>
              <g mask='url(#maskILOCKED0)'>
                <path
                  d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                  fill='url(#paintILOCKED6_linear)'
                />
                <path
                  opacity='0.5'
                  d='M109.201 262.862L105.328 27.5172H145.672L141.799 262.862H109.201Z'
                  fill='url(#paintILOCKED7_linear)'
                />
                <path
                  opacity='0.5'
                  d='M108.682 260.775L-12.3447 58.8965L22.5949 38.7241L136.913 244.475L108.682 260.775Z'
                  fill='url(#paintILOCKED8_linear)'
                />
                <path
                  opacity='0.5'
                  d='M105.32 244.475L219.638 38.724L254.578 58.8964L133.551 260.774L105.32 244.475Z'
                  fill='url(#paintILOCKED9_linear)'
                />
                <rect
                  x='28'
                  y='131.741'
                  width='195'
                  height='126.638'
                  fill='url(#paintILOCKED10_linear)'
                />
                <path
                  d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                  fill='url(#paintILOCKED11_linear)'
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterILOCKED0_f'
              x='18.7'
              y='21.7'
              width='212.3'
              height='246.6'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <linearGradient
              id='paintILOCKED0_linear'
              x1='60.75'
              y1='183'
              x2='60.75'
              y2='295.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED1_linear'
              x1='188.75'
              y1='183'
              x2='188.75'
              y2='295.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED2_linear'
              x1='125'
              y1='0'
              x2='125'
              y2='290.505'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED3_linear'
              x1='124.85'
              y1='22'
              x2='124.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED4_linear'
              x1='124.85'
              y1='22'
              x2='124.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED5_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED6_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED7_linear'
              x1='125.5'
              y1='27.5172'
              x2='125.5'
              y2='262.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED8_linear'
              x1='5.1251'
              y1='48.8103'
              x2='122.798'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED9_linear'
              x1='237.108'
              y1='48.8102'
              x2='119.435'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED10_linear'
              x1='125.5'
              y1='131.741'
              x2='125.5'
              y2='258.379'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintILOCKED11_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

const TechII = ({
  size = 'sm',
  shadow = true,
  locked = false,
  tech = '',
  level = 'I'
}: TechProps) => {
  const { wrapper, wrapperLogo } = useStyles({
    width: BadgesSize[size].img[level].width,
    height: BadgesSize[size].img[level].height,
    top: BadgesSize[size].img[level].top,
    left: BadgesSize[size].img[level].left
  })

  return (
    <div className={wrapper}>
      {tech !== '' && (
        <>
          {!locked && (
            <div className={wrapperLogo}>
              <TechLogo tech={tech} type='II' />
            </div>
          )}
        </>
      )}
      {!locked ? (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 374 458'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Tech-II'>
            <g id='container-shadow' filter={shadow ? 'url(#filterII0_dd)' : ''}>
              <g id='container-flags'>
                <g id='Group 307'>
                  <path
                    id='Vector 301'
                    d='M90 335.699V224.961H285V334.732C285 335.764 284.448 336.717 283.553 337.231L187.7 392.237C186.808 392.749 185.712 392.747 184.822 392.232L91.4384 338.193C90.5482 337.678 90 336.728 90 335.699Z'
                    fill='#84B7C4'
                  />
                  <path
                    id='Intersect'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M146.675 224.961V370.157L91.4384 338.193C90.5482 337.678 90 336.728 90 335.699V224.961H146.675Z'
                    fill='#6B9BAA'
                  />
                  <path
                    id='Intersect_2'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M144.753 369.046V224.961H146.675V370.158L144.753 369.046Z'
                    fill='#B0D2DD'
                  />
                  <path
                    id='Intersect_3'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M228.325 224V369.197L283.562 337.233C284.452 336.718 285 335.767 285 334.739V224H228.325Z'
                    fill='#6B9BAA'
                  />
                  <path
                    id='Intersect_4'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M230.247 368.085V224H228.325V369.197L230.247 368.085Z'
                    fill='#B0D2DD'
                  />
                </g>
              </g>
              <g id='body-shadow' filter={shadow ? 'url(#filterII1_d)' : ''}>
                <g id='container-body'>
                  <g id='Group 169'>
                    <g id='Group 166'>
                      <path
                        id='Union'
                        d='M178.876 59.4192L70.8764 118.17C65.4056 121.146 62 126.875 62 133.103L62 267.402C62 273.63 65.4055 279.359 70.8764 282.335L178.876 341.086C183.942 343.841 190.058 343.841 195.124 341.086L303.124 282.335C308.594 279.359 312 273.629 312 267.402L312 133.103C312 126.875 308.594 121.146 303.124 118.17L195.124 59.4192C190.058 56.6637 183.942 56.6637 178.876 59.4192Z'
                        fill='url(#paintII0_linear)'
                      />
                      <path
                        id='Union_2'
                        d='M178.757 81.4025L89.843 129.771C84.3928 132.736 81 138.444 81 144.648L81 255.352C81 261.556 84.3927 267.264 89.843 270.229L178.757 318.597C183.803 321.343 189.897 321.343 194.943 318.597L283.857 270.229C289.308 267.264 292.7 261.556 292.7 255.352L292.7 144.648C292.7 138.444 289.308 132.736 283.857 129.771L194.943 81.4025C189.897 78.6575 183.803 78.6575 178.757 81.4025Z'
                        fill='url(#paintII1_linear)'
                      />
                      <g id='Union_3' filter='url(#filterII2_f)'>
                        <path
                          d='M178.757 81.4025L89.843 129.771C84.3928 132.736 81 138.444 81 144.648L81 255.352C81 261.556 84.3927 267.264 89.843 270.229L178.757 318.597C183.803 321.343 189.897 321.343 194.943 318.597L283.857 270.229C289.308 267.264 292.7 261.556 292.7 255.352L292.7 144.648C292.7 138.444 289.308 132.736 283.857 129.771L194.943 81.4025C189.897 78.6575 183.803 78.6575 178.757 81.4025Z'
                          stroke='url(#paintII2_linear)'
                        />
                      </g>
                      <g id='Mask Group' opacity='0.5'>
                        <mask
                          id='maskII0'
                          maskUnits='userSpaceOnUse'
                          x='90'
                          y='89'
                          width='195'
                          height='223'
                        >
                          <path
                            id='Union_4'
                            d='M179.807 91.1811L98.417 135.417C93.2296 138.236 90 143.667 90 149.571L90 250.819C90 256.723 93.2296 262.154 98.4169 264.974L179.807 309.209C184.604 311.816 190.396 311.816 195.193 309.209L276.583 264.974C281.77 262.154 285 256.723 285 250.819L285 149.571C285 143.667 281.77 138.236 276.583 135.417L195.193 91.1811C190.396 88.5738 184.604 88.5738 179.807 91.1811Z'
                            fill='#A6D3DE'
                          />
                        </mask>
                        <g mask='url(#maskII0)'>
                          <path
                            id='Innershadow0.1fill'
                            d='M179.807 91.1811L98.417 135.417C93.2296 138.236 90 143.667 90 149.571L90 250.819C90 256.723 93.2296 262.154 98.4169 264.974L179.807 309.209C184.604 311.816 190.396 311.816 195.193 309.209L276.583 264.974C281.77 262.154 285 256.723 285 250.819L285 149.571C285 143.667 281.77 138.236 276.583 135.417L195.193 91.1811C190.396 88.5738 184.604 88.5738 179.807 91.1811Z'
                            fill='url(#paintII3_radial)'
                          />
                          <g id='Group 57'>
                            <path
                              id='Vector 5'
                              opacity='0.5'
                              d='M171.201 317.862L167.328 82.5172H207.672L203.799 317.862H171.201Z'
                              fill='url(#paintII4_linear)'
                            />
                            <path
                              id='Vector 6'
                              opacity='0.5'
                              d='M170.682 315.774L49.6553 113.896L84.5949 93.724L198.913 299.475L170.682 315.774Z'
                              fill='url(#paintII5_linear)'
                            />
                            <path
                              id='Vector 7'
                              opacity='0.5'
                              d='M167.32 299.475L281.638 93.724L316.578 113.896L195.551 315.774L167.32 299.475Z'
                              fill='url(#paintII6_linear)'
                            />
                            <rect
                              id='Rectangle 3'
                              x='90'
                              y='186.741'
                              width='195'
                              height='126.638'
                              fill='url(#paintII7_linear)'
                            />
                          </g>
                          <g id='Innershadow0.1fill_2' filter='url(#filterII3_i)'>
                            <path
                              d='M179.807 91.1811L98.417 135.417C93.2296 138.236 90 143.667 90 149.571L90 250.819C90 256.723 93.2296 262.154 98.4169 264.974L179.807 309.209C184.604 311.816 190.396 311.816 195.193 309.209L276.583 264.974C281.77 262.154 285 256.723 285 250.819L285 149.571C285 143.667 281.77 138.236 276.583 135.417L195.193 91.1811C190.396 88.5738 184.604 88.5738 179.807 91.1811Z'
                              fill='#AFF5F1'
                              fillOpacity='0.03'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterII0_dd'
              x='0.803555'
              y='0.235887'
              width='372.393'
              height='457.66'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='10.1994' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.558594 0 0 0 0 0.869297 0 0 0 0 0.9375 0 0 0 0.04 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4.07976' />
              <feGaussianBlur stdDeviation='30.5982' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.670833 0 0 0 0 1 0 0 0 0 0.94075 0 0 0 0.33 0'
              />
              <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterII1_d'
              x='56'
              y='57.3526'
              width='262'
              height='299.8'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='8' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.208958 0 0 0 0 0.389892 0 0 0 0 0.491667 0 0 0 0.54 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterII2_f'
              x='80.2'
              y='78.5437'
              width='213.3'
              height='242.913'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterII3_i'
              x='90'
              y='89.2256'
              width='195'
              height='221.939'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.37849 0 0 0 0 0.586923 0 0 0 0 0.704167 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintII0_linear'
              x1='134.5'
              y1='90'
              x2='247'
              y2='313.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8ECF1' />
              <stop offset='1' stopColor='#82B3BF' />
            </linearGradient>
            <linearGradient
              id='paintII1_linear'
              x1='133.5'
              y1='108.5'
              x2='230.5'
              y2='287.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#A1C9D3' />
              <stop offset='1' stopColor='#D0ECF2' />
            </linearGradient>
            <linearGradient
              id='paintII2_linear'
              x1='144'
              y1='102'
              x2='248.5'
              y2='290'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D0ECF2' />
              <stop offset='1' stopColor='#E6F8FC' />
            </linearGradient>
            <radialGradient
              id='paintII3_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(187.5 200.195) rotate(90) scale(113.195 97.5)'
            >
              <stop stopColor='#D0EBF2' />
              <stop offset='1' stopColor='#8DD3E2' />
            </radialGradient>
            <linearGradient
              id='paintII4_linear'
              x1='187.5'
              y1='82.5172'
              x2='187.5'
              y2='317.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintII5_linear'
              x1='67.1251'
              y1='103.81'
              x2='184.798'
              y2='307.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintII6_linear'
              x1='299.108'
              y1='103.81'
              x2='181.435'
              y2='307.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintII7_linear'
              x1='187.5'
              y1='241.655'
              x2='186.912'
              y2='305.533'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#EEFFFF' stopOpacity='0' />
              <stop offset='1' stopColor='#B5EBFB' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 250 339'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M28 282.361V169.961H223V281.401L124.26 338.064L28 282.361Z'
              fill='url(#paintIILOCKED0_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M84.6749 169.961V315.157L28 282.361V169.961H84.6749Z'
              fill='url(#paintIILOCKED1_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M82.7534 314.046V169.961H84.6746V315.158L82.7534 314.046Z'
              fill='url(#paintIILOCKED2_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M166.325 169V314.197L223 281.401V169H166.325Z'
              fill='url(#paintIILOCKED3_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M168.247 313.085V169H166.325V314.197L168.247 313.085Z'
              fill='url(#paintIILOCKED4_linear)'
            />
            <path
              d='M125 0L3.58116e-05 67.9987L0 222.506L125 290.505L250 222.506L250 67.9987L125 0Z'
              fill='url(#paintIILOCKED5_linear)'
            />
            <path
              d='M124.85 22L19 79.5814L19 210.419L124.85 268L230.7 210.419L230.7 79.5814L124.85 22Z'
              fill='url(#paintIILOCKED6_linear)'
            />
            <g filter='url(#filterIILOCKED0_f)'>
              <path
                d='M124.85 22L19 79.5814L19 210.419L124.85 268L230.7 210.419L230.7 79.5814L124.85 22Z'
                fill='url(#paintIILOCKED7_linear)'
              />
            </g>
            <g opacity='0.5'>
              <mask
                id='maskIILOCKED0'
                maskUnits='userSpaceOnUse'
                x='28'
                y='32'
                width='195'
                height='227'
              >
                <path
                  d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                  fill='url(#paintIILOCKED8_linear)'
                />
              </mask>
              <g mask='url(#maskIILOCKED0)'>
                <path
                  d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                  fill='url(#paintIILOCKED9_linear)'
                />
                <path
                  opacity='0.5'
                  d='M109.201 262.862L105.328 27.5172H145.672L141.799 262.862H109.201Z'
                  fill='url(#paintIILOCKED10_linear)'
                />
                <path
                  opacity='0.5'
                  d='M108.682 260.775L-12.3447 58.8965L22.5949 38.7241L136.913 244.475L108.682 260.775Z'
                  fill='url(#paintIILOCKED11_linear)'
                />
                <path
                  opacity='0.5'
                  d='M105.32 244.475L219.638 38.724L254.578 58.8964L133.551 260.774L105.32 244.475Z'
                  fill='url(#paintIILOCKED12_linear)'
                />
                <rect
                  x='28'
                  y='131.741'
                  width='195'
                  height='126.638'
                  fill='url(#paintIILOCKED13_linear)'
                />
                <g filter='url(#filterIILOCKED1_i)'>
                  <path
                    d='M125.5 32L28 84.9913L28 205.399L125.5 258.39L223 205.399L223 84.9913L125.5 32Z'
                    fill='url(#paintIILOCKED14_linear)'
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterIILOCKED0_f'
              x='18.7'
              y='21.7'
              width='212.3'
              height='246.6'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIILOCKED1_i'
              x='28'
              y='32'
              width='195'
              height='226.39'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.37849 0 0 0 0 0.586923 0 0 0 0 0.704167 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintIILOCKED0_linear'
              x1='125.5'
              y1='169.961'
              x2='125.5'
              y2='338.064'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED1_linear'
              x1='56.3374'
              y1='169.961'
              x2='56.3374'
              y2='315.157'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED2_linear'
              x1='83.714'
              y1='169.961'
              x2='83.714'
              y2='315.158'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED3_linear'
              x1='194.663'
              y1='169'
              x2='194.663'
              y2='314.197'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED4_linear'
              x1='167.286'
              y1='169'
              x2='167.286'
              y2='314.197'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED5_linear'
              x1='125'
              y1='0'
              x2='125'
              y2='290.505'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED6_linear'
              x1='124.85'
              y1='22'
              x2='124.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED7_linear'
              x1='124.85'
              y1='22'
              x2='124.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED8_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED9_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED10_linear'
              x1='125.5'
              y1='27.5172'
              x2='125.5'
              y2='262.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED11_linear'
              x1='5.1251'
              y1='48.8103'
              x2='122.798'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED12_linear'
              x1='237.108'
              y1='48.8102'
              x2='119.435'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED13_linear'
              x1='125.5'
              y1='131.741'
              x2='125.5'
              y2='258.379'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIILOCKED14_linear'
              x1='125.5'
              y1='32'
              x2='125.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

const TechIII = ({
  size = 'sm',
  shadow = true,
  animation = false,
  lights = true,
  locked = false,
  tech = '',
  level = 'I'
}: TechProps) => {
  const { wrapper, rotation, wrapperLogo } = useStyles({
    width: BadgesSize[size].img[level].width,
    height: BadgesSize[size].img[level].height,
    top: BadgesSize[size].img[level].top,
    left: BadgesSize[size].img[level].left
  })

  return (
    <div className={wrapper}>
      {tech !== '' && (
        <>
          {!locked && (
            <div className={wrapperLogo}>
              <TechLogo tech={tech} type='III' />
            </div>
          )}
        </>
      )}
      {!locked ? (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 428 481'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Tech-III'>
            {lights && (
              <g id='lights' className={animation ? rotation : ''}>
                <path
                  id='Vector 271'
                  d='M191.953 166.139L184.615 0H243.314L235.977 166.139H191.953Z'
                  fill='url(#paintIII0_linear)'
                />
                <path
                  id='Vector 264'
                  d='M260.609 213.636L408.159 290.351L378.81 341.186L238.597 251.762L260.609 213.636Z'
                  fill='url(#paintIII1_linear)'
                />
                <path
                  id='Vector 265'
                  d='M234.928 254.712L242.265 420.852H183.566L190.903 254.712H234.928Z'
                  fill='url(#paintIII2_linear)'
                />
                <path
                  id='Vector 267'
                  d='M188.562 252.289L48.3496 341.713L19 290.878L166.55 214.163L188.562 252.289Z'
                  fill='url(#paintIII3_linear)'
                />
                <path
                  id='Vector 274'
                  d='M260.609 207.477L408.159 130.762L378.81 79.9266L238.597 169.351L260.609 207.477Z'
                  fill='url(#paintIII4_linear)'
                />
                <path
                  id='Vector 275'
                  d='M188.562 168.825L48.3496 79.401L19 130.236L166.55 206.951L188.562 168.825Z'
                  fill='url(#paintIII5_linear)'
                />
              </g>
            )}
            <g id='container-shadow' filter={shadow ? 'url(#filterIII0_dd)' : ''}>
              <g id='point-left'>
                <path
                  id='Vector 312'
                  d='M63 170H99V255C76.5 255 63 239.094 63 226.17V170Z'
                  fill='url(#paintIII6_linear)'
                />
                <path
                  id='Vector 313'
                  d='M63 170H99V255C76.5 255 63 239.094 63 226.17V170Z'
                  stroke='url(#paintIII7_linear)'
                  strokeWidth='2'
                />
              </g>
              <g id='all'>
                <g id='pointer-left'>
                  <path
                    id='Vector 312_2'
                    d='M365 170H329V255C351.5 255 365 239.094 365 226.17V170Z'
                    fill='url(#paintIII8_linear)'
                  />
                  <path
                    id='Vector 313_2'
                    d='M365 170H329V255C351.5 255 365 239.094 365 226.17V170Z'
                    stroke='url(#paintIII9_linear)'
                    strokeWidth='2'
                  />
                </g>
                <g id='flgas'>
                  <g id='Group 309'>
                    <g id='Group 307'>
                      <g id='Group 310'>
                        <path
                          id='Vector 301'
                          d='M166.001 247H263.504V386.775L215.573 414.281C214.681 414.793 213.585 414.791 212.695 414.276L166.001 387.256V247Z'
                          fill='#BB9986'
                          stroke='url(#paintIII10_linear)'
                          strokeWidth='2'
                        />
                        <path
                          id='Intersect'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M159.001 247V384.043L118.424 360.239C117.542 359.721 117 358.775 117 357.753V247H159.001Z'
                          fill='#8C685C'
                          stroke='url(#paintIII11_linear)'
                          strokeWidth='2'
                        />
                        <path
                          id='Intersect_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M269.999 247V384.043L310.576 360.239C311.458 359.721 312 358.775 312 357.753V247H269.999Z'
                          fill='#8C685C'
                          stroke='url(#paintIII12_linear)'
                          strokeWidth='2'
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id='Vector 315'
                    d='M308.5 306.5V354C306.333 354.167 301.9 356 301.5 362L274 378V323.5'
                    stroke='url(#paintIII13_linear)'
                  />
                  <path
                    id='Union'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M170.5 333H169.5V382.424L169.918 382.493C171.391 382.739 172.65 383.094 173.729 384.06C174.813 385.03 175.777 386.671 176.515 389.621L176.567 389.829L213.868 411H215L215.28 410.916L252.433 389.829L252.485 389.621C253.223 386.671 254.187 385.03 255.271 384.06C256.35 383.094 257.609 382.739 259.082 382.493L259.5 382.424V333H258.5V381.581C257.12 381.84 255.781 382.262 254.604 383.315C253.342 384.444 252.325 386.243 251.568 389.17L214.868 410H214.132L177.432 389.17C176.675 386.243 175.658 384.444 174.396 383.315C173.219 382.262 171.88 381.84 170.5 381.581V333Z'
                    fill='url(#paintIII14_linear)'
                  />
                  <path
                    id='Vector 314'
                    d='M121 306.5V354C123.167 354.167 127.6 356 128 362L155.5 378V323.5'
                    stroke='url(#paintIII15_linear)'
                  />
                </g>
                <g id='body-shadow' filter={shadow ? 'url(#filterIII1_d)' : ''}>
                  <g id='container-body'>
                    <g id='Group 169'>
                      <g id='Group 166'>
                        <path
                          id='Union_2'
                          d='M205.876 72.4192L97.8764 131.17C92.4056 134.146 89 139.875 89 146.103L89 280.402C89 286.63 92.4055 292.359 97.8764 295.335L205.876 354.086C210.942 356.841 217.058 356.841 222.124 354.086L330.124 295.335C335.594 292.359 339 286.629 339 280.402L339 146.103C339 139.875 335.594 134.146 330.124 131.17L222.124 72.4192C217.058 69.6637 210.942 69.6637 205.876 72.4192Z'
                          fill='url(#paintIII16_linear)'
                        />
                        <path
                          id='Union_3'
                          d='M205.757 94.4025L116.843 142.771C111.393 145.736 108 151.444 108 157.648L108 268.352C108 274.556 111.393 280.264 116.843 283.229L205.757 331.597C210.803 334.343 216.897 334.343 221.943 331.597L310.857 283.229C316.308 280.264 319.7 274.556 319.7 268.352L319.7 157.648C319.7 151.444 316.308 145.736 310.857 142.771L221.943 94.4025C216.897 91.6575 210.803 91.6575 205.757 94.4025Z'
                          fill='url(#paintIII17_linear)'
                        />
                        <g id='Union_4' filter='url(#filterIII2_F)'>
                          <path
                            d='M205.757 94.4025L116.843 142.771C111.393 145.736 108 151.444 108 157.648L108 268.352C108 274.556 111.393 280.264 116.843 283.229L205.757 331.597C210.803 334.343 216.897 334.343 221.943 331.597L310.857 283.229C316.308 280.264 319.7 274.556 319.7 268.352L319.7 157.648C319.7 151.444 316.308 145.736 310.857 142.771L221.943 94.4025C216.897 91.6575 210.803 91.6575 205.757 94.4025Z'
                            stroke='url(#paintIII18_linear)'
                          />
                        </g>
                        <g id='Mask Group' opacity='0.5'>
                          <mask
                            id='maskIII0'
                            maskUnits='userSpaceOnUse'
                            x='117'
                            y='102'
                            width='195'
                            height='223'
                          >
                            <path
                              id='Union_5'
                              d='M206.807 104.181L125.417 148.417C120.23 151.236 117 156.667 117 162.571L117 263.819C117 269.723 120.23 275.154 125.417 277.974L206.807 322.209C211.604 324.816 217.396 324.816 222.193 322.209L303.583 277.974C308.77 275.154 312 269.723 312 263.819L312 162.571C312 156.667 308.77 151.236 303.583 148.417L222.193 104.181C217.396 101.574 211.604 101.574 206.807 104.181Z'
                              fill='#A6D3DE'
                            />
                          </mask>
                          <g mask='url(#maskIII0)'>
                            <path
                              id='Innershadow0.1fill'
                              d='M206.807 104.181L125.417 148.417C120.23 151.236 117 156.667 117 162.571L117 263.819C117 269.723 120.23 275.154 125.417 277.974L206.807 322.209C211.604 324.816 217.396 324.816 222.193 322.209L303.583 277.974C308.77 275.154 312 269.723 312 263.819L312 162.571C312 156.667 308.77 151.236 303.583 148.417L222.193 104.181C217.396 101.574 211.604 101.574 206.807 104.181Z'
                              fill='url(#paintIII19_radial)'
                            />
                            <g id='Group 57'>
                              <path
                                id='Vector 5'
                                opacity='0.5'
                                d='M198.201 330.862L194.328 95.5172H234.672L230.799 330.862H198.201Z'
                                fill='url(#paintIII20_linear)'
                              />
                              <path
                                id='Vector 6'
                                opacity='0.5'
                                d='M197.682 328.774L76.6553 126.896L111.595 106.724L225.913 312.475L197.682 328.774Z'
                                fill='url(#paintIII21_linear)'
                              />
                              <path
                                id='Vector 7'
                                opacity='0.5'
                                d='M194.32 312.475L308.638 106.724L343.578 126.896L222.551 328.774L194.32 312.475Z'
                                fill='url(#paintIII22_linear)'
                              />
                              <rect
                                id='Rectangle 3'
                                x='117'
                                y='199.741'
                                width='195'
                                height='126.638'
                                fill='url(#paintIII23_linear)'
                              />
                            </g>
                            <g id='Innershadow0.1fill_2' filter='url(#filterIII3_i)'>
                              <path
                                d='M206.807 104.181L125.417 148.417C120.23 151.236 117 156.667 117 162.571L117 263.819C117 269.723 120.23 275.154 125.417 277.974L206.807 322.209C211.604 324.816 217.396 324.816 222.193 322.209L303.583 277.974C308.77 275.154 312 269.723 312 263.819L312 162.571C312 156.667 308.77 151.236 303.583 148.417L222.193 104.181C217.396 101.574 211.604 101.574 206.807 104.181Z'
                                fill='#F5C4AF'
                                fillOpacity='0.03'
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterIII0_dd'
              x='0.803555'
              y='13.2359'
              width='426.393'
              height='467.704'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='10.1994' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.9375 0 0 0 0 0.695 0 0 0 0 0.558594 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4.07976' />
              <feGaussianBlur stdDeviation='30.5982' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 0.749833 0 0 0 0 0.670833 0 0 0 0.6 0'
              />
              <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIII1_d'
              x='83'
              y='70.3526'
              width='262'
              height='299.8'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='8' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.491667 0 0 0 0 0.276808 0 0 0 0 0.208958 0 0 0 0.54 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIII2_F'
              x='106.9'
              y='91.2437'
              width='213.9'
              height='243.513'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.3' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIII3_i'
              x='117'
              y='102.226'
              width='195'
              height='221.939'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.283333 0 0 0 0 0.158667 0 0 0 0 0.0566667 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintIII0_linear'
              x1='213.965'
              y1='0'
              x2='213.965'
              y2='166.139'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII1_linear'
              x1='393.484'
              y1='315.769'
              x2='249.603'
              y2='232.699'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII2_linear'
              x1='212.916'
              y1='420.852'
              x2='212.916'
              y2='254.712'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII3_linear'
              x1='33.6748'
              y1='316.296'
              x2='177.556'
              y2='233.226'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII4_linear'
              x1='393.484'
              y1='105.344'
              x2='249.603'
              y2='188.414'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII5_linear'
              x1='33.6748'
              y1='104.818'
              x2='177.556'
              y2='187.888'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFBEAA' stopOpacity='0' />
              <stop offset='1' stopColor='#FFC9AA' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIII6_linear'
              x1='81'
              y1='170'
              x2='81'
              y2='255'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#EFD9BD' />
              <stop offset='1' stopColor='#C39470' />
            </linearGradient>
            <linearGradient
              id='paintIII7_linear'
              x1='63'
              y1='170'
              x2='81'
              y2='255'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F3DDC4' />
              <stop offset='0.378992' stopColor='#F3DDC4' />
              <stop offset='0.46253' stopColor='#F3DDC4' />
              <stop offset='1' stopColor='#74523F' />
            </linearGradient>
            <linearGradient
              id='paintIII8_linear'
              x1='347'
              y1='170'
              x2='347'
              y2='255'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#EFD9BD' />
              <stop offset='1' stopColor='#C39470' />
            </linearGradient>
            <linearGradient
              id='paintIII9_linear'
              x1='365'
              y1='170'
              x2='347'
              y2='255'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F3DDC4' />
              <stop offset='0.378992' stopColor='#F3DDC4' />
              <stop offset='0.46253' stopColor='#F3DDC4' />
              <stop offset='1' stopColor='#74523F' />
            </linearGradient>
            <linearGradient
              id='paintIII10_linear'
              x1='166'
              y1='377'
              x2='264'
              y2='385.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8B697' />
              <stop offset='0.374385' stopColor='#F0D6BD' />
              <stop offset='0.71988' stopColor='#C89E78' />
              <stop offset='0.9381' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII11_linear'
              x1='116.999'
              y1='352.977'
              x2='159.443'
              y2='354.923'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8B697' />
              <stop offset='0.374385' stopColor='#F0D6BD' />
              <stop offset='0.71988' stopColor='#C89E78' />
              <stop offset='0.9381' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII12_linear'
              x1='312.001'
              y1='352.977'
              x2='269.557'
              y2='354.923'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8B697' />
              <stop offset='0.374385' stopColor='#F0D6BD' />
              <stop offset='0.71988' stopColor='#C89E78' />
              <stop offset='0.9381' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII13_linear'
              x1='308.501'
              y1='361.792'
              x2='273.745'
              y2='364.3'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8B697' />
              <stop offset='0.374385' stopColor='#F0D6BD' />
              <stop offset='0.71988' stopColor='#C89E78' />
              <stop offset='0.9381' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII14_linear'
              x1='171.5'
              y1='356'
              x2='252'
              y2='389'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.192454' stopColor='#DFCBB9' />
              <stop offset='0.475371' stopColor='#D8B290' />
              <stop offset='0.678187' stopColor='#DEBFA4' />
              <stop offset='0.866423' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII15_linear'
              x1='120.999'
              y1='361.792'
              x2='155.755'
              y2='364.3'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D8B697' />
              <stop offset='0.374385' stopColor='#F0D6BD' />
              <stop offset='0.71988' stopColor='#C89E78' />
              <stop offset='0.9381' stopColor='#DFCBB9' />
            </linearGradient>
            <linearGradient
              id='paintIII16_linear'
              x1='161.5'
              y1='103'
              x2='274'
              y2='326.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F1DCC1' />
              <stop offset='1' stopColor='#BD8A65' />
            </linearGradient>
            <linearGradient
              id='paintIII17_linear'
              x1='160.5'
              y1='121.5'
              x2='257.5'
              y2='300.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#BF8E69' />
              <stop offset='1' stopColor='#E4C196' />
            </linearGradient>
            <linearGradient
              id='paintIII18_linear'
              x1='171'
              y1='115'
              x2='275.5'
              y2='303'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#EBD4B7' />
              <stop offset='1' stopColor='#FFE3CE' />
            </linearGradient>
            <radialGradient
              id='paintIII19_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(214.5 213.195) rotate(90) scale(113.195 97.5)'
            >
              <stop stopColor='#E3C29C' />
              <stop offset='1' stopColor='#D1A479' />
            </radialGradient>
            <linearGradient
              id='paintIII20_linear'
              x1='214.5'
              y1='95.5172'
              x2='214.5'
              y2='330.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIII21_linear'
              x1='94.1251'
              y1='116.81'
              x2='211.798'
              y2='320.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIII22_linear'
              x1='326.108'
              y1='116.81'
              x2='208.435'
              y2='320.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIII23_linear'
              x1='214.5'
              y1='254.655'
              x2='213.912'
              y2='318.533'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.291667' stopColor='#FFFAF7' stopOpacity='0' />
              <stop offset='1' stopColor='#E4CBAD' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 302 348'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M0 102H36V187C13.5 187 0 171.094 0 158.17V102Z'
              fill='url(#paintIIILOCKED0_linear)'
            />
            <path
              d='M0 102H36V187C13.5 187 0 171.094 0 158.17V102Z'
              fill='url(#paintIIILOCKED1_linear)'
            />
            <path
              d='M302 102H266V187C288.5 187 302 171.094 302 158.17V102Z'
              fill='url(#paintIIILOCKED2_linear)'
            />
            <path
              d='M302 102H266V187C288.5 187 302 171.094 302 158.17V102Z'
              fill='url(#paintIIILOCKED3_linear)'
            />
            <path
              d='M103.001 179H200.504V318.775L151.132 347.108L103.001 319.256V179Z'
              fill='url(#paintIIILOCKED4_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M96.0011 179V316.043L54 291.403V179H96.0011Z'
              fill='url(#paintIIILOCKED5_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M206.999 179V316.043L249 291.403V179H206.999Z'
              fill='url(#paintIIILOCKED6_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M107.5 265H106.5V314.424L106.918 314.493C108.391 314.739 109.65 315.094 110.729 316.06C111.813 317.03 112.777 318.671 113.515 321.621L113.567 321.829L150.868 343H152L152.28 342.916L189.433 321.829L189.485 321.621C190.223 318.671 191.187 317.03 192.271 316.06C193.35 315.094 194.609 314.739 196.082 314.493L196.5 314.424V265H195.5V313.581C194.12 313.84 192.781 314.262 191.604 315.315C190.342 316.444 189.325 318.243 188.568 321.17L151.868 342H151.132L114.432 321.17C113.675 318.243 112.658 316.444 111.396 315.315C110.219 314.262 108.88 313.84 107.5 313.581V265Z'
              fill='url(#paintIIILOCKED7_linear)'
            />
            <path
              d='M151 0L26 67.9987L26 222.506L151 290.505L276 222.506L276 67.9987L151 0Z'
              fill='url(#paintIIILOCKED8_linear)'
            />
            <path
              d='M150.85 22L45 79.5814L45 210.419L150.85 268L256.7 210.419L256.7 79.5814L150.85 22Z'
              fill='url(#paintIIILOCKED9_linear)'
            />
            <g filter='url(#filterIIILOCKED0_f)'>
              <path
                d='M150.85 22L45 79.5814L45 210.419L150.85 268L256.7 210.419L256.7 79.5814L150.85 22Z'
                fill='url(#paintIIILOCKED10_linear)'
              />
            </g>
            <g opacity='0.5'>
              <mask
                id='maskIIILOCKED0'
                maskUnits='userSpaceOnUse'
                x='54'
                y='32'
                width='195'
                height='227'
              >
                <path
                  d='M151.5 32L54 84.9913L54 205.399L151.5 258.39L249 205.399L249 84.9913L151.5 32Z'
                  fill='url(#paintIIILOCKED11_linear)'
                />
              </mask>
              <g mask='url(#maskIIILOCKED0)'>
                <path
                  d='M151.5 32L54 84.9913L54 205.399L151.5 258.39L249 205.399L249 84.9913L151.5 32Z'
                  fill='url(#paintIIILOCKED12_linear)'
                />
                <path
                  opacity='0.5'
                  d='M135.201 262.862L131.328 27.5172H171.672L167.799 262.862H135.201Z'
                  fill='url(#paintIIILOCKED13_linear)'
                />
                <path
                  opacity='0.5'
                  d='M134.682 260.775L13.6553 58.8965L48.5949 38.7241L162.913 244.475L134.682 260.775Z'
                  fill='url(#paintIIILOCKED14_linear)'
                />
                <path
                  opacity='0.5'
                  d='M131.32 244.475L245.638 38.724L280.578 58.8964L159.551 260.774L131.32 244.475Z'
                  fill='url(#paintIIILOCKED15_linear)'
                />
                <rect
                  x='54'
                  y='131.741'
                  width='195'
                  height='126.638'
                  fill='url(#paintIIILOCKED16_linear)'
                />
                <path
                  d='M151.5 32L54 84.9913L54 205.399L151.5 258.39L249 205.399L249 84.9913L151.5 32Z'
                  fill='url(#paintIIILOCKED17_linear)'
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterIIILOCKED0_f'
              x='44.4'
              y='21.4'
              width='212.9'
              height='247.2'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.3' result='effect1_foregroundBlur' />
            </filter>
            <linearGradient
              id='paintIIILOCKED0_linear'
              x1='18'
              y1='102'
              x2='18'
              y2='187'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED1_linear'
              x1='18'
              y1='102'
              x2='18'
              y2='187'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED2_linear'
              x1='284'
              y1='102'
              x2='284'
              y2='187'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED3_linear'
              x1='284'
              y1='102'
              x2='284'
              y2='187'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED4_linear'
              x1='151.753'
              y1='179'
              x2='151.753'
              y2='347.108'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED5_linear'
              x1='75.0006'
              y1='179'
              x2='75.0006'
              y2='316.043'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED6_linear'
              x1='227.999'
              y1='179'
              x2='227.999'
              y2='316.043'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED7_linear'
              x1='151.5'
              y1='265'
              x2='151.5'
              y2='343'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED8_linear'
              x1='151'
              y1='0'
              x2='151'
              y2='290.505'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED9_linear'
              x1='150.85'
              y1='22'
              x2='150.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED10_linear'
              x1='150.85'
              y1='22'
              x2='150.85'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED11_linear'
              x1='151.5'
              y1='32'
              x2='151.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED12_linear'
              x1='151.5'
              y1='32'
              x2='151.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED13_linear'
              x1='151.5'
              y1='27.5172'
              x2='151.5'
              y2='262.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED14_linear'
              x1='31.1251'
              y1='48.8103'
              x2='148.798'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED15_linear'
              x1='263.108'
              y1='48.8102'
              x2='145.435'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED16_linear'
              x1='151.5'
              y1='131.741'
              x2='151.5'
              y2='258.379'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIIILOCKED17_linear'
              x1='151.5'
              y1='32'
              x2='151.5'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

const TechIV = ({
  size = 'sm',
  shadow = true,
  animation = false,
  lights = true,
  locked = false,
  tech = '',
  level = 'I'
}: TechProps) => {
  const { wrapper, rotation, wrapperLogo } = useStyles({
    width: BadgesSize[size].img[level].width,
    height: BadgesSize[size].img[level].height,
    top: BadgesSize[size].img[level].top,
    left: BadgesSize[size].img[level].left
  })

  return (
    <div className={wrapper}>
      {tech !== '' && (
        <>
          {!locked && (
            <div className={wrapperLogo}>
              <TechLogo tech={tech} type='IV' />
            </div>
          )}
        </>
      )}
      {!locked ? (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 536 478'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Tech-IV'>
            <g id='container-1'>
              {lights && (
                <g id='aro' className={animation ? rotation : ''}>
                  <g id='Ellipse 19' opacity='0.5' filter='url(#filterIV0_f)'>
                    <circle cx='268.101' cy='38.011' r='12.6067' fill='url(#paintIV0_radial)' />
                  </g>
                  <path
                    id='Ellipse 14 (Stroke)'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M266 406.408C366.956 406.408 448.798 324.567 448.798 223.61C448.798 122.654 366.956 40.8126 266 40.8126C165.044 40.8126 83.2022 122.654 83.2022 223.61C83.2022 324.567 165.044 406.408 266 406.408ZM266 410.61C369.277 410.61 453 326.888 453 223.61C453 120.333 369.277 36.6104 266 36.6104C162.723 36.6104 79 120.333 79 223.61C79 326.888 162.723 410.61 266 410.61Z'
                    fill='url(#paintIV1_linear)'
                  />
                  <g id='Star 31' filter='url(#filterIV1_f)'>
                    <path
                      d='M268.101 17L269.903 36.0803L287.712 38.0112L269.903 39.9422L268.101 59.0225L266.299 39.9422L248.491 38.0112L266.299 36.0803L268.101 17Z'
                      fill='white'
                    />
                  </g>
                </g>
              )}
              <g id='container'>
                {lights && (
                  <g id='lighs' className={animation ? rotation : ''}>
                    <path
                      id='Vector 271'
                      d='M244.953 166.139L237.615 0H296.314L288.977 166.139H244.953Z'
                      fill='url(#paintIV2_linear)'
                    />
                    <path
                      id='Vector 264'
                      d='M313.609 213.636L461.159 290.351L431.81 341.186L291.597 251.762L313.609 213.636Z'
                      fill='url(#paintIV3_linear)'
                    />
                    <path
                      id='Vector 265'
                      d='M287.928 254.712L295.265 420.852H236.566L243.903 254.712H287.928Z'
                      fill='url(#paintIV4_linear)'
                    />
                    <path
                      id='Vector 267'
                      d='M241.562 252.289L101.35 341.713L72 290.878L219.55 214.163L241.562 252.289Z'
                      fill='url(#paintIV5_linear)'
                    />
                    <path
                      id='Vector 274'
                      d='M313.609 207.477L461.159 130.762L431.809 79.9266L291.597 169.351L313.609 207.477Z'
                      fill='url(#paintIV6_linear)'
                    />
                    <path
                      id='Vector 275'
                      d='M241.562 168.825L101.35 79.401L72 130.236L219.55 206.951L241.562 168.825Z'
                      fill='url(#paintIV7_linear)'
                    />
                  </g>
                )}

                <g id='body'>
                  <g id='body-shadow' filter={shadow ? 'url(#filterIV2_dd)' : ''}>
                    <g id='ala-left'>
                      <g id='Group 313'>
                        <path
                          id='Vector 312'
                          d='M160.5 190.294L160.5 149L63 149C63 174.809 81.2456 190.294 96.0702 190.294L160.5 190.294Z'
                          fill='url(#paintIV8_linear)'
                        />
                        <path
                          id='Vector 313'
                          d='M160.5 190.294L160.5 149L63 149C63 174.809 81.2456 190.294 96.0702 190.294L160.5 190.294Z'
                          stroke='url(#paintIV9_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                      <g id='Group 314'>
                        <path
                          id='Vector 312_2'
                          d='M194.912 227L194.912 185.706L97.4118 185.706C97.4118 211.515 115.657 227 130.482 227L194.912 227Z'
                          fill='url(#paintIV10_linear)'
                        />
                        <path
                          id='Vector 313_2'
                          d='M194.912 227L194.912 185.706L97.4118 185.706C97.4118 211.515 115.657 227 130.482 227L194.912 227Z'
                          stroke='url(#paintIV11_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                    </g>
                    <g id='ala-right'>
                      <g id='Group 313_2'>
                        <path
                          id='Vector 312_3'
                          d='M375.323 190.294L375.323 149L472.823 149C472.823 174.809 454.578 190.294 439.753 190.294L375.323 190.294Z'
                          fill='url(#paintIV12_linear)'
                        />
                        <path
                          id='Vector 313_3'
                          d='M375.323 190.294L375.323 149L472.823 149C472.823 174.809 454.578 190.294 439.753 190.294L375.323 190.294Z'
                          stroke='url(#paintIV13_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                      <g id='Group 314_2'>
                        <path
                          id='Vector 312_4'
                          d='M340.911 227L340.911 185.706L438.411 185.706C438.411 211.515 420.166 227 405.341 227L340.911 227Z'
                          fill='url(#paintIV14_linear)'
                        />
                        <path
                          id='Vector 313_4'
                          d='M340.911 227L340.911 185.706L438.411 185.706C438.411 211.515 420.166 227 405.341 227L340.911 227Z'
                          stroke='url(#paintIV15_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                    </g>
                    <g id='flags'>
                      <g id='Group 324'>
                        <g id='Group 321'>
                          <g id='Intersect' filter={shadow ? 'url(#filterIV3_d)' : ''}>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M211.912 277V365.842L241.438 381.708C242.105 382.066 242.912 381.587 242.912 380.831C242.909 347.726 242.941 309.945 242.941 277H211.912Z'
                              fill='#9CB7ED'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M211.912 277V365.842L241.438 381.708C242.105 382.066 242.912 381.587 242.912 380.831C242.909 347.726 242.941 309.945 242.941 277H211.912Z'
                              stroke='url(#paintIV16_linear)'
                            />
                          </g>
                          <g id='Group 320'>
                            <path
                              id='Vector 251 (Stroke)'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M214.479 361.864V327H213.912V362.336L214.149 362.376C214.932 362.506 215.804 362.97 216.516 363.648C217.227 364.325 217.753 365.191 217.884 366.105L217.905 366.257L240.844 378V338.632H240.277V377.108L218.42 365.871C218.233 364.861 217.647 363.942 216.907 363.237C216.197 362.561 215.324 362.061 214.479 361.864Z'
                              fill='url(#paintIV17_linear)'
                            />
                            <path
                              id='Vector 252 (Stroke)'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M240.244 375.033C240.856 374 240.891 372.534 240.843 371.586L240.277 371.615C240.324 372.558 240.274 373.87 239.756 374.745C239.505 375.169 239.15 375.482 238.639 375.61C238.119 375.741 237.4 375.69 236.411 375.305L236.205 375.834C237.257 376.243 238.102 376.329 238.777 376.16C239.46 375.988 239.931 375.564 240.244 375.033Z'
                              fill='#E3EFFB'
                            />
                          </g>
                        </g>
                        <g id='Group 323'>
                          <g id='Group 316'>
                            <g id='Intersect_2' filter={shadow ? 'url(#filterIV4_d)' : ''}>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M206.926 363.842V277H170.912V344.465C170.912 345.614 171.568 346.661 172.601 347.163L206.926 363.842Z'
                                fill='#C6D9FF'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M206.926 363.842V277H170.912V344.465C170.912 345.614 171.568 346.661 172.601 347.163L206.926 363.842Z'
                                stroke='url(#paintIV18_linear)'
                              />
                            </g>
                          </g>
                          <g id='Group 322'>
                            <path
                              id='Vector 251 (Stroke)_2'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M173.581 342.139V301H172.912V342.697L173.191 342.743C174.116 342.897 175.145 343.444 175.985 344.244C176.824 345.043 177.445 346.066 177.599 347.144L177.624 347.323L204.692 360V314.726H204.023V358.948L178.231 346.868C178.011 345.676 177.319 344.592 176.446 343.76C175.608 342.962 174.578 342.372 173.581 342.139Z'
                              fill='url(#paintIV19_linear)'
                            />
                            <path
                              id='Vector 252 (Stroke)_2'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M203.985 356.5C204.706 355.28 204.747 353.55 204.692 352.432L204.023 352.466C204.079 353.578 204.02 355.126 203.409 356.159C203.113 356.66 202.693 357.028 202.09 357.18C201.476 357.334 200.628 357.274 199.461 356.82L199.218 357.444C200.46 357.927 201.457 358.029 202.253 357.829C203.06 357.626 203.615 357.125 203.985 356.5Z'
                              fill='#F2F9FF'
                            />
                          </g>
                        </g>
                      </g>
                      <g id='Group 325'>
                        <g id='Group 321_2'>
                          <g id='Intersect_3' filter={shadow ? 'url(#filterIV5_d)' : ''}>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M324.94 277V365.842L295.414 381.708C294.748 382.066 293.941 381.587 293.941 380.831C293.944 347.726 293.912 309.945 293.912 277H324.94Z'
                              fill='#9CB7ED'
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M324.94 277V365.842L295.414 381.708C294.748 382.066 293.941 381.587 293.941 380.831C293.944 347.726 293.912 309.945 293.912 277H324.94Z'
                              stroke='url(#paintIV20_linear)'
                            />
                          </g>
                          <g id='Group 320_2'>
                            <path
                              id='Vector 251 (Stroke)_3'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M322.374 361.864V327H322.941V362.336L322.704 362.376C321.92 362.506 321.049 362.97 320.337 363.648C319.626 364.325 319.099 365.191 318.969 366.105L318.947 366.257L296.009 378V338.632H296.576V377.108L318.433 365.871C318.619 364.861 319.206 363.942 319.946 363.237C320.656 362.561 321.528 362.061 322.374 361.864Z'
                              fill='url(#paintIV21_linear)'
                            />
                            <path
                              id='Vector 252 (Stroke)_3'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M296.608 375.033C295.997 374 295.962 372.534 296.009 371.586L296.575 371.615C296.528 372.558 296.578 373.87 297.096 374.745C297.347 375.169 297.703 375.482 298.214 375.61C298.734 375.741 299.453 375.69 300.442 375.305L300.647 375.834C299.595 376.243 298.75 376.329 298.076 376.16C297.392 375.988 296.922 375.564 296.608 375.033Z'
                              fill='#E3EFFB'
                            />
                          </g>
                        </g>
                        <g id='Group 323_2'>
                          <g id='Group 316_2'>
                            <g id='Intersect_4' filter={shadow ? 'url(#filterIV6_d)' : ''}>
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M329.926 363.842V277H365.94V344.465C365.94 345.614 365.285 346.661 364.252 347.163L329.926 363.842Z'
                                fill='#C6D9FF'
                              />
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M329.926 363.842V277H365.94V344.465C365.94 345.614 365.285 346.661 364.252 347.163L329.926 363.842Z'
                                stroke='url(#paintIV22_linear)'
                              />
                            </g>
                          </g>
                          <g id='Group 322_2'>
                            <path
                              id='Vector 251 (Stroke)_4'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M363.272 342.139V301H363.941V342.697L363.661 342.743C362.736 342.897 361.708 343.444 360.868 344.244C360.029 345.043 359.408 346.066 359.254 347.144L359.228 347.323L332.161 360V314.726H332.83V358.948L358.621 346.868C358.841 345.676 359.533 344.592 360.407 343.76C361.244 342.962 362.274 342.372 363.272 342.139Z'
                              fill='url(#paintIV23_linear)'
                            />
                            <path
                              id='Vector 252 (Stroke)_4'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M332.868 356.5C332.146 355.28 332.105 353.55 332.161 352.432L332.829 352.466C332.774 353.578 332.833 355.126 333.444 356.159C333.74 356.66 334.159 357.028 334.762 357.18C335.376 357.334 336.225 357.274 337.392 356.82L337.634 357.444C336.393 357.927 335.395 358.029 334.599 357.829C333.793 357.626 333.238 357.125 332.868 356.5Z'
                              fill='#F2F9FF'
                            />
                          </g>
                        </g>
                      </g>
                      <g id='Group 329'>
                        <g id='Vector 301' filter={shadow ? 'url(#filterIV7_d)' : ''}>
                          <path
                            d='M233.912 251H302.912V390.686L269.476 411.083C268.553 411.646 267.393 411.645 266.471 411.081L233.912 391.166V251Z'
                            fill='#6A88C4'
                          />
                          <path
                            d='M233.912 251H302.912V390.686L269.476 411.083C268.553 411.646 267.393 411.645 266.471 411.081L233.912 391.166V251Z'
                            stroke='url(#paintIV24_linear)'
                            strokeWidth='2'
                          />
                        </g>
                        <path
                          id='Vector 318 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M237.412 338H238.412V388.221L267.914 406.414L297.912 388.218V338H298.912V388.782L267.909 407.586L237.412 388.779V338Z'
                          fill='url(#paintIV25_linear)'
                        />
                        <g id='Group 326'>
                          <path
                            id='Vector 255 (Stroke)'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M268.344 386V404.143H267.474V386H268.344Z'
                            fill='url(#paintIV26_linear)'
                          />
                          <path
                            id='Vector 256 (Stroke)'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M265.304 397.704C263.574 399.7 261.466 400.144 260.015 399.902L260.158 399.044C261.314 399.237 263.118 398.899 264.647 397.135C266.183 395.364 267.475 392.114 267.475 386.434H268.344C268.344 392.229 267.028 395.716 265.304 397.704Z'
                            fill='url(#paintIV27_linear)'
                          />
                          <path
                            id='Vector 257 (Stroke)'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M270.515 397.704C272.245 399.7 274.353 400.144 275.804 399.902L275.662 399.044C274.505 399.237 272.701 398.899 271.172 397.135C269.636 395.364 268.344 392.114 268.344 386.434H267.475C267.475 392.229 268.791 395.716 270.515 397.704Z'
                            fill='url(#paintIV28_linear)'
                          />
                          <path
                            id='Vector 254 (Stroke)'
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M267.727 404.538L257.912 399.039L260.085 399.039L267.909 403.666L275.731 399H277.649L268.088 404.539C267.973 404.591 267.841 404.591 267.727 404.538Z'
                            fill='url(#paintIV29_linear)'
                          />
                        </g>
                      </g>
                    </g>
                    <g id='body-shadow-1' filter={shadow ? 'url(#filterIV8_d)' : ''}>
                      <g id='Group 206'>
                        <g id='Group 169'>
                          <g id='Group 166'>
                            <path
                              id='Union'
                              d='M259.788 69.4192L151.788 128.17C146.317 131.146 142.912 136.875 142.912 143.103L142.912 277.402C142.912 283.63 146.317 289.359 151.788 292.335L259.788 351.086C264.853 353.841 270.97 353.841 276.035 351.086L384.035 292.335C389.506 289.359 392.912 283.629 392.912 277.402L392.912 143.103C392.912 136.875 389.506 131.146 384.035 128.17L276.035 69.4192C270.97 66.6637 264.853 66.6637 259.788 69.4192Z'
                              fill='url(#paintIV30_linear)'
                            />
                            <path
                              id='Union_2'
                              d='M259.669 91.4025L170.755 139.771C165.304 142.736 161.912 148.444 161.912 154.648L161.912 265.352C161.912 271.556 165.304 277.264 170.755 280.229L259.669 328.597C264.715 331.343 270.809 331.343 275.855 328.597L364.769 280.229C370.219 277.264 373.612 271.556 373.612 265.352L373.612 154.648C373.612 148.444 370.219 142.736 364.769 139.771L275.855 91.4025C270.809 88.6575 264.715 88.6575 259.669 91.4025Z'
                              fill='url(#paintIV31_linear)'
                            />
                            <g id='Union_3' filter='url(#filterIV9_f)'>
                              <path
                                d='M259.669 91.4025L170.755 139.771C165.304 142.736 161.912 148.444 161.912 154.648L161.912 265.352C161.912 271.556 165.304 277.264 170.755 280.229L259.669 328.597C264.715 331.343 270.809 331.343 275.855 328.597L364.769 280.229C370.219 277.264 373.612 271.556 373.612 265.352L373.612 154.648C373.612 148.444 370.219 142.736 364.769 139.771L275.855 91.4025C270.809 88.6575 264.715 88.6575 259.669 91.4025Z'
                                stroke='url(#paintIV32_linear)'
                              />
                            </g>
                            <g id='Mask Group' opacity='0.5'>
                              <mask
                                id='maskIV0'
                                maskUnits='userSpaceOnUse'
                                x='170'
                                y='99'
                                width='196'
                                height='223'
                              >
                                <path
                                  id='Union_4'
                                  d='M260.719 101.181L179.329 145.417C174.141 148.236 170.912 153.667 170.912 159.571L170.912 260.819C170.912 266.723 174.141 272.154 179.329 274.974L260.719 319.209C265.516 321.816 271.307 321.816 276.105 319.209L357.495 274.974C362.682 272.154 365.912 266.723 365.912 260.819L365.912 159.571C365.912 153.667 362.682 148.236 357.495 145.417L276.105 101.181C271.307 98.5738 265.516 98.5738 260.719 101.181Z'
                                  fill='#A6D3DE'
                                />
                              </mask>
                              <g mask='url(#maskIV0)'>
                                <path
                                  id='Innershadow0.1fill'
                                  d='M260.719 101.181L179.329 145.417C174.141 148.236 170.912 153.667 170.912 159.571L170.912 260.819C170.912 266.723 174.141 272.154 179.329 274.974L260.719 319.209C265.516 321.816 271.307 321.816 276.105 319.209L357.495 274.974C362.682 272.154 365.912 266.723 365.912 260.819L365.912 159.571C365.912 153.667 362.682 148.236 357.495 145.417L276.105 101.181C271.307 98.5738 265.516 98.5738 260.719 101.181Z'
                                  fill='url(#paintIV33_radial)'
                                />
                                <g id='Group 57'>
                                  <path
                                    id='Vector 5'
                                    opacity='0.5'
                                    d='M252.112 327.862L248.239 92.5172H288.584L284.711 327.862H252.112Z'
                                    fill='url(#paintIV34_linear)'
                                  />
                                  <path
                                    id='Vector 6'
                                    opacity='0.5'
                                    d='M251.594 325.774L130.567 123.896L165.507 103.724L279.825 309.475L251.594 325.774Z'
                                    fill='url(#paintIV35_linear)'
                                  />
                                  <path
                                    id='Vector 7'
                                    opacity='0.5'
                                    d='M248.231 309.475L362.55 103.724L397.489 123.896L276.463 325.774L248.231 309.475Z'
                                    fill='url(#paintIV36_linear)'
                                  />
                                  <rect
                                    id='Rectangle 3'
                                    x='170.912'
                                    y='196.741'
                                    width='195'
                                    height='126.638'
                                    fill='url(#paintIV37_linear)'
                                  />
                                </g>
                                <g id='Innershadow0.1fill_2' filter='url(#filterIV10_i)'>
                                  <path
                                    d='M260.719 101.181L179.329 145.417C174.141 148.236 170.912 153.667 170.912 159.571L170.912 260.819C170.912 266.723 174.141 272.154 179.329 274.974L260.719 319.209C265.516 321.816 271.307 321.816 276.105 319.209L357.495 274.974C362.682 272.154 365.912 266.723 365.912 260.819L365.912 159.571C365.912 153.667 362.682 148.236 357.495 145.417L276.105 101.181C271.307 98.5738 265.516 98.5738 260.719 101.181Z'
                                    fill='#6052B4'
                                    fillOpacity='0.01'
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterIV0_f'
              x='252.693'
              y='22.6028'
              width='30.8165'
              height='30.8165'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='1.40075' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIV1_f'
              x='247.65'
              y='16.1596'
              width='40.9019'
              height='43.7034'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.420225' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIV2_dd'
              x='0.656582'
              y='10.2359'
              width='534.51'
              height='467.545'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='10.1994' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.558594 0 0 0 0 0.710156 0 0 0 0 0.9375 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4.07976' />
              <feGaussianBlur stdDeviation='30.5982' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.670833 0 0 0 0 0.8025 0 0 0 0 1 0 0 0 0.6 0'
              />
              <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV3_d'
              x='203.412'
              y='268.5'
              width='48.0288'
              height='121.83'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV4_d'
              x='162.412'
              y='268.5'
              width='53.0143'
              height='104.14'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV5_d'
              x='285.412'
              y='268.5'
              width='48.0288'
              height='121.83'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV6_d'
              x='321.426'
              y='268.5'
              width='53.0143'
              height='104.14'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV7_d'
              x='224.912'
              y='242'
              width='87'
              height='178.505'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.8 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV8_d'
              x='136.912'
              y='67.3526'
              width='262'
              height='299.8'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='8' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.141181 0 0 0 0 0.190317 0 0 0 0 0.316667 0 0 0 0.51 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIV9_f'
              x='161.112'
              y='88.5437'
              width='213.3'
              height='242.913'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIV10_i'
              x='170.912'
              y='99.2256'
              width='195'
              height='221.939'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <radialGradient
              id='paintIV0_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(268.101 38.011) rotate(90) scale(20.1708)'
            >
              <stop stopColor='#E7ECFF' />
              <stop offset='0.979167' stopColor='#ABC3FF' stopOpacity='0.8825' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.88' />
            </radialGradient>
            <linearGradient
              id='paintIV1_linear'
              x1='266.7'
              y1='38.7115'
              x2='266.7'
              y2='338.472'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#DEE7FF' />
              <stop offset='0.0722622' stopColor='#CCDDFF' stopOpacity='0.33' />
              <stop offset='1' stopColor='#98C6F0' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIV2_linear'
              x1='266.965'
              y1='0'
              x2='266.965'
              y2='166.139'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV3_linear'
              x1='446.484'
              y1='315.769'
              x2='302.603'
              y2='232.699'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV4_linear'
              x1='265.916'
              y1='420.852'
              x2='265.916'
              y2='254.712'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV5_linear'
              x1='86.6748'
              y1='316.296'
              x2='230.556'
              y2='233.226'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV6_linear'
              x1='446.484'
              y1='105.344'
              x2='302.603'
              y2='188.414'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV7_linear'
              x1='86.6748'
              y1='104.818'
              x2='230.556'
              y2='187.888'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIV8_linear'
              x1='122.647'
              y1='190.294'
              x2='87.6618'
              y2='155.309'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3C5D1' />
              <stop offset='0.875' stopColor='#F9F9F9' />
            </linearGradient>
            <linearGradient
              id='paintIV9_linear'
              x1='68.7353'
              y1='149'
              x2='102'
              y2='190.294'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F9F9F9' />
              <stop offset='0.378992' stopColor='#F9F9F9' />
              <stop offset='0.480868' stopColor='#DFDFE6' />
              <stop offset='0.729174' stopColor='#B8BAC6' />
            </linearGradient>
            <linearGradient
              id='paintIV10_linear'
              x1='146.735'
              y1='221.838'
              x2='111.75'
              y2='185.706'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3C5D1' />
              <stop offset='0.875' stopColor='#F9F9F9' />
            </linearGradient>
            <linearGradient
              id='paintIV11_linear'
              x1='102.574'
              y1='185.706'
              x2='120.353'
              y2='221.838'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F4F4F5' />
              <stop offset='0.306027' stopColor='#F4F4F5' />
              <stop offset='0.462087' stopColor='#E8E9EC' />
              <stop offset='0.682292' stopColor='#DFDFE6' />
              <stop offset='1' stopColor='#B8BAC6' />
            </linearGradient>
            <linearGradient
              id='paintIV12_linear'
              x1='413.176'
              y1='190.294'
              x2='448.161'
              y2='155.309'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3C5D1' />
              <stop offset='0.875' stopColor='#F9F9F9' />
            </linearGradient>
            <linearGradient
              id='paintIV13_linear'
              x1='467.088'
              y1='149'
              x2='433.823'
              y2='190.294'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F9F9F9' />
              <stop offset='0.378992' stopColor='#F9F9F9' />
              <stop offset='0.480868' stopColor='#DFDFE6' />
              <stop offset='0.729174' stopColor='#B8BAC6' />
            </linearGradient>
            <linearGradient
              id='paintIV14_linear'
              x1='389.088'
              y1='221.838'
              x2='424.073'
              y2='185.706'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C3C5D1' />
              <stop offset='0.875' stopColor='#F9F9F9' />
            </linearGradient>
            <linearGradient
              id='paintIV15_linear'
              x1='433.25'
              y1='185.706'
              x2='415.47'
              y2='221.838'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F4F4F5' />
              <stop offset='0.306027' stopColor='#F4F4F5' />
              <stop offset='0.462087' stopColor='#E8E9EC' />
              <stop offset='0.682292' stopColor='#DFDFE6' />
              <stop offset='1' stopColor='#B8BAC6' />
            </linearGradient>
            <linearGradient
              id='paintIV16_linear'
              x1='242.941'
              y1='348.032'
              x2='210.242'
              y2='353.094'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#91B1E3' />
              <stop offset='0.208702' stopColor='#F0F6FF' />
              <stop offset='0.514766' stopColor='#A4BFE9' />
              <stop offset='0.728274' stopColor='#8BADE0' />
              <stop offset='0.971703' stopColor='#D0DEF3' />
            </linearGradient>
            <linearGradient
              id='paintIV17_linear'
              x1='215.183'
              y1='355.814'
              x2='231.391'
              y2='350.982'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFCFF' />
              <stop offset='0.309893' stopColor='#D7E6FC' />
              <stop offset='0.523799' stopColor='#C1D8F4' />
              <stop offset='0.77229' stopColor='#BBD6FF' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <linearGradient
              id='paintIV18_linear'
              x1='169.912'
              y1='327'
              x2='208.521'
              y2='370.258'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#91B1E3' />
              <stop offset='0.208702' stopColor='#F0F6FF' />
              <stop offset='0.648432' stopColor='#A4BFE9' />
              <stop offset='0.780206' stopColor='#8BADE0' />
              <stop offset='0.971703' stopColor='#93B3E4' />
            </linearGradient>
            <linearGradient
              id='paintIV19_linear'
              x1='174.411'
              y1='335'
              x2='193.537'
              y2='329.298'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFCFF' />
              <stop offset='0.309893' stopColor='#D7E6FC' />
              <stop offset='0.523799' stopColor='#C1D8F4' />
              <stop offset='0.77229' stopColor='#BBD6FF' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <linearGradient
              id='paintIV20_linear'
              x1='293.912'
              y1='348.032'
              x2='326.611'
              y2='353.094'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#91B1E3' />
              <stop offset='0.208702' stopColor='#F0F6FF' />
              <stop offset='0.514766' stopColor='#A4BFE9' />
              <stop offset='0.728274' stopColor='#8BADE0' />
              <stop offset='0.971703' stopColor='#D0DEF3' />
            </linearGradient>
            <linearGradient
              id='paintIV21_linear'
              x1='321.67'
              y1='355.814'
              x2='305.462'
              y2='350.982'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFCFF' />
              <stop offset='0.309893' stopColor='#D7E6FC' />
              <stop offset='0.523799' stopColor='#C1D8F4' />
              <stop offset='0.77229' stopColor='#BBD6FF' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <linearGradient
              id='paintIV22_linear'
              x1='366.941'
              y1='327'
              x2='328.331'
              y2='370.258'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#91B1E3' />
              <stop offset='0.208702' stopColor='#F0F6FF' />
              <stop offset='0.648432' stopColor='#A4BFE9' />
              <stop offset='0.780206' stopColor='#8BADE0' />
              <stop offset='0.971703' stopColor='#93B3E4' />
            </linearGradient>
            <linearGradient
              id='paintIV23_linear'
              x1='362.441'
              y1='335'
              x2='343.315'
              y2='329.298'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFCFF' />
              <stop offset='0.309893' stopColor='#D7E6FC' />
              <stop offset='0.523799' stopColor='#C1D8F4' />
              <stop offset='0.77229' stopColor='#BBD6FF' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <linearGradient
              id='paintIV24_linear'
              x1='233.912'
              y1='365.5'
              x2='305.122'
              y2='380.705'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#91B1E3' />
              <stop offset='0.208702' stopColor='#F0F6FF' />
              <stop offset='0.648432' stopColor='#A4BFE9' />
              <stop offset='0.780206' stopColor='#8BADE0' />
              <stop offset='0.971703' stopColor='#93B3E4' />
            </linearGradient>
            <linearGradient
              id='paintIV25_linear'
              x1='296.009'
              y1='378.1'
              x2='263.489'
              y2='362.193'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFCFF' />
              <stop offset='0.309893' stopColor='#D7E6FC' />
              <stop offset='0.523799' stopColor='#C1D8F4' />
              <stop offset='0.77229' stopColor='#BBD6FF' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <linearGradient
              id='paintIV26_linear'
              x1='267.909'
              y1='386'
              x2='267.909'
              y2='402.95'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#6A88C3' />
              <stop offset='0.479167' stopColor='#E4EFFD' />
              <stop offset='1' stopColor='#E1ECFD' />
            </linearGradient>
            <linearGradient
              id='paintIV27_linear'
              x1='264.18'
              y1='386.434'
              x2='264.18'
              y2='399.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E2F5FF' stopOpacity='0' />
              <stop offset='0.479167' stopColor='#B6CAFE' />
              <stop offset='1' stopColor='#CCD7FF' />
            </linearGradient>
            <linearGradient
              id='paintIV28_linear'
              x1='271.64'
              y1='386.434'
              x2='271.64'
              y2='399.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E2F5FF' stopOpacity='0' />
              <stop offset='0.479167' stopColor='#B6CAFE' />
              <stop offset='1' stopColor='#CCD7FF' />
            </linearGradient>
            <linearGradient
              id='paintIV29_linear'
              x1='266.856'
              y1='400.907'
              x2='255.58'
              y2='402.242'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C9DEFC' />
              <stop offset='0.309893' stopColor='#ECF4FF' />
              <stop offset='0.523799' stopColor='#EAF6FF' />
              <stop offset='0.613641' stopColor='#CCE7FF' />
              <stop offset='1' stopColor='#CEE4F9' />
            </linearGradient>
            <linearGradient
              id='paintIV30_linear'
              x1='215.412'
              y1='100'
              x2='327.912'
              y2='323.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAFAFA' />
              <stop offset='1' stopColor='#C2C4CD' />
            </linearGradient>
            <linearGradient
              id='paintIV31_linear'
              x1='214.412'
              y1='118.5'
              x2='311.412'
              y2='297.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#CDCFD6' />
              <stop offset='1' stopColor='#EFEFF1' />
            </linearGradient>
            <linearGradient
              id='paintIV32_linear'
              x1='224.912'
              y1='112'
              x2='329.412'
              y2='300'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#DDDFE2' />
              <stop offset='1' stopColor='white' />
            </linearGradient>
            <radialGradient
              id='paintIV33_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(268.412 210.195) rotate(90) scale(113.195 97.5)'
            >
              <stop stopColor='#F5F7FF' />
              <stop offset='1' stopColor='#B3B5C5' />
            </radialGradient>
            <linearGradient
              id='paintIV34_linear'
              x1='268.412'
              y1='92.5172'
              x2='268.412'
              y2='327.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIV35_linear'
              x1='148.037'
              y1='113.81'
              x2='265.709'
              y2='317.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIV36_linear'
              x1='380.019'
              y1='113.81'
              x2='262.347'
              y2='317.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintIV37_linear'
              x1='268.412'
              y1='251.655'
              x2='267.823'
              y2='315.533'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='1' stopColor='#D0DBFF' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 410 355'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M97.5 125.294L97.5 84L8.12182e-06 83.9999C7.81405e-06 109.809 18.2456 125.294 33.0702 125.294L97.5 125.294Z'
              fill='url(#paintIVLOCKED0_linear)'
            />
            <path
              d='M97.5 125.294L97.5 84L8.12182e-06 83.9999C7.81405e-06 109.809 18.2456 125.294 33.0702 125.294L97.5 125.294Z'
              fill='url(#paintIVLOCKED1_linear)'
            />
            <path
              d='M131.912 162L131.912 120.706L34.4118 120.706C34.4118 146.515 52.6574 162 67.4819 162L131.912 162Z'
              fill='url(#paintIVLOCKED2_linear)'
            />
            <path
              d='M131.912 162L131.912 120.706L34.4118 120.706C34.4118 146.515 52.6574 162 67.4819 162L131.912 162Z'
              fill='url(#paintIVLOCKED3_linear)'
            />
            <path
              d='M312.323 125.294L312.323 84L409.823 83.9999C409.823 109.809 391.578 125.294 376.753 125.294L312.323 125.294Z'
              fill='url(#paintIVLOCKED4_linear)'
            />
            <path
              d='M312.323 125.294L312.323 84L409.823 83.9999C409.823 109.809 391.578 125.294 376.753 125.294L312.323 125.294Z'
              fill='url(#paintIVLOCKED5_linear)'
            />
            <path
              d='M277.911 162L277.911 120.706L375.411 120.706C375.411 146.515 357.166 162 342.341 162L277.911 162Z'
              fill='url(#paintIVLOCKED6_linear)'
            />
            <path
              d='M277.911 162L277.911 120.706L375.411 120.706C375.411 146.515 357.166 162 342.341 162L277.911 162Z'
              fill='url(#paintIVLOCKED7_linear)'
            />
            <g opacity='0.5'>
              <g filter='url(#filterIVLOCKED0_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M148.912 231V300.842L179.912 317.5C179.908 284.001 179.941 264.5 179.941 231H148.912Z'
                  fill='url(#paintIVLOCKED8_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M151.479 296.864V262H150.912V297.336L151.149 297.376C151.932 297.506 152.804 297.97 153.516 298.648C154.227 299.325 154.753 300.191 154.884 301.105L154.905 301.257L177.844 313V273.632H177.277V312.108L155.42 300.871C155.233 299.861 154.647 298.942 153.907 298.237C153.197 297.561 152.324 297.061 151.479 296.864Z'
                fill='url(#paintIVLOCKED9_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M177.244 310.033C177.856 309 177.891 307.534 177.843 306.586L177.277 306.615C177.324 307.558 177.274 308.87 176.756 309.745C176.505 310.169 176.15 310.482 175.639 310.61C175.119 310.741 174.4 310.69 173.411 310.305L173.205 310.834C174.257 311.243 175.102 311.329 175.777 311.16C176.46 310.988 176.931 310.564 177.244 310.033Z'
                fill='url(#paintIVLOCKED10_linear)'
              />
              <g filter='url(#filterIVLOCKED1_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M143.926 298.842V212H107.912V281.343L143.926 298.842Z'
                  fill='url(#paintIVLOCKED11_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M110.581 277.139V236H109.912V277.697L110.191 277.743C111.116 277.897 112.145 278.444 112.985 279.244C113.824 280.043 114.445 281.066 114.599 282.144L114.624 282.323L141.692 295V249.726H141.023V293.948L115.231 281.868C115.011 280.676 114.319 279.592 113.446 278.76C112.608 277.962 111.578 277.372 110.581 277.139Z'
                fill='url(#paintIVLOCKED12_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M140.985 291.5C141.706 290.28 141.747 288.55 141.692 287.432L141.023 287.466C141.079 288.578 141.02 290.126 140.409 291.159C140.113 291.66 139.693 292.028 139.09 292.18C138.476 292.334 137.628 292.274 136.461 291.82L136.218 292.444C137.46 292.927 138.457 293.029 139.253 292.829C140.06 292.626 140.615 292.125 140.985 291.5Z'
                fill='url(#paintIVLOCKED13_linear)'
              />
            </g>
            <g opacity='0.5'>
              <g filter='url(#filterIVLOCKED2_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M261.94 232V300.842L230.941 317.5C230.945 284.001 230.912 265.5 230.912 232H261.94Z'
                  fill='url(#paintIVLOCKED14_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M259.374 296.864V262H259.941V297.336L259.704 297.376C258.92 297.506 258.049 297.97 257.337 298.648C256.626 299.325 256.099 300.191 255.969 301.105L255.947 301.257L233.009 313V273.632H233.576V312.108L255.433 300.871C255.619 299.861 256.206 298.942 256.946 298.237C257.656 297.561 258.528 297.061 259.374 296.864Z'
                fill='url(#paintIVLOCKED15_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M233.608 310.033C232.997 309 232.962 307.534 233.009 306.586L233.575 306.615C233.528 307.558 233.578 308.87 234.096 309.745C234.347 310.169 234.703 310.482 235.214 310.61C235.734 310.741 236.453 310.69 237.442 310.305L237.647 310.834C236.595 311.243 235.75 311.329 235.076 311.16C234.392 310.988 233.922 310.564 233.608 310.033Z'
                fill='url(#paintIVLOCKED16_linear)'
              />
              <g filter='url(#filterIVLOCKED3_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M266.926 298.842V212H302.94V281.343L266.926 298.842Z'
                  fill='url(#paintIVLOCKED17_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M300.272 277.139V236H300.941V277.697L300.661 277.743C299.736 277.897 298.708 278.444 297.868 279.244C297.029 280.043 296.408 281.066 296.254 282.144L296.228 282.323L269.161 295V249.726H269.83V293.948L295.621 281.868C295.841 280.676 296.533 279.592 297.407 278.76C298.244 277.962 299.274 277.372 300.272 277.139Z'
                fill='url(#paintIVLOCKED18_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M269.868 291.5C269.146 290.28 269.105 288.55 269.161 287.432L269.829 287.466C269.774 288.578 269.833 290.126 270.444 291.159C270.74 291.66 271.159 292.028 271.762 292.18C272.376 292.334 273.225 292.274 274.392 291.82L274.634 292.444C273.393 292.927 272.395 293.029 271.599 292.829C270.793 292.626 270.238 292.125 269.868 291.5Z'
                fill='url(#paintIVLOCKED19_linear)'
              />
            </g>
            <g opacity='0.5'>
              <g filter='url(#filterIVLOCKED4_d)'>
                <path
                  d='M170.912 259H239.912V325.686L204.973 347L170.912 326.166V259Z'
                  fill='url(#paintIVLOCKED20_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M174.412 273H175.412V323.221L204.914 341.414L234.912 323.218V273H235.912V323.782L204.909 342.586L174.412 323.779V273Z'
                fill='url(#paintIVLOCKED21_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M205.344 321V339.143H204.474V321H205.344Z'
                fill='url(#paintIVLOCKED22_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M202.304 332.704C200.574 334.7 198.466 335.144 197.015 334.902L197.158 334.044C198.314 334.237 200.118 333.899 201.647 332.135C203.183 330.364 204.475 327.114 204.475 321.434H205.344C205.344 327.229 204.028 330.716 202.304 332.704Z'
                fill='url(#paintIVLOCKED23_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M207.515 332.704C209.245 334.7 211.353 335.144 212.804 334.902L212.662 334.044C211.505 334.237 209.701 333.899 208.172 332.135C206.636 330.364 205.344 327.114 205.344 321.434H204.475C204.475 327.229 205.791 330.716 207.515 332.704Z'
                fill='url(#paintIVLOCKED24_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M204.727 339.538L194.912 334.039L197.085 334.039L204.909 338.666L212.731 334H214.649L205.088 339.539C204.973 339.591 204.841 339.591 204.727 339.538Z'
                fill='url(#paintIVLOCKED25_linear)'
              />
            </g>
            <path
              d='M204.912 0L79.9117 67.9987L79.9116 222.506L204.912 290.505L329.912 222.506L329.912 67.9987L204.912 0Z'
              fill='url(#paintIVLOCKED26_linear)'
            />
            <path
              d='M204.762 22L98.9117 79.5814L98.9116 210.419L204.762 268L310.612 210.419L310.612 79.5814L204.762 22Z'
              fill='url(#paintIVLOCKED27_linear)'
            />
            <g filter='url(#filterIVLOCKED5_f)'>
              <path
                d='M204.762 22L98.9117 79.5814L98.9116 210.419L204.762 268L310.612 210.419L310.612 79.5814L204.762 22Z'
                fill='url(#paintIVLOCKED28_linear)'
              />
            </g>
            <g opacity='0.5'>
              <mask
                id='maskIVLOCKED0'
                maskUnits='userSpaceOnUse'
                x='107'
                y='32'
                width='196'
                height='227'
              >
                <path
                  d='M205.412 32L107.912 84.9913L107.912 205.399L205.412 258.39L302.912 205.399L302.912 84.9913L205.412 32Z'
                  fill='url(#paintIVLOCKED29_linear)'
                />
              </mask>
              <g mask='url(#maskIVLOCKED0)'>
                <path
                  d='M205.412 32L107.912 84.9913L107.912 205.399L205.412 258.39L302.912 205.399L302.912 84.9913L205.412 32Z'
                  fill='url(#paintIVLOCKED30_linear)'
                />
                <path
                  opacity='0.5'
                  d='M189.112 262.862L185.239 27.5172H225.584L221.711 262.862H189.112Z'
                  fill='url(#paintIVLOCKED31_linear)'
                />
                <path
                  opacity='0.5'
                  d='M188.594 260.775L67.5669 58.8965L102.507 38.7241L216.825 244.475L188.594 260.775Z'
                  fill='url(#paintIVLOCKED32_linear)'
                />
                <path
                  opacity='0.5'
                  d='M185.231 244.475L299.55 38.724L334.489 58.8964L213.463 260.774L185.231 244.475Z'
                  fill='url(#paintIVLOCKED33_linear)'
                />
                <rect
                  x='107.912'
                  y='131.741'
                  width='195'
                  height='126.638'
                  fill='url(#paintIVLOCKED34_linear)'
                />
                <g filter='url(#filterIVLOCKED6_i)'>
                  <path
                    d='M205.412 32L107.912 84.9913L107.912 205.399L205.412 258.39L302.912 205.399L302.912 84.9913L205.412 32Z'
                    fill='url(#paintIVLOCKED35_linear)'
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterIVLOCKED0_d'
              x='140.912'
              y='223'
              width='47.0288'
              height='102.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIVLOCKED1_d'
              x='99.9121'
              y='204'
              width='52.0143'
              height='102.842'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIVLOCKED2_d'
              x='222.912'
              y='224'
              width='47.0288'
              height='101.5'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIVLOCKED3_d'
              x='258.926'
              y='204'
              width='52.0143'
              height='102.842'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.74 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIVLOCKED4_d'
              x='162.912'
              y='251'
              width='85'
              height='104'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.288889 0 0 0 0 0.357333 0 0 0 0 0.533333 0 0 0 0.8 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterIVLOCKED5_f'
              x='98.6116'
              y='21.7'
              width='212.3'
              height='246.6'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterIVLOCKED6_i'
              x='107.912'
              y='32'
              width='195'
              height='226.39'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintIVLOCKED0_linear'
              x1='97.5'
              y1='104.647'
              x2='2.46214e-07'
              y2='104.647'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED1_linear'
              x1='97.5'
              y1='104.647'
              x2='2.46214e-07'
              y2='104.647'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED2_linear'
              x1='131.912'
              y1='141.353'
              x2='34.4117'
              y2='141.353'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED3_linear'
              x1='131.912'
              y1='141.353'
              x2='34.4117'
              y2='141.353'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED4_linear'
              x1='312.323'
              y1='104.647'
              x2='409.823'
              y2='104.647'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED5_linear'
              x1='312.323'
              y1='104.647'
              x2='409.823'
              y2='104.647'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED6_linear'
              x1='277.911'
              y1='141.353'
              x2='375.411'
              y2='141.353'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED7_linear'
              x1='277.911'
              y1='141.353'
              x2='375.411'
              y2='141.353'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED8_linear'
              x1='164.427'
              y1='212'
              x2='164.427'
              y2='317.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED9_linear'
              x1='164.378'
              y1='262'
              x2='164.378'
              y2='313'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED10_linear'
              x1='175.532'
              y1='306.586'
              x2='175.532'
              y2='311.242'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED11_linear'
              x1='125.919'
              y1='212'
              x2='125.919'
              y2='298.842'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED12_linear'
              x1='125.802'
              y1='236'
              x2='125.802'
              y2='295'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED13_linear'
              x1='138.964'
              y1='287.432'
              x2='138.964'
              y2='292.925'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED14_linear'
              x1='246.426'
              y1='212'
              x2='246.426'
              y2='317.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED15_linear'
              x1='246.475'
              y1='262'
              x2='246.475'
              y2='313'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED16_linear'
              x1='235.321'
              y1='306.586'
              x2='235.321'
              y2='311.242'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED17_linear'
              x1='284.933'
              y1='212'
              x2='284.933'
              y2='298.842'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED18_linear'
              x1='285.051'
              y1='236'
              x2='285.051'
              y2='295'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED19_linear'
              x1='271.889'
              y1='287.432'
              x2='271.889'
              y2='292.925'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED20_linear'
              x1='205.412'
              y1='259'
              x2='205.412'
              y2='347'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED21_linear'
              x1='205.162'
              y1='273'
              x2='205.162'
              y2='342.586'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED22_linear'
              x1='204.909'
              y1='321'
              x2='204.909'
              y2='339.143'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED23_linear'
              x1='201.18'
              y1='321.434'
              x2='201.18'
              y2='334.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED24_linear'
              x1='208.64'
              y1='321.434'
              x2='208.64'
              y2='334.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED25_linear'
              x1='204.78'
              y1='334'
              x2='204.78'
              y2='339.578'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED26_linear'
              x1='204.912'
              y1='0'
              x2='204.912'
              y2='290.505'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED27_linear'
              x1='204.762'
              y1='22'
              x2='204.762'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED28_linear'
              x1='204.762'
              y1='22'
              x2='204.762'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED29_linear'
              x1='205.412'
              y1='32'
              x2='205.412'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED30_linear'
              x1='205.412'
              y1='32'
              x2='205.412'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED31_linear'
              x1='205.412'
              y1='27.5172'
              x2='205.412'
              y2='262.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED32_linear'
              x1='85.0367'
              y1='48.8103'
              x2='202.709'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED33_linear'
              x1='317.019'
              y1='48.8102'
              x2='199.347'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED34_linear'
              x1='205.412'
              y1='131.741'
              x2='205.412'
              y2='258.379'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintIVLOCKED35_linear'
              x1='205.412'
              y1='32'
              x2='205.412'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

const TechV = ({
  size = 'sm',
  shadow = true,
  animation = false,
  lights = true,
  locked = false,
  tech = '',
  level = 'I'
}: TechProps) => {
  const { wrapper, rotation, wrapperLogo } = useStyles({
    width: BadgesSize[size].img[level].width,
    height: BadgesSize[size].img[level].height,
    top: BadgesSize[size].img[level].top,
    left: BadgesSize[size].img[level].left
  })

  return (
    <div className={wrapper}>
      {tech !== '' && (
        <>
          {!locked && (
            <div className={wrapperLogo}>
              <TechLogo tech={tech} type='III' />
            </div>
          )}
        </>
      )}
      {!locked ? (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 620 585'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Tech-V'>
            {lights && (
              <g id='lights' className={animation ? rotation : ''}>
                <path
                  id='Vector 264'
                  d='M373.075 280.163L566.71 380.839L528.194 447.552L344.187 330.197L373.075 280.163Z'
                  fill='url(#paintV0_linear)'
                />
                <path
                  id='Vector 265'
                  d='M340.903 334.069L350.532 552.101H273.498L283.128 334.069H340.903Z'
                  fill='url(#paintV1_linear)'
                />
                <path
                  id='Vector 276'
                  d='M281.629 218.032L272 0L349.033 0L339.404 218.032H281.629Z'
                  fill='url(#paintV2_linear)'
                />
                <path
                  id='Vector 267'
                  d='M278.523 330.889L94.5167 448.244L56 381.531L249.636 280.854L278.523 330.889Z'
                  fill='url(#paintV3_linear)'
                />
                <path
                  id='Vector 274'
                  d='M373.075 272.081L566.71 171.405L528.194 104.692L344.187 222.047L373.075 272.081Z'
                  fill='url(#paintV4_linear)'
                />
                <path
                  id='Vector 275'
                  d='M278.523 221.355L94.5167 104L56 170.713L249.636 271.39L278.523 221.355Z'
                  fill='url(#paintV5_linear)'
                />
              </g>
            )}
            {lights && (
              <g id='glops' className={animation ? rotation : ''}>
                <g id='Ellipse 12' opacity='0.3' filter='url(#filterV0_f)'>
                  <circle cx='238.615' cy='116.615' r='7.61466' fill='#FFEBC4' />
                </g>
                <g id='Ellipse 21' filter='url(#filterV1_f)'>
                  <circle cx='206.538' cy='392.538' r='2.53822' fill='#FFEBC4' />
                </g>
                <g id='Ellipse 22' opacity='0.3' filter='url(#filterV2_f)'>
                  <circle cx='227.538' cy='160.538' r='2.53822' fill='#FFEBC4' />
                </g>
                <g id='Ellipse 23' filter='url(#filterV3_f)'>
                  <circle cx='441.538' cy='309.538' r='2.53822' fill='#FFEBC4' />
                </g>
                <g id='Ellipse 19' filter='url(#filterV4_f)'>
                  <circle cx='135.461' cy='287.134' r='8.46073' fill='#FFDDAA' />
                </g>
                <g id='Ellipse 9' opacity='0.6' filter='url(#filterV5_f)'>
                  <circle cx='521.769' cy='250.769' r='6.76858' fill='#FFDDAA' />
                </g>
                <g id='Ellipse 18' opacity='0.8' filter='url(#filterV6_f)'>
                  <circle cx='241.769' cy='471.769' r='6.76858' fill='#FFDDAA' />
                </g>
              </g>
            )}
            <g id='container'>
              <g id='sub-container'>
                <g id='container-shadow' filter={shadow ? 'url(#filterV7_dd)' : ''}>
                  <g id='ala-left'>
                    <g id='Group 313'>
                      <g id='Group 328'>
                        <path
                          id='Vector 314'
                          d='M207.446 229.738L215.358 189.209L100.035 166.695C95.0897 192.026 110.03 210.72 124.58 213.561L207.446 229.738Z'
                          fill='url(#paintV6_linear)'
                        />
                        <path
                          id='Vector 315'
                          d='M206.272 230.528L214.185 189.999L101.806 168.06C96.8611 193.391 111.802 212.085 126.351 214.925L206.272 230.528Z'
                          stroke='url(#paintV7_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                      <path
                        id='Vector 312'
                        d='M208.208 267.585L216.12 227.056L120.427 208.375C115.481 233.705 130.422 252.4 144.972 255.24L208.208 267.585Z'
                        fill='url(#paintV8_linear)'
                      />
                      <path
                        id='Vector 313'
                        d='M208.208 267.585L216.12 227.056L120.427 208.375C115.481 233.705 130.422 252.4 144.972 255.24L208.208 267.585Z'
                        stroke='url(#paintV9_linear)'
                        strokeWidth='2.29412'
                      />
                    </g>
                    <g id='Group 314'>
                      <path
                        id='Vector 312_2'
                        d='M234.949 310.205L242.861 269.676L147.168 250.994C142.222 276.325 157.163 295.019 171.713 297.86L234.949 310.205Z'
                        fill='url(#paintV10_linear)'
                      />
                      <path
                        id='Vector 313_2'
                        d='M234.949 310.205L242.861 269.676L147.168 250.994C142.222 276.325 157.163 295.019 171.713 297.86L234.949 310.205Z'
                        stroke='url(#paintV11_linear)'
                        strokeWidth='2.29412'
                      />
                    </g>
                  </g>
                  <g id='flags'>
                    <g id='Group 332'>
                      <g id='Vector 319' filter={shadow ? 'url(#filterV8_d)' : ''}>
                        <path
                          d='M213.172 411.716V323H264.672V441.5L214.74 414.352C213.774 413.827 213.172 412.816 213.172 411.716Z'
                          fill='#ECD8BA'
                        />
                        <path
                          d='M213.172 411.716V323H264.672V441.5L214.74 414.352C213.774 413.827 213.172 412.816 213.172 411.716Z'
                          stroke='url(#paintV12_linear)'
                        />
                      </g>
                      <g id='Group 331'>
                        <path
                          id='Vector 251 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M218.842 409.139V368H218.173V409.697L218.452 409.743C219.377 409.897 220.405 410.444 221.245 411.244C222.084 412.043 222.705 413.066 222.859 414.144L222.885 414.323L249.953 427V381.726H249.283V425.948L223.492 413.868C223.272 412.676 222.58 411.592 221.707 410.76C220.869 409.962 219.839 409.372 218.842 409.139Z'
                          fill='url(#paintV13_linear)'
                        />
                        <path
                          id='Vector 252 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M249.246 423.5C249.967 422.28 250.009 420.55 249.953 419.432L249.285 419.466C249.34 420.578 249.281 422.126 248.67 423.159C248.374 423.66 247.955 424.028 247.351 424.18C246.738 424.334 245.889 424.274 244.722 423.82L244.48 424.444C245.721 424.927 246.718 425.029 247.514 424.829C248.321 424.626 248.876 424.125 249.246 423.5Z'
                          fill='#D4B195'
                        />
                      </g>
                    </g>
                    <g id='Group 333'>
                      <g id='Vector 319_2' filter={shadow ? 'url(#filterV9_d)' : ''}>
                        <path
                          d='M407.673 411.716V323H356.173V441.5L406.106 414.352C407.071 413.827 407.673 412.816 407.673 411.716Z'
                          fill='#ECD8BA'
                        />
                        <path
                          d='M407.673 411.716V323H356.173V441.5L406.106 414.352C407.071 413.827 407.673 412.816 407.673 411.716Z'
                          stroke='url(#paintV14_linear)'
                        />
                      </g>
                      <g id='Group 331_2'>
                        <path
                          id='Vector 251 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M402.004 409.139V368H402.673V409.697L402.393 409.743C401.468 409.897 400.44 410.444 399.6 411.244C398.761 412.043 398.14 413.066 397.986 414.144L397.96 414.323L370.893 427V381.726H371.562V425.948L397.353 413.868C397.573 412.676 398.265 411.592 399.138 410.76C399.976 409.962 401.006 409.372 402.004 409.139Z'
                          fill='url(#paintV15_linear)'
                        />
                        <path
                          id='Vector 252 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M371.599 423.5C370.878 422.28 370.836 420.55 370.892 419.432L371.561 419.466C371.505 420.578 371.564 422.126 372.175 423.159C372.471 423.66 372.89 424.028 373.494 424.18C374.108 424.334 374.956 424.274 376.123 423.82L376.365 424.444C375.124 424.927 374.127 425.029 373.331 424.829C372.524 424.626 371.969 424.125 371.599 423.5Z'
                          fill='#D4B195'
                        />
                      </g>
                    </g>
                    <g id='Group 330'>
                      <g id='Vector 301' filter={shadow ? 'url(#filterV10_d)' : ''}>
                        <path
                          d='M255.172 318H365.172V457.686L310.784 485.333C309.96 485.752 308.986 485.75 308.164 485.329L255.172 458.166V318Z'
                          fill='url(#paintV16_linear)'
                        />
                        <path
                          d='M255.172 318H365.172V457.686L310.784 485.333C309.96 485.752 308.986 485.75 308.164 485.329L255.172 458.166V318Z'
                          stroke='url(#paintV17_linear)'
                          strokeWidth='2'
                        />
                      </g>
                      <path
                        id='Intersect'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M326.172 476.511L310.784 484.333C309.96 484.752 308.986 484.75 308.164 484.329L292.172 476.132V374H326.172V476.511Z'
                        fill='url(#paintV18_linear)'
                      />
                      <path
                        id='Vector 318 (Stroke)'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M261.172 393H262.766V455.52L309.778 479.821L357.579 455.517V393H359.172V456.084L309.771 481L261.172 456.081V393Z'
                        fill='url(#paintV19_linear)'
                      />
                      <g id='Group 326'>
                        <path
                          id='Vector 255 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M310.104 458V476.143H309.235V458H310.104Z'
                          fill='url(#paintV20_linear)'
                        />
                        <path
                          id='Vector 256 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M307.065 469.704C305.335 471.7 303.227 472.144 301.776 471.902L301.919 471.044C303.075 471.237 304.879 470.899 306.408 469.135C307.944 467.364 309.236 464.114 309.236 458.434H310.105C310.105 464.229 308.789 467.716 307.065 469.704Z'
                          fill='url(#paintV21_linear)'
                        />
                        <path
                          id='Vector 257 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M312.276 469.704C314.006 471.7 316.114 472.144 317.565 471.902L317.422 471.044C316.266 471.237 314.462 470.899 312.933 469.135C311.397 467.364 310.105 464.114 310.105 458.434H309.236C309.236 464.229 310.552 467.716 312.276 469.704Z'
                          fill='url(#paintV22_linear)'
                        />
                        <path
                          id='Vector 254 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M309.488 476.538L299.672 471.039L301.846 471.039L309.669 475.666L317.492 471H319.41L309.849 476.539C309.734 476.591 309.602 476.591 309.488 476.538Z'
                          fill='url(#paintV23_linear)'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='ala-right'>
                    <g id='Group 313_2'>
                      <g id='Group 328_2'>
                        <path
                          id='Vector 314_2'
                          d='M412.711 231.043L404.799 190.514L520.122 168C525.067 193.331 510.126 212.025 495.577 214.865L412.711 231.043Z'
                          fill='url(#paintV24_linear)'
                        />
                        <path
                          id='Vector 315_2'
                          d='M413.884 231.833L405.972 191.304L518.35 169.365C523.296 194.695 508.355 213.39 493.805 216.23L413.884 231.833Z'
                          stroke='url(#paintV25_linear)'
                          strokeWidth='2.29412'
                        />
                      </g>
                      <path
                        id='Vector 312_3'
                        d='M411.949 268.89L404.037 228.361L499.73 209.679C504.675 235.01 489.735 253.704 475.185 256.545L411.949 268.89Z'
                        fill='url(#paintV26_linear)'
                      />
                      <path
                        id='Vector 313_3'
                        d='M411.949 268.89L404.037 228.361L499.73 209.679C504.675 235.01 489.735 253.704 475.185 256.545L411.949 268.89Z'
                        stroke='url(#paintV27_linear)'
                        strokeWidth='2.29412'
                      />
                    </g>
                    <g id='Group 314_2'>
                      <path
                        id='Vector 312_4'
                        d='M385.208 311.51L377.296 270.981L472.989 252.299C477.934 277.629 462.994 296.324 448.444 299.164L385.208 311.51Z'
                        fill='url(#paintV28_linear)'
                      />
                      <path
                        id='Vector 313_4'
                        d='M385.208 311.51L377.296 270.981L472.989 252.299C477.934 277.629 462.994 296.324 448.444 299.164L385.208 311.51Z'
                        stroke='url(#paintV29_linear)'
                        strokeWidth='2.29412'
                      />
                    </g>
                  </g>
                  <g id='body-shadow' filter={shadow ? 'url(#filterV11_d)' : ''}>
                    <g id='Group 206'>
                      <g id='Group 169'>
                        <g id='Group 166'>
                          <path
                            id='Union'
                            d='M302.049 135.419L194.049 194.17C188.578 197.146 185.173 202.875 185.173 209.103L185.172 343.402C185.172 349.63 188.578 355.359 194.049 358.335L302.049 417.086C307.114 419.841 313.231 419.841 318.296 417.086L426.296 358.335C431.767 355.359 435.172 349.629 435.172 343.402L435.172 209.103C435.172 202.875 431.767 197.146 426.296 194.17L318.296 135.419C313.231 132.664 307.114 132.664 302.049 135.419Z'
                            fill='url(#paintV30_linear)'
                          />
                          <path
                            id='Union_2'
                            d='M301.93 157.403L213.015 205.771C207.565 208.736 204.173 214.444 204.173 220.648L204.172 331.352C204.172 337.556 207.565 343.264 213.015 346.229L301.93 394.597C306.976 397.343 313.069 397.343 318.116 394.597L407.03 346.229C412.48 343.264 415.873 337.556 415.873 331.352L415.873 220.648C415.873 214.444 412.48 208.736 407.03 205.771L318.116 157.403C313.069 154.657 306.976 154.657 301.93 157.403Z'
                            fill='url(#paintV31_linear)'
                          />
                          <g id='Union_3' filter='url(#filterV12_f)'>
                            <path
                              d='M301.93 157.403L213.015 205.771C207.565 208.736 204.173 214.444 204.173 220.648L204.172 331.352C204.172 337.556 207.565 343.264 213.015 346.229L301.93 394.597C306.976 397.343 313.069 397.343 318.116 394.597L407.03 346.229C412.48 343.264 415.873 337.556 415.873 331.352L415.873 220.648C415.873 214.444 412.48 208.736 407.03 205.771L318.116 157.403C313.069 154.657 306.976 154.657 301.93 157.403Z'
                              stroke='url(#paintV32_linear)'
                            />
                          </g>
                          <g id='Mask Group' opacity='0.5'>
                            <mask
                              id='mask0'
                              maskUnits='userSpaceOnUse'
                              x='213'
                              y='165'
                              width='196'
                              height='223'
                            >
                              <path
                                id='Union_4'
                                d='M302.98 167.181L221.589 211.417C216.402 214.236 213.173 219.667 213.173 225.571L213.172 326.819C213.172 332.723 216.402 338.154 221.589 340.974L302.98 385.209C307.777 387.816 313.568 387.816 318.365 385.209L399.756 340.974C404.943 338.154 408.172 332.723 408.172 326.819L408.172 225.571C408.172 219.667 404.943 214.236 399.756 211.417L318.365 167.181C313.568 164.574 307.777 164.574 302.98 167.181Z'
                                fill='#A6D3DE'
                              />
                            </mask>
                            <g mask='url(#mask0)'>
                              <path
                                id='Innershadow0.1fill'
                                d='M302.98 167.181L221.589 211.417C216.402 214.236 213.173 219.667 213.173 225.571L213.172 326.819C213.172 332.723 216.402 338.154 221.589 340.974L302.98 385.209C307.777 387.816 313.568 387.816 318.365 385.209L399.756 340.974C404.943 338.154 408.172 332.723 408.172 326.819L408.172 225.571C408.172 219.667 404.943 214.236 399.756 211.417L318.365 167.181C313.568 164.574 307.777 164.574 302.98 167.181Z'
                                fill='url(#paintV33_radial)'
                              />
                              <g id='Group 57'>
                                <path
                                  id='Vector 5'
                                  opacity='0.5'
                                  d='M294.373 393.862L290.5 158.517H330.845L326.972 393.862H294.373Z'
                                  fill='url(#paintV34_linear)'
                                />
                                <path
                                  id='Vector 6'
                                  opacity='0.5'
                                  d='M293.854 391.774L172.828 189.896L207.767 169.724L322.086 375.475L293.854 391.774Z'
                                  fill='url(#paintV35_linear)'
                                />
                                <path
                                  id='Vector 7'
                                  opacity='0.5'
                                  d='M290.492 375.475L404.81 169.724L439.75 189.896L318.723 391.774L290.492 375.475Z'
                                  fill='url(#paintV36_linear)'
                                />
                                <rect
                                  id='Rectangle 3'
                                  x='213.172'
                                  y='262.741'
                                  width='195'
                                  height='126.638'
                                  fill='url(#paintV37_linear)'
                                />
                              </g>
                              <g id='Innershadow0.1fill_2' filter='url(#filterV13_i)'>
                                <path
                                  d='M302.98 167.181L221.589 211.417C216.402 214.236 213.173 219.667 213.173 225.571L213.172 326.819C213.172 332.723 216.402 338.154 221.589 340.974L302.98 385.209C307.777 387.816 313.568 387.816 318.365 385.209L399.756 340.974C404.943 338.154 408.172 332.723 408.172 326.819L408.172 225.571C408.172 219.667 404.943 214.236 399.756 211.417L318.365 167.181C313.568 164.574 307.777 164.574 302.98 167.181Z'
                                  fill='#6052B4'
                                  fillOpacity='0.01'
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterV0_f'
              x='210.694'
              y='88.6942'
              width='55.8408'
              height='55.8408'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='10.1529' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV1_f'
              x='202.308'
              y='388.308'
              width='8.46073'
              height='8.46073'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.846073' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV2_f'
              x='217'
              y='150'
              width='21.0764'
              height='21.0764'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV3_f'
              x='433'
              y='301'
              width='17.0764'
              height='17.0764'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='3' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV4_f'
              x='107'
              y='258.673'
              width='56.9215'
              height='56.9215'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='10' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV5_f'
              x='498.079'
              y='227.079'
              width='47.3801'
              height='47.3801'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='8.46073' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV6_f'
              x='218.079'
              y='448.079'
              width='47.3801'
              height='47.3801'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='8.46073' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV7_dd'
              x='0.286484'
              y='47.6388'
              width='619.584'
              height='536.966'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='15.306' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.991667 0 0 0 0 0.801597 0 0 0 0 0.516493 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='6.12241' />
              <feGaussianBlur stdDeviation='45.9181' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 1 0 0 0 0 0.722667 0 0 0 0 0.466667 0 0 0 0.6 0'
              />
              <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterV8_d'
              x='204.672'
              y='314.5'
              width='68.5'
              height='135.841'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.7 0 0 0 0 0.561568 0 0 0 0 0.32375 0 0 0 0.78 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterV9_d'
              x='347.673'
              y='314.5'
              width='68.5'
              height='135.841'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.7 0 0 0 0 0.561568 0 0 0 0 0.32375 0 0 0 0.78 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterV10_d'
              x='246.172'
              y='309'
              width='128'
              height='185.646'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='4' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.7 0 0 0 0 0.561568 0 0 0 0 0.32375 0 0 0 0.78 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterV11_d'
              x='179.172'
              y='133.353'
              width='262'
              height='299.8'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='8' />
              <feGaussianBlur stdDeviation='3' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.4375 0 0 0 0 0.287401 0 0 0 0 0.111198 0 0 0 0.6 0'
              />
              <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
              <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
            </filter>
            <filter
              id='filterV12_f'
              x='203.372'
              y='154.544'
              width='213.3'
              height='242.913'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <filter
              id='filterV13_i'
              x='213.172'
              y='165.226'
              width='195'
              height='221.939'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset />
              <feGaussianBlur stdDeviation='6.72414' />
              <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.458333 0 0 0 0 0.256743 0 0 0 0 0.0706597 0 0 0 1 0'
              />
              <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
            </filter>
            <linearGradient
              id='paintV0_linear'
              x1='547.452'
              y1='414.196'
              x2='358.631'
              y2='305.18'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV1_linear'
              x1='312.015'
              y1='552.101'
              x2='312.015'
              y2='334.069'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV2_linear'
              x1='310.517'
              y1='0'
              x2='310.517'
              y2='218.032'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV3_linear'
              x1='75.2584'
              y1='414.887'
              x2='264.08'
              y2='305.872'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV4_linear'
              x1='547.452'
              y1='138.048'
              x2='358.631'
              y2='247.064'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV5_linear'
              x1='75.2584'
              y1='137.356'
              x2='264.08'
              y2='246.372'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6D6' stopOpacity='0' />
              <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
            </linearGradient>
            <linearGradient
              id='paintV6_linear'
              x1='150.665'
              y1='218.653'
              x2='123.031'
              y2='177.613'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D2A86B' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV7_linear'
              x1='107.435'
              y1='169.159'
              x2='132.171'
              y2='216.062'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#F5E3C4' />
              <stop offset='0.480868' stopColor='#E6CA9E' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV8_linear'
              x1='171.056'
              y1='260.333'
              x2='143.423'
              y2='219.292'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E0C08E' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV9_linear'
              x1='126.056'
              y1='209.474'
              x2='181.673'
              y2='275.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#FFF5DE' />
              <stop offset='0.480868' stopColor='#EAD2A9' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV10_linear'
              x1='197.797'
              y1='302.952'
              x2='170.164'
              y2='261.911'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E0C08E' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV11_linear'
              x1='152.797'
              y1='252.093'
              x2='208.414'
              y2='318.119'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#FFF5DE' />
              <stop offset='0.480868' stopColor='#EAD2A9' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV12_linear'
              x1='213.172'
              y1='403.763'
              x2='266.046'
              y2='415.71'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#8D664F' />
              <stop offset='0.208702' stopColor='#C49F7D' />
              <stop offset='0.648432' stopColor='#FFF1DC' />
              <stop offset='0.827985' stopColor='#B38368' />
              <stop offset='0.971703' stopColor='#8C5F4C' />
            </linearGradient>
            <linearGradient
              id='paintV13_linear'
              x1='219.672'
              y1='402'
              x2='238.798'
              y2='396.298'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C7A383' />
              <stop offset='0.309893' stopColor='#D5B198' />
              <stop offset='0.523799' stopColor='#CBA68C' />
              <stop offset='0.77229' stopColor='#BB9478' />
              <stop offset='1' stopColor='#D7B49B' />
            </linearGradient>
            <linearGradient
              id='paintV14_linear'
              x1='407.673'
              y1='403.763'
              x2='354.799'
              y2='415.71'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#8D664F' />
              <stop offset='0.208702' stopColor='#C49F7D' />
              <stop offset='0.648432' stopColor='#FFF1DC' />
              <stop offset='0.827985' stopColor='#B38368' />
              <stop offset='0.971703' stopColor='#8C5F4C' />
            </linearGradient>
            <linearGradient
              id='paintV15_linear'
              x1='401.173'
              y1='402'
              x2='382.047'
              y2='396.298'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C7A383' />
              <stop offset='0.309893' stopColor='#D5B198' />
              <stop offset='0.523799' stopColor='#CBA68C' />
              <stop offset='0.77229' stopColor='#BB9478' />
              <stop offset='1' stopColor='#D7B49B' />
            </linearGradient>
            <linearGradient
              id='paintV16_linear'
              x1='310.172'
              y1='392'
              x2='310.172'
              y2='486'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#B58D70' />
              <stop offset='0.2286' stopColor='#B58D70' />
              <stop offset='0.47675' stopColor='#D8B59B' />
              <stop offset='0.88344' stopColor='#B58D70' />
              <stop offset='1' stopColor='#B58D70' />
            </linearGradient>
            <linearGradient
              id='paintV17_linear'
              x1='255.172'
              y1='432.5'
              x2='361.545'
              y2='468.71'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#8D664F' />
              <stop offset='0.208702' stopColor='#FFF5E6' />
              <stop offset='0.648432' stopColor='#ECD8BA' />
              <stop offset='0.780206' stopColor='#D0A568' />
              <stop offset='0.971703' stopColor='#8C5F4C' />
            </linearGradient>
            <linearGradient
              id='paintV18_linear'
              x1='309.172'
              y1='374'
              x2='309.172'
              y2='484.646'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#DDBFA9' />
              <stop offset='0.22229' stopColor='#DDBFA9' />
              <stop offset='0.669825' stopColor='#EBD4C4' />
              <stop offset='0.898796' stopColor='#DDBFA9' />
              <stop offset='1' stopColor='#DDBFA9' />
            </linearGradient>
            <linearGradient
              id='paintV19_linear'
              x1='354.548'
              y1='445.339'
              x2='314.42'
              y2='414.246'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#ECD8BA' />
              <stop offset='0.309893' stopColor='#EBD3AE' />
              <stop offset='0.523799' stopColor='#E2C69C' />
              <stop offset='0.77229' stopColor='#E3C8A0' />
              <stop offset='1' stopColor='#ECD8BA' />
            </linearGradient>
            <linearGradient
              id='paintV20_linear'
              x1='309.67'
              y1='458'
              x2='309.67'
              y2='474.95'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAECD8' />
              <stop offset='0.491891' stopColor='#F9EBD7' />
              <stop offset='1' stopColor='#ECD5B4' />
            </linearGradient>
            <linearGradient
              id='paintV21_linear'
              x1='305.94'
              y1='458.434'
              x2='305.94'
              y2='471.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F9EBD7' />
              <stop offset='0.479167' stopColor='#FAEDD9' />
              <stop offset='1' stopColor='#F8E9D4' />
            </linearGradient>
            <linearGradient
              id='paintV22_linear'
              x1='313.401'
              y1='458.434'
              x2='313.401'
              y2='471.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FAEDD8' />
              <stop offset='0.479167' stopColor='#FAECD8' />
              <stop offset='1' stopColor='#EAD4B2' />
            </linearGradient>
            <linearGradient
              id='paintV23_linear'
              x1='308.617'
              y1='472.907'
              x2='297.341'
              y2='474.242'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E5CBA6' />
              <stop offset='0.309893' stopColor='#FAEDDA' />
              <stop offset='0.523799' stopColor='#F3E2C9' />
              <stop offset='0.613641' stopColor='#EFDCC0' />
              <stop offset='1' stopColor='#EFDCC0' />
            </linearGradient>
            <linearGradient
              id='paintV24_linear'
              x1='469.492'
              y1='219.958'
              x2='497.126'
              y2='178.917'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D2A86B' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV25_linear'
              x1='512.721'
              y1='170.464'
              x2='487.985'
              y2='217.366'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#F5E3C4' />
              <stop offset='0.480868' stopColor='#E6CA9E' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV26_linear'
              x1='449.1'
              y1='261.637'
              x2='476.734'
              y2='220.597'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E0C08E' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV27_linear'
              x1='494.101'
              y1='210.778'
              x2='438.484'
              y2='276.804'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#FFF5DE' />
              <stop offset='0.480868' stopColor='#EAD2A9' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV28_linear'
              x1='422.359'
              y1='304.257'
              x2='449.993'
              y2='263.216'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#E0C08E' />
              <stop offset='0.875' stopColor='#FFF5DE' />
            </linearGradient>
            <linearGradient
              id='paintV29_linear'
              x1='467.36'
              y1='253.398'
              x2='411.743'
              y2='319.424'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='0.378992' stopColor='#FFF5DE' />
              <stop offset='0.480868' stopColor='#EAD2A9' />
              <stop offset='0.729174' stopColor='#D2A86B' />
            </linearGradient>
            <linearGradient
              id='paintV30_linear'
              x1='257.672'
              y1='166'
              x2='370.172'
              y2='389.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF5DE' />
              <stop offset='1' stopColor='#CFA365' />
            </linearGradient>
            <linearGradient
              id='paintV31_linear'
              x1='256.672'
              y1='184.5'
              x2='353.672'
              y2='363.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#D2A86C' />
              <stop offset='1' stopColor='#F8E6C0' />
            </linearGradient>
            <linearGradient
              id='paintV32_linear'
              x1='267.172'
              y1='178'
              x2='371.672'
              y2='366'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FFF6E7' />
              <stop offset='1' stopColor='#FFF8EC' />
            </linearGradient>
            <radialGradient
              id='paintV33_radial'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(310.672 276.195) rotate(90) scale(113.195 97.5)'
            >
              <stop stopColor='#FFE4BA' />
              <stop offset='1' stopColor='#DEA44D' />
            </radialGradient>
            <linearGradient
              id='paintV34_linear'
              x1='310.673'
              y1='158.517'
              x2='310.673'
              y2='393.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintV35_linear'
              x1='190.298'
              y1='179.81'
              x2='307.97'
              y2='383.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintV36_linear'
              x1='422.28'
              y1='179.81'
              x2='304.608'
              y2='383.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' />
              <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paintV37_linear'
              x1='310.672'
              y1='317.655'
              x2='310.084'
              y2='381.533'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='white' stopOpacity='0' />
              <stop offset='1' stopColor='#FFF1E3' />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width={BadgesSize[size].badge.width}
          height={BadgesSize[size].badge.height}
          viewBox='0 0 465 355'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <path
              d='M129.446 98.7382L137.358 58.2092L22.0349 35.6953C17.0897 61.0259 32.0302 79.7203 46.5801 82.5608L129.446 98.7382Z'
              fill='url(#paintVLOCKED0_linear)'
            />
            <path
              d='M128.272 99.528L136.185 58.999L23.8062 37.06C18.8611 62.3906 33.8015 81.085 48.3514 83.9255L128.272 99.528Z'
              fill='url(#paintVLOCKED1_linear)'
            />
            <path
              d='M130.208 136.585L138.12 96.0564L42.4265 77.3747C37.4814 102.705 52.4218 121.4 66.9717 124.24L130.208 136.585Z'
              fill='url(#paintVLOCKED2_linear)'
            />
            <path
              d='M130.208 136.585L138.12 96.0564L42.4265 77.3747C37.4814 102.705 52.4218 121.4 66.9717 124.24L130.208 136.585Z'
              fill='url(#paintVLOCKED3_linear)'
            />
            <path
              d='M156.949 179.205L164.861 138.676L69.1676 119.994C64.2225 145.325 79.1629 164.019 93.7128 166.86L156.949 179.205Z'
              fill='url(#paintVLOCKED4_linear)'
            />
            <path
              d='M156.949 179.205L164.861 138.676L69.1676 119.994C64.2225 145.325 79.1629 164.019 93.7128 166.86L156.949 179.205Z'
              fill='url(#paintVLOCKED5_linear)'
            />
            <path
              d='M135.172 282.5V192H186.672V310.5L135.172 282.5Z'
              fill='url(#paintVLOCKED6_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M140.842 278.139V237H140.173V278.697L140.452 278.743C141.377 278.897 142.405 279.444 143.245 280.244C144.084 281.043 144.705 282.066 144.859 283.144L144.885 283.323L171.953 296V250.726H171.283V294.948L145.492 282.868C145.272 281.676 144.58 280.592 143.707 279.76C142.869 278.962 141.839 278.372 140.842 278.139Z'
              fill='url(#paintVLOCKED7_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M171.246 292.5C171.967 291.28 172.009 289.55 171.953 288.432L171.285 288.466C171.34 289.578 171.281 291.126 170.67 292.159C170.374 292.66 169.955 293.028 169.351 293.18C168.738 293.334 167.889 293.274 166.722 292.82L166.48 293.444C167.721 293.927 168.718 294.029 169.514 293.829C170.321 293.626 170.876 293.125 171.246 292.5Z'
              fill='url(#paintVLOCKED8_linear)'
            />
            <path
              d='M329.673 282.5V192H278.173V310.5L329.673 282.5Z'
              fill='url(#paintVLOCKED9_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M324.004 278.139V237H324.673V278.697L324.393 278.743C323.468 278.897 322.44 279.444 321.6 280.244C320.761 281.043 320.14 282.066 319.986 283.144L319.96 283.323L292.893 296V250.726H293.562V294.948L319.353 282.868C319.573 281.676 320.265 280.592 321.138 279.76C321.976 278.962 323.006 278.372 324.004 278.139Z'
              fill='url(#paintVLOCKED10_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M293.599 292.5C292.878 291.28 292.836 289.55 292.892 288.432L293.561 288.466C293.505 289.578 293.564 291.126 294.175 292.159C294.471 292.66 294.89 293.028 295.494 293.18C296.108 293.334 296.956 293.274 298.123 292.82L298.365 293.444C297.124 293.927 296.127 294.029 295.331 293.829C294.524 293.626 293.969 293.125 293.599 292.5Z'
              fill='url(#paintVLOCKED11_linear)'
            />
            <path
              d='M334.711 100.043L326.799 59.5138L442.122 37C447.067 62.3306 432.126 81.025 417.577 83.8655L334.711 100.043Z'
              fill='url(#paintVLOCKED12_linear)'
            />
            <path
              d='M335.884 100.833L327.972 60.3037L440.35 38.3647C445.296 63.6953 430.355 82.3897 415.805 85.2302L335.884 100.833Z'
              fill='url(#paintVLOCKED13_linear)'
            />
            <path
              d='M333.949 137.89L326.037 97.3611L421.73 78.6794C426.675 104.01 411.735 122.704 397.185 125.545L333.949 137.89Z'
              fill='url(#paintVLOCKED14_linear)'
            />
            <path
              d='M333.949 137.89L326.037 97.3611L421.73 78.6794C426.675 104.01 411.735 122.704 397.185 125.545L333.949 137.89Z'
              fill='url(#paintVLOCKED15_linear)'
            />
            <path
              d='M307.208 180.51L299.296 139.981L394.989 121.299C399.934 146.629 384.994 165.324 370.444 168.164L307.208 180.51Z'
              fill='url(#paintVLOCKED16_linear)'
            />
            <path
              d='M307.208 180.51L299.296 139.981L394.989 121.299C399.934 146.629 384.994 165.324 370.444 168.164L307.208 180.51Z'
              fill='url(#paintVLOCKED17_linear)'
            />
            <path
              d='M177.172 187H287.172V326.686L231.473 355L177.172 327.166V187Z'
              fill='url(#paintVLOCKED18_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M248.172 345.511L232.784 353.333C231.96 353.752 230.986 353.75 230.164 353.329L214.172 345.132V243H248.172V345.511Z'
              fill='url(#paintVLOCKED19_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M183.172 262H184.766V324.52L231.778 348.821L279.579 324.517V262H281.172V325.084L231.771 350L183.172 325.081V262Z'
              fill='url(#paintVLOCKED20_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M232.104 327V345.143H231.235V327H232.104Z'
              fill='url(#paintVLOCKED21_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M229.065 338.704C227.335 340.7 225.227 341.144 223.776 340.902L223.919 340.044C225.075 340.237 226.879 339.899 228.408 338.135C229.944 336.364 231.236 333.114 231.236 327.434H232.105C232.105 333.229 230.789 336.716 229.065 338.704Z'
              fill='url(#paintVLOCKED22_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M234.276 338.704C236.006 340.7 238.114 341.144 239.565 340.902L239.422 340.044C238.266 340.237 236.462 339.899 234.933 338.135C233.397 336.364 232.105 333.114 232.105 327.434H231.236C231.236 333.229 232.552 336.716 234.276 338.704Z'
              fill='url(#paintVLOCKED23_linear)'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M231.488 345.538L221.672 340.039L223.846 340.039L231.669 344.666L239.492 340H241.41L231.849 345.539C231.734 345.591 231.602 345.591 231.488 345.538Z'
              fill='url(#paintVLOCKED24_linear)'
            />
            <path
              d='M232.172 0L107.173 67.9987L107.172 222.506L232.172 290.505L357.172 222.506L357.172 67.9987L232.172 0Z'
              fill='url(#paintVLOCKED25_linear)'
            />
            <path
              d='M232.023 22L126.173 79.5814L126.172 210.419L232.023 268L337.873 210.419L337.873 79.5814L232.023 22Z'
              fill='url(#paintVLOCKED26_linear)'
            />
            <g filter='url(#filterVLOCKED0_f)'>
              <path
                d='M232.023 22L126.173 79.5814L126.172 210.419L232.023 268L337.873 210.419L337.873 79.5814L232.023 22Z'
                fill='url(#paintVLOCKED27_linear)'
              />
            </g>
            <g opacity='0.5'>
              <mask
                id='maskVLOCKED0'
                maskUnits='userSpaceOnUse'
                x='135'
                y='32'
                width='196'
                height='227'
              >
                <path
                  d='M232.672 32L135.173 84.9913L135.172 205.399L232.672 258.39L330.172 205.399L330.172 84.9913L232.672 32Z'
                  fill='url(#paintVLOCKED28_linear)'
                />
              </mask>
              <g mask='url(#maskVLOCKED0)'>
                <path
                  d='M232.672 32L135.173 84.9913L135.172 205.399L232.672 258.39L330.172 205.399L330.172 84.9913L232.672 32Z'
                  fill='url(#paintVLOCKED29_linear)'
                />
                <path
                  opacity='0.5'
                  d='M216.373 262.862L212.5 27.5172H252.845L248.972 262.862H216.373Z'
                  fill='url(#paintVLOCKED30_linear)'
                />
                <path
                  opacity='0.5'
                  d='M215.854 260.775L94.8278 58.8965L129.767 38.7241L244.086 244.475L215.854 260.775Z'
                  fill='url(#paintVLOCKED31_linear)'
                />
                <path
                  opacity='0.5'
                  d='M212.492 244.475L326.81 38.724L361.75 58.8964L240.723 260.774L212.492 244.475Z'
                  fill='url(#paintVLOCKED32_linear)'
                />
                <rect
                  x='135.172'
                  y='131.741'
                  width='195'
                  height='126.638'
                  fill='url(#paintVLOCKED33_linear)'
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id='filterVLOCKED0_f'
              x='125.872'
              y='21.7'
              width='212.3'
              height='246.6'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
              <feGaussianBlur stdDeviation='0.15' result='effect1_foregroundBlur' />
            </filter>
            <linearGradient
              id='paintVLOCKED0_linear'
              x1='133.402'
              y1='78.4737'
              x2='18.0788'
              y2='55.9598'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED1_linear'
              x1='132.229'
              y1='79.2635'
              x2='19.8501'
              y2='57.3245'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED2_linear'
              x1='134.164'
              y1='116.321'
              x2='38.4704'
              y2='97.6392'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED3_linear'
              x1='134.164'
              y1='116.321'
              x2='38.4704'
              y2='97.6392'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED4_linear'
              x1='160.905'
              y1='158.94'
              x2='65.2115'
              y2='140.259'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED5_linear'
              x1='160.905'
              y1='158.94'
              x2='65.2115'
              y2='140.259'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED6_linear'
              x1='160.922'
              y1='192'
              x2='160.922'
              y2='310.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED7_linear'
              x1='156.063'
              y1='237'
              x2='156.063'
              y2='296'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED8_linear'
              x1='169.225'
              y1='288.432'
              x2='169.225'
              y2='293.925'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED9_linear'
              x1='303.923'
              y1='192'
              x2='303.923'
              y2='310.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED10_linear'
              x1='308.783'
              y1='237'
              x2='308.783'
              y2='296'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED11_linear'
              x1='295.62'
              y1='288.432'
              x2='295.62'
              y2='293.925'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED12_linear'
              x1='330.755'
              y1='79.7783'
              x2='446.078'
              y2='57.2645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED13_linear'
              x1='331.928'
              y1='80.5682'
              x2='444.307'
              y2='58.6292'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED14_linear'
              x1='329.993'
              y1='117.626'
              x2='425.686'
              y2='98.9439'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED15_linear'
              x1='329.993'
              y1='117.626'
              x2='425.686'
              y2='98.9439'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED16_linear'
              x1='303.252'
              y1='160.245'
              x2='398.945'
              y2='141.563'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED17_linear'
              x1='303.252'
              y1='160.245'
              x2='398.945'
              y2='141.563'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED18_linear'
              x1='232.172'
              y1='187'
              x2='232.172'
              y2='355'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED19_linear'
              x1='231.172'
              y1='243'
              x2='231.172'
              y2='353.646'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED20_linear'
              x1='232.172'
              y1='262'
              x2='232.172'
              y2='350'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED21_linear'
              x1='231.67'
              y1='327'
              x2='231.67'
              y2='345.143'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED22_linear'
              x1='227.94'
              y1='327.434'
              x2='227.94'
              y2='340.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED23_linear'
              x1='235.401'
              y1='327.434'
              x2='235.401'
              y2='340.962'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED24_linear'
              x1='231.541'
              y1='340'
              x2='231.541'
              y2='345.578'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED25_linear'
              x1='232.172'
              y1='0'
              x2='232.172'
              y2='290.505'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED26_linear'
              x1='232.023'
              y1='22'
              x2='232.023'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED27_linear'
              x1='232.023'
              y1='22'
              x2='232.023'
              y2='268'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED28_linear'
              x1='232.672'
              y1='32'
              x2='232.672'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED29_linear'
              x1='232.672'
              y1='32'
              x2='232.672'
              y2='258.39'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED30_linear'
              x1='232.673'
              y1='27.5172'
              x2='232.673'
              y2='262.862'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED31_linear'
              x1='112.298'
              y1='48.8103'
              x2='229.97'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED32_linear'
              x1='344.28'
              y1='48.8102'
              x2='226.608'
              y2='252.625'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
            <linearGradient
              id='paintVLOCKED33_linear'
              x1='232.672'
              y1='131.741'
              x2='232.672'
              y2='258.379'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#AACCFF' stopOpacity='0' />
              <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  )
}

/**
 *
 * @param {string} size accepts 3 possible values. | sm -> 100*100px | md 200*200px | lg -> 300*300px | by default is sm
 * @param {boolean} shadow  activate the shadows | by default is true
 * @param {boolean} animation  activate the animation | by default is false
 * @param {number} stars sets the number of stars obtained 0 is none and 3 is the maximum  | -1 -> disable stars | by default is 0
 * @param {string} level  sets the level, takes 5 possible strict values | I | II | III | IV | V |
 * @param {boolean} light  activate the lights | by default is true
 * @param {boolean} locked  show your locked version | by default is false
 * @param {string} tech  name of tech
 * @returns {jsx} jsx component
 */
export const BadgeTech = ({
  animation = false,
  level = 'I',
  lights = true,
  locked = false,
  shadow = true,
  size = 'sm',
  tech = ''
}: TechProps) => {
  const levels = {
    I: <TechI level={level} shadow={shadow} locked={locked} size={size} tech={tech} />,
    II: <TechII level={level} shadow={shadow} locked={locked} size={size} tech={tech} />,
    III: (
      <TechIII
        animation={animation}
        level={level}
        lights={lights}
        locked={locked}
        shadow={shadow}
        size={size}
        tech={tech}
      />
    ),
    IV: (
      <TechIV
        animation={animation}
        level={level}
        lights={lights}
        locked={locked}
        shadow={shadow}
        size={size}
        tech={tech}
      />
    ),
    V: (
      <TechV
        animation={animation}
        level={level}
        lights={lights}
        locked={locked}
        shadow={shadow}
        size={size}
        tech={tech}
      />
    )
  }

  return levels[level] || levels.I
}
