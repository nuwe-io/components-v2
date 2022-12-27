import { Diamond, Start } from '../../atoms'
import { useStyles } from './style'

const BadgesSize = {
  sm: {
    badge: {
      width: '100px',
      height: '100px'
    },
    stars: {
      size: {
        width: 20,
        height: 17
      },
      positions: {
        left: {
          left: '-5px',
          top: '10px'
        },
        top: {
          top: '0px',
          right: '0px'
        },
        right: {
          right: '-5px',
          top: '10px'
        }
      }
    },
    diamond: {
      width: '20px',
      height: '20px ',
      position: {
        explorer: {
          top: '40%',
          left: '39%'
        },
        creator: {
          top: '36%',
          left: '40%'
        },
        artisan: {
          top: '34%',
          left: '40%'
        },
        master: {
          top: '40%',
          left: '40%'
        }
      }
    }
  },
  md: {
    badge: {
      width: '200px',
      height: '200px'
    },
    stars: {
      size: {
        width: 50,
        height: 47
      },
      positions: {
        left: {
          left: '-10px',
          top: '10px'
        },
        top: {
          top: '-10px',
          right: '0px'
        },
        right: {
          right: '-10px',
          top: '10px'
        }
      }
    },
    diamond: {
      width: '40px',
      height: '40px ',
      position: {
        explorer: {
          top: '40%',
          left: '39%'
        },
        creator: {
          top: '38%',
          left: '40%'
        },
        artisan: {
          top: '35%',
          left: '40%'
        },
        master: {
          top: '40%',
          left: '40%'
        }
      }
    }
  },
  lg: {
    badge: {
      width: '300px',
      height: '300px'
    },
    stars: {
      size: {
        width: 70,
        height: 67
      },
      positions: {
        left: {
          left: '-7px',
          top: '10px'
        },
        top: {
          top: '-20px',
          right: '0px'
        },
        right: {
          right: '-7px',
          top: '10px'
        }
      }
    },
    diamond: {
      width: '50px',
      height: '50px ',
      position: {
        explorer: {
          top: '43%',
          left: '41%'
        },
        creator: {
          top: '40%',
          left: '42%'
        },
        artisan: {
          top: '38%',
          left: '42%'
        },
        master: {
          top: '43%',
          left: '42%'
        }
      }
    }
  }
}

const Explorer = ({
  animation = false,
  level = 0,
  lights = true,
  locked = false,
  mod = 'data',
  rank = 'explorer',
  shadow = true,
  size = 'sm',
  stars = 0,
  type = 'default'
}: BadgesRankProps) => {
  const {
    rotation,
    wrapper,
    wrapperBadge,
    diamond,
    flex,
    starsFlex,
    starLeft,
    starTop,
    starRight
  } = useStyles({
    left: BadgesSize[size].stars.positions.left,
    top: BadgesSize[size].stars.positions.top,
    right: BadgesSize[size].stars.positions.right,
    diamondLeft: BadgesSize[size].diamond.position[rank].left,
    diamondTop: BadgesSize[size].diamond.position[rank].top
  })

  const mode = {
    beta: {
      body: {
        outsideBase: {
          one: '#404560',
          two: '#0B0C12'
        },
        insideBase: {
          one: '#0B0C12',
          two: '#404560'
        }
      },
      lights: {
        color: '#404560'
      },
      points: {
        end: ['#0D0E15', '#404560', '#181A25', '#14161F', '#14161F', '#404560', '#14151F'],
        two: ['#0D0E15', '#404560', '#181A25', '#14161F', '#404560', '#14151F'],
        first: ['#0D0E15', '#404560', '#14161F', '#14161F', '#404560', '#14151F']
      },
      line: ['#404560', '#646A88'],
      decorator: {
        union: '#404560',
        Innershadow0: ['#585D7A', '#14151F'],
        lightsInside: [
          '#40456033',
          '#F2EDED',
          '#40456033',
          '#F2EDED',
          '#40456033',
          '#F2EDED',
          '#D5DBF7',
          '#6A719333'
        ],
        Innershadow1: '#404560'
      }
    },
    default: {
      body: {
        outsideBase: {
          one: '#FAFAFA',
          two: '#C2C4CD'
        },
        insideBase: {
          one: '#CDCFD6',
          two: '#EFEFF1'
        }
      },
      lights: {
        color: '#AACCFF'
      },
      points: {
        end: ['#D5D7D9', '#E2E3E7', '#CCCFDD', '#D9DBE4', '#E2E3E7', '#F4F5F8', '#F5F6F7'],
        two: ['#D5D7D9', '#E2E3E7', '#DBDCE1', '#F2F3F8', '#F4F5F8', '#F5F6F7'],
        first: ['#D5D7D9', '#E2E3E7', '#CDD0DD', '#DBDDE7', '#F4F5F8', '#F5F6F7'],
        shadow: ''
      },
      line: ['#DDDFE2', 'white'],
      decorator: {
        union: '#A6D3DE',
        Innershadow0: ['#F5F7FF', '#B3B5C5'],
        lightsInside: [
          'white',
          '#F2EDED',
          'white',
          '#F2EDED',
          'white',
          '#F2EDED',
          'white',
          '#D0DBFF'
        ],
        Innershadow1: '#6052B4'
      }
    }
  }

  return (
    <div className={wrapper}>
      {stars > 0 && stars < 4 ? (
        <div className={starsFlex}>
          <div style={stars > 0 ? {} : { opacity: '0.5' }} className={starLeft}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 0)}
            />
          </div>
          <div style={stars > 1 ? {} : { opacity: '0.5' }} className={starTop}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 1)}
            />
          </div>
          <div style={stars > 2 ? {} : { opacity: '0.5' }} className={starRight}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 2)}
            />
          </div>
        </div>
      ) : null}
      <div className={flex}>
        {!locked ? (
          <div className={wrapperBadge}>
            <div className={diamond}>
              {level < 0 ? null : (
                <Diamond
                  width={BadgesSize[size].diamond.width}
                  height={BadgesSize[size].diamond.height}
                  diamond={level}
                  mod={mod}
                />
              )}
            </div>
            <svg
              width={BadgesSize[size].badge.width}
              height={BadgesSize[size].badge.height}
              viewBox='0 0 495 509'
              fill='none'
            >
              <g id='explorer-badge'>
                {lights && (
                  <g id='Lights' className={animation ? rotation : ''}>
                    <path
                      id='Vector 271'
                      d='M218.817 203.458L210.891 24H274.296L266.37 203.458H218.817Z'
                      fill='url(#paintEXPLORER0_linear)'
                    />
                    <path
                      id='Vector 264'
                      d='M292.978 254.761L452.356 337.627L420.653 392.537L269.201 295.944L292.978 254.761Z'
                      fill='url(#paintEXPLORER1_linear)'
                    />
                    <path
                      id='Vector 265'
                      d='M265.238 299.131L273.164 478.589H209.759L217.684 299.131H265.238Z'
                      fill='url(#paintEXPLORER2_linear)'
                    />
                    <path
                      id='Vector 267'
                      d='M215.155 296.514L63.7024 393.106L32 338.196L191.378 255.331L215.155 296.514Z'
                      fill='url(#paintEXPLORER3_linear)'
                    />
                    <path
                      id='Vector 274'
                      d='M292.978 248.111L452.356 165.246L420.653 110.336L269.201 206.928L292.978 248.111Z'
                      fill='url(#paintEXPLORER4_linear)'
                    />
                    <path
                      id='Vector 275'
                      d='M215.155 206.359L63.7024 109.766L32 164.676L191.378 247.541L215.155 206.359Z'
                      fill='url(#paintEXPLORER5_linear)'
                    />
                  </g>
                )}
                <g id='base' filter={shadow ? 'url(#filterEXPLORER0_dd)' : ''}>
                  <g id='body-container'>
                    <g id='body' filter={shadow ? 'url(#filterEXPLORER1_d)' : ''}>
                      <path
                        id='outside-body'
                        d='M230.105 97.2684L118.068 158.216C109.527 162.862 104.211 171.806 104.211 181.528L104.211 321.268C104.211 330.99 109.527 339.935 118.068 344.581L230.105 405.528C238.013 409.83 247.562 409.83 255.469 405.528L367.506 344.581C376.047 339.935 381.363 330.99 381.364 321.268L381.364 181.528C381.364 171.806 376.047 162.862 367.506 158.216L255.469 97.2684C247.562 92.9668 238.013 92.9668 230.105 97.2684Z'
                        fill='url(#paintEXPLORER6_linear)'
                      />

                      <path
                        id='inside-body'
                        d='M229.988 121.632L139.081 171.085C130.572 175.713 125.276 184.624 125.276 194.31L125.276 307.927C125.276 317.613 130.572 326.523 139.081 331.152L229.988 380.605C237.866 384.89 247.379 384.89 255.257 380.605L346.164 331.152C354.673 326.523 359.969 317.613 359.969 307.927L359.969 194.31C359.969 184.624 354.673 175.713 346.164 171.085L255.257 121.632C247.379 117.347 237.866 117.347 229.988 121.632Z'
                        fill='url(#paintEXPLORER7_linear)'
                      />
                      <g id='line' filter='url(#filterEXPLORER2_f)'>
                        <path
                          d='M229.988 121.632L139.081 171.085C130.572 175.713 125.276 184.624 125.276 194.31L125.276 307.927C125.276 317.613 130.572 326.523 139.081 331.152L229.988 380.605C237.866 384.89 247.379 384.89 255.257 380.605L346.164 331.152C354.673 326.523 359.969 317.613 359.969 307.927L359.969 194.31C359.969 184.624 354.673 175.713 346.164 171.085L255.257 121.632C247.379 117.347 237.866 117.347 229.988 121.632Z'
                          stroke='url(#paintEXPLORER8_linear)'
                          strokeWidth='1.56112'
                        />
                      </g>

                      <g id='decorators' opacity='0.5'>
                        <mask
                          id='maskEXPLORER0'
                          maskUnits='userSpaceOnUse'
                          x='135'
                          y='129'
                          width='217'
                          height='245'
                        >
                          <path
                            id='Union'
                            d='M231.333 132.373L148.393 177.451C140.295 181.852 135.253 190.331 135.253 199.548L135.253 303.122C135.253 312.339 140.295 320.818 148.393 325.219L231.333 370.297C238.822 374.368 247.863 374.368 255.352 370.297L338.292 325.219C346.39 320.818 351.432 312.339 351.432 303.122L351.432 199.548C351.432 190.331 346.39 181.852 338.292 177.451L255.352 132.373C247.863 128.302 238.822 128.302 231.333 132.373Z'
                            fill={mode[type].decorator.union}
                          />
                        </mask>
                        <g mask='url(#maskEXPLORER0)'>
                          <path
                            id='Innershadow0.1fill2'
                            d='M231.333 132.373L148.393 177.451C140.295 181.852 135.253 190.331 135.253 199.548L135.253 303.122C135.253 312.339 140.295 320.818 148.393 325.219L231.333 370.297C238.822 374.368 247.863 374.368 255.352 370.297L338.292 325.219C346.39 320.818 351.432 312.339 351.432 303.122L351.432 199.548C351.432 190.331 346.39 181.852 338.292 177.451L255.352 132.373C247.863 128.302 238.822 128.302 231.333 132.373Z'
                            fill='url(#paintEXPLORER9_radial)'
                          />
                          <g id='lights-inside'>
                            <path
                              id='Vector 5'
                              opacity='0.5'
                              d='M225.273 381.781L220.979 120.875H265.706L261.412 381.781H225.273Z'
                              fill='url(#paintEXPLORER10_linear)'
                            />
                            <path
                              id='Vector 6'
                              opacity='0.5'
                              d='M224.698 379.468L90.5267 155.663L129.261 133.3L255.996 361.398L224.698 379.468Z'
                              fill='url(#paintEXPLORER11_linear)'
                            />
                            <path
                              id='Vector 7'
                              opacity='0.5'
                              d='M220.97 361.397L347.705 133.299L386.439 155.662L252.268 379.467L220.97 361.397Z'
                              fill='url(#paintEXPLORER12_linear)'
                            />
                            <rect
                              id='Rectangle 3'
                              x='135.253'
                              y='236.419'
                              width='216.179'
                              height='140.392'
                              fill='url(#paintEXPLORER13_linear)'
                            />
                          </g>
                          <g id='Innershadow0.1fill1' filter='url(#filterEXPLORER3_i)'>
                            <path
                              d='M231.333 132.373L148.393 177.451C140.295 181.852 135.253 190.331 135.253 199.548L135.253 303.122C135.253 312.339 140.295 320.818 148.393 325.219L231.333 370.297C238.822 374.368 247.863 374.368 255.352 370.297L338.292 325.219C346.39 320.818 351.432 312.339 351.432 303.122L351.432 199.548C351.432 190.331 346.39 181.852 338.292 177.451L255.352 132.373C247.863 128.302 238.822 128.302 231.333 132.373Z'
                              fill={mode[type].decorator.Innershadow1}
                              fillOpacity='0.01'
                            />
                          </g>
                        </g>
                      </g>
                    </g>

                    <g id='points'>
                      <g id='Group 199'>
                        <g id='Vector 230' filter='url(#filterEXPLORER4_f)'>
                          <path
                            id='show_of_point'
                            d='M315.678 296.151L359.926 349.22L383.761 307.936L315.678 296.151Z'
                            fill='url(#paintEXPLORER14_linear)'
                          />
                        </g>

                        <g id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;'>
                          <mask
                            id='maskEXPLORER1'
                            maskUnits='userSpaceOnUse'
                            x='322'
                            y='283'
                            width='79'
                            height='79'
                          >
                            <path
                              id='Union_2'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M362.292 354.867C362.76 355.732 363.903 355.953 364.66 355.325L386.869 336.922C386.869 336.922 386.869 336.921 386.868 336.921C386.868 336.921 386.868 336.921 386.868 336.92L391.701 308.486C391.866 307.516 391.103 306.638 390.12 306.664L336.967 308.109C336.966 308.11 336.965 308.109 336.964 308.109L336.953 308.102C336.951 308.101 336.948 308.104 336.949 308.106C336.95 308.108 336.949 308.11 336.947 308.11L336.784 308.114C336.68 308.117 336.646 308.255 336.736 308.306L337.144 308.539C337.182 308.561 337.213 308.593 337.234 308.631L362.292 354.867Z'
                              fill='url(#paintEXPLORER15_linear)'
                            />
                          </mask>
                          <g mask='url(#maskEXPLORER1)'>
                            <g id='Group 113'>
                              <path
                                id='Vector 44'
                                d='M387.835 337.66L363.388 356.535L331.734 305.002L387.835 337.66Z'
                                fill='url(#paintEXPLORER16_linear)'
                              />
                              <path
                                id='Vector 45'
                                d='M387.835 337.659L391.959 307.049L333.047 306.027L387.835 337.659Z'
                                fill='url(#paintEXPLORER17_linear)'
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id='Group 200'>
                        <g id='Vector 229' filter='url(#filterEXPLORER5_f)'>
                          <path
                            d='M243.897 169.081L220.061 104.227H267.732L243.897 169.081Z'
                            fill='url(#paintEXPLORER18_linear)'
                          />
                        </g>
                        <g id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;_2'>
                          <mask
                            id='maskEXPLORER2'
                            maskUnits='userSpaceOnUse'
                            x='216'
                            y='88'
                            width='56'
                            height='58'
                          >
                            <path
                              id='Union_3'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M243.921 88.005C243.921 88.005 243.921 88.005 243.922 88.005L243.922 88.0049C243.922 88.0048 243.922 88.005 243.922 88.0051C243.922 88.0052 243.922 88.0053 243.922 88.0053L269.181 97.3757C271.026 98.0601 271.786 100.26 270.756 101.936L243.922 145.65C243.922 145.651 243.922 145.651 243.922 145.651L243.922 145.652C243.922 145.652 243.922 145.652 243.922 145.652C243.922 145.652 243.921 145.652 243.921 145.652C243.921 145.652 243.921 145.652 243.921 145.652L243.921 145.651C243.921 145.651 243.921 145.651 243.921 145.65L217.086 101.936C216.057 100.26 216.817 98.0601 218.661 97.3757L243.921 88.0053C243.921 88.0053 243.921 88.0052 243.921 88.0051C243.921 88.005 243.921 88.0048 243.921 88.0049L243.921 88.005Z'
                              fill='url(#paintEXPLORER19_linear)'
                            />
                          </mask>
                          <g mask='url(#maskEXPLORER2)'>
                            <g id='Group 113_2'>
                              <path
                                id='Vector 44_2'
                                d='M244.077 86.7992L272.648 98.5336L244.077 150.063L244.077 86.7992Z'
                                fill='url(#paintEXPLORER20_linear)'
                              />
                              <path
                                id='Vector 45_2'
                                d='M244.077 86.7999L215.506 98.5344L244.077 150.064L244.077 86.7999Z'
                                fill='url(#paintEXPLORER21_linear)'
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id='Group 201'>
                        <g id='Vector 230_2' filter='url(#filterEXPLORER6_f)'>
                          <path
                            d='M170.075 296.151L125.828 349.22L101.992 307.936L170.075 296.151Z'
                            fill='url(#paintEXPLORER22_linear)'
                          />
                        </g>
                        <g id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;_3'>
                          <mask
                            id='maskEXPLORER3'
                            maskUnits='userSpaceOnUse'
                            x='85'
                            y='284'
                            width='78'
                            height='77'
                          >
                            <path
                              id='Union_4'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M124.603 353.64C123.656 355.353 121.385 355.783 119.877 354.534L99.3466 337.522C99.2308 337.426 99.246 337.244 99.3761 337.168C99.246 337.243 99.0808 337.166 99.0556 337.018L94.5927 310.761C94.263 308.822 95.788 307.064 97.7549 307.117L148.79 308.493C148.844 308.494 148.898 308.481 148.944 308.454C149.2 308.305 149.489 308.588 149.346 308.847L124.603 353.64Z'
                              fill='url(#paintEXPLORER23_linear)'
                            />
                          </mask>
                          <g mask='url(#maskEXPLORER3)'>
                            <g id='Group 113_3'>
                              <path
                                id='Vector 44_3'
                                d='M98.4199 338.545L122.39 357.052L152.137 307.532L98.4199 338.545Z'
                                fill='url(#paintEXPLORER24_linear)'
                              />
                              <path
                                id='Vector 45_3'
                                d='M98.5808 339.304L94.0192 307.45L150.142 308.665L98.5808 339.304Z'
                                fill='url(#paintEXPLORER25_linear)'
                              />
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
                  id='filterEXPLORER0_dd'
                  x='0.351685'
                  y='0.581901'
                  width='494.215'
                  height='508.084'
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
                  <feGaussianBlur stdDeviation='15.6112' />
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
                  <feOffset dy='6.2445' />
                  <feGaussianBlur stdDeviation='46.8337' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.670833 0 0 0 0 0.8025 0 0 0 0 1 0 0 0 0.6 0'
                  />
                  <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterEXPLORER1_d'
                  x='88.5993'
                  y='78.4309'
                  width='308.375'
                  height='345.934'
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
                  <feGaussianBlur stdDeviation='7.80562' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.407812 0 0 0 0 0.414 0 0 0 0 0.5625 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterEXPLORER2_f'
                  x='124.027'
                  y='117.169'
                  width='237.191'
                  height='267.899'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.234169' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterEXPLORER3_i'
                  x='135.253'
                  y='129.32'
                  width='216.179'
                  height='244.03'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='10.4972' />
                  <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
                </filter>
                <filter
                  id='filterEXPLORER4_f'
                  x='297.516'
                  y='269.264'
                  width='92.4892'
                  height='86.1996'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='3.12225' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterEXPLORER5_f'
                  x='213.817'
                  y='97.9825'
                  width='60.1593'
                  height='77.3428'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='3.12225' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterEXPLORER6_f'
                  x='95.7479'
                  y='269.264'
                  width='92.4892'
                  height='86.1996'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='3.12225' result='effect1_foregroundBlur' />
                </filter>

                <linearGradient
                  id='paintEXPLORER0_linear'
                  x1='242.594'
                  y1='24'
                  x2='242.594'
                  y2='203.458'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER1_linear'
                  x1='436.505'
                  y1='365.082'
                  x2='281.089'
                  y2='275.353'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER2_linear'
                  x1='241.461'
                  y1='478.589'
                  x2='241.461'
                  y2='299.131'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER3_linear'
                  x1='47.8512'
                  y1='365.651'
                  x2='203.266'
                  y2='275.922'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER4_linear'
                  x1='436.505'
                  y1='137.791'
                  x2='281.089'
                  y2='227.52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER5_linear'
                  x1='47.8512'
                  y1='137.221'
                  x2='203.266'
                  y2='226.95'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].lights.color} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].lights.color} stopOpacity='0.3' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER6_linear'
                  x1='184.585'
                  y1='129.171'
                  x2='309.304'
                  y2='376.946'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].body.outsideBase.one} />
                  <stop offset='1' stopColor={mode[type].body.outsideBase.two} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER7_linear'
                  x1='183.478'
                  y1='149.68'
                  x2='291.013'
                  y2='348.122'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].body.insideBase.one} />
                  <stop offset='1' stopColor={mode[type].body.insideBase.two} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER8_linear'
                  x1='195.118'
                  y1='142.474'
                  x2='310.968'
                  y2='350.893'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].line[0]} />
                  <stop offset='1' stopColor={mode[type].line[1]} />
                </linearGradient>

                <radialGradient
                  id='paintEXPLORER9_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(243.342 251.335) rotate(90) scale(125.489 108.09)'
                >
                  <stop stopColor={mode[type].decorator.Innershadow0[0]} />
                  <stop offset='1' stopColor={mode[type].decorator.Innershadow0[1]} />
                </radialGradient>

                <linearGradient
                  id='paintEXPLORER10_linear'
                  x1='243.343'
                  y1='120.875'
                  x2='243.343'
                  y2='381.781'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].decorator.lightsInside[0]} />
                  <stop
                    offset='1'
                    stopColor={mode[type].decorator.lightsInside[1]}
                    stopOpacity='0'
                  />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER11_linear'
                  x1='109.894'
                  y1='144.482'
                  x2='240.347'
                  y2='370.433'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].decorator.lightsInside[2]} />
                  <stop
                    offset='1'
                    stopColor={mode[type].decorator.lightsInside[3]}
                    stopOpacity='0'
                  />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER12_linear'
                  x1='367.072'
                  y1='144.481'
                  x2='236.619'
                  y2='370.432'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].decorator.lightsInside[4]} />
                  <stop
                    offset='1'
                    stopColor={mode[type].decorator.lightsInside[5]}
                    stopOpacity='0'
                  />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER13_linear'
                  x1='243.343'
                  y1='297.297'
                  x2='242.691'
                  y2='368.113'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].decorator.lightsInside[6]} stopOpacity='0' />
                  <stop offset='1' stopColor={mode[type].decorator.lightsInside[7]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER14_linear'
                  x1='372.323'
                  y1='328.855'
                  x2='333.92'
                  y2='306.683'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.end[0]} stopOpacity='0.75' />
                  <stop offset='1' stopColor={mode[type].points.end[1]} stopOpacity='0' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER15_linear'
                  x1='348.995'
                  y1='318.282'
                  x2='382.406'
                  y2='315.529'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.end[0]} />
                  <stop offset='1' stopColor={mode[type].points.end[1]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER16_linear'
                  x1='382.042'
                  y1='331.369'
                  x2='363.872'
                  y2='358.382'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.end[2]} />
                  <stop offset='0.259135' stopColor={mode[type].points.end[3]} />
                  <stop offset='0.878536' stopColor={mode[type].points.end[4]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER17_linear'
                  x1='354.363'
                  y1='297.475'
                  x2='338.298'
                  y2='317.159'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.end[5]} />
                  <stop offset='1' stopColor={mode[type].points.end[6]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER18_linear'
                  x1='243.897'
                  y1='103.673'
                  x2='243.897'
                  y2='148.017'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.two[0]} stopOpacity='0.75' />
                  <stop offset='1' stopColor={mode[type].points.two[1]} stopOpacity='0' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER19_linear'
                  x1='246.64'
                  y1='129.994'
                  x2='227.451'
                  y2='102.96'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.two[0]} />
                  <stop offset='1' stopColor={mode[type].points.two[1]} />
                </linearGradient>
                <linearGradient
                  id='paintEXPLORER20_linear'
                  x1='244.398'
                  y1='116.993'
                  x2='272.461'
                  y2='123.766'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.two[2]} />
                  <stop offset='1' stopColor={mode[type].points.two[3]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER21_linear'
                  x1='226.013'
                  y1='135.88'
                  x2='251.092'
                  y2='139.951'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.two[4]} />
                  <stop offset='1' stopColor={mode[type].points.two[5]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER22_linear'
                  x1='113.43'
                  y1='328.855'
                  x2='151.833'
                  y2='306.683'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.first[0]} stopOpacity='0.75' />
                  <stop offset='1' stopColor={mode[type].points.first[1]} stopOpacity='0' />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER23_linear'
                  x1='137.012'
                  y1='318.597'
                  x2='103.946'
                  y2='315.459'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.first[0]} />
                  <stop offset='1' stopColor={mode[type].points.first[1]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER24_linear'
                  x1='104.101'
                  y1='332.378'
                  x2='110.346'
                  y2='371.032'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.first[2]} />
                  <stop offset='0.878536' stopColor={mode[type].points.first[3]} />
                </linearGradient>

                <linearGradient
                  id='paintEXPLORER25_linear'
                  x1='131.616'
                  y1='297.876'
                  x2='147.682'
                  y2='317.56'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor={mode[type].points.first[4]} />
                  <stop offset='1' stopColor={mode[type].points.first[5]} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ) : (
          <svg
            width={BadgesSize[size].badge.width}
            height={BadgesSize[size].badge.height}
            viewBox='0 0 286 314'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.5'>
              <g filter='url(#filterEXLOCKED0_d)'>
                <path
                  d='M143.033 12.1284L18.2703 79.9982L18.2703 234.213L143.033 302.083L267.796 234.213L267.796 79.9982L143.033 12.1284Z'
                  fill='url(#paintEXLOCKED0_linear)'
                />
                <path
                  d='M142.884 34.087L37.2348 91.5592L37.2347 222.148L142.884 279.621L248.534 222.148L248.534 91.5592L142.884 34.087Z'
                  fill='url(#paintEXLOCKED1_linear)'
                />
                <g filter='url(#filterEXLOCKED1_f)'>
                  <path
                    d='M142.884 34.087L37.2348 91.5592L37.2347 222.148L142.884 279.621L248.534 222.148L248.534 91.5592L142.884 34.087Z'
                    fill='url(#paintEXLOCKED2_linear)'
                  />
                </g>
                <g opacity='0.5'>
                  <mask
                    id='maskEXLOCKED0'
                    maskUnits='userSpaceOnUse'
                    x='46'
                    y='44'
                    width='195'
                    height='227'
                  >
                    <path
                      d='M143.532 44.0679L46.2173 96.9587L46.2173 217.138L143.532 270.029L240.848 217.138L240.848 96.9587L143.532 44.0679Z'
                      fill='url(#paintEXLOCKED3_linear)'
                    />
                  </mask>
                  <g mask='url(#maskEXLOCKED0)'>
                    <path
                      d='M143.532 44.0679L46.2173 96.9587L46.2173 217.138L143.532 270.029L240.848 217.138L240.848 96.9587L143.532 44.0679Z'
                      fill='url(#paintEXLOCKED4_linear)'
                    />
                    <path
                      opacity='0.5'
                      d='M127.264 274.492L123.398 39.5935H163.667L159.801 274.492H127.264Z'
                      fill='url(#paintEXLOCKED5_linear)'
                    />
                    <path
                      opacity='0.5'
                      d='M126.746 272.408L5.94922 70.9128L40.8226 50.7787L154.924 256.14L126.746 272.408Z'
                      fill='url(#paintEXLOCKED6_linear)'
                    />
                    <path
                      opacity='0.5'
                      d='M123.39 256.14L237.492 50.7789L272.365 70.9131L151.568 272.408L123.39 256.14Z'
                      fill='url(#paintEXLOCKED7_linear)'
                    />
                    <rect
                      x='46.2175'
                      y='143.62'
                      width='194.63'
                      height='126.398'
                      fill='url(#paintEXLOCKED8_linear)'
                    />
                    <g filter='url(#filterEXLOCKED2_i)'>
                      <path
                        d='M143.532 44.0679L46.2173 96.9587L46.2173 217.138L143.532 270.029L240.848 217.138L240.848 96.9587L143.532 44.0679Z'
                        fill='url(#paintEXLOCKED9_linear)'
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g filter='url(#filterEXLOCKED3_f)'>
                <path
                  d='M208.658 197.396L248.495 245.175L269.954 208.007L208.658 197.396Z'
                  fill='url(#paintEXLOCKED10_linear)'
                />
              </g>
              <mask
                id='maskEXLOCKED1'
                maskUnits='userSpaceOnUse'
                x='214'
                y='185'
                width='72'
                height='72'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M272.753 234.103L272.753 234.103L272.752 234.103L251.44 251.763L228.037 208.58L227.331 208.177L227.811 208.164L227.805 208.152L227.825 208.163L277.391 206.816L272.753 234.103Z'
                  fill='url(#paintEXLOCKED11_linear)'
                />
              </mask>
              <g mask='url(#maskEXLOCKED1)'>
                <path
                  d='M273.623 234.767L251.612 251.761L223.114 205.365L273.623 234.767Z'
                  fill='url(#paintEXLOCKED12_linear)'
                />
                <path
                  d='M273.623 234.768L277.335 207.208L224.296 206.289L273.623 234.768Z'
                  fill='url(#paintEXLOCKED13_linear)'
                />
              </g>
              <g filter='url(#filterEXLOCKED4_f)'>
                <path
                  d='M144.031 82.9937L122.572 24.6046H165.49L144.031 82.9937Z'
                  fill='url(#paintEXLOCKED14_linear)'
                />
              </g>
              <mask
                id='maskEXLOCKED2'
                maskUnits='userSpaceOnUse'
                x='118'
                y='10'
                width='53'
                height='52'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M144.053 10.0001L144.053 10L144.053 10.0002L170.003 19.6269L144.053 61.9006L144.053 61.9014L144.053 61.901L144.053 61.9014L144.053 61.9006L118.103 19.6269L144.053 10.0002L144.053 10L144.053 10.0001Z'
                  fill='url(#paintEXLOCKED15_linear)'
                />
              </mask>
              <g mask='url(#maskEXLOCKED2)'>
                <path
                  d='M144.194 8.91492L169.917 19.4797L144.194 65.8727L144.194 8.91492Z'
                  fill='url(#paintEXLOCKED16_linear)'
                />
                <path
                  d='M144.194 8.91479L118.471 19.4795L144.194 65.8726L144.194 8.91479Z'
                  fill='url(#paintEXLOCKED17_linear)'
                />
              </g>
              <g filter='url(#filterEXLOCKED5_f)'>
                <path
                  d='M77.5692 197.397L37.7324 245.175L16.2732 208.007L77.5692 197.397Z'
                  fill='url(#paintEXLOCKED18_linear)'
                />
              </g>
              <mask
                id='maskEXLOCKED3'
                maskUnits='userSpaceOnUse'
                x='4'
                y='185'
                width='72'
                height='72'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.622 233.925L17.6221 233.925L17.6222 233.925L38.9343 251.585L62.5693 207.975L62.57 207.975L62.5695 207.975L62.5698 207.974L62.569 207.975L12.9838 206.638L17.622 233.925L17.6218 233.925L17.622 233.925Z'
                  fill='url(#paintEXLOCKED19_linear)'
                />
              </mask>
              <g mask='url(#maskEXLOCKED3)'>
                <path
                  d='M16.7527 234.59L38.7635 251.584L66.0796 206.111L16.7527 234.59Z'
                  fill='url(#paintEXLOCKED20_linear)'
                />
                <path
                  d='M16.7527 234.59L13.0406 207.031L66.0796 206.111L16.7527 234.59Z'
                  fill='url(#paintEXLOCKED21_linear)'
                />
              </g>
            </g>
            <defs>
              <filter
                id='filterEXLOCKED0_d'
                x='6.91058'
                y='0.768735'
                width='272.245'
                height='312.674'
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
                <feGaussianBlur stdDeviation='5.67984' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.407812 0 0 0 0 0.414 0 0 0 0 0.5625 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterEXLOCKED1_f'
                x='36.894'
                y='33.7462'
                width='211.981'
                height='246.215'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='0.170395' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterEXLOCKED2_i'
                x='46.2173'
                y='44.0679'
                width='194.63'
                height='225.961'
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
                <feGaussianBlur stdDeviation='7.63841' />
                <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
                />
                <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
              </filter>
              <filter
                id='filterEXLOCKED3_f'
                x='193.385'
                y='174.268'
                width='81.1134'
                height='75.4508'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2.27194' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterEXLOCKED4_f'
                x='118.028'
                y='20.0607'
                width='52.0062'
                height='67.4768'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2.27194' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterEXLOCKED5_f'
                x='11.7293'
                y='174.269'
                width='81.1134'
                height='75.4508'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2.27194' result='effect1_foregroundBlur' />
              </filter>
              <linearGradient
                id='paintEXLOCKED0_linear'
                x1='143.033'
                y1='12.1284'
                x2='143.033'
                y2='302.083'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED1_linear'
                x1='142.884'
                y1='34.087'
                x2='142.884'
                y2='279.621'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED2_linear'
                x1='142.884'
                y1='34.087'
                x2='142.884'
                y2='279.621'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED3_linear'
                x1='143.532'
                y1='44.0679'
                x2='143.532'
                y2='270.029'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED4_linear'
                x1='143.532'
                y1='44.0679'
                x2='143.532'
                y2='270.029'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED5_linear'
                x1='143.533'
                y1='39.5935'
                x2='143.533'
                y2='274.492'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED6_linear'
                x1='23.3859'
                y1='60.8458'
                x2='140.835'
                y2='264.274'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED7_linear'
                x1='254.929'
                y1='60.846'
                x2='137.479'
                y2='264.274'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED8_linear'
                x1='143.533'
                y1='143.62'
                x2='143.533'
                y2='270.018'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED9_linear'
                x1='143.532'
                y1='44.0679'
                x2='143.532'
                y2='270.029'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED10_linear'
                x1='259.225'
                y1='226.591'
                x2='208.658'
                y2='197.396'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED11_linear'
                x1='272.753'
                y1='234.103'
                x2='227.46'
                y2='207.953'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED12_linear'
                x1='267.244'
                y1='245.815'
                x2='216.631'
                y2='216.594'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED13_linear'
                x1='280.054'
                y1='223.629'
                x2='230.727'
                y2='195.15'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED14_linear'
                x1='144.031'
                y1='24.6046'
                x2='144.031'
                y2='82.9937'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED15_linear'
                x1='144.053'
                y1='10'
                x2='144.053'
                y2='61.9014'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED16_linear'
                x1='157.055'
                y1='8.91492'
                x2='157.055'
                y2='65.8727'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED17_linear'
                x1='131.333'
                y1='8.91479'
                x2='131.333'
                y2='65.8726'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED18_linear'
                x1='27.0028'
                y1='226.591'
                x2='77.5692'
                y2='197.397'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED19_linear'
                x1='17.6219'
                y1='233.925'
                x2='62.5699'
                y2='207.974'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED20_linear'
                x1='23.1834'
                y1='245.728'
                x2='72.5103'
                y2='217.249'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintEXLOCKED21_linear'
                x1='10.322'
                y1='223.452'
                x2='59.6488'
                y2='194.973'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  )
}

interface BadgesRankProps {
  shadow?: boolean
  animation?: boolean
  stars?: number
  level?: number
  lights?: boolean
  locked?: boolean
  size?: 'sm' | 'md' | 'lg'
  rank?: 'creator' | 'moderator' | 'admin' | 'artisan' | 'master' | 'explorer'
  mod?: 'data' | 'mod'
  type?: 'default' | 'beta'
}

const Creator = ({
  animation = false,
  level = 0,
  lights = true,
  locked = false,
  mod = 'data',
  rank = 'creator',
  shadow = true,
  size = 'sm',
  stars = 0
}: BadgesRankProps) => {
  const {
    rotation,
    wrapper,
    wrapperBadge,
    diamond,
    flex,
    starsFlex,
    starLeft,
    starTop,
    starRight
  } = useStyles({
    left: BadgesSize[size].stars.positions.left,
    top: BadgesSize[size].stars.positions.top,
    right: BadgesSize[size].stars.positions.right,
    diamondLeft: BadgesSize[size].diamond.position[rank].left,
    diamondTop: BadgesSize[size].diamond.position[rank].top
  })

  return (
    <div className={wrapper}>
      {stars > 0 && stars < 4 ? (
        <div className={starsFlex}>
          <div style={stars > 0 ? {} : { opacity: '0.5' }} className={starLeft}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 0)}
            />
          </div>
          <div style={stars > 1 ? {} : { opacity: '0.5' }} className={starTop}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 1)}
            />
          </div>
          <div style={stars > 2 ? {} : { opacity: '0.5' }} className={starRight}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 2)}
            />
          </div>
        </div>
      ) : null}
      <div className={flex}>
        {!locked ? (
          <div className={wrapperBadge}>
            <div className={diamond}>
              {level < 0 ? null : (
                <Diamond
                  width={BadgesSize[size].diamond.width}
                  height={BadgesSize[size].diamond.height}
                  diamond={level}
                  mod={mod}
                />
              )}
            </div>
            <svg
              width={BadgesSize[size].badge.width}
              height={BadgesSize[size].badge.height}
              viewBox='0 0 607 522'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='creator'>
                {lights && (
                  <path
                    className={animation ? rotation : ''}
                    id='aro'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M302.519 449.692C412.835 449.692 502.263 360.263 502.263 249.948C502.263 139.632 412.835 50.2041 302.519 50.2041C192.204 50.2041 102.775 139.632 102.775 249.948C102.775 360.263 192.204 449.692 302.519 449.692ZM302.519 454.283C415.371 454.283 506.855 362.799 506.855 249.948C506.855 137.096 415.371 45.6123 302.519 45.6123C189.668 45.6123 98.1836 137.096 98.1836 249.948C98.1836 362.799 189.668 454.283 302.519 454.283Z'
                    fill='url(#paintCREATO0_linear)'
                  />
                )}
                {lights && (
                  <g id='lights' className={animation ? rotation : ''}>
                    <path
                      id='Vector 271'
                      d='M275.817 194.458L267.891 15H331.296L323.37 194.458H275.817Z'
                      fill='url(#paintCREATO1_linear)'
                    />
                    <path
                      id='Vector 264'
                      d='M349.978 245.761L509.356 328.626L477.653 383.537L326.201 286.944L349.978 245.761Z'
                      fill='url(#paintCREATO2_linear)'
                    />
                    <path
                      id='Vector 265'
                      d='M322.238 290.131L330.164 469.589H266.759L274.684 290.131H322.238Z'
                      fill='url(#paintCREATO3_linear)'
                    />
                    <path
                      id='Vector 267'
                      d='M272.155 287.513L120.702 384.106L89 329.196L248.378 246.331L272.155 287.513Z'
                      fill='url(#paintCREATO4_linear)'
                    />
                    <path
                      id='Vector 274'
                      d='M349.978 239.111L509.356 156.246L477.653 101.336L326.201 197.929L349.978 239.111Z'
                      fill='url(#paintCREATO5_linear)'
                    />
                    <path
                      id='Vector 275'
                      d='M272.155 197.359L120.702 100.766L89 155.676L248.378 238.541L272.155 197.359Z'
                      fill='url(#paintCREATO6_linear)'
                    />
                  </g>
                )}
                <g id='body' filter={shadow ? 'url(#filterCREATOR0_dd)' : ''}>
                  <g id='Group 205'>
                    <g id='Group 197'>
                      <path
                        id='Rectangle 20'
                        d='M245.852 208.901H358.606V464.587C358.606 467.379 355.494 469.045 353.171 467.496L303.684 434.505C302.803 433.917 301.656 433.917 300.775 434.505L251.288 467.496C248.965 469.045 245.852 467.379 245.852 464.587V208.901Z'
                        fill='url(#paintCREATO7_linear)'
                      />
                      <path
                        id='Intersect'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M319.274 444.898L303.684 434.505C302.803 433.917 301.656 433.917 300.775 434.505L285.185 444.898V208.901H319.274V444.898Z'
                        fill='url(#paintCREATO8_linear)'
                      />
                      <path
                        id='&#228;&#190;&#167;&#232;&#190;&#185;1'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M280.815 447.811L277.319 450.142V208.901H280.815V447.811Z'
                        fill='url(#paintCREATO9_linear)'
                      />
                      <path
                        id='&#228;&#190;&#167;&#232;&#190;&#185;2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M327.14 450.142L323.644 447.811V208.901H327.14V450.142Z'
                        fill='url(#paintCREATO10_linear)'
                      />
                      <path
                        id='Exclude'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M358.606 464.932V457.939C358.606 460.732 355.494 462.397 353.171 460.848L303.684 427.857C302.803 427.27 301.656 427.27 300.775 427.857L251.288 460.848C248.965 462.397 245.852 460.732 245.852 457.939V464.932C245.852 467.724 248.965 469.39 251.288 467.841L300.775 434.849C301.656 434.262 302.803 434.262 303.684 434.849L353.171 467.841C355.494 469.39 358.606 467.724 358.606 464.932Z'
                        fill='#42883C'
                        fillOpacity='0.2'
                      />
                    </g>
                    <g id='Vector 218' opacity='0.8' filter='url(#filterCREATOR1_f)'>
                      <path
                        d='M302.577 416.906L358.705 383.915V371.543H245.851V383.915L302.577 416.906Z'
                        fill='#1A375E'
                        fillOpacity='0.68'
                      />
                    </g>
                  </g>
                  <g id='Group 164'>
                    <path
                      id='Union'
                      d='M293.291 88.7668L173.799 153.769C167.746 157.062 163.978 163.401 163.978 170.292L163.978 318.88C163.978 325.771 167.746 332.11 173.799 335.403L293.291 400.405C298.895 403.454 305.662 403.454 311.267 400.405L430.759 335.403C436.812 332.11 440.58 325.771 440.58 318.88L440.58 170.292C440.58 163.401 436.812 157.062 430.759 153.769L311.267 88.7668C305.662 85.7182 298.895 85.7182 293.291 88.7668Z'
                      fill='url(#paintCREATO11_linear)'
                    />
                    <path
                      id='Union_2'
                      d='M293.16 113.09L194.784 166.605C188.754 169.885 185.001 176.2 185.001 183.065L185 305.549C185 312.413 188.754 318.729 194.784 322.009L293.16 375.524C298.743 378.561 305.485 378.561 311.068 375.524L409.443 322.009C415.474 318.729 419.227 312.413 419.227 305.549L419.227 183.065C419.227 176.2 415.474 169.885 409.443 166.605L311.068 113.09C305.485 110.053 298.743 110.053 293.16 113.09Z'
                      fill='url(#paintCREATO12_linear)'
                    />
                    <g id='Union_3' filter='url(#filterCREATOR2_f)'>
                      <path
                        d='M293.16 113.09L194.784 166.605C188.754 169.885 185.001 176.2 185.001 183.065L185 305.549C185 312.413 188.754 318.729 194.784 322.009L293.16 375.524C298.743 378.561 305.485 378.561 311.068 375.524L409.443 322.009C415.474 318.729 419.227 312.413 419.227 305.549L419.227 183.065C419.227 176.2 415.474 169.885 409.443 166.605L311.068 113.09C305.485 110.053 298.743 110.053 293.16 113.09Z'
                        stroke='url(#paintCREATO13_linear)'
                        strokeWidth='1.10641'
                      />
                    </g>
                    <g id='Mask Group' opacity='0.5'>
                      <mask
                        id='maskCREATOR0'
                        maskUnits='userSpaceOnUse'
                        x='194'
                        y='121'
                        width='217'
                        height='247'
                      >
                        <path
                          id='Union_4'
                          d='M294.321 123.909L204.27 172.851C198.531 175.97 194.958 181.979 194.958 188.512L194.958 300.533C194.958 307.066 198.531 313.075 204.27 316.194L294.321 365.136C299.629 368.021 306.036 368.021 311.344 365.136L401.395 316.194C407.134 313.075 410.707 307.066 410.707 300.533L410.707 188.512C410.707 181.979 407.134 175.971 401.395 172.851L311.344 123.909C306.036 121.024 299.629 121.024 294.321 123.909Z'
                          fill='#A6D3DE'
                        />
                      </mask>
                      <g mask='url(#maskCREATOR0)'>
                        <path
                          id='Innershadow0.1fill'
                          d='M294.321 123.909L204.27 172.851C198.531 175.97 194.958 181.979 194.958 188.512L194.958 300.533C194.958 307.066 198.531 313.075 204.27 316.194L294.321 365.136C299.629 368.021 306.036 368.021 311.344 365.136L401.395 316.194C407.134 313.075 410.707 307.066 410.707 300.533L410.707 188.512C410.707 181.979 407.134 175.971 401.395 172.851L311.344 123.909C306.036 121.024 299.629 121.024 294.321 123.909Z'
                          fill='url(#paintCREATOR14_radial)'
                        />
                        <g id='Group 57'>
                          <path
                            id='Vector 5'
                            opacity='0.5'
                            d='M284.8 374.71L280.515 114.322H325.153L320.867 374.71H284.8Z'
                            fill='url(#paintCREATOR15_linear)'
                          />
                          <path
                            id='Vector 6'
                            opacity='0.5'
                            d='M284.226 372.4L150.322 149.04L188.979 126.722L315.462 354.366L284.226 372.4Z'
                            fill='url(#paintCREATOR16_linear)'
                          />
                          <path
                            id='Vector 7'
                            opacity='0.5'
                            d='M280.506 354.367L406.988 126.722L445.646 149.041L311.741 372.4L280.506 354.367Z'
                            fill='url(#paintCREATOR17_linear)'
                          />
                          <rect
                            id='Rectangle 3'
                            x='194.959'
                            y='229.637'
                            width='215.749'
                            height='140.113'
                            fill='url(#paintCREATOR18_linear)'
                          />
                        </g>
                        <g id='Innershadow0.1fill_2' filter='url(#filterCREATOR3_i)'>
                          <path
                            d='M294.321 123.909L204.27 172.851C198.531 175.97 194.958 181.979 194.958 188.512L194.958 300.533C194.958 307.066 198.531 313.075 204.27 316.194L294.321 365.136C299.629 368.021 306.036 368.021 311.344 365.136L401.395 316.194C407.134 313.075 410.707 307.066 410.707 300.533L410.707 188.512C410.707 181.979 407.134 175.971 401.395 172.851L311.344 123.909C306.036 121.024 299.629 121.024 294.321 123.909Z'
                            fill='#6052B4'
                            fillOpacity='0.01'
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id='Group 202' filter={shadow ? 'url(#filterCREATOR4_d)' : ''}>
                    <g id='Group 175'>
                      <g id='Group 128'>
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4'
                          d='M479.067 248.014L419.773 265.667L415.435 273.257L479.067 248.014Z'
                          fill='url(#paintCREATOR19_linear)'
                        />
                        <g
                          id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                          filter='url(#filterCREATOR5_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M417.258 269.732C405.926 287.106 387.442 305.376 358.894 323.458C347.608 330.608 337.944 337.253 329.714 343.422C468.432 347.111 510.526 273.371 514.398 235.291L417.258 269.732Z'
                            fill='url(#paintCREATOR20_linear)'
                          />
                        </g>
                        <path
                          id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                          d='M330.383 342.751C338.467 336.723 347.914 330.242 358.898 323.285C387.321 305.281 405.769 287.091 417.114 269.786L514.399 235.292'
                          stroke='url(#paintCREATOR21_linear)'
                          strokeWidth='1.86044'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3'
                          d='M422.105 316.912L388.816 300.877L382.391 306.023L422.105 316.912Z'
                          fill='url(#paintCREATOR20_linear)'
                        />
                        <path
                          id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M386.273 303.467C378.394 310.063 369.316 316.686 358.898 323.285C333.285 339.509 316.029 353.14 304.925 364.492C306.452 367.766 314.315 367.122 325.965 359.742C349.58 344.784 370.831 341.704 408.438 342.449C444.982 343.173 456.141 338.88 462.414 332.131C447.323 326.113 409.603 311.896 386.273 303.467Z'
                          fill='url(#paintCREATOR20_linear)'
                        />
                        <path
                          id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                          d='M359.396 324.071C369.665 317.567 378.641 311.034 386.459 304.523C409.167 312.736 445.03 326.246 460.766 332.477C454.591 338.345 443.134 342.206 408.456 341.519C370.782 340.772 349.311 343.854 325.468 358.957C319.699 362.61 314.934 364.553 311.479 365.198C309.748 365.521 308.403 365.507 307.445 365.266C306.837 365.114 306.412 364.879 306.125 364.598C317.177 353.425 334.224 340.015 359.396 324.071Z'
                          stroke='url(#paintCREATOR24_linear)'
                          strokeWidth='1.86044'
                        />
                      </g>
                    </g>
                    <g id='Group 179' filter='url(#filterCREATOR6_d)'>
                      <path
                        id='Vector 226'
                        d='M291.931 384.295C304.252 370.155 299.001 372.726 366.379 318.737C393.692 302.235 410.064 283.332 420.112 266.798C420.112 265.328 420.112 265.328 417.513 267.541C408.565 281.334 394.581 296.504 370.878 312.952C327.172 339.947 296.536 368.013 288.609 379.796L291.931 384.295Z'
                        fill='url(#paintCREATOR25_linear)'
                      />
                      <path
                        id='Vector 225'
                        d='M288.609 384.938C293.109 375.726 317.018 349.845 366.38 320.023C394.313 302.38 410.897 282.426 420.938 265.329C420.112 264.775 419.559 265.329 417.887 266.435C407.345 282.316 390.33 300.523 361.881 318.094C318.175 345.089 295.251 368.656 287.324 380.439L288.609 384.938Z'
                        fill='#C4C4C4'
                      />
                      <path
                        id='Vector 227 (Stroke)'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M361.542 317.547C412.376 286.15 426.554 252.755 432.612 234.338L433.833 234.74C427.702 253.378 413.363 287.051 362.217 318.641C318.554 345.61 295.713 369.119 287.856 380.798L286.79 380.08C294.787 368.193 317.794 344.568 361.542 317.547Z'
                        fill='url(#paintCREATOR26_linear)'
                      />
                      <path
                        id='Intersect_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M391.888 300.741C384.654 307.304 376.221 313.807 366.38 320.022C358.956 324.507 352.109 328.903 345.816 333.166L342.828 330.51C348.683 326.477 355.026 322.328 361.881 318.094C371.192 312.343 379.278 306.524 386.314 300.741H391.888Z'
                        fill='url(#paintCREATOR27_linear)'
                      />
                    </g>
                  </g>
                  <g id='Group 203' filter={shadow ? 'url(#filterCREATOR7_d)' : ''}>
                    <g id='Group 175_2'>
                      <g id='Group 128_2'>
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4_2'
                          d='M127.877 248.013L187.171 265.666L191.509 273.256L127.877 248.013Z'
                          fill='url(#paintCREATOR28_linear)'
                        />
                        <g
                          id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                          filter='url(#filterCREATOR8_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M189.686 269.732C201.019 287.106 219.503 305.376 248.05 323.458C259.337 330.608 269.001 337.253 277.231 343.422C138.513 347.11 96.4193 273.371 92.5471 235.291L189.686 269.732Z'
                            fill='url(#paintCREATOR29_linear)'
                          />
                        </g>
                        <path
                          id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                          d='M276.561 342.75C268.477 336.721 259.03 330.241 248.046 323.283C219.623 305.28 201.175 287.09 189.83 269.784L92.5445 235.291'
                          stroke='url(#paintCREATOR30_linear)'
                          strokeWidth='1.86044'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3_2'
                          d='M184.839 316.912L218.128 300.877L224.553 306.023L184.839 316.912Z'
                          fill='url(#paintCREATOR31_linear)'
                        />
                        <path
                          id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M220.672 303.465C228.55 310.061 237.628 316.685 248.046 323.284C273.659 339.508 290.915 353.138 302.019 364.49C300.492 367.765 292.629 367.121 280.979 359.741C257.364 344.783 236.113 341.702 198.506 342.448C161.962 343.172 150.803 338.879 144.53 332.13C159.621 326.112 197.342 311.895 220.672 303.465Z'
                          fill='url(#paintCREATOR32_linear)'
                        />
                        <path
                          id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                          d='M247.548 324.07C237.279 317.566 228.303 311.033 220.485 304.522C197.777 312.735 161.914 326.244 146.179 332.475C152.353 338.344 163.81 342.205 198.488 341.518C236.162 340.771 257.633 343.852 281.476 358.955C287.245 362.609 292.01 364.552 295.466 365.196C297.196 365.519 298.541 365.506 299.499 365.265C300.107 365.112 300.532 364.878 300.819 364.597C289.767 353.424 272.72 340.014 247.548 324.07Z'
                          stroke='url(#paintCREATOR33_linear)'
                          strokeWidth='1.86044'
                        />
                      </g>
                    </g>
                    <g id='Group 179_2' filter='url(#filterCREATOR9_d)'>
                      <path
                        id='Vector 226_2'
                        d='M315.012 384.295C302.691 370.155 307.942 372.726 240.565 318.737C213.251 302.235 196.879 283.332 186.832 266.798C186.832 265.328 186.832 265.328 189.43 267.541C198.379 281.334 212.363 296.504 236.066 312.952C279.771 339.947 310.408 368.013 318.335 379.796L315.012 384.295Z'
                        fill='url(#paintCREATOR34_linear)'
                      />
                      <path
                        id='Vector 225_2'
                        d='M318.336 384.938C313.837 375.726 289.927 349.845 240.565 320.022C212.632 302.38 196.048 282.426 186.007 265.328C186.833 264.775 187.386 265.328 189.058 266.435C199.6 282.316 216.615 300.523 245.064 318.094C288.77 345.089 311.694 368.656 319.621 380.439L318.336 384.938Z'
                        fill='#C4C4C4'
                      />
                      <path
                        id='Vector 227 (Stroke)_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M245.403 317.547C194.568 286.15 180.391 252.755 174.332 234.338L173.111 234.74C179.242 253.378 193.582 287.051 244.727 318.641C288.391 345.61 311.232 369.119 319.088 380.798L320.155 380.08C312.158 368.192 289.15 344.568 245.403 317.547Z'
                        fill='url(#paintCREATOR35_linear)'
                      />
                      <path
                        id='Intersect_3'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M215.056 300.741C222.291 307.305 230.724 313.807 240.566 320.023C247.988 324.508 254.836 328.904 261.128 333.167L264.116 330.511C258.262 326.478 251.919 322.329 245.065 318.095C235.753 312.344 227.666 306.524 220.63 300.741H215.056Z'
                        fill='url(#paintCREATOR36_linear)'
                      />
                    </g>
                  </g>
                  <g id='Group 204'>
                    <g id='Vector 230' filter='url(#filterCRLOACKED10_f)'>
                      <path
                        d='M302.278 329.5L328.831 393.672H275.724L302.278 329.5Z'
                        fill='url(#paintCREATOR37_linear)'
                      />
                    </g>
                    <g id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;'>
                      <mask
                        id='maskCREATOR1'
                        maskUnits='userSpaceOnUse'
                        x='275'
                        y='348'
                        width='55'
                        height='58'
                      >
                        <path
                          id='Union_5'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M302.335 405.775C302.335 405.775 302.336 405.775 302.336 405.775L302.336 405.775C302.336 405.775 302.336 405.775 302.336 405.775C302.336 405.775 302.336 405.775 302.336 405.775L327.596 396.404C329.44 395.72 330.2 393.521 329.171 391.844L302.336 348.13C302.336 348.13 302.336 348.129 302.336 348.129L302.336 348.128C302.336 348.128 302.336 348.128 302.336 348.128C302.336 348.128 302.335 348.128 302.335 348.128C302.335 348.128 302.335 348.128 302.335 348.128L302.335 348.129C302.335 348.129 302.335 348.13 302.335 348.13L275.5 391.844C274.471 393.521 275.231 395.72 277.075 396.404L302.335 405.775C302.335 405.775 302.335 405.775 302.335 405.775C302.335 405.775 302.335 405.775 302.335 405.775L302.335 405.775Z'
                          fill='url(#paintCREATOR38_linear)'
                        />
                      </mask>
                      <g mask='url(#maskCREATOR1)'>
                        <g id='Group 113'>
                          <path
                            id='Vector 44'
                            d='M302.491 406.981L331.062 395.247L302.491 343.717L302.491 406.981Z'
                            fill='url(#paintCREATOR39_linear)'
                          />
                          <path
                            id='Vector 45'
                            d='M302.491 406.98L273.92 395.246L302.491 343.716L302.491 406.98Z'
                            fill='url(#paintCREATOR40_linear)'
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>

                {lights && (
                  <g id='light-star'>
                    <g id='Ellipse 19' opacity='0.5' filter='url(#filterCREATOR11_f)'>
                      <circle cx='301.754' cy='48.6727' r='6.12241' fill='url(#paint41_radial)' />
                    </g>
                    <g id='Star 31' filter='url(#filterCREATOR12_f)'>
                      <path
                        d='M301.754 33.3667L303.02 46.5711L315.529 47.9074L303.02 49.2437L301.754 62.4482L300.488 49.2437L287.979 47.9074L300.488 46.5711L301.754 33.3667Z'
                        fill='#E8F2FF'
                      />
                    </g>
                  </g>
                )}
              </g>
              <defs>
                <filter
                  id='filterCREATOR0_dd'
                  x='0.397446'
                  y='0.766563'
                  width='606.149'
                  height='568.312'
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
                    values='0 0 0 0 0.558594 0 0 0 0 0.710156 0 0 0 0 0.9375 0 0 0 1 0'
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
                    values='0 0 0 0 0.670833 0 0 0 0 0.8025 0 0 0 0 1 0 0 0 0.6 0'
                  />
                  <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR1_f'
                  x='242.532'
                  y='368.224'
                  width='119.492'
                  height='52.0011'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='1.65961' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterCREATOR2_f'
                  x='184.115'
                  y='109.927'
                  width='235.997'
                  height='268.76'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.165961' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterCREATOR3_i'
                  x='194.958'
                  y='121.745'
                  width='215.749'
                  height='245.555'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='7.43963' />
                  <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
                </filter>
                <filter
                  id='filterCREATOR4_d'
                  x='281.648'
                  y='234.338'
                  width='238.204'
                  height='160.884'
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
                  <feOffset dy='5.14185' />
                  <feGaussianBlur stdDeviation='2.57092' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR5_d'
                  x='317.311'
                  y='220.317'
                  width='209.49'
                  height='133.07'
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
                  <feOffset dy='-2.57092' />
                  <feGaussianBlur stdDeviation='6.20148' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR6_d'
                  x='282.933'
                  y='233.053'
                  width='154.756'
                  height='158.313'
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
                  <feOffset dy='2.57092' />
                  <feGaussianBlur stdDeviation='1.92819' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR7_d'
                  x='87.0918'
                  y='234.338'
                  width='238.205'
                  height='160.884'
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
                  <feOffset dy='5.14185' />
                  <feGaussianBlur stdDeviation='2.57092' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR8_d'
                  x='80.1442'
                  y='220.317'
                  width='209.49'
                  height='133.07'
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
                  <feOffset dy='-2.57092' />
                  <feGaussianBlur stdDeviation='6.20148' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCREATOR9_d'
                  x='169.255'
                  y='233.053'
                  width='154.756'
                  height='158.313'
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
                  <feOffset dy='2.57092' />
                  <feGaussianBlur stdDeviation='1.92819' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterCRLOACKED10_f'
                  x='271.298'
                  y='325.074'
                  width='61.9588'
                  height='73.0229'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.21281' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterCREATOR11_f'
                  x='292.57'
                  y='39.4891'
                  width='18.3672'
                  height='18.3672'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='1.5306' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterCREATOR12_f'
                  x='287.06'
                  y='32.4483'
                  width='29.3876'
                  height='30.9182'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.459181' result='effect1_foregroundBlur' />
                </filter>
                <linearGradient
                  id='paintCREATO0_linear'
                  x1='303.284'
                  y1='47.9082'
                  x2='303.284'
                  y2='375.457'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B6CAFF' stopOpacity='0.58' />
                  <stop offset='0.0722622' stopColor='#CCDDFF' stopOpacity='0.06' />
                  <stop offset='1' stopColor='#56D7E0' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO1_linear'
                  x1='299.593'
                  y1='15'
                  x2='299.593'
                  y2='194.458'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO2_linear'
                  x1='493.505'
                  y1='356.082'
                  x2='338.089'
                  y2='266.353'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO3_linear'
                  x1='298.461'
                  y1='469.589'
                  x2='298.461'
                  y2='290.131'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO4_linear'
                  x1='104.851'
                  y1='356.651'
                  x2='260.266'
                  y2='266.922'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO5_linear'
                  x1='493.505'
                  y1='128.791'
                  x2='338.089'
                  y2='218.52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO6_linear'
                  x1='104.851'
                  y1='128.221'
                  x2='260.266'
                  y2='217.95'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO7_linear'
                  x1='302.666'
                  y1='281.011'
                  x2='302.666'
                  y2='434.846'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#417D3C' />
                  <stop offset='0.541667' stopColor='#386934' />
                  <stop offset='0.744062' stopColor='#569B51' />
                  <stop offset='1' stopColor='#386C34' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO8_linear'
                  x1='275.617'
                  y1='208.901'
                  x2='275.617'
                  y2='457.439'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B9F4B5' />
                  <stop offset='0.783601' stopColor='#FAFCFF' />
                  <stop offset='1' stopColor='#E4FFE2' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO9_linear'
                  x1='276.337'
                  y1='208.901'
                  x2='276.337'
                  y2='462.962'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B9F4B5' />
                  <stop offset='0.783601' stopColor='#FAFCFF' />
                  <stop offset='1' stopColor='#E4FFE2' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO10_linear'
                  x1='322.663'
                  y1='208.901'
                  x2='322.663'
                  y2='462.962'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B9F4B5' />
                  <stop offset='0.783601' stopColor='#FAFCFF' />
                  <stop offset='1' stopColor='#E4FFE2' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO11_linear'
                  x1='244.192'
                  y1='122.602'
                  x2='368.663'
                  y2='369.884'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#C2C4CD' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO12_linear'
                  x1='243.087'
                  y1='143.071'
                  x2='350.408'
                  y2='341.118'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CDCFD6' />
                  <stop offset='1' stopColor='#EFEFF1' />
                </linearGradient>
                <linearGradient
                  id='paintCREATO13_linear'
                  x1='254.704'
                  y1='135.879'
                  x2='370.324'
                  y2='343.884'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#DDDFE2' />
                  <stop offset='1' stopColor='white' />
                </linearGradient>
                <radialGradient
                  id='paintCREATOR14_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(302.832 244.523) rotate(90) scale(125.24 107.875)'
                >
                  <stop stopColor='#F5F7FF' />
                  <stop offset='1' stopColor='#B3B5C5' />
                </radialGradient>
                <linearGradient
                  id='paintCREATOR15_linear'
                  x1='302.834'
                  y1='114.322'
                  x2='302.834'
                  y2='374.71'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR16_linear'
                  x1='169.65'
                  y1='137.881'
                  x2='299.844'
                  y2='363.383'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR17_linear'
                  x1='426.317'
                  y1='137.882'
                  x2='296.123'
                  y2='363.384'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR18_linear'
                  x1='302.834'
                  y1='290.394'
                  x2='302.183'
                  y2='361.069'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='1' stopColor='#D0DBFF' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR19_linear'
                  x1='455.616'
                  y1='274.408'
                  x2='414.855'
                  y2='261.329'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#9196AA' />
                  <stop offset='0.583159' stopColor='#C9C9DC' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR20_linear'
                  x1='439.168'
                  y1='258.424'
                  x2='437.652'
                  y2='378.253'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR21_linear'
                  x1='506.604'
                  y1='241.145'
                  x2='439.768'
                  y2='314.444'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR22_linear'
                  x1='410.333'
                  y1='312.565'
                  x2='384.277'
                  y2='297.851'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#717995' />
                  <stop offset='0.583159' stopColor='#A4A5BB' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR22_linear'
                  x1='390.907'
                  y1='304.193'
                  x2='397.944'
                  y2='382.643'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR24_linear'
                  x1='405.299'
                  y1='307.39'
                  x2='374.519'
                  y2='390.733'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR25_linear'
                  x1='361.558'
                  y1='233.896'
                  x2='361.558'
                  y2='384.938'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C4C4C4' />
                  <stop offset='1' stopColor='#63687B' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR26_linear'
                  x1='374.735'
                  y1='304.597'
                  x2='351.596'
                  y2='333.52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='0.445395' stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR27_linear'
                  x1='365.737'
                  y1='305.883'
                  x2='367.358'
                  y2='333.166'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0495744' stopColor='#C4C4C4' />
                  <stop offset='0.454268' stopColor='#EDEDED' />
                  <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR28_linear'
                  x1='151.328'
                  y1='274.407'
                  x2='192.089'
                  y2='261.328'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#9196AA' />
                  <stop offset='0.583159' stopColor='#C9C9DC' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR29_linear'
                  x1='167.777'
                  y1='258.424'
                  x2='169.293'
                  y2='378.253'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR30_linear'
                  x1='100.34'
                  y1='241.144'
                  x2='167.176'
                  y2='314.443'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR31_linear'
                  x1='196.611'
                  y1='312.565'
                  x2='222.667'
                  y2='297.851'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#717995' />
                  <stop offset='0.583159' stopColor='#A4A5BB' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR32_linear'
                  x1='216.038'
                  y1='304.192'
                  x2='209'
                  y2='382.642'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR33_linear'
                  x1='201.645'
                  y1='307.388'
                  x2='232.426'
                  y2='390.732'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR34_linear'
                  x1='245.385'
                  y1='233.896'
                  x2='245.385'
                  y2='384.938'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C4C4C4' />
                  <stop offset='1' stopColor='#63687B' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR35_linear'
                  x1='232.21'
                  y1='304.597'
                  x2='255.348'
                  y2='333.52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='0.445395' stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR36_linear'
                  x1='241.208'
                  y1='305.883'
                  x2='239.586'
                  y2='333.167'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0495744' stopColor='#C4C4C4' />
                  <stop offset='0.454268' stopColor='#EDEDED' />
                  <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR37_linear'
                  x1='302.278'
                  y1='394.22'
                  x2='302.278'
                  y2='350.342'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#585B77' stopOpacity='0.75' />
                  <stop offset='1' stopColor='#525787' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR38_linear'
                  x1='305.054'
                  y1='363.787'
                  x2='285.865'
                  y2='390.82'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D5D7D9' />
                  <stop offset='1' stopColor='#E2E3E7' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR39_linear'
                  x1='302.812'
                  y1='376.787'
                  x2='330.875'
                  y2='370.014'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#DBDCE1' />
                  <stop offset='1' stopColor='#F2F3F8' />
                </linearGradient>
                <linearGradient
                  id='paintCREATOR40_linear'
                  x1='284.427'
                  y1='357.9'
                  x2='309.506'
                  y2='353.829'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F4F5F8' />
                  <stop offset='1' stopColor='#F5F6F7' />
                </linearGradient>
                <radialGradient
                  id='paint41_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(301.754 48.6727) rotate(90) scale(9.79586)'
                >
                  <stop stopColor='#E7ECFF' />
                  <stop offset='0.979167' stopColor='#ABC3FF' stopOpacity='0.8825' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.88' />
                </radialGradient>
              </defs>
            </svg>
          </div>
        ) : (
          <svg
            width={BadgesSize[size].badge.width}
            height={BadgesSize[size].badge.height}
            viewBox='0 0 405 350'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.5'>
              <rect
                width='101.91'
                height='237'
                transform='translate(150.255 113)'
                fill='url(#paintCRLOCKED0_linear)'
              />
              <path
                opacity='0.5'
                d='M150.255 113H252.165V344.095C252.165 346.619 249.352 348.125 247.252 346.725L202.525 316.906C201.729 316.376 200.691 316.376 199.895 316.906L155.168 346.725C153.068 348.125 150.255 346.619 150.255 344.095V113Z'
                fill='url(#paintCRLOCKED1_linear)'
              />
              <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M216.615 326.3L202.525 316.906C201.729 316.376 200.691 316.376 199.895 316.906L185.805 326.3V113H216.615V326.3Z'
                fill='url(#paintCRLOCKED2_linear)'
              />
              <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M181.855 328.933L178.695 331.04V113H181.855V328.933Z'
                fill='url(#paintCRLOCKED3_linear)'
              />
              <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M223.725 331.04L220.565 328.933V113H223.725V331.04Z'
                fill='url(#paintCRLOCKED4_linear)'
              />
              <g opacity='0.8' filter='url(#filterCRLOACKED0_f)'>
                <path
                  d='M201.525 301L252.255 271.182V260H150.255V271.182L201.525 301Z'
                  fill='url(#paintCRLOCKED5_linear)'
                />
              </g>
              <path
                d='M201.255 0L76.255 67.9987L76.255 222.506L201.255 290.505L326.255 222.506L326.255 67.9987L201.255 0Z'
                fill='url(#paintCRLOCKED6_linear)'
              />
              <path
                d='M201.105 22L95.255 79.5814L95.255 210.419L201.105 268L306.955 210.419L306.955 79.5814L201.105 22Z'
                fill='url(#paintCRLOCKED7_linear)'
              />
              <g filter='url(#filterCRLOACKED1_f)'>
                <path
                  d='M201.105 22L95.255 79.5814L95.255 210.419L201.105 268L306.955 210.419L306.955 79.5814L201.105 22Z'
                  fill='url(#paintCRLOCKED8_linear)'
                />
              </g>
              <g opacity='0.5'>
                <mask
                  id='maskCRLOCKED0'
                  maskUnits='userSpaceOnUse'
                  x='104'
                  y='32'
                  width='196'
                  height='227'
                >
                  <path
                    d='M201.755 32L104.255 84.9913L104.255 205.399L201.755 258.39L299.255 205.399L299.255 84.9913L201.755 32Z'
                    fill='url(#paintCRLOCKED9_linear)'
                  />
                </mask>
                <g mask='url(#maskCRLOCKED0)'>
                  <path
                    d='M201.755 32L104.255 84.9913L104.255 205.399L201.755 258.39L299.255 205.399L299.255 84.9913L201.755 32Z'
                    fill='url(#paintCRLOCKED10_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M185.456 262.862L181.583 27.5172H221.927L218.054 262.862H185.456Z'
                    fill='url(#paintCRLOCKED11_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M184.937 260.775L63.9103 58.8965L98.8499 38.7241L213.168 244.475L184.937 260.775Z'
                    fill='url(#paintCRLOCKED12_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M181.575 244.475L295.893 38.724L330.833 58.8964L209.806 260.774L181.575 244.475Z'
                    fill='url(#paintCRLOCKED13_linear)'
                  />
                  <rect
                    x='104.255'
                    y='131.741'
                    width='195'
                    height='126.638'
                    fill='url(#paintCRLOCKED14_linear)'
                  />
                  <g filter='url(#filterCRLOACKED2_i)'>
                    <path
                      d='M201.755 32L104.255 84.9913L104.255 205.399L201.755 258.39L299.255 205.399L299.255 84.9913L201.755 32Z'
                      fill='url(#paintCRLOCKED15_linear)'
                    />
                  </g>
                </g>
              </g>
              <g filter='url(#filterCRLOACKED3_d)'>
                <path
                  d='M361.041 148.351L307.449 164.306L303.528 171.166L361.041 148.351Z'
                  fill='url(#paintCRLOCKED16_linear)'
                />
                <g filter='url(#filterCRLOACKED4_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M305.176 167.983C294.933 183.685 278.227 200.198 252.425 216.541C242.224 223.003 233.489 229.009 226.051 234.585C351.43 237.919 389.475 171.271 392.975 136.853L305.176 167.983Z'
                    fill='url(#paintCRLOCKED17_linear)'
                  />
                </g>
                <path
                  d='M309.557 210.622L279.469 196.13L273.662 200.781L309.557 210.622Z'
                  fill='url(#paintCRLOCKED18_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M277.171 198.471C270.05 204.432 261.845 210.419 252.429 216.383C229.279 231.047 213.682 243.366 203.647 253.627C205.027 256.586 212.134 256.004 222.663 249.334C244.007 235.815 263.214 233.03 297.204 233.704C330.234 234.358 340.32 230.478 345.99 224.378C332.35 218.939 298.257 206.09 277.171 198.471Z'
                  fill='url(#paintCRLOCKED19_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M277.171 198.471C270.05 204.432 261.845 210.419 252.429 216.383C229.279 231.047 213.682 243.366 203.647 253.627C205.027 256.586 212.134 256.004 222.663 249.334C244.007 235.815 263.214 233.03 297.204 233.704C330.234 234.358 340.32 230.478 345.99 224.378C332.35 218.939 298.257 206.09 277.171 198.471Z'
                  fill='url(#paintCRLOCKED20_linear)'
                />
                <g filter='url(#filterCRLOACKED5_d)'>
                  <path
                    d='M191.902 271.526C203.038 258.745 198.292 261.069 259.19 212.272C283.877 197.357 298.674 180.273 307.755 165.329C307.755 164 307.755 164 305.407 166C297.319 178.467 284.68 192.177 263.256 207.044C223.754 231.442 196.064 256.809 188.899 267.459L191.902 271.526Z'
                    fill='url(#paintCRLOCKED21_linear)'
                  />
                  <path
                    d='M188.899 272.107C192.965 263.78 214.576 240.389 259.19 213.434C284.437 197.489 299.426 179.454 308.501 164C307.755 163.5 307.255 164 305.744 165C296.215 179.354 280.837 195.81 255.124 211.691C215.621 236.09 194.902 257.39 187.737 268.04L188.899 272.107Z'
                    fill='url(#paintCRLOCKED22_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M254.818 211.197C300.763 182.819 313.578 152.636 319.053 135.99L320.157 136.354C314.616 153.199 301.655 183.634 255.429 212.185C215.964 236.56 195.32 257.809 188.219 268.364L187.255 267.716C194.483 256.971 215.278 235.619 254.818 211.197Z'
                    fill='url(#paintCRLOCKED23_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M282.245 196.006C275.707 201.939 268.085 207.816 259.19 213.434C252.481 217.488 246.292 221.46 240.604 225.314L237.904 222.913C243.195 219.268 248.928 215.518 255.124 211.691C263.54 206.493 270.848 201.234 277.207 196.006H282.245Z'
                    fill='url(#paintCRLOCKED24_linear)'
                  />
                </g>
              </g>
              <g filter='url(#filterCRLOACKED6_d)'>
                <path
                  d='M43.6267 148.351L97.2182 164.306L101.139 171.166L43.6267 148.351Z'
                  fill='url(#paintCRLOCKED25_linear)'
                />
                <g filter='url(#filterCRLOACKED7_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M99.4917 167.983C109.734 183.685 126.441 200.198 152.242 216.541C162.443 223.003 171.178 229.009 178.616 234.585C53.2377 237.919 15.1924 171.271 11.6926 136.853L99.4917 167.983Z'
                    fill='url(#paintCRLOCKED26_linear)'
                  />
                </g>
                <path
                  d='M95.1103 210.622L125.198 196.13L131.005 200.781L95.1103 210.622Z'
                  fill='url(#paintCRLOCKED27_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M127.497 198.471C134.618 204.432 142.822 210.419 152.238 216.383C175.389 231.047 190.985 243.366 201.021 253.627C199.64 256.586 192.534 256.004 182.004 249.334C160.66 235.815 141.453 233.03 107.463 233.704C74.4337 234.358 64.3474 230.478 58.6777 224.378C72.3173 218.939 106.41 206.09 127.497 198.471Z'
                  fill='url(#paintCRLOCKED28_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M127.497 198.471C134.618 204.432 142.822 210.419 152.238 216.383C175.389 231.047 190.985 243.366 201.021 253.627C199.64 256.586 192.534 256.004 182.004 249.334C160.66 235.815 141.453 233.03 107.463 233.704C74.4337 234.358 64.3474 230.478 58.6777 224.378C72.3173 218.939 106.41 206.09 127.497 198.471Z'
                  fill='url(#paintCRLOCKED29_linear)'
                />
                <g filter='url(#filterCRLOACKED8_d)'>
                  <path
                    d='M212.765 271.526C201.629 258.745 206.375 261.069 145.477 212.272C120.791 197.357 105.993 180.273 96.9122 165.329C96.9122 164 96.9122 164 99.2607 166C107.348 178.467 119.988 192.177 141.411 207.044C180.913 231.442 208.604 256.809 215.768 267.459L212.765 271.526Z'
                    fill='url(#paintCRLOCKED30_linear)'
                  />
                  <path
                    d='M215.768 272.107C211.702 263.78 190.092 240.389 145.477 213.434C120.23 197.489 105.242 179.454 96.1658 164C96.9125 163.5 97.4125 164 98.9235 165C108.452 179.354 123.83 195.81 149.544 211.691C189.046 236.09 209.765 257.39 216.93 268.04L215.768 272.107Z'
                    fill='url(#paintCRLOCKED31_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M149.849 211.197C103.904 182.819 91.0894 152.636 85.614 135.99L84.5103 136.354C90.0517 153.199 103.012 183.634 149.239 212.185C188.703 236.56 209.347 257.809 216.448 268.364L217.412 267.716C210.184 256.971 189.39 235.619 149.849 211.197Z'
                    fill='url(#paintCRLOCKED32_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M122.422 196.006C128.96 201.939 136.582 207.816 145.477 213.434C152.186 217.488 158.375 221.46 164.063 225.314L166.764 222.913C161.472 219.268 155.739 215.518 149.543 211.691C141.128 206.493 133.819 201.234 127.46 196.006H122.422Z'
                    fill='url(#paintCRLOCKED33_linear)'
                  />
                </g>
              </g>
              <g filter='url(#filterCRLOACKED9_f)'>
                <path
                  d='M201.255 222L225.255 280H177.255L201.255 222Z'
                  fill='url(#paintCRLOCKED34_linear)'
                />
              </g>
              <mask
                id='maskCRLOCKED1'
                maskUnits='userSpaceOnUse'
                x='175'
                y='239'
                width='53'
                height='53'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M227.278 281.532L201.278 291.177L175.278 281.532L201.278 239.177L227.278 281.532Z'
                  fill='url(#paintCRLOCKED35_linear)'
                />
              </mask>
              <g mask='url(#maskCRLOCKED1)'>
                <path
                  d='M201.419 292.265L227.19 281.68L201.419 235.199L201.419 292.265Z'
                  fill='url(#paintCRLOCKED36_linear)'
                />
                <path
                  d='M201.419 292.265L175.647 281.68L201.419 235.199L201.419 292.265Z'
                  fill='url(#paintCRLOCKED37_linear)'
                />
              </g>
            </g>
            <defs>
              <filter
                id='filterCRLOACKED0_f'
                x='147.255'
                y='257'
                width='108'
                height='47'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='1.5' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterCRLOACKED1_f'
                x='94.955'
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
                id='filterCRLOACKED2_i'
                x='104.255'
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
              <filter
                id='filterCRLOACKED3_d'
                x='182.608'
                y='135.99'
                width='215.014'
                height='145.411'
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
                <feOffset dy='4.64733' />
                <feGaussianBlur stdDeviation='2.32367' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED4_d'
                x='214.841'
                y='123.319'
                width='189.344'
                height='120.272'
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
                <feOffset dy='-2.32367' />
                <feGaussianBlur stdDeviation='5.60506' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED5_d'
                x='183.77'
                y='134.829'
                width='139.873'
                height='143.087'
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
                <feOffset dy='2.32367' />
                <feGaussianBlur stdDeviation='1.74275' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED6_d'
                x='7.04529'
                y='135.99'
                width='215.014'
                height='145.411'
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
                <feOffset dy='4.64733' />
                <feGaussianBlur stdDeviation='2.32367' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED7_d'
                x='0.482512'
                y='123.319'
                width='189.344'
                height='120.272'
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
                <feOffset dy='-2.32367' />
                <feGaussianBlur stdDeviation='5.60506' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED8_d'
                x='81.0248'
                y='134.829'
                width='139.873'
                height='143.087'
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
                <feOffset dy='2.32367' />
                <feGaussianBlur stdDeviation='1.74275' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterCRLOACKED9_f'
                x='173.255'
                y='218'
                width='56'
                height='66'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <linearGradient
                id='paintCRLOCKED0_linear'
                x1='50.955'
                y1='0'
                x2='50.955'
                y2='237'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED1_linear'
                x1='201.21'
                y1='113'
                x2='201.21'
                y2='350'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED2_linear'
                x1='201.21'
                y1='113'
                x2='201.21'
                y2='326.3'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED3_linear'
                x1='180.275'
                y1='113'
                x2='180.275'
                y2='331.04'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED4_linear'
                x1='222.145'
                y1='113'
                x2='222.145'
                y2='331.04'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED5_linear'
                x1='201.255'
                y1='260'
                x2='201.255'
                y2='301'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED6_linear'
                x1='201.255'
                y1='0'
                x2='201.255'
                y2='290.505'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED7_linear'
                x1='201.105'
                y1='22'
                x2='201.105'
                y2='268'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED8_linear'
                x1='201.105'
                y1='22'
                x2='201.105'
                y2='268'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED9_linear'
                x1='201.755'
                y1='32'
                x2='201.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED10_linear'
                x1='201.755'
                y1='32'
                x2='201.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED11_linear'
                x1='201.755'
                y1='27.5172'
                x2='201.755'
                y2='262.862'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED12_linear'
                x1='81.3801'
                y1='48.8103'
                x2='199.053'
                y2='252.625'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED13_linear'
                x1='313.363'
                y1='48.8102'
                x2='195.69'
                y2='252.625'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED14_linear'
                x1='201.755'
                y1='131.741'
                x2='201.755'
                y2='258.379'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED15_linear'
                x1='201.755'
                y1='32'
                x2='201.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED16_linear'
                x1='336.101'
                y1='142.754'
                x2='328.468'
                y2='176.763'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED17_linear'
                x1='324.175'
                y1='121.413'
                x2='295.289'
                y2='250.123'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED18_linear'
                x1='293.073'
                y1='199.183'
                x2='291.419'
                y2='206.552'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED19_linear'
                x1='283.591'
                y1='199.912'
                x2='268.056'
                y2='269.134'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED20_linear'
                x1='283.591'
                y1='199.912'
                x2='268.056'
                y2='269.134'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED21_linear'
                x1='248.327'
                y1='164.403'
                x2='248.327'
                y2='271.526'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED22_linear'
                x1='248.119'
                y1='163.804'
                x2='248.119'
                y2='272.107'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED23_linear'
                x1='253.706'
                y1='135.99'
                x2='253.706'
                y2='268.364'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED24_linear'
                x1='260.074'
                y1='196.006'
                x2='260.074'
                y2='225.314'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED25_linear'
                x1='68.5667'
                y1='142.754'
                x2='76.1992'
                y2='176.763'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED26_linear'
                x1='80.4926'
                y1='121.413'
                x2='109.378'
                y2='250.123'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED27_linear'
                x1='111.595'
                y1='199.183'
                x2='113.248'
                y2='206.552'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED28_linear'
                x1='121.076'
                y1='199.912'
                x2='136.611'
                y2='269.134'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED29_linear'
                x1='121.076'
                y1='199.912'
                x2='136.611'
                y2='269.134'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED30_linear'
                x1='156.34'
                y1='164.403'
                x2='156.34'
                y2='271.526'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED31_linear'
                x1='156.548'
                y1='163.804'
                x2='156.548'
                y2='272.107'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED32_linear'
                x1='150.961'
                y1='135.99'
                x2='150.961'
                y2='268.364'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED33_linear'
                x1='144.593'
                y1='196.006'
                x2='144.593'
                y2='225.314'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED34_linear'
                x1='201.255'
                y1='280'
                x2='201.255'
                y2='222'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED35_linear'
                x1='201.278'
                y1='291.177'
                x2='201.278'
                y2='239.177'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED36_linear'
                x1='214.304'
                y1='292.265'
                x2='214.304'
                y2='235.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintCRLOCKED37_linear'
                x1='188.533'
                y1='292.265'
                x2='188.533'
                y2='235.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  )
}

const Artisan = ({
  animation = false,
  level = 0,
  lights = true,
  locked = false,
  mod = 'data',
  rank = 'artisan',
  shadow = true,
  size = 'sm',
  stars = 0
}: BadgesRankProps) => {
  const {
    rotation,
    wrapper,
    wrapperBadge,
    diamond,
    flex,
    starsFlex,
    starLeft,
    starTop,
    starRight
  } = useStyles({
    left: BadgesSize[size].stars.positions.left,
    top: BadgesSize[size].stars.positions.top,
    right: BadgesSize[size].stars.positions.right,
    diamondLeft: BadgesSize[size].diamond.position[rank].left,
    diamondTop: BadgesSize[size].diamond.position[rank].top
  })

  return (
    <div className={wrapper}>
      {stars > 0 && stars < 4 ? (
        <div className={starsFlex}>
          <div style={stars > 0 ? {} : { opacity: '0.5' }} className={starLeft}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 0)}
            />
          </div>
          <div style={stars > 1 ? {} : { opacity: '0.5' }} className={starTop}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 1)}
            />
          </div>
          <div style={stars > 2 ? {} : { opacity: '0.5' }} className={starRight}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 2)}
            />
          </div>
        </div>
      ) : null}
      <div className={flex}>
        {!locked ? (
          <div className={wrapperBadge}>
            <div className={diamond}>
              {level < 0 ? null : (
                <Diamond
                  width={BadgesSize[size].diamond.width}
                  height={BadgesSize[size].diamond.height}
                  diamond={level}
                  mod={mod}
                />
              )}
            </div>
            <svg
              width={BadgesSize[size].badge.width}
              height={BadgesSize[size].badge.height}
              viewBox='0 0 630 550'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='artisan'>
                {lights && (
                  <g id='lights' className={animation ? rotation : ''}>
                    <path
                      id='Vector 271'
                      d='M289.59 191.458L281.664 12H345.069L337.143 191.458H289.59Z'
                      fill='url(#paintARTISAN0_linear)'
                    />
                    <path
                      id='Vector 264'
                      d='M363.751 242.761L523.129 325.627L491.427 380.537L339.974 283.944L363.751 242.761Z'
                      fill='url(#paintARTISAN1_linear)'
                    />
                    <path
                      id='Vector 265'
                      d='M336.011 287.131L343.937 466.589H280.532L288.458 287.131H336.011Z'
                      fill='url(#paintARTISAN2_linear)'
                    />
                    <path
                      id='Vector 267'
                      d='M285.928 284.513L134.476 381.106L102.773 326.196L262.151 243.331L285.928 284.513Z'
                      fill='url(#paintARTISAN3_linear)'
                    />
                    <path
                      id='Vector 274'
                      d='M363.751 236.111L523.129 153.246L491.427 98.3357L339.974 194.928L363.751 236.111Z'
                      fill='url(#paintARTISAN4_linear)'
                    />
                    <path
                      id='Vector 275'
                      d='M285.928 194.359L134.476 97.7661L102.773 152.676L262.151 235.541L285.928 194.359Z'
                      fill='url(#paintARTISAN5_linear)'
                    />
                  </g>
                )}
                {lights && (
                  <g
                    id='aro-2'
                    className={animation ? rotation : ''}
                    filter='url(#filterARTISAN0_f)'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M311.7 449.752C422.015 449.752 511.444 360.323 511.444 250.008C511.444 139.693 422.015 50.2644 311.7 50.2644C201.385 50.2644 111.956 139.693 111.956 250.008C111.956 360.323 201.385 449.752 311.7 449.752ZM311.7 454.344C424.551 454.344 516.036 362.859 516.036 250.008C516.036 137.157 424.551 45.6725 311.7 45.6725C198.849 45.6725 107.365 137.157 107.365 250.008C107.365 362.859 198.849 454.344 311.7 454.344Z'
                      fill='url(#paintARTISAN6_linear)'
                    />
                  </g>
                )}
                {lights && (
                  <path
                    className={animation ? rotation : ''}
                    id='aro-1'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M311.7 449.752C422.015 449.752 511.444 360.323 511.444 250.008C511.444 139.693 422.015 50.2644 311.7 50.2644C201.385 50.2644 111.956 139.693 111.956 250.008C111.956 360.323 201.385 449.752 311.7 449.752ZM311.7 454.344C424.551 454.344 516.036 362.859 516.036 250.008C516.036 137.157 424.551 45.6725 311.7 45.6725C198.849 45.6725 107.365 137.157 107.365 250.008C107.365 362.859 198.849 454.344 311.7 454.344Z'
                    fill='url(#paintARTISAN7_linear)'
                  />
                )}
                {lights && (
                  <g id='light-start'>
                    <g id='Ellipse 19' opacity='0.5' filter='url(#filterARTISAN1_f)'>
                      <circle
                        cx='313.996'
                        cy='47.2031'
                        r='13.7754'
                        fill='url(#paintARTISAN8_radial)'
                      />
                    </g>
                    <g id='Star 31' filter='url(#filterARTISAN2_f)'>
                      <path
                        d='M313.996 24.2442L315.965 45.0933L335.424 47.2032L315.965 49.3132L313.996 70.1623L312.027 49.3132L292.567 47.2032L312.027 45.0933L313.996 24.2442Z'
                        fill='white'
                      />
                    </g>
                  </g>
                )}
                <g id='body' filter={shadow ? 'url(#filterARTISAN3_dd)' : ''}>
                  <g id='Group 182'>
                    <g id='Group 181'>
                      <g id='Group 180'>
                        <path
                          id='Rectangle 60'
                          d='M261.9 372.29H367.96V424.216L314.93 450.731L261.9 424.216V372.29Z'
                          fill='url(#paintARTISAN9_radial)'
                        />
                        <path
                          id='Intersect'
                          opacity='0.8'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M333.5 441.446L314.928 450.731L261.898 424.216V375.606H276.26C276.522 376.192 276.784 376.779 277.046 377.368C289.416 405.103 302.998 435.558 333.5 441.446Z'
                          fill='url(#paintARTISAN10_linear)'
                        />
                        <g id='Vector 218' opacity='0.8' filter='url(#filterARTISAN4_f)'>
                          <path
                            d='M315.481 413.72L367.407 387.205V377.262H263.004V387.205L315.481 413.72Z'
                            fill='#14630E'
                          />
                        </g>
                        <g id='Vector 217' filter='url(#filterARTISAN5_f)'>
                          <path
                            d='M279.023 399.359C273.868 407.578 273.868 409.855 279.023 414.826C278.103 414.826 277.476 417.809 295.595 429.741C318.243 444.656 338.13 430.293 351.94 414.826C365.75 399.359 361.33 399.359 358.016 403.778C354.702 408.198 346.968 423.665 320.453 429.741C293.938 435.818 299.461 366.767 279.023 399.359Z'
                            fill='url(#paintARTISAN11_linear)'
                          />
                        </g>
                      </g>
                      <g id='Group 156' filter='url(#filterARTISAN6_d)'>
                        <path
                          id='Vector 214'
                          d='M314.928 447.416L261.898 422.006V425.873L314.928 451.283L367.958 425.873V422.559L314.928 447.416Z'
                          fill='url(#paintARTISAN12_linear)'
                        />
                        <path
                          id='Vector 213'
                          d='M314.928 444.103L261.898 418.692V423.664L314.928 447.97L367.958 423.664V419.245L314.928 444.103Z'
                          fill='url(#paintARTISAN13_linear)'
                        />
                        <path
                          id='Vector 215 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M367.959 419.245L314.374 444.715L261.898 419.245V418.14L314.379 443.49L367.959 418.14V419.245Z'
                          fill='#EEEFF8'
                        />
                      </g>
                    </g>
                    <g id='Group 160'>
                      <path
                        id='Rectangle 61'
                        d='M377.617 325.89H435.637V385.739L406.627 399.78L377.617 413.169V325.89Z'
                        fill='#0E9105'
                      />
                      <g id='Vector 222' opacity='0.8' filter='url(#filterARTISAN7_f)'>
                        <path
                          d='M435.906 350.747V329.756L377.904 357.928V381.129L435.906 350.747Z'
                          fill='#14640E'
                        />
                      </g>
                      <g id='Group 161' filter='url(#filterARTISAN8_d)'>
                        <path
                          id='Vector 219 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.905 386.654L377.35 413.721V412.617L435.905 385.549V386.654Z'
                          fill='#EEEFF8'
                        />
                        <path
                          id='Vector 220 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.906 391.073L377.352 418.14V413.721L435.906 386.654V391.073Z'
                          fill='url(#paintARTISAN14_linear)'
                        />
                        <path
                          id='Vector 221 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.906 393.284L377.352 420.351V418.141L435.906 391.074V393.284Z'
                          fill='url(#paintARTISAN15_linear)'
                        />
                      </g>
                      <g id='Vector 223' filter='url(#filterARTISAN9_f)'>
                        <path
                          d='M377.904 396.044L425.963 355.719V361.795L377.904 416.483V396.044Z'
                          fill='url(#paintARTISAN16_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 161_2'>
                      <path
                        id='Rectangle 61_2'
                        d='M252.24 325.89H194.221V385.739L223.231 399.78L252.24 413.169V325.89Z'
                        fill='#0E9005'
                      />
                      <g id='Vector 222_2' opacity='0.8' filter='url(#filterARTISAN10_f)'>
                        <path
                          d='M193.955 350.747V329.756L251.957 357.928V381.129L193.955 350.747Z'
                          fill='#14630E'
                        />
                      </g>
                      <g id='Group 161_3' filter='url(#filterARTISAN11_d)'>
                        <path
                          id='Vector 220 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M193.955 391.073L252.509 418.14V413.721L193.955 386.654V391.073Z'
                          fill='url(#paintARTISAN17_linear)'
                        />
                        <path
                          id='Vector 221 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M193.955 393.284L252.509 420.351V418.141L193.955 391.074V393.284Z'
                          fill='url(#paintARTISAN18_linear)'
                        />
                        <path
                          id='Vector 219 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M193.954 386.654L252.508 413.721V412.617L193.954 385.549V386.654Z'
                          fill='#EEEFF8'
                        />
                      </g>
                      <g id='Vector 223_2' filter='url(#filterARTISAN12_f)'>
                        <path
                          d='M251.957 396.044L203.899 355.719V361.795L251.957 416.483V396.044Z'
                          fill='url(#paintARTISAN19_linear)'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='Group 163'>
                    <path
                      id='Union'
                      d='M305.401 88.8205L186.083 153.728C180.039 157.016 176.277 163.346 176.277 170.227L176.277 318.599C176.277 325.479 180.039 331.809 186.083 335.097L305.401 400.005C310.997 403.049 317.755 403.049 323.351 400.005L442.669 335.097C448.713 331.809 452.476 325.479 452.476 318.599L452.476 170.227C452.476 163.346 448.713 157.016 442.669 153.728L323.351 88.8205C317.755 85.7763 310.997 85.7763 305.401 88.8205Z'
                      fill='url(#paintARTISAN20_linear)'
                    />
                    <path
                      id='Union_2'
                      d='M305.269 113.108L207.037 166.545C201.016 169.82 197.267 176.126 197.267 182.981L197.267 305.286C197.267 312.141 201.016 318.447 207.037 321.722L305.269 375.16C310.844 378.192 317.576 378.192 323.151 375.16L421.383 321.722C427.405 318.447 431.153 312.141 431.153 305.286L431.153 182.981C431.153 176.126 427.405 169.82 421.383 166.545L323.151 113.108C317.576 110.075 310.844 110.075 305.269 113.108Z'
                      fill='url(#paintARTISAN21_linear)'
                    />
                    <g id='Union_3' filter='url(#filterARTISAN13_f)'>
                      <path
                        d='M305.269 113.108L207.037 166.545C201.016 169.82 197.267 176.126 197.267 182.981L197.267 305.286C197.267 312.141 201.016 318.447 207.037 321.722L305.269 375.16C310.844 378.192 317.576 378.192 323.151 375.16L421.383 321.722C427.405 318.447 431.153 312.141 431.153 305.286L431.153 182.981C431.153 176.126 427.405 169.82 421.383 166.545L323.151 113.108C317.576 110.075 310.844 110.075 305.269 113.108Z'
                        stroke='url(#paintARTISAN22_linear)'
                        strokeWidth='1.1048'
                      />
                    </g>
                    <g id='Mask Group' opacity='0.5'>
                      <mask
                        id='maskARTISAN0'
                        maskUnits='userSpaceOnUse'
                        x='207'
                        y='121'
                        width='216'
                        height='246'
                      >
                        <path
                          id='Union_4'
                          d='M306.429 123.911L216.51 172.782C210.779 175.897 207.211 181.897 207.211 188.42L207.211 300.278C207.211 306.801 210.779 312.801 216.51 315.916L306.429 364.787C311.729 367.668 318.127 367.668 323.427 364.787L413.347 315.916C419.078 312.801 422.646 306.801 422.646 300.278L422.646 188.42C422.646 181.897 419.078 175.897 413.347 172.782L323.427 123.911C318.127 121.03 311.729 121.03 306.429 123.911Z'
                          fill='#A6D3DE'
                        />
                      </mask>
                      <g mask='url(#maskARTISAN0)'>
                        <path
                          id='Innershadow0.1fill'
                          d='M306.429 123.911L216.51 172.782C210.779 175.897 207.211 181.897 207.211 188.42L207.211 300.278C207.211 306.801 210.779 312.801 216.51 315.916L306.429 364.787C311.729 367.668 318.127 367.668 323.427 364.787L413.347 315.916C419.078 312.801 422.646 306.801 422.646 300.278L422.646 188.42C422.646 181.897 419.078 175.897 413.347 172.782L323.427 123.911C318.127 121.03 311.729 121.03 306.429 123.911Z'
                          fill='url(#paintARTISAN23_radial)'
                        />
                        <g id='Group 57'>
                          <path
                            id='Vector 5'
                            opacity='0.5'
                            d='M296.922 374.346L292.643 114.338H337.216L332.937 374.346H296.922Z'
                            fill='url(#paintARTISAN24_linear)'
                          />
                          <path
                            id='Vector 6'
                            opacity='0.5'
                            d='M296.349 372.038L162.639 149.004L201.241 126.718L327.539 354.031L296.349 372.038Z'
                            fill='url(#paintARTISAN25_linear)'
                          />
                          <path
                            id='Vector 7'
                            opacity='0.5'
                            d='M292.634 354.032L418.933 126.719L457.534 149.005L323.824 372.039L292.634 354.032Z'
                            fill='url(#paintARTISAN26_linear)'
                          />
                          <rect
                            id='Rectangle 3'
                            x='207.212'
                            y='229.483'
                            width='215.435'
                            height='139.909'
                            fill='url(#paintARTISAN27_linear)'
                          />
                        </g>
                        <path
                          id='Innershadow0.1fill_2'
                          filter='url(#filter14_i)'
                          d='M306.429 123.911L216.51 172.782C210.779 175.897 207.211 181.897 207.211 188.42L207.211 300.278C207.211 306.801 210.779 312.801 216.51 315.916L306.429 364.787C311.729 367.668 318.127 367.668 323.427 364.787L413.347 315.916C419.078 312.801 422.646 306.801 422.646 300.278L422.646 188.42C422.646 181.897 419.078 175.897 413.347 172.782L323.427 123.911C318.127 121.03 311.729 121.03 306.429 123.911Z'
                          fill='#6052B4'
                          fillOpacity='0.01'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='Group 178' filter='url(#filterARTISAN15_d)'>
                    <g id='Group 175'>
                      <g id='Group 128'>
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#5'
                          d='M483.832 207.78L444.932 234.569L442.824 243.962L483.832 207.78Z'
                          fill='url(#paintARTISAN28_linear)'
                        />
                        <g
                          id='#3&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                          filter='url(#filterARTISAN16_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M397.653 303.53C423.541 281.718 436.332 260.222 441.159 240.953L535.934 166.742C532.073 218.299 498.975 317.076 397.653 303.53Z'
                            fill='url(#paintARTISAN29_linear)'
                          />
                        </g>
                        <path
                          id='#3&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                          d='M441.98 241.488L534.834 168.782C532.577 194.355 523.304 230.529 502.588 259.003C481.632 287.809 448.971 308.744 399.857 302.873C424.654 281.547 437.141 260.499 441.98 241.488Z'
                          stroke='url(#paintARTISAN30_linear)'
                          strokeWidth='1.85773'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4'
                          d='M489.803 248.586L430.595 266.213L426.263 273.791L489.803 248.586Z'
                          fill='url(#paintARTISAN31_linear)'
                        />
                        <g
                          id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                          filter='url(#filterARTISAN17_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M428.083 270.276C416.766 287.624 398.309 305.867 369.805 323.922C358.534 331.061 348.884 337.697 340.667 343.857C479.185 347.541 521.218 273.908 525.085 235.883L428.083 270.276Z'
                            fill='url(#paintARTISAN32_linear)'
                          />
                        </g>
                        <path
                          id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                          d='M341.335 343.184C349.408 337.164 358.841 330.693 369.809 323.746C398.19 305.769 416.611 287.606 427.94 270.325L525.083 235.882'
                          stroke='url(#paintARTISAN33_linear)'
                          strokeWidth='1.85773'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3'
                          d='M432.925 317.383L399.684 301.372L393.269 306.51L432.925 317.383Z'
                          fill='url(#paintARTISAN34_linear)'
                        />
                        <path
                          id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M397.144 303.958C389.277 310.545 380.213 317.159 369.81 323.748C344.234 339.949 327.003 353.559 315.915 364.895C317.44 368.164 325.292 367.521 336.925 360.152C360.505 345.216 381.725 342.14 419.278 342.884C455.768 343.607 466.911 339.32 473.175 332.581C458.106 326.572 420.44 312.376 397.144 303.958Z'
                          fill='url(#paintARTISAN35_linear)'
                        />
                        <path
                          id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                          d='M370.307 324.533C380.561 318.038 389.524 311.515 397.33 305.013C420.005 313.214 455.816 326.704 471.529 332.926C465.363 338.786 453.923 342.641 419.296 341.955C381.676 341.21 360.237 344.286 336.428 359.367C330.668 363.016 325.91 364.956 322.459 365.599C320.731 365.922 319.389 365.908 318.432 365.668C317.824 365.516 317.4 365.281 317.114 365.001C328.15 353.844 345.172 340.454 370.307 324.533Z'
                          stroke='url(#paintARTISAN36_linear)'
                          strokeWidth='1.85773'
                        />
                      </g>
                    </g>
                    <g id='Group 179' filter='url(#filterARTISAN18_d)'>
                      <path
                        id='Vector 226'
                        d='M377.277 319.206C426.567 289.427 440.173 251.818 445.308 234.489C444.666 234.489 443.586 234.513 443.382 235.131C436.415 256.31 426.163 282.624 381.77 313.43C338.128 340.385 307.536 368.41 299.62 380.177L302.938 384.669C315.242 370.55 309.998 373.117 377.277 319.206Z'
                        fill='url(#paintARTISAN37_linear)'
                      />
                      <path
                        id='Vector 225'
                        d='M377.279 320.49C426.055 289.684 440.175 251.818 445.309 234.489C444.668 234.489 444.229 234.513 444.026 235.131C437.94 253.631 423.702 287.116 372.787 318.564C329.145 345.52 306.254 369.052 298.338 380.818L299.622 385.311C304.115 376.112 327.989 350.269 377.279 320.49Z'
                        fill='#C4C4C4'
                      />
                      <path
                        id='Vector 227 (Stroke)'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M372.449 318.018C423.209 286.666 437.367 253.32 443.416 234.93L444.635 235.332C438.513 253.942 424.195 287.566 373.124 319.11C329.524 346.04 306.716 369.515 298.871 381.177L297.806 380.46C305.791 368.59 328.765 345 372.449 318.018Z'
                        fill='url(#paintARTISAN38_linear)'
                      />
                      <path
                        id='Intersect_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M402.751 301.235C395.528 307.79 387.107 314.283 377.28 320.489C369.867 324.968 363.03 329.357 356.746 333.614L353.762 330.962C359.609 326.935 365.943 322.792 372.787 318.564C382.085 312.821 390.16 307.01 397.185 301.235L402.751 301.235Z'
                        fill='url(#paintARTISAN39_linear)'
                      />
                    </g>
                  </g>
                  <g id='Group 179_2' filter='url(#filterARTISAN19_d)'>
                    <g id='Group 175_2'>
                      <g id='Group 128_2'>
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#5_2'
                          d='M146.028 207.78L184.928 234.569L187.036 243.962L146.028 207.78Z'
                          fill='url(#paintARTISAN40_linear)'
                        />
                        <g
                          id='#3&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                          filter='url(#filterARTISAN20_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M232.208 303.532C206.32 281.72 193.53 260.224 188.703 240.955L93.927 166.744C97.7884 218.301 130.887 317.078 232.208 303.532Z'
                            fill='url(#paintARTISAN41_linear)'
                          />
                        </g>
                        <path
                          id='#3&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                          d='M187.883 241.487L95.0229 168.776C97.279 194.35 106.552 230.528 127.27 259.005C148.227 287.812 180.891 308.748 230.01 302.875C205.209 281.547 192.722 260.498 187.883 241.487Z'
                          stroke='url(#paintARTISAN42_linear)'
                          strokeWidth='1.85237'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4_2'
                          d='M140.057 248.586L199.264 266.213L203.596 273.791L140.057 248.586Z'
                          fill='url(#paintARTISAN43_linear)'
                        />
                        <g
                          id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                          filter='url(#filterARTISAN21_d)'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M201.776 270.274C213.092 287.623 231.549 305.866 260.055 323.923C271.325 331.061 280.974 337.697 289.192 343.856C150.675 347.54 108.643 273.907 104.776 235.883L201.776 270.274Z'
                            fill='url(#paintARTISAN44_linear)'
                          />
                        </g>
                        <path
                          id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                          d='M288.524 343.185C280.452 337.166 271.019 330.695 260.051 323.747C231.669 305.77 213.249 287.607 201.92 270.326L104.777 235.883'
                          stroke='url(#paintARTISAN45_linear)'
                          strokeWidth='1.85237'
                        />
                        <path
                          id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3_2'
                          d='M196.935 317.383L230.176 301.372L236.591 306.51L196.935 317.383Z'
                          fill='url(#paintARTISAN46_linear)'
                        />
                        <path
                          id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M232.715 303.958C240.583 310.545 249.647 317.159 260.05 323.748C285.626 339.949 302.857 353.559 313.944 364.895C312.419 368.164 304.568 367.521 292.935 360.152C269.354 345.216 248.135 342.14 210.582 342.884C174.092 343.607 162.948 339.32 156.685 332.581C171.754 326.572 209.419 312.376 232.715 303.958Z'
                          fill='url(#paintARTISAN47_linear)'
                        />
                        <path
                          id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                          d='M259.554 324.53C249.3 318.035 240.336 311.512 232.53 305.01C209.853 313.212 174.037 326.704 158.326 332.925C164.492 338.788 175.931 342.644 210.564 341.958C248.184 341.212 269.622 344.289 293.43 359.37C299.19 363.018 303.949 364.958 307.4 365.602C309.128 365.925 310.471 365.911 311.429 365.671C312.038 365.518 312.463 365.282 312.75 365.001C301.714 353.844 284.691 340.453 259.554 324.53Z'
                          stroke='url(#paintARTISAN48_linear)'
                          strokeWidth='1.85237'
                        />
                      </g>
                    </g>
                    <g id='Group 179_3' filter='url(#filterARTISAN22_d)'>
                      <path
                        id='Vector 226_2'
                        d='M252.581 319.206C203.291 289.427 189.685 251.818 184.551 234.489C185.192 234.489 186.272 234.513 186.476 235.131C193.443 256.31 203.695 282.624 248.088 313.43C291.73 340.385 322.322 368.41 330.238 380.177L326.92 384.669C314.617 370.55 319.86 373.117 252.581 319.206Z'
                        fill='url(#paintARTISAN49_linear)'
                      />
                      <path
                        id='Vector 225_2'
                        d='M252.58 320.49C203.804 289.684 189.685 251.818 184.55 234.489C185.192 234.489 185.63 234.513 185.834 235.131C191.919 253.631 206.157 287.116 257.073 318.564C300.715 345.52 323.606 369.052 331.521 380.818L330.237 385.311C325.745 376.112 301.87 350.269 252.58 320.49Z'
                        fill='#C4C4C4'
                      />
                      <path
                        id='Vector 227 (Stroke)_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M257.41 318.018C206.65 286.666 192.493 253.32 186.444 234.93L185.224 235.332C191.346 253.942 205.665 287.566 256.736 319.11C300.336 346.04 323.143 369.514 330.989 381.177L332.054 380.46C324.068 368.59 301.094 344.999 257.41 318.018Z'
                        fill='url(#paintARTISAN50_linear)'
                      />
                      <path
                        id='Intersect_3'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M227.108 301.235C234.332 307.79 242.752 314.283 252.579 320.489C259.992 324.968 266.83 329.357 273.113 333.614L276.097 330.962C270.251 326.935 263.917 322.792 257.072 318.564C247.774 312.821 239.699 307.01 232.674 301.235L227.108 301.235Z'
                        fill='url(#paintARTISAN51_linear)'
                      />
                    </g>
                  </g>
                  <g id='Group 188'>
                    <g id='Vector 230' filter='url(#filterARTISAN23_f)'>
                      <path
                        d='M314.376 330.309L340.891 394.387H287.861L314.376 330.309Z'
                        fill='url(#paintARTISAN52_linear)'
                      />
                    </g>
                    <g id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;'>
                      <mask
                        id='maskARTISAN1'
                        maskUnits='userSpaceOnUse'
                        x='286'
                        y='354'
                        width='57'
                        height='52'
                      >
                        <path
                          id='Union_5'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M287.084 393.787C286.356 394.974 286.893 396.531 288.199 397.015L311.424 405.631C312.867 406.166 314.402 405.099 314.402 403.559L314.402 357.109C314.402 354.88 311.475 354.053 310.309 355.953L287.084 393.787ZM341.72 393.787C342.448 394.974 341.911 396.531 340.605 397.015L317.38 405.631C315.937 406.166 314.402 405.099 314.402 403.559L314.402 357.109C314.402 354.88 317.329 354.053 318.495 355.953L341.72 393.787Z'
                          fill='url(#paintARTISAN53_linear)'
                        />
                      </mask>
                      <g mask='url(#maskARTISAN1)'>
                        <g id='Group 113'>
                          <path
                            id='Vector 44'
                            d='M314.558 407.935L343.03 396.241L314.558 344.889L314.558 407.935Z'
                            fill='url(#paintARTISAN54_linear)'
                          />
                          <path
                            id='Vector 45'
                            d='M314.56 407.936L286.087 396.242L314.56 344.89L314.56 407.936Z'
                            fill='url(#paintARTISAN55_linear)'
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id='filterARTISAN0_f'
                  x='92.0585'
                  y='30.3665'
                  width='439.283'
                  height='439.283'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='7.65302' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN1_f'
                  x='297.159'
                  y='30.3665'
                  width='33.6733'
                  height='33.6733'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='1.5306' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN2_f'
                  x='291.649'
                  y='23.3258'
                  width='44.6936'
                  height='47.7548'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.459181' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN3_dd'
                  x='0.221664'
                  y='0.823539'
                  width='629.418'
                  height='548.418'
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
                    values='0 0 0 0 0.558594 0 0 0 0 0.710156 0 0 0 0 0.9375 0 0 0 1 0'
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
                    values='0 0 0 0 0.670833 0 0 0 0 0.8025 0 0 0 0 1 0 0 0 0.6 0'
                  />
                  <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN4_f'
                  x='258.584'
                  y='372.843'
                  width='113.242'
                  height='45.2966'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.20959' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN5_f'
                  x='266.318'
                  y='381.737'
                  width='103.935'
                  height='63.1218'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.41918' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN6_d'
                  x='258.584'
                  y='410.406'
                  width='112.69'
                  height='40.8769'
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
                  <feOffset dy='-4.41918' />
                  <feGaussianBlur stdDeviation='1.65719' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN7_f'
                  x='373.485'
                  y='325.337'
                  width='66.8401'
                  height='60.2114'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.20959' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN8_d'
                  x='372.931'
                  y='376.711'
                  width='67.3943'
                  height='43.6403'
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
                  <feOffset dy='-4.41918' />
                  <feGaussianBlur stdDeviation='2.20959' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN9_f'
                  x='369.066'
                  y='346.88'
                  width='65.7354'
                  height='78.4405'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.41918' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN10_f'
                  x='189.536'
                  y='325.337'
                  width='66.8401'
                  height='60.2114'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.20959' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN11_d'
                  x='189.535'
                  y='376.711'
                  width='67.3933'
                  height='43.6403'
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
                  <feOffset dy='-4.41918' />
                  <feGaussianBlur stdDeviation='2.20959' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN12_f'
                  x='195.06'
                  y='346.88'
                  width='65.7354'
                  height='78.4405'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.41918' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterARTISAN13_f'
                  x='196.383'
                  y='109.949'
                  width='235.653'
                  height='268.369'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.165719' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filter14_i'
                  x='207.211'
                  y='121.75'
                  width='215.435'
                  height='245.197'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='7.4288' />
                  <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
                </filter>
                <filter
                  id='filterARTISAN15_d'
                  x='292.671'
                  y='143.756'
                  width='250.267'
                  height='264.565'
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
                  <feOffset dy='5.13436' />
                  <feGaussianBlur stdDeviation='2.56718' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN16_d'
                  x='390.222'
                  y='138.802'
                  width='150.058'
                  height='193.088'
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
                  <feOffset dx='-2.47698' />
                  <feGaussianBlur stdDeviation='2.47698' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN17_d'
                  x='328.282'
                  y='186.706'
                  width='209.671'
                  height='201.304'
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
                  <feOffset dy='-2.56718' />
                  <feGaussianBlur stdDeviation='6.19244' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN18_d'
                  x='293.955'
                  y='233.206'
                  width='155.205'
                  height='158.523'
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
                  <feOffset dy='2.56718' />
                  <feGaussianBlur stdDeviation='1.92538' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN19_d'
                  x='86.9383'
                  y='143.756'
                  width='250.235'
                  height='264.535'
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
                  <feOffset dy='5.11953' />
                  <feGaussianBlur stdDeviation='2.55977' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN20_d'
                  x='84.6484'
                  y='138.817'
                  width='150.03'
                  height='193.06'
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
                  <feOffset dx='-2.46983' />
                  <feGaussianBlur stdDeviation='2.46983' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN21_d'
                  x='91.9438'
                  y='186.749'
                  width='209.597'
                  height='201.231'
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
                  <feOffset dy='-2.55977' />
                  <feGaussianBlur stdDeviation='6.17457' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN22_d'
                  x='180.71'
                  y='233.209'
                  width='155.183'
                  height='158.501'
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
                  <feOffset dy='2.55977' />
                  <feGaussianBlur stdDeviation='1.91983' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterARTISAN23_f'
                  x='283.441'
                  y='325.89'
                  width='61.8686'
                  height='72.9165'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.20959' result='effect1_foregroundBlur' />
                </filter>
                <linearGradient
                  id='paintARTISAN0_linear'
                  x1='313.367'
                  y1='12'
                  x2='313.367'
                  y2='191.458'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN1_linear'
                  x1='507.278'
                  y1='353.082'
                  x2='351.863'
                  y2='263.353'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN2_linear'
                  x1='312.234'
                  y1='466.589'
                  x2='312.234'
                  y2='287.131'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN3_linear'
                  x1='118.624'
                  y1='353.651'
                  x2='274.04'
                  y2='263.922'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN4_linear'
                  x1='507.278'
                  y1='125.791'
                  x2='351.863'
                  y2='215.52'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN5_linear'
                  x1='118.624'
                  y1='125.221'
                  x2='274.04'
                  y2='214.95'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#AACCFF' stopOpacity='0' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN6_linear'
                  x1='312.465'
                  y1='47.9685'
                  x2='312.465'
                  y2='375.518'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2DFFF' stopOpacity='0.89' />
                  <stop offset='0.28125' stopColor='#CCDDFF' stopOpacity='0.2' />
                  <stop offset='1' stopColor='#56D7E0' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN7_linear'
                  x1='312.465'
                  y1='47.9685'
                  x2='312.465'
                  y2='375.518'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#DEE7FF' />
                  <stop offset='0.0722622' stopColor='#CCDDFF' stopOpacity='0.33' />
                  <stop offset='1' stopColor='#98C6F0' stopOpacity='0' />
                </linearGradient>
                <radialGradient
                  id='paintARTISAN8_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(313.996 47.2031) rotate(90) scale(22.0407)'
                >
                  <stop stopColor='#E7ECFF' />
                  <stop offset='0.979167' stopColor='#ABC3FF' stopOpacity='0.8825' />
                  <stop offset='1' stopColor='#AACCFF' stopOpacity='0.88' />
                </radialGradient>
                <radialGradient
                  id='paintARTISAN9_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(285.653 392.729) rotate(50.3431) scale(54.5309 61.5554)'
                >
                  <stop offset='0.432002' stopColor='#0B8503' />
                  <stop offset='1' stopColor='#157D0E' />
                </radialGradient>
                <linearGradient
                  id='paintARTISAN10_linear'
                  x1='297.251'
                  y1='387.758'
                  x2='260.01'
                  y2='422.434'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.213533' stopColor='#0B6604' />
                  <stop offset='0.574194' stopColor='#24991B' />
                  <stop offset='0.9998' stopColor='#118B08' />
                  <stop offset='0.9999' stopColor='#108A07' />
                  <stop offset='1' stopColor='#0E8D04' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN11_linear'
                  x1='282.337'
                  y1='407.645'
                  x2='350.282'
                  y2='429.188'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#52BC4A' stopOpacity='0.1' />
                  <stop offset='0.421859' stopColor='#67D75E' />
                  <stop offset='1' stopColor='#52BB4A' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN12_linear'
                  x1='293.937'
                  y1='439.13'
                  x2='347.52'
                  y2='461.779'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#6F7384' />
                  <stop offset='1' stopColor='#C3C5CE' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN13_linear'
                  x1='296.699'
                  y1='425.321'
                  x2='277.365'
                  y2='439.131'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CCCDD7' />
                  <stop offset='0.309893' stopColor='#F3F3F4' />
                  <stop offset='0.523799' stopColor='#EAEAEC' />
                  <stop offset='0.613641' stopColor='#C1C2CE' />
                  <stop offset='1' stopColor='#ACADBF' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN14_linear'
                  x1='387.295'
                  y1='400.464'
                  x2='387.133'
                  y2='420.24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#BEBFCC' />
                  <stop offset='0.309893' stopColor='#DEDFE3' />
                  <stop offset='0.523799' stopColor='#EDEDEF' />
                  <stop offset='0.613641' stopColor='#BABBC9' />
                  <stop offset='1' stopColor='#B6B7C6' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN15_linear'
                  x1='395.04'
                  y1='408.198'
                  x2='428.107'
                  y2='415.914'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#6F7384' />
                  <stop offset='1' stopColor='#C3C5CE' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN16_linear'
                  x1='404.972'
                  y1='370.634'
                  x2='406.269'
                  y2='412.762'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#51BC49' stopOpacity='0.1' />
                  <stop offset='0.582284' stopColor='#62CF5A' stopOpacity='0.56' />
                  <stop offset='1' stopColor='#50BC48' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN17_linear'
                  x1='242.566'
                  y1='400.464'
                  x2='242.728'
                  y2='420.24'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#BEBFCC' />
                  <stop offset='0.309893' stopColor='#DEDFE3' />
                  <stop offset='0.523799' stopColor='#EDEDEF' />
                  <stop offset='0.613641' stopColor='#BABBC9' />
                  <stop offset='1' stopColor='#B6B7C6' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN18_linear'
                  x1='234.821'
                  y1='408.198'
                  x2='201.754'
                  y2='415.914'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#6F7384' />
                  <stop offset='1' stopColor='#C3C5CE' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN19_linear'
                  x1='224.89'
                  y1='370.634'
                  x2='223.593'
                  y2='412.762'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#4FBA48' stopOpacity='0.1' />
                  <stop offset='0.512785' stopColor='#5ECF56' stopOpacity='0.554984' />
                  <stop offset='0.582284' stopColor='#60CE58' stopOpacity='0.56' />
                  <stop offset='1' stopColor='#4FBD47' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN20_linear'
                  x1='256.374'
                  y1='122.606'
                  x2='380.664'
                  y2='369.528'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#C2C4CD' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN21_linear'
                  x1='255.269'
                  y1='143.045'
                  x2='362.434'
                  y2='340.803'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CDCFD6' />
                  <stop offset='1' stopColor='#EFEFF1' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN22_linear'
                  x1='266.869'
                  y1='135.864'
                  x2='382.321'
                  y2='343.565'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#DDDFE2' />
                  <stop offset='1' stopColor='white' />
                </linearGradient>
                <radialGradient
                  id='paintARTISAN23_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(314.928 244.349) rotate(90) scale(125.057 107.718)'
                >
                  <stop stopColor='#F5F7FF' />
                  <stop offset='1' stopColor='#B3B5C5' />
                </radialGradient>
                <linearGradient
                  id='paintARTISAN24_linear'
                  x1='314.93'
                  y1='114.338'
                  x2='314.93'
                  y2='374.346'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN25_linear'
                  x1='181.94'
                  y1='137.861'
                  x2='311.944'
                  y2='363.035'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN26_linear'
                  x1='438.233'
                  y1='137.862'
                  x2='308.229'
                  y2='363.035'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN27_linear'
                  x1='314.93'
                  y1='290.151'
                  x2='314.28'
                  y2='360.723'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='1' stopColor='#D0DBFF' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN28_linear'
                  x1='466.597'
                  y1='240.265'
                  x2='443.088'
                  y2='233.88'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#AAAEBC' />
                  <stop offset='0.583159' stopColor='#E0E1F1' />
                  <stop offset='0.986946' stopColor='#868C9D' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN29_linear'
                  x1='484.129'
                  y1='155.115'
                  x2='459.551'
                  y2='269.696'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN30_linear'
                  x1='485.655'
                  y1='155.459'
                  x2='441.218'
                  y2='306.792'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.21882' stopColor='#F8F8F9' stopOpacity='0.67' />
                  <stop offset='0.45675' stopColor='white' stopOpacity='0.46' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN31_linear'
                  x1='466.386'
                  y1='274.941'
                  x2='425.685'
                  y2='261.881'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#9196AA' />
                  <stop offset='0.583159' stopColor='#C9C9DC' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN32_linear'
                  x1='449.963'
                  y1='258.982'
                  x2='460.256'
                  y2='322.312'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN33_linear'
                  x1='517.299'
                  y1='241.726'
                  x2='450.561'
                  y2='314.919'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN34_linear'
                  x1='421.17'
                  y1='313.043'
                  x2='395.152'
                  y2='298.35'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#717995' />
                  <stop offset='0.583159' stopColor='#A4A5BB' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN35_linear'
                  x1='401.772'
                  y1='304.684'
                  x2='408.799'
                  y2='383.02'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN36_linear'
                  x1='416.143'
                  y1='307.876'
                  x2='385.408'
                  y2='391.098'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN37_linear'
                  x1='372.464'
                  y1='234.489'
                  x2='372.464'
                  y2='385.311'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C4C4C4' />
                  <stop offset='1' stopColor='#63687B' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN38_linear'
                  x1='385.622'
                  y1='305.087'
                  x2='362.518'
                  y2='333.967'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='0.445395' stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN39_linear'
                  x1='376.638'
                  y1='306.37'
                  x2='378.257'
                  y2='333.614'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0495744' stopColor='#C4C4C4' />
                  <stop offset='0.454268' stopColor='#EDEDED' />
                  <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN40_linear'
                  x1='163.262'
                  y1='240.265'
                  x2='186.772'
                  y2='233.88'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#AAAEBC' />
                  <stop offset='0.583159' stopColor='#E0E1F1' />
                  <stop offset='0.986946' stopColor='#868C9D' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN41_linear'
                  x1='145.733'
                  y1='155.117'
                  x2='170.311'
                  y2='269.698'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN42_linear'
                  x1='144.205'
                  y1='155.459'
                  x2='188.642'
                  y2='306.792'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.21882' stopColor='#F8F8F9' stopOpacity='0.67' />
                  <stop offset='0.45675' stopColor='white' stopOpacity='0.46' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN43_linear'
                  x1='163.474'
                  y1='274.941'
                  x2='204.175'
                  y2='261.881'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#9196AA' />
                  <stop offset='0.583159' stopColor='#C9C9DC' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN44_linear'
                  x1='179.897'
                  y1='258.982'
                  x2='169.604'
                  y2='322.311'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN45_linear'
                  x1='112.561'
                  y1='241.727'
                  x2='179.299'
                  y2='314.92'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN46_linear'
                  x1='208.69'
                  y1='313.043'
                  x2='234.708'
                  y2='298.35'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.209488' stopColor='#717995' />
                  <stop offset='0.583159' stopColor='#A4A5BB' />
                  <stop offset='0.986946' stopColor='#797D87' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN47_linear'
                  x1='228.088'
                  y1='304.684'
                  x2='221.061'
                  y2='383.02'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN48_linear'
                  x1='213.717'
                  y1='307.876'
                  x2='244.452'
                  y2='391.098'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN49_linear'
                  x1='257.394'
                  y1='234.489'
                  x2='257.394'
                  y2='385.311'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C4C4C4' />
                  <stop offset='1' stopColor='#63687B' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN50_linear'
                  x1='244.237'
                  y1='305.087'
                  x2='267.342'
                  y2='333.967'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='0.445395' stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN51_linear'
                  x1='253.222'
                  y1='306.37'
                  x2='251.603'
                  y2='333.614'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0495744' stopColor='#C4C4C4' />
                  <stop offset='0.454268' stopColor='#EDEDED' />
                  <stop offset='1' stopColor='#C4C4C4' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN52_linear'
                  x1='314.376'
                  y1='394.935'
                  x2='314.376'
                  y2='351.12'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#585B77' stopOpacity='0.75' />
                  <stop offset='1' stopColor='#525787' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN53_linear'
                  x1='317.155'
                  y1='368.715'
                  x2='301.103'
                  y2='394.665'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D5D7D9' />
                  <stop offset='1' stopColor='#E2E3E7' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN54_linear'
                  x1='307.196'
                  y1='414.824'
                  x2='349.233'
                  y2='396.525'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9A9CA5' />
                  <stop offset='0.259135' stopColor='#C4C6CF' />
                  <stop offset='0.878536' stopColor='#EDEFF8' />
                </linearGradient>
                <linearGradient
                  id='paintARTISAN55_linear'
                  x1='314.379'
                  y1='359.033'
                  x2='330.004'
                  y2='415.342'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='0.523539' stopColor='#F7F7F7' />
                  <stop offset='0.897249' stopColor='#DADBE0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ) : (
          <svg
            width={BadgesSize[size].badge.width}
            height={BadgesSize[size].badge.height}
            viewBox='0 0 416 333'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.5'>
              <path
                d='M160.755 261H256.755V308L208.755 332L160.755 308V261Z'
                fill='url(#paintARLOCKED0_linear)'
              />
              <path
                opacity='0.8'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M225.566 323.595L208.755 332L160.755 308V264H173.755C173.992 264.53 174.229 265.062 174.467 265.595C185.663 290.699 197.957 318.266 225.566 323.595Z'
                fill='url(#paintARLOCKED1_linear)'
              />
              <g opacity='0.8' filter='url(#filterARLOACKED0_f)'>
                <path
                  d='M209.255 298.5L256.255 274.5V265.5H161.755V274.5L209.255 298.5Z'
                  fill='url(#paintARLOCKED2_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED1_f)'>
                <path
                  d='M176.256 285.5C171.59 292.94 171.59 295.001 176.256 299.501C175.423 299.501 174.856 302.201 191.256 313.001C211.756 326.5 229.756 313.5 242.256 299.501C254.756 285.501 250.756 285.501 247.756 289.501C244.756 293.501 237.756 307.501 213.756 313.001C189.756 318.501 194.755 256 176.256 285.5Z'
                  fill='url(#paintARLOCKED3_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED2_d)'>
                <path
                  d='M208.756 329L160.756 306V309.5L208.756 332.5L256.756 309.5V306.5L208.756 329Z'
                  fill='url(#paintARLOCKED4_linear)'
                />
                <path
                  d='M208.756 326L160.756 303V307.5L208.756 329.5L256.756 307.5V303.5L208.756 326Z'
                  fill='url(#paintARLOCKED5_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M256.755 303.5L208.253 326.555L160.755 303.5V302.5L208.258 325.446L256.755 302.5V303.5Z'
                  fill='url(#paintARLOCKED6_linear)'
                />
              </g>
              <path
                d='M265.498 219H318.014V273.172L291.756 285.882L265.498 298V219Z'
                fill='url(#paintARLOCKED7_linear)'
              />
              <g opacity='0.8' filter='url(#filterARLOACKED3_f)'>
                <path
                  d='M318.255 241.5V222.5L265.755 248V269L318.255 241.5Z'
                  fill='url(#paintARLOCKED8_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED4_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M318.255 274L265.255 298.5V297.5L318.255 273V274Z'
                  fill='url(#paintARLOCKED9_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M318.255 278L265.255 302.5V298.5L318.255 274V278Z'
                  fill='url(#paintARLOCKED10_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M318.255 280L265.255 304.5V302.5L318.255 278V280Z'
                  fill='url(#paintARLOCKED11_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED5_f)'>
                <path
                  d='M265.755 282.5L309.255 246V251.5L265.755 301V282.5Z'
                  fill='url(#paintARLOCKED12_linear)'
                />
              </g>
              <path
                d='M152.013 219H99.4971V273.172L125.755 285.882L152.013 298V219Z'
                fill='url(#paintARLOCKED13_linear)'
              />
              <g opacity='0.8' filter='url(#filterARLOACKED6_f)'>
                <path
                  d='M99.2554 241.5V222.5L151.755 248V269L99.2554 241.5Z'
                  fill='url(#paintARLOCKED14_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED7_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M99.2554 278L152.255 302.5V298.5L99.2554 274V278Z'
                  fill='url(#paintARLOCKED15_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M99.2554 280L152.255 304.5V302.5L99.2554 278V280Z'
                  fill='url(#paintARLOCKED16_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M99.2554 274L152.255 298.5V297.5L99.2554 273V274Z'
                  fill='url(#paintARLOCKED17_linear)'
                />
              </g>
              <g filter='url(#filterARLOACKED8_f)'>
                <path
                  d='M151.755 282.5L108.255 246V251.5L151.755 301V282.5Z'
                  fill='url(#paintARLOCKED18_linear)'
                />
              </g>
              <path
                d='M208.255 0L83.2555 67.9987L83.2554 222.506L208.255 290.505L333.255 222.506L333.255 67.9987L208.255 0Z'
                fill='url(#paintARLOCKED19_linear)'
              />
              <path
                d='M208.106 22L102.255 79.5814L102.255 210.419L208.106 268L313.956 210.419L313.956 79.5814L208.106 22Z'
                fill='url(#paintARLOCKED20_linear)'
              />
              <g filter='url(#filterARLOACKED9_f)'>
                <path
                  d='M208.106 22L102.255 79.5814L102.255 210.419L208.106 268L313.956 210.419L313.956 79.5814L208.106 22Z'
                  fill='url(#paintARLOCKED21_linear)'
                />
              </g>
              <g opacity='0.5'>
                <mask
                  id='mask0ARLOCKED0'
                  maskUnits='userSpaceOnUse'
                  x='111'
                  y='32'
                  width='196'
                  height='227'
                >
                  <path
                    d='M208.755 32L111.255 84.9913L111.255 205.399L208.755 258.39L306.255 205.399L306.255 84.9913L208.755 32Z'
                    fill='url(#paintARLOCKED22_linear)'
                  />
                </mask>
                <g mask='url(#mask0ARLOCKED0)'>
                  <path
                    d='M208.755 32L111.255 84.9913L111.255 205.399L208.755 258.39L306.255 205.399L306.255 84.9913L208.755 32Z'
                    fill='url(#paintARLOCKED23_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M192.456 262.862L188.583 27.5172H228.928L225.055 262.862H192.456Z'
                    fill='url(#paintARLOCKED24_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M191.937 260.775L70.9108 58.8965L105.85 38.7241L220.169 244.475L191.937 260.775Z'
                    fill='url(#paintARLOCKED25_linear)'
                  />
                  <path
                    opacity='0.5'
                    d='M188.575 244.475L302.893 38.724L337.833 58.8964L216.806 260.774L188.575 244.475Z'
                    fill='url(#paintARLOCKED26_linear)'
                  />
                  <rect
                    x='111.255'
                    y='131.741'
                    width='195'
                    height='126.638'
                    fill='url(#paintARLOCKED27_linear)'
                  />
                  <g filter='url(#filter10_i)'>
                    <path
                      d='M208.755 32L111.255 84.9913L111.255 205.399L208.755 258.39L306.255 205.399L306.255 84.9913L208.755 32Z'
                      fill='url(#paintARLOCKED28_linear)'
                    />
                  </g>
                </g>
              </g>
              <g filter='url(#filterARLOACKED11_d)'>
                <path
                  d='M361.637 112.096L326.426 136.343L324.518 144.846L361.637 112.096Z'
                  fill='url(#paintARLOCKED29_linear)'
                />
                <g filter='url(#filterARLOACKED12_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M283.631 198.764C307.064 179.021 318.641 159.564 323.009 142.122L408.795 74.9504C405.3 121.617 375.341 211.024 283.631 198.764Z'
                    fill='url(#paintARLOCKED30_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M283.63 198.763C307.063 179.02 318.64 159.563 323.009 142.122L408.794 74.9502C405.299 121.617 375.34 211.024 283.63 198.763Z'
                  fill='url(#paintARLOCKED31_linear)'
                />
                <path
                  d='M367.041 149.03L313.449 164.985L309.529 171.845L367.041 149.03Z'
                  fill='url(#paintARLOCKED32_linear)'
                />
                <g filter='url(#filterARLOACKED13_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M311.176 168.662C300.933 184.365 284.227 200.877 258.426 217.22C248.224 223.682 239.49 229.688 232.051 235.264C357.43 238.598 395.475 171.95 398.975 137.532L311.176 168.662Z'
                    fill='url(#paintARLOCKED33_linear)'
                  />
                </g>
                <path
                  d='M315.557 211.302L285.469 196.81L279.663 201.46L315.557 211.302Z'
                  fill='url(#paintARLOCKED34_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M283.171 199.15C276.05 205.112 267.845 211.098 258.43 217.063C235.279 231.727 219.683 244.046 209.647 254.306C211.027 257.265 218.134 256.683 228.664 250.014C250.007 236.494 269.214 233.71 303.205 234.383C336.234 235.038 346.32 231.158 351.99 225.057C338.35 219.619 304.257 206.769 283.171 199.15Z'
                  fill='url(#paintARLOCKED35_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M283.171 199.15C276.05 205.112 267.845 211.098 258.43 217.063C235.279 231.727 219.683 244.046 209.647 254.306C211.027 257.265 218.134 256.683 228.664 250.014C250.007 236.494 269.214 233.71 303.205 234.383C336.234 235.038 346.32 231.158 351.99 225.057C338.35 219.619 304.257 206.769 283.171 199.15Z'
                  fill='url(#paintARLOCKED36_linear)'
                />
                <g filter='url(#filterARLOACKED14_d)'>
                  <path
                    d='M265.19 212.951C309.805 185.997 322.12 151.955 326.768 136.27C326.187 136.27 325.209 136.291 325.025 136.851C318.719 156.021 309.439 179.839 269.257 207.723C229.754 232.122 202.064 257.488 194.899 268.138L197.903 272.205C209.039 259.425 204.293 261.748 265.19 212.951Z'
                    fill='url(#paintARLOCKED37_linear)'
                  />
                  <path
                    d='M265.19 214.113C309.34 186.229 322.12 151.955 326.768 136.27C326.187 136.27 325.79 136.291 325.606 136.851C320.097 153.597 307.21 183.905 261.124 212.37C221.622 236.769 200.902 258.069 193.738 268.719L194.899 272.786C198.966 264.459 220.576 241.068 265.19 214.113Z'
                    fill='url(#paintARLOCKED38_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M260.819 211.876C306.764 183.498 319.578 153.315 325.054 136.67L326.157 137.033C320.616 153.878 307.656 184.313 261.429 212.865C221.965 237.24 201.321 258.488 194.219 269.044L193.255 268.395C200.484 257.651 221.278 236.298 260.819 211.876Z'
                    fill='url(#paintARLOCKED39_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M288.246 196.686C281.707 202.618 274.086 208.495 265.191 214.113C258.481 218.167 252.292 222.14 246.605 225.993L243.904 223.592C249.196 219.947 254.929 216.197 261.124 212.37C269.54 207.172 276.849 201.913 283.208 196.686H288.246Z'
                    fill='url(#paintARLOCKED40_linear)'
                  />
                </g>
              </g>
              <g filter='url(#filterARLOACKED15_d)'>
                <path
                  d='M55.8742 112.096L91.0842 136.343L92.9924 144.846L55.8742 112.096Z'
                  fill='url(#paintARLOCKED41_linear)'
                />
                <g filter='url(#filterARLOACKED16_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M133.88 198.763C110.447 179.02 98.8701 159.564 94.5013 142.122L8.71567 74.9503C12.2107 121.617 42.1696 211.024 133.88 198.763Z'
                    fill='url(#paintARLOCKED42_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M133.88 198.763C110.448 179.02 98.8707 159.563 94.502 142.122L8.71666 74.9501C12.2117 121.617 42.1705 211.024 133.88 198.763Z'
                  fill='url(#paintARLOCKED43_linear)'
                />
                <path
                  d='M50.4701 149.03L104.061 164.985L107.982 171.845L50.4701 149.03Z'
                  fill='url(#paintARLOCKED44_linear)'
                />
                <g filter='url(#filterARLOACKED17_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M106.334 168.662C116.577 184.365 133.283 200.877 159.085 217.22C169.286 223.682 178.021 229.688 185.459 235.264C60.08 238.598 22.0348 171.95 18.5349 137.532L106.334 168.662Z'
                    fill='url(#paintARLOCKED45_linear)'
                  />
                </g>
                <path
                  d='M101.954 211.302L132.042 196.809L137.848 201.46L101.954 211.302Z'
                  fill='url(#paintARLOCKED46_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M134.34 199.15C141.461 205.112 149.666 211.098 159.082 217.063C182.232 231.727 197.828 244.046 207.864 254.306C206.484 257.265 199.377 256.683 188.847 250.014C167.504 236.494 148.297 233.71 114.306 234.383C81.2772 235.038 71.1909 231.157 65.5213 225.057C79.1608 219.619 113.254 206.769 134.34 199.15Z'
                  fill='url(#paintARLOCKED47_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M134.34 199.15C141.461 205.112 149.666 211.098 159.082 217.063C182.232 231.727 197.828 244.046 207.864 254.306C206.484 257.265 199.377 256.683 188.847 250.014C167.504 236.494 148.297 233.71 114.306 234.383C81.2772 235.038 71.1909 231.157 65.5213 225.057C79.1608 219.619 113.254 206.769 134.34 199.15Z'
                  fill='url(#paintARLOCKED48_linear)'
                />
                <g filter='url(#filterARLOACKED18_d)'>
                  <path
                    d='M152.321 212.951C107.706 185.997 95.3908 151.955 90.7435 136.271C91.3244 136.271 92.3021 136.292 92.4863 136.851C98.7924 156.022 108.072 179.839 148.254 207.723C187.757 232.122 215.447 257.488 222.612 268.139L219.608 272.205C208.472 259.425 213.218 261.748 152.321 212.951Z'
                    fill='url(#paintARLOCKED49_linear)'
                  />
                  <path
                    d='M152.32 214.113C108.171 186.229 95.3905 151.955 90.7432 136.271C91.3241 136.271 91.7209 136.292 91.905 136.851C97.4135 153.597 110.301 183.906 156.387 212.371C195.889 236.769 216.608 258.069 223.773 268.719L222.611 272.786C218.545 264.459 196.935 241.068 152.32 214.113Z'
                    fill='url(#paintARLOCKED50_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M156.692 211.876C110.747 183.498 97.9327 153.315 92.4572 136.67L91.3536 137.033C96.8949 153.878 109.855 184.313 156.082 212.865C195.546 237.24 216.19 258.488 223.291 269.044L224.255 268.395C217.027 257.651 196.233 236.298 156.692 211.876Z'
                    fill='url(#paintARLOCKED51_linear)'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M129.265 196.685C135.803 202.618 143.425 208.495 152.32 214.113C159.029 218.167 165.218 222.14 170.906 225.993L173.607 223.592C168.315 219.947 162.582 216.197 156.386 212.37C147.97 207.172 140.661 201.913 134.303 196.685H129.265Z'
                    fill='url(#paintARLOCKED52_linear)'
                  />
                </g>
              </g>
              <g filter='url(#filterARLOACKED19_f)'>
                <path
                  d='M208.256 223L232.256 281H184.256L208.256 223Z'
                  fill='url(#paintARLOCKED53_linear)'
                />
              </g>
              <mask
                id='mask0ARLOCKED1'
                maskUnits='userSpaceOnUse'
                x='182'
                y='240'
                width='53'
                height='53'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M234.278 282.532L208.278 292.177L182.278 282.532L208.278 240.177L234.278 282.532Z'
                  fill='url(#paintARLOCKED54_linear)'
                />
              </mask>
              <g mask='url(#mask0ARLOCKED1)'>
                <path
                  d='M208.419 293.265L234.191 282.68L208.419 236.199L208.419 293.265Z'
                  fill='url(#paintARLOCKED55_linear)'
                />
                <path
                  d='M208.419 293.265L182.647 282.68L208.419 236.199L208.419 293.265Z'
                  fill='url(#paintARLOCKED56_linear)'
                />
              </g>
            </g>
            <defs>
              <filter
                id='filterARLOACKED0_f'
                x='157.755'
                y='261.5'
                width='102.5'
                height='41'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED1_f'
                x='164.756'
                y='269.55'
                width='94.076'
                height='57.1344'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED2_d'
                x='157.755'
                y='295.5'
                width='102'
                height='37'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='1.5' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED3_f'
                x='261.755'
                y='218.5'
                width='60.5'
                height='54.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED4_d'
                x='261.255'
                y='265'
                width='61'
                height='39.5'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='2' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED5_f'
                x='257.755'
                y='238'
                width='59.5'
                height='71'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED6_f'
                x='95.2554'
                y='218.5'
                width='60.5'
                height='54.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED7_d'
                x='95.2554'
                y='265'
                width='61'
                height='39.5'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='2' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED8_f'
                x='100.255'
                y='238'
                width='59.5'
                height='71'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterARLOACKED9_f'
                x='101.955'
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
                id='filter10_i'
                x='111.255'
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
              <filter
                id='filterARLOACKED11_d'
                x='188.608'
                y='54.1443'
                width='226.526'
                height='239.469'
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
                <feOffset dy='4.64733' />
                <feGaussianBlur stdDeviation='2.32367' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED12_d'
                x='276.905'
                y='49.6605'
                width='135.824'
                height='174.773'
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
                <feOffset dx='-2.24202' />
                <feGaussianBlur stdDeviation='2.24202' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED13_d'
                x='220.841'
                y='93.0194'
                width='189.781'
                height='182.208'
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
                <feOffset dy='-2.32367' />
                <feGaussianBlur stdDeviation='5.60506' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED14_d'
                x='189.77'
                y='135.108'
                width='140.483'
                height='143.486'
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
                <feOffset dy='2.32367' />
                <feGaussianBlur stdDeviation='1.74275' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED15_d'
                x='2.38989'
                y='54.1442'
                width='226.499'
                height='227.91'
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
                <feOffset dy='4.63392' />
                <feGaussianBlur stdDeviation='2.31696' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.214861 0 0 0 0 0.236708 0 0 0 0 0.433333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED16_d'
                x='0.317153'
                y='49.6733'
                width='135.798'
                height='174.747'
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
                <feOffset dx='-2.23555' />
                <feGaussianBlur stdDeviation='2.23555' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED17_d'
                x='6.91954'
                y='93.0585'
                width='189.717'
                height='182.143'
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
                <feOffset dy='-2.31696' />
                <feGaussianBlur stdDeviation='5.58888' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED18_d'
                x='87.2678'
                y='135.112'
                width='140.463'
                height='143.466'
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
                <feOffset dy='2.31696' />
                <feGaussianBlur stdDeviation='1.73772' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.302882 0 0 0 0 0.323427 0 0 0 0 0.508333 0 0 0 0.25 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterARLOACKED19_f'
                x='180.256'
                y='219'
                width='56'
                height='66'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <linearGradient
                id='paintARLOCKED0_linear'
                x1='208.755'
                y1='261'
                x2='208.755'
                y2='332'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED1_linear'
                x1='193.161'
                y1='264'
                x2='193.161'
                y2='332'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED2_linear'
                x1='209.005'
                y1='265.5'
                x2='209.005'
                y2='298.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED3_linear'
                x1='211.794'
                y1='277.55'
                x2='211.794'
                y2='318.684'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED4_linear'
                x1='208.756'
                y1='306'
                x2='208.756'
                y2='332.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED5_linear'
                x1='208.756'
                y1='303'
                x2='208.756'
                y2='329.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED6_linear'
                x1='208.755'
                y1='302.5'
                x2='208.755'
                y2='326.555'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED7_linear'
                x1='291.756'
                y1='219'
                x2='291.756'
                y2='298'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED8_linear'
                x1='292.005'
                y1='222.5'
                x2='292.005'
                y2='269'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED9_linear'
                x1='291.755'
                y1='273'
                x2='291.755'
                y2='298.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED10_linear'
                x1='291.755'
                y1='274'
                x2='291.755'
                y2='302.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED11_linear'
                x1='291.755'
                y1='278'
                x2='291.755'
                y2='304.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED12_linear'
                x1='287.505'
                y1='246'
                x2='287.505'
                y2='301'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED13_linear'
                x1='125.755'
                y1='219'
                x2='125.755'
                y2='298'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED14_linear'
                x1='125.505'
                y1='222.5'
                x2='125.505'
                y2='269'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED15_linear'
                x1='125.755'
                y1='274'
                x2='125.755'
                y2='302.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED16_linear'
                x1='125.755'
                y1='278'
                x2='125.755'
                y2='304.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED17_linear'
                x1='125.755'
                y1='273'
                x2='125.755'
                y2='298.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED18_linear'
                x1='130.005'
                y1='246'
                x2='130.005'
                y2='301'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED19_linear'
                x1='208.255'
                y1='0'
                x2='208.255'
                y2='290.505'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED20_linear'
                x1='208.106'
                y1='22'
                x2='208.106'
                y2='268'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED21_linear'
                x1='208.106'
                y1='22'
                x2='208.106'
                y2='268'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED22_linear'
                x1='208.755'
                y1='32'
                x2='208.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED23_linear'
                x1='208.755'
                y1='32'
                x2='208.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED24_linear'
                x1='208.755'
                y1='27.5172'
                x2='208.755'
                y2='262.862'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED25_linear'
                x1='88.3806'
                y1='48.8103'
                x2='206.053'
                y2='252.625'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED26_linear'
                x1='320.363'
                y1='48.8102'
                x2='202.691'
                y2='252.625'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED27_linear'
                x1='208.755'
                y1='131.741'
                x2='208.755'
                y2='258.379'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED28_linear'
                x1='208.755'
                y1='32'
                x2='208.755'
                y2='258.39'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED29_linear'
                x1='347.466'
                y1='108.915'
                x2='338.689'
                y2='148.026'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED30_linear'
                x1='363.287'
                y1='64.7373'
                x2='330.831'
                y2='209.356'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED31_linear'
                x1='363.286'
                y1='64.7371'
                x2='330.83'
                y2='209.356'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED32_linear'
                x1='342.101'
                y1='143.433'
                x2='334.468'
                y2='177.442'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED33_linear'
                x1='330.175'
                y1='122.092'
                x2='301.289'
                y2='250.803'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED34_linear'
                x1='299.073'
                y1='199.863'
                x2='297.419'
                y2='207.231'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED35_linear'
                x1='289.591'
                y1='200.591'
                x2='274.056'
                y2='269.813'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED36_linear'
                x1='289.591'
                y1='200.591'
                x2='274.056'
                y2='269.813'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED37_linear'
                x1='260.834'
                y1='136.27'
                x2='260.834'
                y2='272.205'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED38_linear'
                x1='260.253'
                y1='136.27'
                x2='260.253'
                y2='272.786'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED39_linear'
                x1='259.706'
                y1='136.67'
                x2='259.706'
                y2='269.044'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED40_linear'
                x1='266.075'
                y1='196.686'
                x2='266.075'
                y2='225.993'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED41_linear'
                x1='70.0446'
                y1='108.915'
                x2='78.8219'
                y2='148.026'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED42_linear'
                x1='54.2237'
                y1='64.7372'
                x2='86.6797'
                y2='209.356'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED43_linear'
                x1='54.2246'
                y1='64.737'
                x2='86.6806'
                y2='209.356'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED44_linear'
                x1='75.41'
                y1='143.433'
                x2='83.0425'
                y2='177.442'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED45_linear'
                x1='87.3351'
                y1='122.092'
                x2='116.221'
                y2='250.803'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED46_linear'
                x1='118.438'
                y1='199.862'
                x2='120.092'
                y2='207.231'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED47_linear'
                x1='127.92'
                y1='200.591'
                x2='143.455'
                y2='269.813'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED48_linear'
                x1='127.92'
                y1='200.591'
                x2='143.455'
                y2='269.813'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED49_linear'
                x1='156.678'
                y1='136.271'
                x2='156.678'
                y2='272.205'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED50_linear'
                x1='157.258'
                y1='136.271'
                x2='157.258'
                y2='272.786'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED51_linear'
                x1='157.804'
                y1='136.67'
                x2='157.804'
                y2='269.044'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED52_linear'
                x1='151.436'
                y1='196.685'
                x2='151.436'
                y2='225.993'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED53_linear'
                x1='208.256'
                y1='281'
                x2='208.256'
                y2='223'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED54_linear'
                x1='208.278'
                y1='292.177'
                x2='208.278'
                y2='240.177'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED55_linear'
                x1='221.305'
                y1='293.265'
                x2='221.305'
                y2='236.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintARLOCKED56_linear'
                x1='195.533'
                y1='293.265'
                x2='195.533'
                y2='236.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  )
}

const Master = ({
  animation = false,
  level = 0,
  lights = true,
  locked = false,
  mod = 'data',
  rank = 'master',
  shadow = true,
  size = 'sm',
  stars = 0
}: BadgesRankProps) => {
  const {
    rotation,
    wrapper,
    wrapperBadge,
    diamond,
    flex,
    starsFlex,
    starLeft,
    starTop,
    starRight
  } = useStyles({
    left: BadgesSize[size].stars.positions.left,
    top: BadgesSize[size].stars.positions.top,
    right: BadgesSize[size].stars.positions.right,
    diamondLeft: BadgesSize[size].diamond.position[rank].left,
    diamondTop: BadgesSize[size].diamond.position[rank].top
  })

  return (
    <div className={wrapper}>
      {stars > 0 && stars < 4 ? (
        <div className={starsFlex}>
          <div style={stars > 0 ? {} : { opacity: '0.5' }} className={starLeft}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 0)}
            />
          </div>
          <div style={stars > 1 ? {} : { opacity: '0.5' }} className={starTop}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 1)}
            />
          </div>
          <div style={stars > 2 ? {} : { opacity: '0.5' }} className={starRight}>
            <Start
              width={BadgesSize[size].stars.size.width}
              height={BadgesSize[size].stars.size.height}
              locked={!(stars > 2)}
            />
          </div>
        </div>
      ) : null}
      <div className={flex}>
        {!locked ? (
          <div className={wrapperBadge}>
            <div className={diamond}>
              {level < 0 ? null : (
                <Diamond
                  width={BadgesSize[size].diamond.width}
                  height={BadgesSize[size].diamond.height}
                  diamond={level}
                  mod={mod}
                />
              )}
            </div>
            <svg
              width={BadgesSize[size].badge.width}
              height={BadgesSize[size].badge.height}
              viewBox='0 0 625 611'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='Master'>
                {shadow && (
                  <g id='lights'>
                    <path
                      id='Vector 264'
                      d='M373.88 304.405L567.516 405.082L528.999 471.795L344.993 354.439L373.88 304.405Z'
                      fill='url(#paintMASTER0_linear)'
                    />
                    <path
                      id='Vector 265'
                      d='M341.708 358.311L351.337 576.343H274.304L283.933 358.311H341.708Z'
                      fill='url(#paintMASTER1_linear)'
                    />
                    <path
                      id='Vector 267'
                      d='M279.329 355.131L95.322 472.486L56.8053 405.773L250.441 305.097L279.329 355.131Z'
                      fill='url(#paintMASTER2_linear)'
                    />
                    <path
                      id='Vector 274'
                      d='M373.88 296.324L567.516 195.647L528.999 128.934L344.993 246.289L373.88 296.324Z'
                      fill='url(#paintMASTER3_linear)'
                    />
                    <path
                      id='Vector 275'
                      d='M279.329 245.597L95.322 128.242L56.8053 194.955L250.441 295.632L279.329 245.597Z'
                      fill='url(#paintMASTER4_linear)'
                    />
                  </g>
                )}
                <g id='body' filter={shadow ? 'url(#filterMASTER0_dd)' : ''}>
                  <g id='&#229;&#158;&#130;&#229;&#157;&#160;&#229;&#184;&#131;&#230;&#150;&#153;#2'>
                    <g id='Group 160'>
                      <path
                        id='Rectangle 61'
                        d='M377.124 385.681H435.712V446.117L406.418 460.296L377.124 473.815V385.681Z'
                        fill='#06882A'
                      />
                      <g id='Group 161' filter='url(#filterMASTER1_d)'>
                        <path
                          id='Vector 219 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.98 447.04L376.852 474.373V473.257L435.98 445.925V447.04Z'
                          fill='#F8EDC0'
                        />
                        <path
                          id='Vector 220 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.98 451.503L376.852 478.835V474.373L435.98 447.04V451.503Z'
                          fill='url(#paintMASTER5_linear)'
                        />
                        <path
                          id='Vector 221 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M435.98 453.734L376.852 481.067V478.836L435.98 451.503V453.734Z'
                          fill='url(#paintMASTER6_linear)'
                        />
                      </g>
                      <g id='Vector 223' filter='url(#filterMASTER2_f)'>
                        <path
                          d='M377.41 456.524L425.94 415.803V421.939L377.41 477.163V456.524Z'
                          fill='url(#paintMASTER7_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 210'>
                      <path
                        id='Union'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M432.078 401.301V438.218C430.415 438.606 428.698 439.59 427.301 440.92C425.844 442.307 424.691 444.115 424.324 446.103L388.745 462.767C386.891 463.461 385.532 463.547 384.541 463.298C383.535 463.045 382.836 462.43 382.342 461.595C381.668 460.457 381.397 458.943 381.317 457.512V429.192H380.202V455.409C380.171 456.033 380.159 456.77 380.202 457.55V468L389.178 463.796C389.228 463.777 389.279 463.758 389.329 463.738L389.325 463.727L425.336 446.861L425.379 446.563C425.635 444.765 426.671 443.06 428.07 441.728C429.471 440.394 431.186 439.482 432.728 439.225L433.194 439.147V401.301H432.078ZM385.022 464.51C384.76 464.484 384.509 464.44 384.269 464.38C382.924 464.042 381.999 463.206 381.382 462.163C381.36 462.127 381.338 462.089 381.317 462.052V466.246L385.022 464.51Z'
                        fill='url(#paintMASTER8_linear)'
                      />
                      <g id='Vector 222' opacity='0.8' filter='url(#filterMASTER3_f)'>
                        <path
                          d='M435.981 410.783V389.586L377.41 418.035V441.463L435.981 410.783Z'
                          fill='#0E6016'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='&#229;&#158;&#130;&#229;&#157;&#160;&#229;&#184;&#131;&#230;&#150;&#153;#1'>
                    <g id='Group 160_2'>
                      <path
                        id='Rectangle 61_2'
                        d='M250.52 385.681H191.932V446.117L221.226 460.296L250.52 473.815V385.681Z'
                        fill='#188806'
                      />
                      <g id='Group 161_2' filter='url(#filterMASTER4_d)'>
                        <path
                          id='Vector 219 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M191.663 447.04L250.791 474.373V473.257L191.663 445.924V447.04Z'
                          fill='#F8EDC0'
                        />
                        <path
                          id='Vector 220 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M191.663 451.503L250.791 478.835V474.373L191.663 447.04V451.503Z'
                          fill='url(#paintMASTER9_linear)'
                        />
                        <path
                          id='Vector 221 (Stroke)_2'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M191.663 453.734L250.791 481.067V478.836L191.663 451.503V453.734Z'
                          fill='url(#paintMASTER10_linear)'
                        />
                      </g>
                      <g id='Vector 223_2' filter='url(#filterMASTER5_f)'>
                        <path
                          d='M250.233 456.524L201.704 415.803V421.939L250.233 477.163V456.524Z'
                          fill='url(#paintMASTER11_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 210_2'>
                      <path
                        id='Union_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M195.567 401.301V438.218C197.23 438.606 198.947 439.59 200.344 440.92C201.801 442.307 202.954 444.115 203.321 446.103L238.895 462.765C240.752 463.461 242.113 463.547 243.106 463.298C244.111 463.045 244.811 462.43 245.304 461.595C245.974 460.463 246.246 458.959 246.328 457.534V429.192H247.443V455.383C247.475 456.019 247.488 456.774 247.443 457.573V468L238.462 463.793C238.414 463.775 238.365 463.757 238.317 463.738L238.321 463.728L202.309 446.861L202.266 446.563C202.009 444.765 200.974 443.06 199.575 441.728C198.174 440.394 196.459 439.482 194.917 439.225L194.451 439.147V401.301H195.567ZM242.623 464.51C242.886 464.484 243.137 464.44 243.377 464.38C244.722 464.042 245.648 463.206 246.265 462.163C246.286 462.127 246.307 462.091 246.328 462.054V466.246L242.623 464.51Z'
                        fill='url(#paintMASTER12_linear)'
                      />
                      <g id='Vector 222_2' opacity='0.8' filter='url(#filterMASTER6_f)'>
                        <path
                          d='M191.663 410.783V389.586L250.233 418.035V441.463L191.663 410.783Z'
                          fill='#0E601B'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='&#229;&#158;&#130;&#229;&#157;&#160;&#229;&#184;&#131;&#230;&#150;&#153;#2_2'>
                    <g id='Group 181'>
                      <g id='Group 180'>
                        <path
                          id='Rectangle 60'
                          d='M260.271 432.537H367.371V484.971L313.821 511.746L260.271 484.971V432.537Z'
                          fill='url(#paintMASTER13_radial)'
                        />
                        <path
                          id='Intersect'
                          opacity='0.8'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M332.578 502.368L313.822 511.746L260.272 484.971V435.883H274.777C275.042 436.475 275.306 437.068 275.571 437.662C288.062 465.669 301.777 496.423 332.578 502.368Z'
                          fill='url(#paintMASTER14_linear)'
                        />
                        <g id='Vector 218' opacity='0.8' filter='url(#filterMASTER7_f)'>
                          <path
                            d='M314.38 474.373L366.814 447.598V437.557H261.388V447.598L314.38 474.373Z'
                            fill='#14600E'
                          />
                        </g>
                        <g id='Vector 217' filter='url(#filterMASTER8_f)'>
                          <path
                            d='M277.565 459.869C272.36 468.169 272.359 470.468 277.566 475.488C276.636 475.488 276.003 478.501 294.3 490.549C317.17 505.61 337.251 491.107 351.196 475.488C365.142 459.87 360.679 459.87 357.332 464.332C353.986 468.795 346.176 484.413 319.401 490.549C292.626 496.685 298.204 426.958 277.565 459.869Z'
                            fill='url(#paintMASTER15_linear)'
                          />
                        </g>
                      </g>
                      <g id='Group 156' filter='url(#filterMASTER9_d)'>
                        <path
                          id='Vector 214'
                          d='M313.822 508.399L260.272 482.74V486.645L313.822 512.304L367.372 486.645V483.298L313.822 508.399Z'
                          fill='url(#paintMASTER16_linear)'
                        />
                        <path
                          id='Vector 213'
                          d='M313.822 505.053L260.272 479.394V484.414L313.822 508.958L367.372 484.414V479.951L313.822 505.053Z'
                          fill='url(#paintMASTER17_linear)'
                        />
                        <path
                          id='Vector 215 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M367.373 479.95L313.263 505.671L260.274 479.95V478.835L313.268 504.434L367.373 478.835V479.95Z'
                          fill='#F8EDC0'
                        />
                      </g>
                    </g>
                    <g id='Group 212'>
                      <path
                        id='Vector 253 (Stroke)'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M363.468 439.23V474.262L363.032 474.359C361.185 474.769 359.755 475.928 358.78 477.207C358.293 477.844 357.927 478.503 357.685 479.094C357.438 479.694 357.332 480.19 357.332 480.508V480.873L313.261 500.084L269.848 480.351L269.778 480.103C269.368 478.671 268.419 477.405 267.362 476.393C266.307 475.382 265.182 474.661 264.486 474.313L264.178 474.159V440.346H265.294V473.478C266.073 473.908 267.134 474.629 268.134 475.587C269.214 476.621 270.258 477.964 270.774 479.546L313.27 498.863L356.241 480.132C356.296 479.691 356.44 479.188 356.653 478.67C356.933 477.988 357.348 477.245 357.893 476.53C358.907 475.2 360.399 473.937 362.353 473.38V439.23H363.468Z'
                        fill='url(#paintMASTER18_linear)'
                      />
                      <g id='Group 209'>
                        <path
                          id='Vector 255 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M313.823 474.929V496.684H312.707V474.929H313.823Z'
                          fill='url(#paintMASTER19_linear)'
                        />
                        <path
                          id='Vector 256 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M309.922 489.951C307.702 492.512 304.996 493.082 303.134 492.772L303.317 491.671C304.801 491.919 307.116 491.484 309.079 489.22C311.05 486.947 312.708 482.777 312.708 475.487H313.824C313.824 482.924 312.135 487.399 309.922 489.951Z'
                          fill='url(#paintMASTER20_linear)'
                        />
                        <path
                          id='Vector 257 (Stroke)'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M316.61 489.951C318.831 492.512 321.536 493.082 323.399 492.772L323.216 491.671C321.731 491.919 319.416 491.484 317.453 489.22C315.482 486.947 313.824 482.777 313.824 475.487H312.709C312.709 482.924 314.398 487.399 316.61 489.951Z'
                          fill='url(#paintMASTER21_linear)'
                        />
                      </g>
                      <g id='Vector 218_2' opacity='0.8' filter='url(#filterMASTER10_f)'>
                        <path
                          d='M313.822 452.618L366.814 447.598V437.557H261.388V447.598L313.822 452.618Z'
                          fill='#14600E'
                        />
                      </g>
                    </g>
                  </g>
                  <g id='Group 170'>
                    <g id='Group 159'>
                      <path
                        id='Vector 156'
                        d='M162.613 304.895C163.424 305.502 168.371 316.939 170.743 322.582L172.145 329.168C167.622 326.049 158.144 318.906 156.417 315.292C154.689 311.679 154.755 303.061 155.004 299.203L162.613 304.895Z'
                        fill='url(#paintMASTER22_linear)'
                      />
                      <path
                        id='Vector 144'
                        d='M187.009 153.836C186.969 148.531 190.712 142.893 194.251 136.047C195.332 136.012 199.666 143.262 192.306 168.612L188.894 176.345C187.803 181.33 187.12 175.544 185.89 171.196C186.089 161.059 187.059 160.467 187.009 153.836Z'
                        fill='url(#paintMASTER23_linear)'
                      />
                      <path
                        id='Vector 142'
                        d='M213.264 141.303C214.952 140.457 222.127 136.858 232.896 136.211L232.896 136.212C231.884 137.564 228.975 141.453 218.593 147.928C216.989 148.31 209.218 148.826 205.289 147.733C204.411 148.342 205.387 147.015 205.667 146.17C208.338 142.365 211.575 142.15 213.264 141.303Z'
                        fill='url(#paintMASTER24_linear)'
                      />
                      <path
                        id='Vector 117 (Stroke)'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M168.42 227.957C179.124 181.988 204.325 143.353 223.682 121.03L224.528 121.663C205.463 143.648 182.268 183.382 171.71 228.724C161.163 274.02 164.248 325.57 199.569 372.98L196.859 374.998C160.807 326.606 157.705 273.972 168.42 227.957Z'
                        fill='url(#paintMASTER25_linear)'
                      />
                      <path
                        id='Vector 140'
                        d='M213.417 128.76L209.422 108.365L206.765 111.916C201.412 120.834 204.588 127.165 203.414 134.727C202.476 140.776 204.638 145.312 205.793 146L209.84 139.534L213.417 128.76Z'
                        fill='url(#paintMASTER26_linear)'
                      />
                      <path
                        id='Intersect_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M209.491 108.72C208.458 117.834 207.344 128.8 208.099 131.638C208.787 134.221 207.604 140.098 206.2 145.35L205.793 146C204.638 145.312 202.476 140.776 203.414 134.727C203.81 132.175 203.711 129.763 203.611 127.344C203.416 122.597 203.219 117.824 206.765 111.916L209.422 108.365L209.491 108.72Z'
                        fill='url(#paintMASTER27_linear)'
                      />
                      <g id='Group 142'>
                        <path
                          id='Vector 149'
                          d='M183.697 243.926C184.843 241.83 188.521 228.547 190.216 222.168L188.19 222.761C176.166 233.546 175.29 242.12 172.764 248.67C170.238 255.219 161.085 264.986 166.066 262.911C171.047 260.835 182.264 246.546 183.697 243.926Z'
                          fill='url(#paintMASTER28_linear)'
                        />
                        <path
                          id='Intersect_3'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M189.978 223.061C185.769 229.725 179.86 239.622 177.574 245.412C175.435 250.83 170.456 257.981 166.415 262.75C166.295 262.81 166.179 262.863 166.066 262.911C163.174 264.116 165.045 261.33 167.619 257.499C169.478 254.731 171.704 251.417 172.764 248.67C173.22 247.486 173.623 246.236 174.047 244.919C175.971 238.949 178.339 231.597 188.19 222.761L190.216 222.168C190.141 222.452 190.061 222.75 189.978 223.061Z'
                          fill='url(#paintMASTER29_linear)'
                        />
                      </g>
                      <path
                        id='Vector 148'
                        d='M175.065 195.535C174.08 191.212 170.531 183.265 168.88 179.832C166.605 184.987 167.876 187.52 165.899 194.744C164.318 200.524 169.649 210.296 172.512 214.459C173.773 209.953 176.05 199.859 175.065 195.535Z'
                        fill='url(#paintMASTER30_linear)'
                      />
                      <path
                        id='Intersect_4'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M174.963 195.102C175 195.25 175.035 195.395 175.067 195.535C176.052 199.859 173.775 209.953 172.513 214.459C171.499 212.984 170.176 210.806 168.959 208.35C170.225 203.264 172.814 198.408 174.963 195.102Z'
                        fill='url(#paintMASTER31_linear)'
                      />
                      <path
                        id='Vector 143'
                        d='M185.023 153.67C184.749 150.934 181.493 144.875 179.899 142.188C178.441 147.427 174.886 153.471 174.517 162.425C174.365 166.127 180.084 179.073 183.372 185.137L184.508 181.503C182.301 172.468 185.365 157.091 185.023 153.67Z'
                        fill='url(#paintMASTER32_linear)'
                      />
                      <path
                        id='Vector 146'
                        d='M199.078 180.007C204.615 176.554 208.073 167.748 209.11 163.777C199.446 169.997 196.318 168.185 188.476 178.668L185.78 185.091C187.906 184.835 193.541 183.46 199.078 180.007Z'
                        fill='url(#paintMASTER33_linear)'
                      />
                      <path
                        id='Vector 151'
                        d='M163.729 250.877C160.371 240.137 148.207 232.496 142.545 230.546C149.284 250.092 153.629 245.695 157.818 251.729C161.168 256.557 164.063 258.775 164.584 258.901L163.729 250.877Z'
                        fill='url(#paintMASTER34_linear)'
                      />
                      <path
                        id='Vector 150'
                        d='M159.732 228.371C158.581 226.243 149.016 214.376 144.377 208.708C146.632 222.263 149.093 232.016 152.604 236.488C155.413 240.066 161.252 251.485 163.821 256.747C164.073 255.705 164.585 253.046 164.616 250.749C164.655 247.877 161.171 231.03 159.732 228.371Z'
                        fill='url(#paintMASTER35_linear)'
                      />
                      <path
                        id='Vector 153'
                        d='M183.646 271.843C177.369 277.696 171.588 289.019 169.482 293.948L168.904 304.592C172.756 300.266 180.78 290.691 182.06 287.007C183.339 283.322 183.65 275.362 183.646 271.843Z'
                        fill='url(#paintMASTER36_linear)'
                      />
                      <path
                        id='Vector 154'
                        d='M159.821 267.732C159.379 265.503 155.096 260.417 153.01 258.153C151.916 261.73 150.229 270.683 152.231 277.878C154.233 285.072 160.85 291.621 163.907 293.997C164.512 293.306 165.383 291.461 164.029 289.604C162.337 287.284 160.374 270.519 159.821 267.732Z'
                        fill='url(#paintMASTER37_linear)'
                      />
                      <path
                        id='Intersect_5'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M163.443 293.626C158.071 283.452 154.514 267.742 152.935 258.403C152.96 258.317 152.985 258.234 153.01 258.153C155.096 260.417 159.379 265.503 159.821 267.732C159.959 268.429 160.185 269.999 160.474 271.999C161.338 277.999 162.76 287.864 164.029 289.604C165.383 291.461 164.512 293.306 163.907 293.997C163.761 293.883 163.605 293.759 163.443 293.626Z'
                        fill='url(#paintMASTER38_linear)'
                      />
                      <path
                        id='Vector 158'
                        d='M159.435 331C161.428 330.592 169.107 331.467 172.698 331.955L173.202 330.223C171.878 329.408 168.232 327.138 164.242 324.575C160.252 322.012 153.092 324.673 150.011 326.323C152.322 328.052 157.442 331.408 159.435 331Z'
                        fill='url(#paintMASTER39_linear)'
                      />
                      <g id='Group 139'>
                        <path
                          id='Vector 139'
                          d='M231.374 99.4692C233.196 97.0343 244.122 93.7099 249.357 92.352L244.515 104.817C243.25 106.508 239.665 110.524 235.445 113.064C231.225 115.603 225.332 120.354 223.673 122.454L222.659 121.695C223.704 113.247 229.097 102.513 231.374 99.4692Z'
                          fill='url(#paintMASTER40_linear)'
                        />
                        <path
                          id='Intersect_6'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M223.84 121.525C226.594 115.229 240.466 100.644 248.827 92.4909C249.009 92.4427 249.186 92.3964 249.356 92.3522L244.514 104.817C243.249 106.508 239.664 110.525 235.444 113.064C231.224 115.603 225.373 120.65 223.714 122.75L223.84 121.525Z'
                          fill='url(#paintMASTER41_linear)'
                        />
                      </g>
                      <g id='Group 150' filter='url(#filterMASTER11_d)'>
                        <path
                          id='Vector 141'
                          d='M215.818 132.402C216.561 131.692 223.59 125.031 235.953 123.467C235.308 125.973 231.269 132.252 228.164 135.837C225.06 139.422 212.974 143.373 206.331 145.084C210.407 139.518 215.076 133.113 215.818 132.402Z'
                          fill='url(#paintMASTER42_linear)'
                        />
                        <path
                          id='Intersect_7'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M235.796 123.971C235.861 123.79 235.913 123.621 235.953 123.467C223.59 125.03 216.56 131.692 215.818 132.402C215.136 133.055 211.146 138.507 207.342 143.702C207.003 144.166 206.665 144.628 206.331 145.084C206.831 144.955 207.363 144.814 207.919 144.66C216.646 139.284 228.848 129.697 235.796 123.971Z'
                          fill='url(#paintMASTER43_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_8'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M194.115 136.31C194.254 137.469 194.334 138.841 194.257 140.269C194.05 144.07 189.442 174.907 188.009 177.527C187.914 177.7 187.822 177.842 187.731 177.957C187.389 177.348 187.051 175.915 186.667 174.289C186.43 173.282 186.175 172.2 185.891 171.195C185.994 165.902 186.309 163.211 186.578 160.904C186.825 158.793 187.034 157.004 187.01 153.836C187.437 148.532 189.499 144.781 192.09 140.066C192.738 138.887 193.419 137.648 194.115 136.31Z'
                        fill='url(#paintMASTER44_linear)'
                      />
                      <path
                        id='Intersect_9'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M183.74 183.959C181.138 178.638 179.191 171.349 179.583 161.996C180.012 151.757 179.924 146.012 179.662 142.989C179.746 142.72 179.825 142.453 179.899 142.188C181.493 144.875 184.749 150.934 185.023 153.67C185.132 154.764 184.893 157.083 184.589 160.026C183.944 166.282 183.007 175.359 184.508 181.503L183.74 183.959Z'
                        fill='url(#paintMASTER45_linear)'
                      />
                      <path
                        id='Intersect_10'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M209.043 163.819C205.9 165.836 203.45 167.004 201.302 168.027C196.882 170.133 193.741 171.629 188.476 178.667L185.78 185.09C185.879 185.078 185.984 185.064 186.097 185.048C194.578 180.09 204.394 169.502 209.043 163.819Z'
                        fill='url(#paintMASTER46_linear)'
                      />
                      <g id='Group 155' filter='url(#filterMASTER12_d)'>
                        <path
                          id='Vector 145'
                          d='M181.99 191.221C182.835 191.502 182.812 191.234 185.243 191.808C194.081 193.898 205.625 186.562 210.358 179.741L201.699 179.329C188.522 179.176 183.167 186.827 181.99 191.221Z'
                          fill='url(#paintMASTER47_linear)'
                        />
                        <path
                          id='Intersect_11'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M210.142 180.046C210.215 179.944 210.287 179.843 210.358 179.741L201.699 179.329C188.522 179.176 183.167 186.827 181.99 191.221C182.022 191.232 182.052 191.241 182.081 191.25C187.881 186.841 202.401 182.163 210.142 180.046Z'
                          fill='url(#paintMASTER48_linear)'
                        />
                      </g>
                      <g id='Group 151' filter='url(#filterMASTER13_d)'>
                        <path
                          id='Vector 147'
                          d='M167.974 198.67C166.62 196.813 156.866 186.844 152.158 182.091C151.676 202.828 160.848 208.899 162.711 212.402C167.153 218.098 170.326 223.022 171.468 223.964L172.011 219.36C171.229 213.237 169.327 200.526 167.974 198.67Z'
                          fill='url(#paintMASTER49_linear)'
                        />
                        <path
                          id='Intersect_12'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M152.154 182.413C151.848 198.905 157.681 206.024 160.932 209.991C161.718 210.95 162.353 211.725 162.713 212.403C164.738 215 166.5 217.437 167.925 219.408C169.372 221.41 170.473 222.932 171.151 223.658C170.369 213.603 159.08 193.464 152.154 182.413Z'
                          fill='url(#paintMASTER50_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_13'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M164.498 252.689C160.219 242.211 150.516 221.505 144.435 208.774C149.093 214.468 158.587 226.251 159.734 228.369C161.173 231.028 164.657 247.876 164.618 250.748C164.61 251.381 164.565 252.042 164.498 252.689Z'
                        fill='url(#paintMASTER51_linear)'
                      />
                      <g id='Group 154' filter='url(#filterMASTER14_d)'>
                        <path
                          id='Vector 159'
                          d='M166.091 246.311C166.687 237.052 171.477 229.946 173.797 227.55L174.099 232.786C178.237 246.431 169.877 257.935 165.18 261.981C165.235 260.615 165.494 255.569 166.091 246.311Z'
                          fill='url(#paintMASTER52_linear)'
                        />
                        <path
                          id='Intersect_14'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M173.738 227.612C171.287 232.449 169.034 241.361 168.552 257.121C167.342 258.936 166.29 260.491 165.378 261.809C165.311 261.868 165.246 261.925 165.181 261.981C165.235 260.616 165.494 255.57 166.091 246.311C166.683 237.131 171.396 230.066 173.738 227.612Z'
                          fill='url(#paintMASTER53_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_15'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M164.362 258.798C161.345 249.67 149.321 236.955 142.619 230.75C147.169 243.866 150.626 246.068 153.683 248.016C155.127 248.935 156.482 249.798 157.82 251.727C160.838 256.074 163.485 258.306 164.362 258.798Z'
                        fill='url(#paintMASTER54_linear)'
                      />
                      <path
                        id='Vector 202'
                        d='M223.673 121.398C217.627 127.952 201.768 147.999 189.735 171.698C181.098 188.708 177.159 194.992 168.686 227.684C166.682 235.415 162.789 255.236 163.25 272.67C162.573 283.68 164.413 312.783 177.186 341.115C180.828 349.29 189.905 367.403 197.076 374.456'
                        stroke='#FADA81'
                        strokeWidth='0.844684'
                      />
                      <g id='Group 152' filter='url(#filterMASTER15_d)'>
                        <path
                          id='Vector 152'
                          d='M167.517 275.072C169.791 269.652 169.969 265.566 170.672 264.509C174.782 275.232 175.681 285.663 175.979 287.732C176.218 289.387 170.601 299.268 167.763 304.002L164.404 284.874C165.705 278.199 164.822 281.495 167.517 275.072Z'
                          fill='url(#paintMASTER55_linear)'
                        />
                        <path
                          id='Intersect_16'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M171.095 265.644C170.958 265.266 170.817 264.888 170.672 264.509C170.393 264.929 170.197 265.825 169.919 267.093C169.498 269.02 168.889 271.803 167.517 275.072C166.156 278.316 165.707 279.081 165.429 279.903C165.157 280.709 165.048 281.57 164.404 284.874L167.684 303.551C171.252 295.209 171.501 276.222 171.095 265.644Z'
                          fill='url(#paintMASTER56_linear)'
                        />
                      </g>
                      <g id='Group 153' filter='url(#filterMASTER16_d)'>
                        <path
                          id='Vector 155'
                          d='M152.192 277.582C149.281 273.295 142.245 271.02 139.091 270.418C138.079 271.771 142.85 281.845 145.361 286.713C146.404 287.317 149.394 289.149 153.012 291.645C156.63 294.141 162.095 294.309 164.376 294.081C161.528 290.368 155.103 281.87 152.192 277.582Z'
                          fill='url(#paintMASTER57_linear)'
                        />
                        <path
                          id='Intersect_17'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M162.795 294.155C163.412 294.153 163.949 294.124 164.376 294.081C161.528 290.368 155.103 281.87 152.192 277.582C149.281 273.295 142.245 271.02 139.091 270.418C139.063 270.455 139.04 270.499 139.021 270.549C141.434 275.247 148.093 283.497 162.795 294.155Z'
                          fill='url(#paintMASTER58_linear)'
                        />
                      </g>
                      <g id='Group 143' filter='url(#filterMASTER17_d)'>
                        <path
                          id='Vector 157'
                          d='M167.992 318.151C164.036 315.824 152.178 315.2 146.744 315.178C153.81 325.475 154.947 322.897 160.484 326.776C164.914 329.879 169.904 327.581 171.845 326.044C172.209 324.382 171.948 320.477 167.992 318.151Z'
                          fill='url(#paintMASTER59_linear)'
                        />
                        <path
                          id='Intersect_18'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M171.923 325.56C160.79 318.632 151.659 315.966 146.8 315.26C151.675 322.347 153.715 323.277 156.359 324.483C157.521 325.012 158.799 325.595 160.484 326.775C160.855 327.035 161.229 327.257 161.606 327.444C162.505 327.722 163.39 327.99 164.255 328.246C167.467 328.652 170.446 327.15 171.844 326.043C171.876 325.898 171.903 325.736 171.923 325.56Z'
                          fill='url(#paintMASTER60_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 162'>
                      <path
                        id='Vector 156_2'
                        d='M463.905 304.895C463.093 305.502 458.147 316.939 455.775 322.581L454.373 329.168C458.896 326.048 468.373 318.905 470.101 315.292C471.828 311.679 471.763 303.06 471.514 299.203L463.905 304.895Z'
                        fill='url(#paintMASTER61_linear)'
                      />
                      <path
                        id='Vector 144_2'
                        d='M439.509 153.836C439.549 148.531 435.806 142.893 432.267 136.047C431.185 136.012 426.852 143.262 434.212 168.611L437.624 176.345C438.715 181.329 439.398 175.544 440.628 171.196C440.429 161.059 439.459 160.467 439.509 153.836Z'
                        fill='url(#paintMASTER62_linear)'
                      />
                      <path
                        id='Vector 142_2'
                        d='M413.254 141.303C411.566 140.457 404.39 136.858 393.621 136.211L393.622 136.211C394.634 137.564 397.543 141.453 407.925 147.928C409.529 148.31 417.3 148.826 421.229 147.733C422.106 148.342 421.131 147.014 420.85 146.169C418.18 142.365 414.943 142.15 413.254 141.303Z'
                        fill='url(#paintMASTER63_linear)'
                      />
                      <path
                        id='Vector 117 (Stroke)_2'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M458.098 227.958C447.394 181.989 422.193 143.354 402.836 121.031L401.99 121.664C421.055 143.649 444.25 183.383 454.808 228.725C465.355 274.021 462.27 325.571 426.949 372.981L429.658 374.999C465.711 326.607 468.813 273.973 458.098 227.958Z'
                        fill='url(#paintMASTER64_linear)'
                      />
                      <path
                        id='Vector 140_2'
                        d='M413.101 128.76L417.096 108.365L419.752 111.916C425.105 120.834 421.93 127.165 423.103 134.727C424.042 140.776 421.88 145.312 420.725 146L416.678 139.534L413.101 128.76Z'
                        fill='url(#paintMASTER65_linear)'
                      />
                      <path
                        id='Intersect_19'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M417.026 108.72C418.06 117.834 419.174 128.8 418.418 131.638C417.731 134.221 418.914 140.098 420.318 145.35L420.725 146.001C421.88 145.312 424.042 140.776 423.103 134.727C422.707 132.175 422.807 129.763 422.906 127.344C423.102 122.597 423.299 117.824 419.752 111.916L417.096 108.365L417.026 108.72Z'
                        fill='url(#paintMASTER66_linear)'
                      />
                      <g id='Group 142_2'>
                        <path
                          id='Vector 149_2'
                          d='M442.82 243.926C441.674 241.83 437.996 228.547 436.3 222.168L438.327 222.761C450.35 233.546 451.227 242.12 453.753 248.67C456.279 255.219 465.432 264.986 460.451 262.911C455.47 260.835 444.253 246.546 442.82 243.926Z'
                          fill='url(#paintMASTER67_linear)'
                        />
                        <path
                          id='Intersect_20'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M436.54 223.065C440.748 229.729 446.655 239.623 448.941 245.412C451.08 250.829 456.058 257.98 460.099 262.749C460.219 262.809 460.337 262.863 460.451 262.911C463.342 264.116 461.471 261.33 458.898 257.499C457.039 254.731 454.813 251.417 453.753 248.67C453.296 247.486 452.894 246.236 452.469 244.919C450.546 238.949 448.177 231.597 438.327 222.761L436.3 222.168C436.376 222.453 436.456 222.753 436.54 223.065Z'
                          fill='url(#paintMASTER68_linear)'
                        />
                      </g>
                      <path
                        id='Vector 148_2'
                        d='M451.451 195.536C452.437 191.213 455.985 183.266 457.637 179.833C459.911 184.988 458.641 187.521 460.617 194.745C462.198 200.525 456.868 210.297 454.005 214.46C452.743 209.954 450.466 199.86 451.451 195.536Z'
                        fill='url(#paintMASTER69_linear)'
                      />
                      <path
                        id='Intersect_21'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M451.555 195.103C451.518 195.251 451.483 195.396 451.451 195.536C450.466 199.86 452.743 209.954 454.005 214.461C455.019 212.986 456.342 210.807 457.559 208.351C456.293 203.265 453.704 198.409 451.555 195.103Z'
                        fill='url(#paintMASTER70_linear)'
                      />
                      <path
                        id='Vector 143_2'
                        d='M441.494 153.67C441.767 150.933 445.024 144.875 446.618 142.188C448.076 147.427 451.63 153.471 451.999 162.425C452.152 166.127 446.432 179.073 443.145 185.136L442.009 181.503C444.216 172.467 441.152 157.09 441.494 153.67Z'
                        fill='url(#paintMASTER71_linear)'
                      />
                      <path
                        id='Vector 146_2'
                        d='M427.441 180.007C421.904 176.554 418.446 167.748 417.409 163.777C427.073 169.997 430.201 168.185 438.044 178.668L440.739 185.091C438.613 184.835 432.978 183.46 427.441 180.007Z'
                        fill='url(#paintMASTER72_linear)'
                      />
                      <path
                        id='Vector 151_2'
                        d='M462.787 250.877C466.145 240.137 478.31 232.496 483.971 230.546C477.232 250.092 472.888 245.695 468.699 251.729C465.348 256.556 462.454 258.774 461.933 258.901L462.787 250.877Z'
                        fill='url(#paintMASTER73_linear)'
                      />
                      <path
                        id='Vector 150_2'
                        d='M466.786 228.371C467.937 226.243 477.502 214.376 482.141 208.708C479.886 222.263 477.424 232.016 473.914 236.488C471.105 240.066 465.265 251.485 462.697 256.747C462.445 255.705 461.933 253.046 461.902 250.749C461.863 247.877 465.347 231.03 466.786 228.371Z'
                        fill='url(#paintMASTER74_linear)'
                      />
                      <path
                        id='Vector 153_2'
                        d='M442.871 271.843C449.148 277.696 454.929 289.018 457.034 293.948L457.613 304.592C453.761 300.265 445.737 290.691 444.457 287.007C443.178 283.322 442.866 275.362 442.871 271.843Z'
                        fill='url(#paintMASTER75_linear)'
                      />
                      <path
                        id='Vector 154_2'
                        d='M466.697 267.733C467.139 265.504 471.422 260.419 473.508 258.155C474.602 261.732 476.289 270.685 474.287 277.879C472.284 285.073 465.668 291.623 462.61 293.998C462.006 293.308 461.135 291.462 462.489 289.606C464.181 287.285 466.144 270.52 466.697 267.733Z'
                        fill='url(#paintMASTER76_linear)'
                      />
                      <path
                        id='Intersect_22'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M463.075 293.627C468.447 283.453 472.004 267.743 473.583 258.404C473.558 258.318 473.533 258.235 473.508 258.155C471.422 260.419 467.139 265.504 466.697 267.733C466.559 268.43 466.332 270 466.044 272C465.18 278 463.758 287.865 462.489 289.606C461.135 291.462 462.006 293.308 462.61 293.998C462.757 293.884 462.913 293.76 463.075 293.627Z'
                        fill='url(#paintMASTER77_linear)'
                      />
                      <path
                        id='Vector 158_2'
                        d='M467.083 331C465.09 330.592 457.411 331.467 453.82 331.955L453.316 330.223C454.64 329.408 458.286 327.138 462.276 324.575C466.266 322.012 473.426 324.673 476.507 326.323C474.196 328.052 469.076 331.408 467.083 331Z'
                        fill='url(#paintMASTER78_linear)'
                      />
                      <g id='Group 139_2'>
                        <path
                          id='Vector 139_2'
                          d='M395.142 99.4692C393.321 97.0343 382.395 93.7099 377.159 92.3521L382.001 104.817C383.266 106.508 386.851 110.525 391.071 113.064C395.292 115.603 401.185 120.354 402.843 122.454L403.858 121.695C402.812 113.247 397.419 102.513 395.142 99.4692Z'
                          fill='url(#paintMASTER79_linear)'
                        />
                        <path
                          id='Intersect_23'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M402.677 121.525C399.923 115.229 386.05 100.644 377.689 92.4909C377.507 92.4427 377.331 92.3964 377.16 92.3522L382.002 104.817C383.267 106.508 386.852 110.525 391.072 113.064C395.293 115.603 401.143 120.65 402.802 122.75L402.677 121.525Z'
                          fill='url(#paintMASTER80_linear)'
                        />
                      </g>
                      <g id='Group 150_2' filter='url(#filterMASTER18_d)'>
                        <path
                          id='Vector 141_2'
                          d='M410.7 132.402C409.957 131.692 402.928 125.03 390.565 123.467C391.209 125.973 395.249 132.252 398.353 135.837C401.457 139.422 413.544 143.373 420.187 145.084C416.111 139.518 411.442 133.113 410.7 132.402Z'
                          fill='url(#paintMASTER81_linear)'
                        />
                        <path
                          id='Intersect_24'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M390.722 123.971C390.657 123.79 390.605 123.621 390.565 123.466C402.928 125.03 409.957 131.692 410.7 132.402C411.381 133.054 415.372 138.506 419.175 143.702C419.515 144.166 419.853 144.628 420.187 145.084C419.687 144.955 419.155 144.814 418.599 144.66C409.872 139.284 397.67 129.697 390.722 123.971Z'
                          fill='url(#paintMASTER82_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_25'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M432.404 136.313C432.266 137.471 432.186 138.843 432.263 140.271C432.47 144.072 437.078 174.909 438.511 177.529C438.605 177.701 438.697 177.843 438.788 177.957C439.13 177.348 439.468 175.915 439.851 174.29C440.089 173.282 440.344 172.2 440.628 171.196C440.524 165.902 440.21 163.212 439.94 160.905C439.694 158.794 439.485 157.004 439.509 153.836C439.082 148.533 437.02 144.781 434.429 140.067C433.781 138.888 433.101 137.65 432.404 136.313Z'
                        fill='url(#paintMASTER83_linear)'
                      />
                      <path
                        id='Intersect_26'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M442.776 183.957C445.378 178.636 447.324 171.347 446.932 161.996C446.503 151.751 446.591 146.006 446.853 142.984C446.77 142.717 446.691 142.452 446.618 142.188C445.024 144.875 441.767 150.933 441.494 153.67C441.384 154.764 441.624 157.083 441.927 160.026C442.573 166.281 443.51 175.358 442.009 181.503L442.776 183.957Z'
                        fill='url(#paintMASTER84_linear)'
                      />
                      <path
                        id='Intersect_27'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M417.48 163.822C420.623 165.839 423.072 167.006 425.22 168.029C429.64 170.135 432.78 171.631 438.046 178.669L440.741 185.092C440.644 185.081 440.54 185.067 440.429 185.05C431.948 180.095 422.132 169.507 417.48 163.822Z'
                        fill='url(#paintMASTER85_linear)'
                      />
                      <g id='Group 155_2' filter='url(#filterMASTER19_d)'>
                        <path
                          id='Vector 145_2'
                          d='M444.533 191.219C443.688 191.5 443.711 191.232 441.28 191.807C432.442 193.896 420.897 186.56 416.165 179.739L424.824 179.328C438.001 179.175 443.355 186.826 444.533 191.219Z'
                          fill='url(#paintMASTER86_linear)'
                        />
                        <path
                          id='Intersect_28'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M416.38 180.043C416.307 179.942 416.235 179.841 416.165 179.74L424.824 179.328C438.001 179.175 443.355 186.826 444.533 191.219C444.501 191.23 444.471 191.24 444.442 191.249C438.643 186.839 424.122 182.16 416.38 180.043Z'
                          fill='url(#paintMASTER87_linear)'
                        />
                      </g>
                      <g id='Group 151_2' filter='url(#filterMASTER20_d)'>
                        <path
                          id='Vector 147_2'
                          d='M458.545 198.67C459.899 196.813 469.653 186.844 474.361 182.091C474.843 202.828 465.67 208.899 463.808 212.402C459.366 218.099 456.193 223.022 455.051 223.964L454.508 219.36C455.29 213.237 457.191 200.526 458.545 198.67Z'
                          fill='url(#paintMASTER88_linear)'
                        />
                        <path
                          id='Intersect_29'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M474.366 182.416C474.671 198.905 468.838 206.022 465.588 209.989C464.802 210.948 464.167 211.723 463.806 212.401C461.781 214.998 460.02 217.434 458.594 219.406C457.149 221.406 456.049 222.928 455.37 223.654C456.155 213.599 467.44 193.465 474.366 182.416Z'
                          fill='url(#paintMASTER89_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_30'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M462.023 252.69C466.302 242.213 476.005 221.507 482.087 208.776C477.428 214.47 467.934 226.252 466.787 228.371C465.348 231.03 461.865 247.877 461.903 250.749C461.912 251.383 461.957 252.043 462.023 252.69Z'
                        fill='url(#paintMASTER90_linear)'
                      />
                      <g id='Group 154_2' filter='url(#filterMASTER21_d)'>
                        <path
                          id='Vector 159_2'
                          d='M460.429 246.311C459.832 237.052 455.043 229.946 452.723 227.55L452.421 232.786C448.282 246.431 456.642 257.935 461.339 261.981C461.284 260.615 461.026 255.569 460.429 246.311Z'
                          fill='url(#paintMASTER91_linear)'
                        />
                        <path
                          id='Intersect_31'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M452.78 227.612C455.231 232.449 457.484 241.361 457.966 257.121C459.176 258.936 460.228 260.491 461.141 261.809C461.207 261.868 461.272 261.925 461.337 261.981C461.283 260.616 461.024 255.57 460.427 246.311C459.835 237.131 455.122 230.066 452.78 227.612Z'
                          fill='url(#paintMASTER92_linear)'
                        />
                      </g>
                      <path
                        id='Intersect_32'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M462.157 258.799C465.175 249.67 477.198 236.955 483.9 230.75C479.35 243.866 475.893 246.069 472.836 248.016C471.392 248.936 470.038 249.799 468.699 251.728C465.681 256.075 463.034 258.306 462.157 258.799Z'
                        fill='url(#paintMASTER93_linear)'
                      />
                      <path
                        id='Vector 202_2'
                        d='M402.845 121.398C408.891 127.952 424.749 147.999 436.783 171.698C445.42 188.708 449.359 194.992 457.832 227.684C459.836 235.415 463.728 255.236 463.268 272.67C463.944 283.68 462.104 312.783 449.332 341.115C445.69 349.29 436.613 367.403 429.442 374.456'
                        stroke='#FADA81'
                        strokeWidth='0.844684'
                      />
                      <g id='Group 152_2' filter='url(#filterMASTER22_d)'>
                        <path
                          id='Vector 152_2'
                          d='M459.001 275.072C456.727 269.653 456.549 265.566 455.847 264.51C451.737 275.232 450.837 285.663 450.539 287.732C450.301 289.387 455.917 299.268 458.755 304.002L462.115 284.874C460.814 278.2 461.697 281.495 459.001 275.072Z'
                          fill='url(#paintMASTER94_linear)'
                        />
                        <path
                          id='Intersect_33'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M455.422 265.647C455.56 265.269 455.701 264.889 455.847 264.51C456.126 264.929 456.322 265.826 456.599 267.094C457.021 269.02 457.63 271.804 459.001 275.072C460.363 278.316 460.811 279.081 461.089 279.903C461.362 280.709 461.471 281.571 462.115 284.874L458.834 303.552C455.266 295.213 455.017 276.227 455.422 265.647Z'
                          fill='url(#paintMASTER95_linear)'
                        />
                      </g>
                      <g id='Group 153_2' filter='url(#filterMASTER23_d)'>
                        <path
                          id='Vector 155_2'
                          d='M474.327 277.582C477.238 273.295 484.274 271.02 487.428 270.418C488.44 271.771 483.67 281.845 481.158 286.713C480.115 287.317 477.126 289.149 473.507 291.645C469.889 294.141 464.424 294.309 462.144 294.081C464.992 290.368 471.416 281.87 474.327 277.582Z'
                          fill='url(#paintMASTER96_linear)'
                        />
                        <path
                          id='Intersect_34'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M463.724 294.155C463.108 294.152 462.57 294.124 462.144 294.081C464.992 290.368 471.416 281.87 474.327 277.582C477.238 273.295 484.274 271.02 487.428 270.418C487.456 270.455 487.479 270.499 487.499 270.549C485.085 275.247 478.426 283.497 463.724 294.155Z'
                          fill='url(#paintMASTER97_linear)'
                        />
                      </g>
                      <g id='Group 143_2' filter='url(#filterMASTER24_d)'>
                        <path
                          id='Vector 157_2'
                          d='M458.525 318.151C462.481 315.824 474.338 315.2 479.772 315.178C472.707 325.475 471.57 322.897 466.032 326.776C461.602 329.879 456.613 327.581 454.672 326.044C454.308 324.382 454.569 320.477 458.525 318.151Z'
                          fill='url(#paintMASTER98_linear)'
                        />
                        <path
                          id='Intersect_35'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M454.595 325.559C465.728 318.632 474.859 315.966 479.717 315.259C474.843 322.347 472.802 323.277 470.158 324.483C468.997 325.012 467.719 325.594 466.034 326.775C465.663 327.035 465.288 327.257 464.912 327.444C464.013 327.722 463.127 327.99 462.263 328.246C459.05 328.652 456.071 327.15 454.674 326.043C454.642 325.898 454.615 325.736 454.595 325.559Z'
                          fill='url(#paintMASTER99_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 109'>
                      <path
                        id='Union_3'
                        d='M303.643 147.405L183.156 212.948C177.053 216.269 173.253 222.66 173.253 229.608L173.253 379.434C173.253 386.382 177.052 392.774 183.156 396.094L303.643 461.638C309.294 464.712 316.118 464.712 321.769 461.638L442.256 396.094C448.359 392.774 452.159 386.382 452.159 379.434L452.159 229.608C452.159 222.66 448.359 216.269 442.256 212.948L321.769 147.405C316.118 144.331 309.294 144.331 303.643 147.405Z'
                        fill='url(#paintMASTER100_linear)'
                      />
                      <path
                        id='Union_4'
                        d='M303.511 171.93L204.317 225.891C198.236 229.199 194.451 235.567 194.451 242.489L194.451 365.992C194.451 372.914 198.236 379.282 204.317 382.59L303.511 436.55C309.141 439.613 315.939 439.613 321.569 436.55L420.763 382.59C426.844 379.282 430.629 372.914 430.629 365.992L430.629 242.489C430.629 235.567 426.844 229.199 420.763 225.891L321.569 171.93C315.939 168.868 309.141 168.868 303.511 171.93Z'
                        fill='url(#paintMASTER101_linear)'
                      />
                      <g id='Union_5' filter='url(#filterMASTER25_f)'>
                        <path
                          d='M303.511 171.93L204.317 225.891C198.236 229.199 194.451 235.567 194.451 242.489L194.451 365.992C194.451 372.914 198.236 379.282 204.317 382.59L303.511 436.55C309.141 439.613 315.939 439.613 321.569 436.55L420.763 382.59C426.844 379.282 430.629 372.914 430.629 365.992L430.629 242.489C430.629 235.567 426.844 229.199 420.763 225.891L321.569 171.93C315.939 168.868 309.141 168.868 303.511 171.93Z'
                          stroke='url(#paintMASTER102_linear)'
                          strokeWidth='1.11562'
                        />
                      </g>
                    </g>
                    <g id='Mask Group' opacity='0.5'>
                      <mask
                        id='maskMASTER0'
                        maskUnits='userSpaceOnUse'
                        x='204'
                        y='180'
                        width='219'
                        height='249'
                      >
                        <path
                          id='Union_6'
                          d='M304.682 182.84L213.881 232.19C208.094 235.335 204.491 241.394 204.491 247.981L204.491 360.935C204.491 367.522 208.094 373.581 213.881 376.726L304.682 426.076C310.034 428.985 316.495 428.985 321.847 426.076L412.647 376.726C418.434 373.581 422.037 367.522 422.037 360.935L422.037 247.981C422.037 241.394 418.434 235.335 412.647 232.19L321.847 182.84C316.495 179.931 310.034 179.931 304.682 182.84Z'
                          fill='#A6D3DE'
                        />
                      </mask>
                      <g mask='url(#maskMASTER0)'>
                        <path
                          id='Innershadow0.1fill'
                          d='M304.682 182.84L213.881 232.19C208.094 235.335 204.491 241.394 204.491 247.981L204.491 360.935C204.491 367.522 208.094 373.581 213.881 376.726L304.682 426.076C310.034 428.985 316.495 428.985 321.847 426.076L412.647 376.726C418.434 373.581 422.037 367.522 422.037 360.935L422.037 247.981C422.037 241.394 418.434 235.335 412.647 232.19L321.847 182.84C316.495 179.931 310.034 179.931 304.682 182.84Z'
                          fill='url(#paint103_radial)'
                        />
                        <g id='Group 57'>
                          <path
                            id='Vector 5'
                            opacity='0.5'
                            d='M295.078 435.731L290.757 173.175H335.766L331.445 435.731H295.078Z'
                            fill='url(#paintMASTER104_linear)'
                          />
                          <path
                            id='Vector 6'
                            opacity='0.5'
                            d='M294.5 433.402L159.479 208.182L198.459 185.677L325.995 415.218L294.5 433.402Z'
                            fill='url(#paintMASTER105_linear)'
                          />
                          <path
                            id='Vector 7'
                            opacity='0.5'
                            d='M290.748 415.218L418.284 185.677L457.264 208.182L322.244 433.402L290.748 415.218Z'
                            fill='url(#paintMASTER106_linear)'
                          />
                          <rect
                            id='Rectangle 3'
                            x='204.489'
                            y='289.449'
                            width='217.546'
                            height='141.28'
                            fill='url(#paintMASTER107_linear)'
                          />
                        </g>
                        <g id='Innershadow0.1fill_2' filter='url(#filterMSLOCKED26_i)'>
                          <path
                            d='M304.682 182.84L213.881 232.19C208.094 235.335 204.491 241.394 204.491 247.981L204.491 360.935C204.491 367.522 208.094 373.581 213.881 376.726L304.682 426.076C310.034 428.985 316.495 428.985 321.847 426.076L412.647 376.726C418.434 373.581 422.037 367.522 422.037 360.935L422.037 247.981C422.037 241.394 418.434 235.335 412.647 232.19L321.847 182.84C316.495 179.931 310.034 179.931 304.682 182.84Z'
                            fill='#6052B4'
                            fillOpacity='0.01'
                          />
                        </g>
                      </g>
                    </g>
                    <g id='triangle-gold' filter='url(#filterMASTER27_d)'>
                      <g id='Frame 8'>
                        <mask
                          id='maskMASTER1'
                          maskUnits='userSpaceOnUse'
                          x='204'
                          y='180'
                          width='219'
                          height='249'
                        >
                          <path
                            id='Innershadow0.1fill_3'
                            d='M304.682 182.84L213.881 232.19C208.094 235.335 204.491 241.394 204.491 247.981L204.491 360.935C204.491 367.522 208.094 373.581 213.881 376.726L304.682 426.076C310.034 428.985 316.495 428.985 321.847 426.076L412.647 376.726C418.434 373.581 422.037 367.522 422.037 360.935L422.037 247.981C422.037 241.394 418.434 235.335 412.647 232.19L321.847 182.84C316.495 179.931 310.034 179.931 304.682 182.84Z'
                            fill='white'
                          />
                        </mask>
                        <g mask='url(#maskMASTER1)'>
                          <g id='Group 208'>
                            <path
                              id='Vector 258'
                              d='M313.823 215.548C313.823 206.177 298.948 191.934 291.511 185.984H313.823V215.548Z'
                              fill='url(#paintMASTER108_linear)'
                            />
                            <path
                              id='Vector 259'
                              d='M313.822 215.548C313.822 206.177 328.697 191.934 336.135 185.984H313.822V215.548Z'
                              fill='url(#paintMASTER109_linear)'
                            />
                            <rect
                              id='Rectangle 67'
                              x='313.834'
                              y='170.366'
                              width='22.1048'
                              height='22.1048'
                              transform='rotate(45 313.834 170.366)'
                              fill='url(#paintMASTER110_linear)'
                            />
                            <path
                              id='Rectangle 68 (Stroke)'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M313.834 201.311L329.307 185.839L329.622 186.154L313.834 201.942L298.046 186.154L298.362 185.839L313.834 201.311Z'
                              fill='url(#paintMASTER111_linear)'
                            />
                          </g>
                          <g id='Vector 260' filter='url(#filterMASTER28_d)'>
                            <path
                              d='M304.339 183.195L294.856 188.216V177.059H332.787V188.773L323.305 183.195C314.826 179.625 307.128 181.708 304.339 183.195Z'
                              fill='#C4C4C4'
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id='&#231;&#190;&#189;&#230;&#175;&#155;'>
                      <g id='Group 147'>
                        <g id='Group 146'>
                          <g id='Group 133' filter='url(#filterMASTER29_d)'>
                            <g id='Group 128'>
                              <path
                                id='#1&#229;&#134;&#133;&#229;&#174;&#185;&#230;&#184;&#144;&#229;&#143;&#152;'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M444.638 302.378C447.973 281.442 440.59 263.953 432.374 253.947L449.422 213.288L509.191 85.8103C522.212 114.603 534.42 190.97 479.083 266.103C463.657 287.048 452.524 298.1 444.638 302.378Z'
                                fill='url(#paintMASTER112_linear)'
                              />
                              <path
                                id='#1&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                                d='M450.292 213.719L509.162 88.1604C521.715 118.076 532.191 192.365 478.306 265.527C463.99 284.966 453.464 295.744 445.885 300.523C448.465 280.478 441.447 263.717 433.493 253.786L450.292 213.719Z'
                                stroke='url(#paintMASTER113_linear)'
                                strokeWidth='1.93756'
                              />
                              <g
                                id='#2&#229;&#134;&#133;&#229;&#174;&#185;&#230;&#184;&#144;&#229;&#143;&#152;'
                                filter='url(#filterMASTER30_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M432.76 331.52C447.417 308.349 447.033 286.848 441.47 271.045L532.275 170.207C530.204 220.548 507.549 323.271 433.493 331.441C433.247 331.468 433.003 331.494 432.76 331.52Z'
                                  fill='url(#paintMASTER114_linear)'
                                />
                              </g>
                              <path
                                id='#2&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                                d='M442.818 271.357L531.794 172.55C530.495 197.639 524.254 234.519 509.575 266.424C494.572 299.034 470.851 326.264 434.75 330.656C448.515 308.025 448.192 287.008 442.818 271.357Z'
                                stroke='url(#paintMASTER115_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#5'
                                opacity='0.8'
                                d='M480.839 282.753L446.314 304.962L444.226 313.065L480.839 282.753Z'
                                fill='url(#paintMASTER116_linear)'
                              />
                              <g
                                id='#3&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                                filter='url(#filterMASTER31_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M403.358 363.579C426.443 345.337 438.142 327.013 442.861 310.405L527.22 248.527C522.457 293.21 491.006 378.113 403.358 363.579Z'
                                  fill='url(#paintMASTER117_linear)'
                                />
                              </g>
                              <path
                                id='#3&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                                d='M443.559 310.892L526.209 250.268C523.55 272.422 514.506 303.594 495.732 327.764C476.74 352.215 447.795 369.509 405.289 363.067C427.413 345.218 438.836 327.275 443.559 310.892Z'
                                stroke='url(#paintMASTER118_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4'
                                d='M484.909 318.365L432.993 332.06L429.023 338.525L484.909 318.365Z'
                                fill='url(#paintMASTER119_linear)'
                              />
                              <g
                                id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                                filter='url(#filterMASTER32_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M430.576 335.56C420.263 350.262 403.765 365.537 378.618 380.379C368.901 386.114 360.53 391.478 353.353 396.486L352.679 397.048C472.969 404.063 511.509 341.227 515.908 308.293L430.576 335.56Z'
                                  fill='url(#paintMASTER120_linear)'
                                />
                              </g>
                              <path
                                id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                                d='M353.353 396.487C360.53 391.479 368.901 386.115 378.619 380.379C403.766 365.538 420.264 350.262 430.578 335.56L515.909 308.293'
                                stroke='url(#paintMASTER121_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3'
                                d='M433.62 376.575L405.18 361.758L399.467 366.046L433.62 376.575Z'
                                fill='url(#paintMASTER122_linear)'
                              />
                              <path
                                id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M402.905 363.936C395.89 369.442 387.835 374.941 378.619 380.38C355.957 393.755 340.617 405.108 330.675 414.653C331.911 417.534 338.749 417.19 349.056 411.107C369.949 398.776 388.467 396.683 421.069 398.355C452.749 399.98 462.546 396.561 468.172 390.878C455.245 385.246 422.912 371.884 402.905 363.936Z'
                                fill='url(#paintMASTER123_linear)'
                              />
                              <path
                                id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;'
                                d='M379.029 381.076C388.114 375.714 396.079 370.292 403.038 364.857C422.512 372.601 453.252 385.298 466.732 391.133C461.216 396.055 451.173 399.091 421.11 397.549C388.45 395.874 369.741 397.961 348.646 410.411C343.542 413.424 339.356 414.979 336.341 415.444C334.831 415.677 333.665 415.628 332.84 415.393C332.316 415.244 331.955 415.029 331.713 414.778C341.605 405.387 356.759 394.22 379.029 381.076Z'
                                stroke='url(#paintMASTER124_linear)'
                                strokeWidth='1.61464'
                              />
                            </g>
                            <path
                              id='Vector 116'
                              d='M434.398 250.622C442.172 260.69 451.957 280.838 448.282 295.099'
                              stroke='url(#paintMASTER125_linear)'
                              strokeWidth='2.00812'
                            />
                            <g id='Group 131' filter='url(#filterMASTER33_d)'>
                              <path
                                id='Vector 113'
                                d='M382.992 380.809C463.862 323.125 454.853 280.501 435.518 252.338C435.175 251.839 434.439 251.857 434.11 252.365C433.943 252.624 433.929 252.954 434.071 253.227C451.596 287.049 452.354 322.958 377.623 374.817C278.67 438.273 292.716 460.655 294.286 467.972C295.543 473.826 301.292 472.082 304.009 470.478C305.885 454.256 308.285 440.474 382.992 380.809Z'
                                fill='url(#paintMASTER126_linear)'
                              />
                              <path
                                id='Vector 110'
                                d='M382.992 380.809C463.898 323.099 454.845 280.462 435.492 252.3C435.161 251.819 434.452 251.837 434.135 252.327C433.956 252.604 433.961 252.963 434.145 253.237C455.55 285.229 457.981 323.286 377.623 374.817C278.67 438.273 292.716 460.655 294.286 467.972C295.543 473.826 301.292 472.082 304.009 470.478C294.824 462.159 302.565 438.177 382.992 380.809Z'
                                fill='url(#paintMASTER127_linear)'
                              />
                              <path
                                id='Intersect_36'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M377.621 374.817C380.822 375.316 385.758 375.72 390.46 375.564C407.072 363.002 419.463 351.037 428.308 340.088C429.708 338.141 431.154 336.365 432.298 334.759C430.627 334.329 427.964 334.598 424.981 336.33C414.164 348.224 398.868 361.17 377.621 374.817Z'
                                fill='url(#paintMASTER128_linear)'
                              />
                              <g id='Vector 114' filter='url(#filterMASTER34_f)'>
                                <path
                                  d='M434.798 251.302V251.302C434.217 252.201 434.234 253.361 434.819 254.256C455.592 286.037 457.13 323.832 377.623 374.817C278.67 438.273 292.716 460.655 294.286 467.972C295.543 473.826 301.292 472.082 304.009 470.478'
                                  stroke='url(#paintMASTER129_linear)'
                                  strokeWidth='0.892498'
                                />
                              </g>
                              <g id='Vector 115' filter='url(#filterMASTER35_f)'>
                                <path
                                  d='M295.465 454.451C301.786 433.499 328.165 410.266 340.765 401.609C353.915 391.557 383.796 370.532 396.505 364.13'
                                  stroke='#EED7B5'
                                  strokeWidth='1.11562'
                                />
                              </g>
                            </g>
                          </g>
                          <g id='Group 134' filter='url(#filterMASTER36_d)'>
                            <g id='Group 128_2'>
                              <path
                                id='#1&#229;&#134;&#133;&#229;&#174;&#185;&#230;&#184;&#144;&#229;&#143;&#152;_2'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M180.031 302.375C176.697 281.439 184.079 263.95 192.296 253.944L175.259 213.31L115.477 85.8069C102.456 114.599 90.249 190.967 145.585 266.1C161.012 287.046 172.146 298.097 180.031 302.375Z'
                                fill='url(#paintMASTER130_linear)'
                              />
                              <path
                                id='#1&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                                d='M174.379 213.717L115.509 88.1589C102.956 118.075 92.4795 192.363 146.365 265.526C160.681 284.964 171.207 295.742 178.786 300.521C176.206 280.476 183.224 263.715 191.178 253.784L174.379 213.717Z'
                                stroke='url(#paintMASTER131_linear)'
                                strokeWidth='1.93756'
                              />
                              <g
                                id='#2&#229;&#134;&#133;&#229;&#174;&#185;&#230;&#184;&#144;&#229;&#143;&#152;_2'
                                filter='url(#filterMASTER37_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M191.912 331.519C177.254 308.348 177.638 286.848 183.2 271.045L92.3934 170.206C94.4642 220.546 117.12 323.269 191.175 331.439C191.422 331.466 191.667 331.493 191.912 331.519Z'
                                  fill='url(#paintMASTER132_linear)'
                                />
                              </g>
                              <path
                                id='#2&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                                d='M181.851 271.356L92.8743 172.549C94.1731 197.637 100.414 234.518 115.093 266.423C130.096 299.033 153.817 326.263 189.918 330.655C176.153 308.024 176.476 287.007 181.851 271.356Z'
                                stroke='url(#paintMASTER133_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#5_2'
                                opacity='0.8'
                                d='M143.83 282.752L178.355 304.961L180.443 313.063L143.83 282.752Z'
                                fill='url(#paintMASTER134_linear)'
                              />
                              <g
                                id='#3&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                                filter='url(#filterMASTER38_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M221.312 363.577C198.227 345.336 186.529 327.011 181.81 310.404L97.4498 248.525C102.213 293.208 133.664 378.111 221.312 363.577Z'
                                  fill='url(#paintMASTER135_linear)'
                                />
                              </g>
                              <path
                                id='#3&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                                d='M181.109 310.892L98.4592 250.268C101.119 272.422 110.163 303.594 128.936 327.763C147.929 352.214 176.873 369.509 219.379 363.067C197.255 345.218 185.832 327.275 181.109 310.892Z'
                                stroke='url(#paintMASTER136_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#4_2'
                                d='M139.759 318.363L191.676 332.058L195.646 338.523L139.759 318.363Z'
                                fill='url(#paintMASTER137_linear)'
                              />
                              <g
                                id='#4&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                                filter='url(#filterMASTER39_d)'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M194.092 335.558C204.405 350.26 220.904 365.536 246.05 380.378C255.77 386.114 264.143 391.479 271.321 396.488L271.991 397.047C151.701 404.061 113.16 341.225 108.762 308.292L194.092 335.558Z'
                                  fill='url(#paintMASTER138_linear)'
                                />
                              </g>
                              <path
                                id='#4&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                                d='M271.317 396.486C264.14 391.477 255.768 386.114 246.05 380.378C220.904 365.536 204.405 350.261 194.092 335.559L108.761 308.292'
                                stroke='url(#paintMASTER139_linear)'
                                strokeWidth='1.61464'
                              />
                              <path
                                id='&#229;&#134;&#133;&#232;&#151;&#143;&#233;&#135;&#145;&#229;&#177;&#158;#3_2'
                                d='M191.05 376.574L219.489 361.757L225.203 366.045L191.05 376.574Z'
                                fill='url(#paintMASTER140_linear)'
                              />
                              <path
                                id='#5&#229;&#134;&#133;&#229;&#174;&#185;&#229;&#161;&#171;&#229;&#133;&#133;_2'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M221.765 363.934C228.779 369.441 236.834 374.939 246.051 380.379C268.712 393.754 284.053 405.107 293.994 414.651C292.759 417.533 285.921 417.189 275.613 411.105C254.721 398.774 236.203 396.682 203.601 398.354C171.921 399.979 162.123 396.56 156.498 390.876C169.424 385.245 201.757 371.883 221.765 363.934Z'
                                fill='url(#paintMASTER141_linear)'
                              />
                              <path
                                id='#5&#233;&#171;&#152;&#229;&#133;&#137;&#230;&#143;&#143;&#232;&#190;&#185;_2'
                                d='M245.641 381.074C236.556 375.712 228.591 370.291 221.632 364.856C202.158 372.599 171.417 385.297 157.937 391.131C163.454 396.053 173.497 399.09 203.56 397.548C236.22 395.872 254.929 397.959 276.024 410.41C281.127 413.422 285.314 414.977 288.329 415.442C289.839 415.675 291.005 415.627 291.829 415.392C292.353 415.243 292.715 415.028 292.956 414.776C283.064 405.386 267.911 394.218 245.641 381.074Z'
                                stroke='url(#paintMASTER142_linear)'
                                strokeWidth='1.61464'
                              />
                            </g>
                            <path
                              id='Vector 116_2'
                              d='M190.272 250.624C182.498 260.692 172.713 280.84 176.387 295.1'
                              stroke='url(#paintMASTER143_linear)'
                              strokeWidth='2.00812'
                            />
                            <g id='Group 131_2' filter='url(#filterMASTER40_d)'>
                              <path
                                id='Vector 113_2'
                                d='M241.677 380.809C160.806 323.125 169.815 280.501 189.15 252.338C189.493 251.839 190.229 251.857 190.558 252.365C190.725 252.624 190.739 252.954 190.597 253.227C173.072 287.049 172.314 322.958 247.045 374.817C345.998 438.273 331.952 460.655 330.382 467.972C329.125 473.826 323.376 472.082 320.659 470.478C318.783 454.256 316.383 440.474 241.677 380.809Z'
                                fill='url(#paintMASTER144_linear)'
                              />
                              <path
                                id='Vector 110_2'
                                d='M241.677 380.809C160.77 323.099 169.823 280.462 189.176 252.3C189.507 251.819 190.216 251.837 190.533 252.327C190.712 252.604 190.707 252.963 190.523 253.237C169.118 285.229 166.687 323.286 247.045 374.817C345.998 438.273 331.952 460.655 330.382 467.972C329.125 473.826 323.376 472.082 320.659 470.478C329.844 462.159 322.103 438.177 241.677 380.809Z'
                                fill='url(#paintMASTER145_linear)'
                              />
                              <path
                                id='Intersect_37'
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M247.045 374.818C243.845 375.318 238.909 375.721 234.206 375.565C217.595 363.003 205.203 351.038 196.358 340.09C194.959 338.143 193.513 336.366 192.368 334.761C194.04 334.33 196.703 334.599 199.685 336.331C210.503 348.225 225.799 361.171 247.045 374.818Z'
                                fill='url(#paintMASTER146_linear)'
                              />
                              <g id='Vector 114_2' filter='url(#filterMASTER41_f)'>
                                <path
                                  d='M189.871 251.302V251.302C190.451 252.201 190.435 253.361 189.849 254.256C169.076 286.037 167.539 323.832 247.045 374.817C345.998 438.273 331.953 460.655 330.382 467.972C329.125 473.826 323.376 472.082 320.659 470.478'
                                  stroke='url(#paintMASTER147_linear)'
                                  strokeWidth='0.892498'
                                />
                              </g>
                              <g id='Vector 115_2' filter='url(#filterMASTER42_f)'>
                                <path
                                  d='M329.203 454.451C322.882 433.499 296.503 410.266 283.903 401.609C270.752 391.557 240.872 370.532 228.163 364.13'
                                  stroke='#EED7B5'
                                  strokeWidth='1.11562'
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g
                      id='&#229;&#186;&#149;&#233;&#131;&#168;&#228;&#184;&#137;&#232;&#167;&#146;'
                      filter='url(#filterMASTER43_d)'
                    >
                      <mask
                        id='maskMASTER2'
                        maskUnits='userSpaceOnUse'
                        x='285'
                        y='410'
                        width='57'
                        height='59'
                      >
                        <path
                          id='Union_7'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M313.988 468.628C314.012 468.619 314.038 468.619 314.062 468.628L314.119 468.649C314.161 468.665 314.205 468.634 314.204 468.59C314.204 468.563 314.22 468.54 314.245 468.53L340.333 458.63C341.642 458.134 342.175 456.569 341.443 455.377L313.861 410.444C313.857 410.438 313.847 410.441 313.847 410.448C313.847 410.441 313.837 410.438 313.833 410.444L286.257 455.367C285.523 456.563 286.061 458.131 287.375 458.624L313.807 468.532C313.831 468.541 313.847 468.565 313.847 468.591C313.847 468.634 313.891 468.665 313.932 468.649L313.988 468.628Z'
                          fill='url(#paintMASTER148_linear)'
                        />
                      </mask>
                      <g mask='url(#maskMASTER2)'>
                        <g id='Group 113'>
                          <path
                            id='Vector 44'
                            d='M314.003 469.649L342.754 457.84L314.003 405.985L314.003 469.649Z'
                            fill='url(#paintMASTER149_linear)'
                          />
                          <path
                            id='Vector 45'
                            d='M314.003 469.649L285.252 457.84L314.003 405.985L314.003 469.649Z'
                            fill='url(#paintMASTER150_linear)'
                          />
                        </g>
                      </g>
                    </g>
                    <path
                      id='Vector 210'
                      d='M313.822 425.842L326.094 430.305L319.958 420.264L313.822 410.781L307.686 420.264L301.55 430.305L313.822 425.842Z'
                      fill='url(#paintMASTER151_linear)'
                    />
                    <path
                      id='Intersect_38'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M313.745 410.907V425.872L301.551 430.307L313.745 410.907Z'
                      fill='#EED6B3'
                    />
                  </g>
                  <path
                    id='Vector 254 (Stroke)'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M313.031 497.192L300.434 491.665L303.223 491.665L313.264 496.072L323.304 491.615H325.766L313.494 497.193C313.347 497.26 313.178 497.26 313.031 497.192Z'
                    fill='url(#paintMASTER152_linear)'
                  />
                </g>
                {shadow ? (
                  <g id='lateral-shadows'>
                    <g id='Group 221'>
                      <g id='Ellipse 22 (Stroke)' filter='url(#filterMASTER44_f)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M310.803 47.6815C178.991 47.6815 72.1368 154.536 72.1368 286.348C72.1368 418.16 178.991 525.014 310.803 525.014V528.696C176.958 528.696 68.4556 420.193 68.4556 286.348C68.4556 152.503 176.958 44.0002 310.803 44.0002V47.6815Z'
                          fill='url(#paintMASTER153_linear)'
                        />
                      </g>
                      <g id='Ellipse 22 (Stroke)_2' filter='url(#filterMASTER45_f)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M312.293 47.6817C180.481 47.6817 78.0937 154.536 78.0937 286.348C78.0937 418.16 180.481 525.015 312.293 525.015V528.696C178.448 528.696 65.478 420.193 65.478 286.348C65.478 152.503 178.448 44.0005 312.293 44.0005V47.6817Z'
                          fill='url(#paintMASTER154_linear)'
                        />
                      </g>
                    </g>
                    <g id='Group 222'>
                      <g id='Ellipse 22 (Stroke)_3' filter='url(#filterMASTER46_f)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M314.155 47.6812C445.967 47.6812 552.822 154.536 552.822 286.348C552.822 418.16 445.967 525.014 314.155 525.014V528.695C448 528.695 556.503 420.193 556.503 286.348C556.503 152.503 448 44 314.155 44V47.6812Z'
                          fill='url(#paintMASTER155_linear)'
                        />
                      </g>
                      <g id='Ellipse 22 (Stroke)_4' filter='url(#filterMASTER47_f)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M312.666 47.682C444.478 47.682 546.865 154.537 546.865 286.348C546.865 418.16 444.478 525.015 312.666 525.015V528.696C446.511 528.696 559.481 420.193 559.481 286.348C559.481 152.504 446.511 44.0007 312.666 44.0007V47.682Z'
                          fill='url(#paintMASTER156_linear)'
                        />
                      </g>
                    </g>
                  </g>
                ) : null}
                <g id='globs' className={animation ? rotation : ''}>
                  <g id='Ellipse 12' filter='url(#filterMASTER48_f)'>
                    <circle cx='182.048' cy='116.567' r='6.8251' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 20' filter='url(#filterMASTER49_f)'>
                    <circle cx='221.634' cy='165.435' r='2.27503' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 24' opacity='0.38' filter='url(#filterMASTER50_f)'>
                    <circle cx='441.221' cy='104.378' r='2.27503' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 21' filter='url(#filterMASTER51_f)'>
                    <circle cx='395.302' cy='162.541' r='2.27503' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 23' filter='url(#filterMASTER52_f)'>
                    <circle cx='217.009' cy='114.348' r='1.5306' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 22' filter='url(#filterMASTER53_f)'>
                    <circle cx='256.038' cy='135.012' r='5.35711' fill='#FDD39A' />
                  </g>
                  <g id='Ellipse 17' filter='url(#filterMASTER54_f)'>
                    <circle cx='409.705' cy='179.086' r='5.30841' fill='#FFD59B' />
                  </g>
                  <g id='Ellipse 18' filter='url(#filterMASTER55_f)'>
                    <circle cx='283.061' cy='471.049' r='6.06675' fill='#76E682' />
                  </g>
                </g>
              </g>
              <defs>
                <filter
                  id='filterMASTER0_dd'
                  x='0.126694'
                  y='0.0932231'
                  width='624.415'
                  height='610.169'
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
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect2_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER1_d'
                  x='372.389'
                  y='437'
                  width='68.0537'
                  height='44.0675'
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
                  <feOffset dy='-4.46249' />
                  <feGaussianBlur stdDeviation='2.23124' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER2_f'
                  x='368.485'
                  y='406.878'
                  width='66.3795'
                  height='79.2092'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.46249' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER3_f'
                  x='372.948'
                  y='385.124'
                  width='67.4951'
                  height='60.8014'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER4_d'
                  x='187.2'
                  y='436.999'
                  width='68.0532'
                  height='44.0675'
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
                  <feOffset dy='-4.46249' />
                  <feGaussianBlur stdDeviation='2.23124' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER5_f'
                  x='192.779'
                  y='406.878'
                  width='66.3795'
                  height='79.2092'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.46249' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER6_f'
                  x='187.201'
                  y='385.124'
                  width='67.4951'
                  height='60.8014'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER7_f'
                  x='256.925'
                  y='433.095'
                  width='114.351'
                  height='45.7405'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER8_f'
                  x='264.736'
                  y='442.075'
                  width='104.953'
                  height='63.7404'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='4.46249' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER9_d'
                  x='256.926'
                  y='471.025'
                  width='113.795'
                  height='41.2785'
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
                  <feOffset dy='-4.46249' />
                  <feGaussianBlur stdDeviation='1.67343' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER10_f'
                  x='256.925'
                  y='433.095'
                  width='114.351'
                  height='23.9859'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER11_d'
                  x='205.215'
                  y='123.467'
                  width='31.8534'
                  height='24.9646'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER12_d'
                  x='180.874'
                  y='179.327'
                  width='30.5989'
                  height='16.1904'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER13_d'
                  x='152.14'
                  y='182.091'
                  width='23.2182'
                  height='45.2198'
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
                  <feOffset dx='2.23124' dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER14_d'
                  x='164.065'
                  y='227.55'
                  width='12.2658'
                  height='37.7785'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER15_d'
                  x='163.288'
                  y='264.509'
                  width='13.8142'
                  height='42.8395'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER16_d'
                  x='138.952'
                  y='270.418'
                  width='28.7704'
                  height='27.0835'
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
                  <feOffset dx='2.23124' dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER17_d'
                  x='145.629'
                  y='315.178'
                  width='27.4505'
                  height='16.4835'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER18_d'
                  x='389.449'
                  y='123.466'
                  width='31.8534'
                  height='24.9646'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER19_d'
                  x='415.049'
                  y='179.325'
                  width='30.5989'
                  height='16.1904'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER20_d'
                  x='454.508'
                  y='182.091'
                  width='23.2182'
                  height='45.2199'
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
                  <feOffset dx='2.23124' dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER21_d'
                  x='450.189'
                  y='227.55'
                  width='12.2658'
                  height='37.7785'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER22_d'
                  x='449.416'
                  y='264.51'
                  width='13.8143'
                  height='42.8393'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER23_d'
                  x='462.144'
                  y='270.418'
                  width='28.7703'
                  height='27.0836'
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
                  <feOffset dx='2.23124' dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER24_d'
                  x='453.438'
                  y='315.178'
                  width='27.4505'
                  height='16.4835'
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
                  <feOffset dy='2.23124' />
                  <feGaussianBlur stdDeviation='0.557811' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.541667 0 0 0 0 0.336104 0 0 0 0 0.0947917 0 0 0 0.25 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER25_f'
                  x='193.559'
                  y='168.741'
                  width='237.963'
                  height='270.999'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.167343' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMSLOCKED26_i'
                  x='204.491'
                  y='180.658'
                  width='217.546'
                  height='247.6'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='7.5016' />
                  <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.297222 0 0 0 0 0.329917 0 0 0 0 0.445833 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
                </filter>
                <filter
                  id='filterMASTER27_d'
                  x='201.144'
                  y='175.944'
                  width='224.24'
                  height='259.26'
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
                  <feOffset dy='1.11562' />
                  <feGaussianBlur stdDeviation='1.67343' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.188125 0 0 0 0 0.223738 0 0 0 0 0.35 0 0 0 0.55 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER28_d'
                  x='292.625'
                  y='177.059'
                  width='42.3936'
                  height='17.2921'
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
                  <feOffset dy='3.34687' />
                  <feGaussianBlur stdDeviation='1.11562' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.308611 0 0 0 0 0.319833 0 0 0 0 0.420833 0 0 0 0.36 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER29_d'
                  x='287.821'
                  y='85.809'
                  width='249.347'
                  height='395.591'
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
                  <feOffset dy='4.46249' />
                  <feGaussianBlur stdDeviation='2.23124' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.38125 0 0 0 0 0.416833 0 0 0 0 0.508333 0 0 0 0.38 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER30_d'
                  x='426.301'
                  y='165.902'
                  width='108.127'
                  height='169.924'
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
                  <feOffset dx='-2.15285' />
                  <feGaussianBlur stdDeviation='2.15285' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER31_d'
                  x='396.899'
                  y='244.221'
                  width='132.474'
                  height='125.316'
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
                  <feOffset dx='-2.15285' />
                  <feGaussianBlur stdDeviation='2.15285' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER32_d'
                  x='341.915'
                  y='295.297'
                  width='184.757'
                  height='110.825'
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
                  <feOffset dy='-2.23124' />
                  <feGaussianBlur stdDeviation='5.38212' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER33_d'
                  x='290.052'
                  y='251.06'
                  width='163.132'
                  height='228.109'
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
                  <feOffset dx='1.11562' dy='3.34687' />
                  <feGaussianBlur stdDeviation='1.67343' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.7 0 0 0 0 0.526167 0 0 0 0 0.265417 0 0 0 0.5 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER34_f'
                  x='291.949'
                  y='250.725'
                  width='155.745'
                  height='222.085'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.167343' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER35_f'
                  x='290.469'
                  y='359.169'
                  width='110.75'
                  height='99.9059'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER36_d'
                  x='87.5004'
                  y='85.807'
                  width='249.347'
                  height='395.593'
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
                  <feOffset dy='4.46249' />
                  <feGaussianBlur stdDeviation='2.23124' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.38125 0 0 0 0 0.416833 0 0 0 0 0.508333 0 0 0 0.38 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER37_d'
                  x='85.9348'
                  y='165.9'
                  width='108.13'
                  height='169.924'
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
                  <feOffset dx='-2.15285' />
                  <feGaussianBlur stdDeviation='2.15285' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER38_d'
                  x='90.9912'
                  y='244.219'
                  width='132.473'
                  height='125.316'
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
                  <feOffset dx='-2.15285' />
                  <feGaussianBlur stdDeviation='2.15285' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER39_d'
                  x='97.9975'
                  y='295.296'
                  width='184.757'
                  height='110.825'
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
                  <feOffset dy='-2.23124' />
                  <feGaussianBlur stdDeviation='5.38212' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER40_d'
                  x='173.715'
                  y='251.06'
                  width='163.132'
                  height='228.109'
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
                  <feOffset dx='1.11562' dy='3.34687' />
                  <feGaussianBlur stdDeviation='1.67343' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.7 0 0 0 0 0.526167 0 0 0 0 0.265417 0 0 0 0.5 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER41_f'
                  x='176.974'
                  y='250.725'
                  width='155.745'
                  height='222.085'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.167343' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER42_f'
                  x='223.449'
                  y='359.169'
                  width='110.75'
                  height='99.9059'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.23124' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER43_d'
                  x='284.811'
                  y='410.441'
                  width='62.5414'
                  height='67.1377'
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
                  <feOffset dx='2.23124' dy='5.57811' />
                  <feGaussianBlur stdDeviation='1.67343' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0504688 0 0 0 0 0.0958375 0 0 0 0 0.2125 0 0 0 0.36 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow'
                    result='shape'
                  />
                </filter>
                <filter
                  id='filterMASTER44_f'
                  x='63.5473'
                  y='39.0919'
                  width='252.164'
                  height='494.512'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.45415' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER45_f'
                  x='50.5872'
                  y='29.1097'
                  width='276.597'
                  height='514.477'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='7.4454' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER46_f'
                  x='309.247'
                  y='39.0917'
                  width='252.164'
                  height='494.512'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.45415' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER47_f'
                  x='297.775'
                  y='29.1099'
                  width='276.597'
                  height='514.477'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='7.4454' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER48_f'
                  x='157.023'
                  y='91.5416'
                  width='50.0507'
                  height='50.0507'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='9.10013' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER49_f'
                  x='214.809'
                  y='158.61'
                  width='13.6502'
                  height='13.6502'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.27503' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER50_f'
                  x='434.396'
                  y='97.5531'
                  width='13.6502'
                  height='13.6502'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='2.27503' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER51_f'
                  x='391.511'
                  y='158.749'
                  width='7.58344'
                  height='7.58344'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.758344' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER52_f'
                  x='214.458'
                  y='111.797'
                  width='5.10201'
                  height='5.10201'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='0.510201' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER53_f'
                  x='247.648'
                  y='126.622'
                  width='16.781'
                  height='16.781'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='1.51669' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER54_f'
                  x='398.33'
                  y='167.711'
                  width='22.7503'
                  height='22.7503'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='3.03338' result='effect1_foregroundBlur' />
                </filter>
                <filter
                  id='filterMASTER55_f'
                  x='261.828'
                  y='449.815'
                  width='42.4673'
                  height='42.4673'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='7.58344' result='effect1_foregroundBlur' />
                </filter>
                <linearGradient
                  id='paintMASTER0_linear'
                  x1='548.258'
                  y1='438.438'
                  x2='359.436'
                  y2='329.422'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF6D6' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER1_linear'
                  x1='312.82'
                  y1='576.343'
                  x2='312.82'
                  y2='358.311'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF6D6' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER2_linear'
                  x1='76.0637'
                  y1='439.13'
                  x2='264.885'
                  y2='330.114'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF6D6' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER3_linear'
                  x1='548.258'
                  y1='162.29'
                  x2='359.436'
                  y2='271.306'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF6D6' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER4_linear'
                  x1='76.0637'
                  y1='161.599'
                  x2='264.885'
                  y2='270.615'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF6D6' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFEFC5' stopOpacity='0.4' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER5_linear'
                  x1='386.892'
                  y1='460.985'
                  x2='386.729'
                  y2='480.956'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER6_linear'
                  x1='397.491'
                  y1='466.006'
                  x2='406.416'
                  y2='481.067'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#463421' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER7_linear'
                  x1='404.743'
                  y1='430.864'
                  x2='406.053'
                  y2='473.406'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#46B651' stopOpacity='0.1' />
                  <stop offset='0.582284' stopColor='#56CB70' stopOpacity='0.56' />
                  <stop offset='1' stopColor='#46B665' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER8_linear'
                  x1='394.147'
                  y1='427.397'
                  x2='374.842'
                  y2='427.563'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER9_linear'
                  x1='240.75'
                  y1='460.985'
                  x2='240.914'
                  y2='480.955'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER10_linear'
                  x1='230.152'
                  y1='466.006'
                  x2='221.227'
                  y2='481.067'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#463421' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER11_linear'
                  x1='222.9'
                  y1='430.864'
                  x2='221.59'
                  y2='473.406'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#46B665' stopOpacity='0.1' />
                  <stop offset='0.582284' stopColor='#56CB69' stopOpacity='0.56' />
                  <stop offset='1' stopColor='#48B646' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER12_linear'
                  x1='233.499'
                  y1='427.397'
                  x2='252.805'
                  y2='427.563'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <radialGradient
                  id='paintMASTER13_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(284.257 453.176) rotate(50.3431) scale(55.0653 62.1586)'
                >
                  <stop offset='0.432002' stopColor='#028025' />
                  <stop offset='1' stopColor='#0D781E' />
                </radialGradient>
                <linearGradient
                  id='paintMASTER14_linear'
                  x1='295.973'
                  y1='448.155'
                  x2='258.366'
                  y2='483.171'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.252353' stopColor='#066104' />
                  <stop offset='0.574194' stopColor='#19942D' />
                  <stop offset='0.9999' stopColor='#06860C' />
                  <stop offset='1' stopColor='#063988' />
                  <stop offset='1' stopColor='#063988' />
                  <stop offset='1' stopColor='#06881B' />
                  <stop offset='1' stopColor='#06881B' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER15_linear'
                  x1='280.912'
                  y1='468.236'
                  x2='349.522'
                  y2='489.991'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#46B651' stopOpacity='0.1' />
                  <stop offset='0.421859' stopColor='#56CB62' />
                  <stop offset='1' stopColor='#46B64A' stopOpacity='0.45' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER16_linear'
                  x1='292.626'
                  y1='500.032'
                  x2='346.733'
                  y2='522.902'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#584129' />
                  <stop offset='1' stopColor='#886C4E' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER17_linear'
                  x1='295.415'
                  y1='486.087'
                  x2='275.891'
                  y2='500.033'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER18_linear'
                  x1='296.758'
                  y1='453.871'
                  x2='272.074'
                  y2='461.96'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER19_linear'
                  x1='313.265'
                  y1='474.929'
                  x2='313.265'
                  y2='496.684'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF5E2' stopOpacity='0' />
                  <stop offset='0.479167' stopColor='#FEEAB6' />
                  <stop offset='1' stopColor='#E0B179' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER20_linear'
                  x1='308.479'
                  y1='475.487'
                  x2='308.479'
                  y2='492.848'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF5E2' stopOpacity='0' />
                  <stop offset='0.479167' stopColor='#FEEAB6' />
                  <stop offset='1' stopColor='#E0B179' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER21_linear'
                  x1='318.054'
                  y1='475.487'
                  x2='318.054'
                  y2='492.848'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF5E2' stopOpacity='0' />
                  <stop offset='0.479167' stopColor='#FEEAB6' />
                  <stop offset='1' stopColor='#E0B179' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER22_linear'
                  x1='167.685'
                  y1='308.69'
                  x2='159.411'
                  y2='319.75'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER23_linear'
                  x1='202.383'
                  y1='142.094'
                  x2='178.793'
                  y2='173.627'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER24_linear'
                  x1='226.606'
                  y1='132.033'
                  x2='210.206'
                  y2='153.956'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER25_linear'
                  x1='166.738'
                  y1='224.645'
                  x2='175.4'
                  y2='228.224'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER26_linear'
                  x1='221.759'
                  y1='146.868'
                  x2='208.38'
                  y2='119.981'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER27_linear'
                  x1='211.832'
                  y1='116.424'
                  x2='204.461'
                  y2='144.954'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER28_linear'
                  x1='192.45'
                  y1='223.838'
                  x2='163.664'
                  y2='262.317'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER29_linear'
                  x1='185.994'
                  y1='228.312'
                  x2='194.906'
                  y2='252.502'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER30_linear'
                  x1='178.349'
                  y1='186.916'
                  x2='163.043'
                  y2='207.375'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER31_linear'
                  x1='175.535'
                  y1='198.786'
                  x2='168.656'
                  y2='211.573'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C18E42' />
                  <stop offset='1' stopColor='#D2AB68' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER32_linear'
                  x1='191.312'
                  y1='150.727'
                  x2='171.958'
                  y2='176.598'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER33_linear'
                  x1='206.624'
                  y1='161.917'
                  x2='188.029'
                  y2='186.773'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER34_linear'
                  x1='156.976'
                  y1='239.106'
                  x2='150.159'
                  y2='248.218'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER35_linear'
                  x1='162.132'
                  y1='221.99'
                  x2='146.066'
                  y2='243.465'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C28766' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER36_linear'
                  x1='186.826'
                  y1='274.222'
                  x2='165.828'
                  y2='302.291'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER37_linear'
                  x1='165.103'
                  y1='267.2'
                  x2='151.82'
                  y2='284.955'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER38_linear'
                  x1='167.438'
                  y1='266.047'
                  x2='151.809'
                  y2='286.939'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER39_linear'
                  x1='165.086'
                  y1='324.151'
                  x2='158.635'
                  y2='332.775'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER40_linear'
                  x1='246.736'
                  y1='90.3913'
                  x2='223.587'
                  y2='121.335'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FCF1D5' />
                  <stop offset='1' stopColor='#EBCE6A' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER41_linear'
                  x1='249.368'
                  y1='92.3608'
                  x2='226.219'
                  y2='123.304'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER42_linear'
                  x1='232.634'
                  y1='120.984'
                  x2='211.636'
                  y2='149.053'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER43_linear'
                  x1='227.041'
                  y1='123.586'
                  x2='227.787'
                  y2='150.661'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER44_linear'
                  x1='196.129'
                  y1='145.013'
                  x2='189.37'
                  y2='177.509'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER45_linear'
                  x1='184.748'
                  y1='151.846'
                  x2='173.978'
                  y2='179.405'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER46_linear'
                  x1='202.19'
                  y1='164.687'
                  x2='202.633'
                  y2='183.108'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFDD78' />
                  <stop offset='1' stopColor='#FFF1C8' stopOpacity='0.38' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER47_linear'
                  x1='203.799'
                  y1='174.835'
                  x2='187.481'
                  y2='196.648'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER48_linear'
                  x1='204.068'
                  y1='174.508'
                  x2='184.275'
                  y2='194.513'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFDA92' />
                  <stop offset='1' stopColor='#DCBA84' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER49_linear'
                  x1='158.076'
                  y1='186.518'
                  x2='168.969'
                  y2='218.138'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#BC8647' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER50_linear'
                  x1='168.136'
                  y1='194.37'
                  x2='155.169'
                  y2='211.702'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER51_linear'
                  x1='153.96'
                  y1='220.381'
                  x2='142.987'
                  y2='240.142'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER52_linear'
                  x1='179.468'
                  y1='231.792'
                  x2='159.861'
                  y2='258.001'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER53_linear'
                  x1='173.832'
                  y1='227.156'
                  x2='164.989'
                  y2='260.193'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#E0C087' />
                  <stop offset='0.28125' stopColor='#FFE49E' />
                  <stop offset='1' stopColor='#753C1D' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER54_linear'
                  x1='150.913'
                  y1='239.415'
                  x2='143.551'
                  y2='246.657'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B18253' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER55_linear'
                  x1='179.211'
                  y1='270.897'
                  x2='159.224'
                  y2='297.614'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER56_linear'
                  x1='173.387'
                  y1='272.939'
                  x2='165.354'
                  y2='302.179'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER57_linear'
                  x1='154.485'
                  y1='278.572'
                  x2='147.306'
                  y2='288.168'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER58_linear'
                  x1='151.6'
                  y1='276.612'
                  x2='157.572'
                  y2='290.837'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#9A5E33' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER59_linear'
                  x1='163.63'
                  y1='314.816'
                  x2='156.098'
                  y2='324.883'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER60_linear'
                  x1='163.967'
                  y1='319.269'
                  x2='155.448'
                  y2='330.656'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER61_linear'
                  x1='458.832'
                  y1='308.69'
                  x2='467.107'
                  y2='319.75'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER62_linear'
                  x1='424.135'
                  y1='142.094'
                  x2='447.725'
                  y2='173.627'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER63_linear'
                  x1='399.912'
                  y1='132.033'
                  x2='416.312'
                  y2='153.956'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER64_linear'
                  x1='459.78'
                  y1='224.646'
                  x2='451.118'
                  y2='228.225'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER65_linear'
                  x1='404.759'
                  y1='146.868'
                  x2='418.138'
                  y2='119.981'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER66_linear'
                  x1='414.686'
                  y1='116.424'
                  x2='422.057'
                  y2='144.954'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER67_linear'
                  x1='434.067'
                  y1='223.838'
                  x2='462.853'
                  y2='262.317'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER68_linear'
                  x1='440.522'
                  y1='228.312'
                  x2='431.611'
                  y2='252.506'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER69_linear'
                  x1='448.168'
                  y1='186.917'
                  x2='463.474'
                  y2='207.377'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER70_linear'
                  x1='450.983'
                  y1='198.787'
                  x2='457.862'
                  y2='211.575'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C18E42' />
                  <stop offset='1' stopColor='#D2AB68' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER71_linear'
                  x1='435.204'
                  y1='150.727'
                  x2='454.558'
                  y2='176.598'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER72_linear'
                  x1='419.895'
                  y1='161.917'
                  x2='438.49'
                  y2='186.773'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER73_linear'
                  x1='469.541'
                  y1='239.106'
                  x2='476.357'
                  y2='248.218'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER74_linear'
                  x1='464.386'
                  y1='221.99'
                  x2='480.451'
                  y2='243.465'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C28766' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER75_linear'
                  x1='439.69'
                  y1='274.222'
                  x2='460.689'
                  y2='302.291'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER76_linear'
                  x1='461.415'
                  y1='267.201'
                  x2='474.697'
                  y2='284.956'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER77_linear'
                  x1='459.079'
                  y1='266.048'
                  x2='474.709'
                  y2='286.94'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER78_linear'
                  x1='461.432'
                  y1='324.151'
                  x2='467.883'
                  y2='332.775'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER79_linear'
                  x1='379.78'
                  y1='90.3913'
                  x2='402.929'
                  y2='121.335'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FCF1D5' />
                  <stop offset='1' stopColor='#EBCE6A' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER80_linear'
                  x1='377.149'
                  y1='92.3608'
                  x2='400.298'
                  y2='123.304'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER81_linear'
                  x1='393.884'
                  y1='120.984'
                  x2='414.882'
                  y2='149.053'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER82_linear'
                  x1='399.477'
                  y1='123.586'
                  x2='398.731'
                  y2='150.661'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER83_linear'
                  x1='430.391'
                  y1='145.015'
                  x2='437.15'
                  y2='177.509'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER84_linear'
                  x1='441.769'
                  y1='151.845'
                  x2='452.538'
                  y2='179.403'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER85_linear'
                  x1='424.333'
                  y1='164.69'
                  x2='423.89'
                  y2='183.11'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFDD78' />
                  <stop offset='1' stopColor='#FFF1C8' stopOpacity='0.38' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER86_linear'
                  x1='422.723'
                  y1='174.833'
                  x2='439.041'
                  y2='196.646'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER87_linear'
                  x1='422.455'
                  y1='174.507'
                  x2='442.248'
                  y2='194.511'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFDA92' />
                  <stop offset='1' stopColor='#DCBA84' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER88_linear'
                  x1='468.443'
                  y1='186.518'
                  x2='457.55'
                  y2='218.139'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#BC8647' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER89_linear'
                  x1='458.386'
                  y1='194.37'
                  x2='471.35'
                  y2='211.699'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#8E573C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER90_linear'
                  x1='472.562'
                  y1='220.382'
                  x2='483.535'
                  y2='240.144'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER91_linear'
                  x1='447.051'
                  y1='231.792'
                  x2='466.659'
                  y2='258.001'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER92_linear'
                  x1='452.686'
                  y1='227.156'
                  x2='461.529'
                  y2='260.193'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#E0C087' />
                  <stop offset='0.28125' stopColor='#FFE49E' />
                  <stop offset='1' stopColor='#753C1D' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER93_linear'
                  x1='475.606'
                  y1='239.415'
                  x2='482.968'
                  y2='246.658'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B18253' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER94_linear'
                  x1='447.308'
                  y1='270.898'
                  x2='467.294'
                  y2='297.614'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER95_linear'
                  x1='453.131'
                  y1='272.94'
                  x2='461.165'
                  y2='302.18'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F7E6B3' />
                  <stop offset='1' stopColor='#F7E6B3' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER96_linear'
                  x1='472.034'
                  y1='278.572'
                  x2='479.213'
                  y2='288.168'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER97_linear'
                  x1='474.919'
                  y1='276.612'
                  x2='468.947'
                  y2='290.837'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#9A5E33' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER98_linear'
                  x1='462.887'
                  y1='314.816'
                  x2='470.418'
                  y2='324.883'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FADA81' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER99_linear'
                  x1='462.551'
                  y1='319.269'
                  x2='471.069'
                  y2='330.656'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D2AB68' />
                  <stop offset='1' stopColor='#B67D3F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER100_linear'
                  x1='254.136'
                  y1='181.521'
                  x2='379.643'
                  y2='430.863'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#C2C4CD' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER101_linear'
                  x1='253.021'
                  y1='202.161'
                  x2='361.237'
                  y2='401.857'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CDCFD6' />
                  <stop offset='1' stopColor='#EFEFF1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER102_linear'
                  x1='264.735'
                  y1='194.909'
                  x2='381.318'
                  y2='404.646'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#DDDFE2' />
                  <stop offset='1' stopColor='white' />
                </linearGradient>
                <radialGradient
                  id='paint103_radial'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(313.264 304.458) rotate(90) scale(126.283 108.773)'
                >
                  <stop stopColor='#F5F7FF' />
                  <stop offset='1' stopColor='#B3B5C5' />
                </radialGradient>
                <linearGradient
                  id='paintMASTER104_linear'
                  x1='313.262'
                  y1='173.175'
                  x2='313.262'
                  y2='435.731'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER105_linear'
                  x1='178.969'
                  y1='196.93'
                  x2='310.247'
                  y2='424.31'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER106_linear'
                  x1='437.774'
                  y1='196.93'
                  x2='306.496'
                  y2='424.31'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='#F2EDED' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER107_linear'
                  x1='313.262'
                  y1='350.712'
                  x2='312.606'
                  y2='421.976'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' stopOpacity='0' />
                  <stop offset='1' stopColor='#D0DBFF' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER108_linear'
                  x1='294.3'
                  y1='188.215'
                  x2='311.592'
                  y2='211.644'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0245272' stopColor='#DBBA8F' />
                  <stop offset='0.344022' stopColor='#FFEFBE' />
                  <stop offset='1' stopColor='#DEBD84' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER109_linear'
                  x1='332.23'
                  y1='187.1'
                  x2='314.938'
                  y2='208.297'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#A06E48' />
                  <stop offset='0.368198' stopColor='#BD9666' />
                  <stop offset='1' stopColor='#A88255' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER110_linear'
                  x1='312.642'
                  y1='179.446'
                  x2='336.308'
                  y2='179.446'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C08D4E' />
                  <stop offset='1' stopColor='#E2C69F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER111_linear'
                  x1='299.319'
                  y1='185.985'
                  x2='315.496'
                  y2='201.046'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#C49357' />
                  <stop offset='0.483067' stopColor='white' stopOpacity='0.87' />
                  <stop offset='1' stopColor='#DFC299' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER112_linear'
                  x1='507.888'
                  y1='85.4744'
                  x2='470.984'
                  y2='242.784'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER113_linear'
                  x1='508.799'
                  y1='85.707'
                  x2='424.736'
                  y2='284.222'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.575358' stopColor='#F8F8F9' />
                  <stop offset='0.783289' stopColor='white' />
                  <stop offset='0.884809' stopColor='white' stopOpacity='0.19' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER114_linear'
                  x1='503.746'
                  y1='162.856'
                  x2='473.466'
                  y2='288.819'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER115_linear'
                  x1='505.149'
                  y1='163.231'
                  x2='443.393'
                  y2='325.546'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.292773' stopColor='#F8F8F9' stopOpacity='0.45' />
                  <stop offset='0.629289' stopColor='white' stopOpacity='0.51' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0.12' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER116_linear'
                  x1='459.952'
                  y1='290.044'
                  x2='457.731'
                  y2='316.545'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER117_linear'
                  x1='482.534'
                  y1='237.011'
                  x2='458.052'
                  y2='335.877'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER118_linear'
                  x1='483.851'
                  y1='237.351'
                  x2='441.113'
                  y2='367.602'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.21882' stopColor='#F8F8F9' stopOpacity='0.67' />
                  <stop offset='0.45675' stopColor='white' stopOpacity='0.46' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER119_linear'
                  x1='450.784'
                  y1='320.198'
                  x2='446.86'
                  y2='343.632'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER120_linear'
                  x1='450.018'
                  y1='326.307'
                  x2='457.229'
                  y2='381.603'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER121_linear'
                  x1='508.987'
                  y1='313.157'
                  x2='449.011'
                  y2='374.917'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER122_linear'
                  x1='425.846'
                  y1='366.508'
                  x2='413.236'
                  y2='356.751'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER123_linear'
                  x1='406.905'
                  y1='364.693'
                  x2='410.869'
                  y2='432.936'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER124_linear'
                  x1='419.302'
                  y1='367.858'
                  x2='390.328'
                  y2='439.314'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER125_linear'
                  x1='446.412'
                  y1='254.295'
                  x2='436.668'
                  y2='292.106'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER126_linear'
                  x1='443.775'
                  y1='263.408'
                  x2='299.426'
                  y2='468.145'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#594530' />
                  <stop offset='0.667292' stopColor='#7A5D3F' />
                  <stop offset='1' stopColor='#564029' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER127_linear'
                  x1='459.645'
                  y1='257.705'
                  x2='280.62'
                  y2='449.474'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#926C45' />
                  <stop offset='0.198565' stopColor='#B98D5F' />
                  <stop offset='0.568549' stopColor='#B98D5F' />
                  <stop offset='1' stopColor='#94693C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER128_linear'
                  x1='410.904'
                  y1='337.311'
                  x2='414.959'
                  y2='375.222'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B98D5F' />
                  <stop offset='0.0810439' stopColor='#B98D5F' />
                  <stop offset='0.312564' stopColor='#ECD4AF' />
                  <stop offset='0.465883' stopColor='#FDEED8' />
                  <stop offset='0.619479' stopColor='#ECD4AF' />
                  <stop offset='0.845306' stopColor='#B98D5F' />
                  <stop offset='1' stopColor='#B98D5F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER129_linear'
                  x1='434.65'
                  y1='327.877'
                  x2='299.97'
                  y2='430.267'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.00453841' stopColor='#B98D5F' />
                  <stop offset='0.184436' stopColor='white' />
                  <stop offset='0.808004' stopColor='#D3B790' />
                  <stop offset='0.912608' stopColor='#F7E1C2' />
                  <stop offset='1' stopColor='#D3B790' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER130_linear'
                  x1='116.782'
                  y1='85.4708'
                  x2='153.686'
                  y2='242.781'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER131_linear'
                  x1='115.872'
                  y1='85.7055'
                  x2='199.934'
                  y2='284.22'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.575358' stopColor='#F8F8F9' />
                  <stop offset='0.783289' stopColor='white' />
                  <stop offset='0.884809' stopColor='white' stopOpacity='0.19' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER132_linear'
                  x1='120.923'
                  y1='162.854'
                  x2='151.203'
                  y2='288.818'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER133_linear'
                  x1='119.519'
                  y1='163.229'
                  x2='181.276'
                  y2='325.544'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.292773' stopColor='#F8F8F9' stopOpacity='0.45' />
                  <stop offset='0.629289' stopColor='white' stopOpacity='0.51' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0.12' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER134_linear'
                  x1='164.718'
                  y1='290.042'
                  x2='166.939'
                  y2='316.543'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER135_linear'
                  x1='142.136'
                  y1='237.01'
                  x2='166.617'
                  y2='335.876'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.220856' stopColor='#FAFAFA' />
                  <stop offset='1' stopColor='#D8D9E1' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER136_linear'
                  x1='140.817'
                  y1='237.35'
                  x2='183.555'
                  y2='367.602'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.46' />
                  <stop offset='0.21882' stopColor='#F8F8F9' stopOpacity='0.67' />
                  <stop offset='0.45675' stopColor='white' stopOpacity='0.46' />
                  <stop offset='0.742389' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER137_linear'
                  x1='173.884'
                  y1='320.197'
                  x2='177.809'
                  y2='343.631'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER138_linear'
                  x1='174.652'
                  y1='326.305'
                  x2='167.44'
                  y2='381.602'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#EFEFEF' />
                  <stop offset='0.411026' stopColor='#DEDFE6' />
                  <stop offset='0.58979' stopColor='#D1D2D9' />
                  <stop offset='1' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER139_linear'
                  x1='115.683'
                  y1='313.156'
                  x2='175.659'
                  y2='374.916'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.86' />
                  <stop offset='0.319253' stopColor='#F8F8F9' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0.88' />
                  <stop offset='0.867925' stopColor='white' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER140_linear'
                  x1='198.824'
                  y1='366.506'
                  x2='211.434'
                  y2='356.75'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.374859' stopColor='#AD8357' />
                  <stop offset='0.986946' stopColor='#714538' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER141_linear'
                  x1='217.765'
                  y1='364.691'
                  x2='213.801'
                  y2='432.934'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.0306468' stopColor='#DBDCE7' />
                  <stop offset='0.274204' stopColor='#CBCCD7' />
                  <stop offset='0.675444' stopColor='#D1D2D9' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER142_linear'
                  x1='205.368'
                  y1='367.856'
                  x2='234.342'
                  y2='439.313'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F8F8F9' stopOpacity='0.78' />
                  <stop offset='0.319253' stopColor='#F8F8F9' stopOpacity='0' />
                  <stop offset='0.615431' stopColor='white' stopOpacity='0' />
                  <stop offset='0.867925' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER143_linear'
                  x1='178.257'
                  y1='254.296'
                  x2='188.001'
                  y2='292.107'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='white' />
                  <stop offset='1' stopColor='white' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER144_linear'
                  x1='180.893'
                  y1='263.408'
                  x2='325.242'
                  y2='468.145'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#594530' />
                  <stop offset='0.667292' stopColor='#7A5D3F' />
                  <stop offset='1' stopColor='#564029' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER145_linear'
                  x1='165.023'
                  y1='257.705'
                  x2='344.048'
                  y2='449.474'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#926C45' />
                  <stop offset='0.198565' stopColor='#B98D5F' />
                  <stop offset='0.568549' stopColor='#B98D5F' />
                  <stop offset='1' stopColor='#94693C' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER146_linear'
                  x1='213.763'
                  y1='337.312'
                  x2='209.708'
                  y2='375.223'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#B98D5F' />
                  <stop offset='0.0810439' stopColor='#B98D5F' />
                  <stop offset='0.312564' stopColor='#ECD4AF' />
                  <stop offset='0.465883' stopColor='#FDEED8' />
                  <stop offset='0.619479' stopColor='#ECD4AF' />
                  <stop offset='0.845306' stopColor='#B98D5F' />
                  <stop offset='1' stopColor='#B98D5F' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER147_linear'
                  x1='190.018'
                  y1='327.877'
                  x2='324.698'
                  y2='430.267'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0.00453841' stopColor='#B98D5F' />
                  <stop offset='0.184436' stopColor='white' />
                  <stop offset='0.808004' stopColor='#D3B790' />
                  <stop offset='0.912608' stopColor='#F7E1C2' />
                  <stop offset='1' stopColor='#D3B790' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER148_linear'
                  x1='316.631'
                  y1='426.253'
                  x2='297.337'
                  y2='453.787'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#D5D7D9' />
                  <stop offset='1' stopColor='#E2E3E7' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER149_linear'
                  x1='311.436'
                  y1='461.434'
                  x2='344.12'
                  y2='459.191'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9A9CA5' />
                  <stop offset='0.259135' stopColor='#C4C6CF' />
                  <stop offset='0.878536' stopColor='#E2E3E7' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER150_linear'
                  x1='295.825'
                  y1='420.259'
                  x2='321.063'
                  y2='416.162'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F4F5F8' />
                  <stop offset='1' stopColor='#F5F6F7' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER151_linear'
                  x1='312.149'
                  y1='417.475'
                  x2='323.863'
                  y2='418.591'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#916437' />
                  <stop offset='0.522184' stopColor='#AF8356' />
                  <stop offset='1' stopColor='#AF8356' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER152_linear'
                  x1='306.012'
                  y1='490.549'
                  x2='297.896'
                  y2='494.46'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#CFAC82' />
                  <stop offset='0.309893' stopColor='#FCEDD7' />
                  <stop offset='0.523799' stopColor='#F8EDC0' />
                  <stop offset='0.613641' stopColor='#CFAC82' />
                  <stop offset='1' stopColor='#CFAC82' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER153_linear'
                  x1='43.3005'
                  y1='286.348'
                  x2='195.458'
                  y2='286.348'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF0DA' />
                  <stop offset='0.321814' stopColor='#FFE6C0' stopOpacity='0.22' />
                  <stop offset='1' stopColor='#FFE6C0' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER154_linear'
                  x1='69.573'
                  y1='286.721'
                  x2='196.948'
                  y2='286.348'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFC164' />
                  <stop offset='0.321814' stopColor='#FFE6C0' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFE6C0' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER155_linear'
                  x1='581.658'
                  y1='286.348'
                  x2='429.501'
                  y2='286.348'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFF0DA' />
                  <stop offset='0.321814' stopColor='#FFE6C0' stopOpacity='0.22' />
                  <stop offset='1' stopColor='#FFE6C0' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  id='paintMASTER156_linear'
                  x1='555.386'
                  y1='286.721'
                  x2='428.011'
                  y2='286.348'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FFC164' />
                  <stop offset='0.321814' stopColor='#FFE6C0' stopOpacity='0' />
                  <stop offset='1' stopColor='#FFE6C0' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ) : (
          <svg
            width={BadgesSize[size].badge.width}
            height={BadgesSize[size].badge.height}
            viewBox='0 0 425 392'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g opacity='0.5'>
              <path
                d='M269.997 278H322.513V332.172L296.255 344.882L269.997 357V278Z'
                fill='url(#paintMTLOCKED0_linear)'
              />
              <g filter='url(#filterMTLOCKED0_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M322.755 333L269.755 357.5V356.5L322.755 332V333Z'
                  fill='url(#paintMTLOCKED1_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M322.755 337L269.755 361.5V357.5L322.755 333V337Z'
                  fill='url(#paintMTLOCKED2_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M322.755 339L269.755 363.5V361.5L322.755 337V339Z'
                  fill='url(#paintMTLOCKED3_linear)'
                />
              </g>
              <g filter='url(#filterMTLOCKED1_f)'>
                <path
                  d='M270.255 341.5L313.755 305V310.5L270.255 360V341.5Z'
                  fill='url(#paintMTLOCKED4_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M319.255 292V325.091C317.764 325.439 316.225 326.32 314.973 327.513C313.667 328.756 312.633 330.376 312.304 332.159L280.412 347.096C278.751 347.718 277.533 347.795 276.644 347.571C275.742 347.345 275.116 346.794 274.673 346.045C274.07 345.026 273.827 343.671 273.755 342.389V317H272.755V340.496C272.727 341.058 272.716 341.721 272.755 342.423V351.786L280.801 348.018C280.846 348.001 280.891 347.984 280.936 347.966L280.932 347.956L313.212 332.838L313.25 332.571C313.48 330.96 314.408 329.431 315.662 328.237C316.918 327.041 318.455 326.224 319.837 325.993L320.255 325.924V292H319.255ZM277.076 348.658C276.841 348.635 276.616 348.595 276.4 348.541C275.195 348.239 274.365 347.49 273.812 346.555C273.793 346.522 273.774 346.489 273.755 346.455V350.214L277.076 348.658Z'
                fill='url(#paintMTLOCKED5_linear)'
              />
              <g opacity='0.8' filter='url(#filterMTLOCKED2_f)'>
                <path
                  d='M322.755 300.5V281.5L270.255 307V328L322.755 300.5Z'
                  fill='url(#paintMTLOCKED6_linear)'
                />
              </g>
            </g>
            <g opacity='0.5'>
              <path
                d='M156.513 278H103.997V332.172L130.255 344.882L156.513 357V278Z'
                fill='url(#paintMTLOCKED7_linear)'
              />
              <g filter='url(#filterMTLOCKED3_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M103.755 333L156.755 357.5V356.5L103.755 332V333Z'
                  fill='url(#paintMTLOCKED8_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M103.755 337L156.755 361.5V357.5L103.755 333V337Z'
                  fill='url(#paintMTLOCKED9_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M103.755 339L156.755 363.5V361.5L103.755 337V339Z'
                  fill='url(#paintMTLOCKED10_linear)'
                />
              </g>
              <g filter='url(#filterMTLOCKED4_f)'>
                <path
                  d='M156.255 341.5L112.755 305V310.5L156.255 360V341.5Z'
                  fill='url(#paintMTLOCKED11_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M107.255 292V325.091C108.746 325.439 110.285 326.32 111.537 327.513C112.843 328.756 113.877 330.376 114.206 332.159L146.098 347.096C147.759 347.718 148.977 347.795 149.866 347.571C150.767 347.345 151.394 346.794 151.837 346.045C152.44 345.026 152.683 343.671 152.755 342.389V317H153.755V340.496C153.782 341.058 153.793 341.721 153.755 342.423V351.786L145.709 348.018C145.664 348.001 145.619 347.984 145.574 347.966L145.577 347.956L113.298 332.838L113.26 332.571C113.03 330.96 112.102 329.431 110.848 328.237C109.592 327.041 108.055 326.224 106.672 325.993L106.255 325.924V292H107.255ZM149.434 348.658C149.669 348.635 149.894 348.595 150.109 348.541C151.315 348.239 152.144 347.49 152.697 346.555C152.717 346.522 152.736 346.489 152.755 346.455V350.214L149.434 348.658Z'
                fill='url(#paintMTLOCKED12_linear)'
              />
              <g opacity='0.8' filter='url(#filterMTLOCKED5_f)'>
                <path
                  d='M103.755 300.5V281.5L156.255 307V328L103.755 300.5Z'
                  fill='url(#paintMTLOCKED13_linear)'
                />
              </g>
            </g>
            <g opacity='0.5'>
              <path
                d='M165.255 320H261.255V367L213.255 391L165.255 367V320Z'
                fill='url(#paintMTLOCKED14_linear)'
              />
              <path
                opacity='0.8'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M230.065 382.595L213.255 391L165.255 367V323H178.255C178.492 323.53 178.729 324.062 178.966 324.595C190.162 349.699 202.457 377.266 230.065 382.595Z'
                fill='url(#paintMTLOCKED15_linear)'
              />
              <g opacity='0.8' filter='url(#filterMTLOCKED6_f)'>
                <path
                  d='M213.755 357.5L260.755 333.5V324.5H166.255V333.5L213.755 357.5Z'
                  fill='url(#paintMTLOCKED16_linear)'
                />
              </g>
              <g filter='url(#filterMTLOCKED7_f)'>
                <path
                  d='M180.755 344.5C176.09 351.94 176.089 354.001 180.756 358.501C179.922 358.501 179.355 361.201 195.755 372.001C216.255 385.5 234.255 372.5 246.755 358.501C259.255 344.501 255.255 344.501 252.255 348.501C249.255 352.501 242.255 366.501 218.255 372.001C194.255 377.501 199.255 315 180.755 344.5Z'
                  fill='url(#paintMTLOCKED17_linear)'
                />
              </g>
              <g filter='url(#filterMTLOCKED8_d)'>
                <path
                  d='M213.255 388L165.255 365V368.5L213.255 391.5L261.255 368.5V365.5L213.255 388Z'
                  fill='url(#paintMTLOCKED18_linear)'
                />
                <path
                  d='M213.255 385L165.255 362V366.5L213.255 388.5L261.255 366.5V362.5L213.255 385Z'
                  fill='url(#paintMTLOCKED19_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M261.255 362.5L212.753 385.555L165.255 362.5V361.5L212.757 384.446L261.255 361.5V362.5Z'
                  fill='url(#paintMTLOCKED20_linear)'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M257.755 326V357.401L257.363 357.488C255.708 357.856 254.427 358.895 253.552 360.041C253.116 360.612 252.788 361.203 252.57 361.732C252.349 362.27 252.255 362.715 252.255 363V363.327L212.751 380.547L173.838 362.86L173.774 362.637C173.407 361.354 172.557 360.219 171.609 359.311C170.663 358.405 169.655 357.759 169.031 357.447L168.755 357.309V327H169.755V356.698C170.454 357.084 171.404 357.731 172.301 358.589C173.269 359.516 174.205 360.72 174.667 362.138L212.759 379.453L251.277 362.663C251.326 362.268 251.455 361.817 251.646 361.352C251.897 360.741 252.269 360.075 252.757 359.434C253.666 358.243 255.004 357.11 256.755 356.611V326H257.755Z'
                fill='url(#paintMTLOCKED21_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M213.255 358V377.5H212.255V358H213.255Z'
                fill='url(#paintMTLOCKED22_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M209.758 371.465C207.767 373.761 205.343 374.271 203.673 373.993L203.837 373.007C205.168 373.229 207.243 372.839 209.002 370.81C210.769 368.772 212.255 365.034 212.255 358.5H213.255C213.255 365.166 211.741 369.178 209.758 371.465Z'
                fill='url(#paintMTLOCKED23_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M215.752 371.465C217.742 373.761 220.167 374.271 221.837 373.993L221.673 373.007C220.342 373.229 218.267 372.839 216.507 370.81C214.741 368.772 213.255 365.034 213.255 358.5H212.255C212.255 365.166 213.769 369.178 215.752 371.465Z'
                fill='url(#paintMTLOCKED24_linear)'
              />
              <g opacity='0.8' filter='url(#filterMTLOCKED9_f)'>
                <path
                  d='M213.255 338L260.755 333.5V324.5H166.255V333.5L213.255 338Z'
                  fill='url(#paintMTLOCKED25_linear)'
                />
              </g>
            </g>
            <g opacity='0.5'>
              <path
                d='M212.255 60L87.2549 127.999L87.2549 282.506L212.255 350.505L337.255 282.506L337.255 127.999L212.255 60Z'
                fill='url(#paintMTLOCKED26_linear)'
              />
              <path
                d='M212.105 82L106.255 139.581L106.255 270.419L212.105 328L317.955 270.419L317.955 139.581L212.105 82Z'
                fill='url(#paintMTLOCKED27_linear)'
              />
              <g filter='url(#filterMTLOCKED10_f)'>
                <path
                  d='M212.105 82L106.255 139.581L106.255 270.419L212.105 328L317.955 270.419L317.955 139.581L212.105 82Z'
                  fill='url(#paintMTLOCKED28_linear)'
                />
              </g>
            </g>
            <mask
              id='maskMSLOCKED0'
              maskUnits='userSpaceOnUse'
              x='115'
              y='94'
              width='196'
              height='223'
            >
              <path
                d='M205.062 96.1811L123.672 140.417C118.484 143.236 115.255 148.667 115.255 154.571L115.255 255.819C115.255 261.723 118.484 267.154 123.672 269.974L205.062 314.209C209.859 316.816 215.651 316.816 220.448 314.209L301.838 269.974C307.025 267.154 310.255 261.723 310.255 255.819L310.255 154.571C310.255 148.667 307.025 143.236 301.838 140.417L220.448 96.1811C215.651 93.5738 209.859 93.5738 205.062 96.1811Z'
                fill='white'
              />
            </mask>
            <g mask='url(#maskMSLOCKED0)'>
              <g opacity='0.5'>
                <path
                  d='M213.255 125.5C213.255 117.1 199.922 104.333 193.255 99H213.255V125.5Z'
                  fill='url(#paintMTLOCKED29_linear)'
                />
                <path
                  d='M213.255 125.5C213.255 117.1 226.588 104.333 233.255 99H213.255V125.5Z'
                  fill='url(#paintMTLOCKED30_linear)'
                />
                <rect
                  x='213.266'
                  y='85'
                  width='19.8138'
                  height='19.8138'
                  transform='rotate(45 213.266 85)'
                  fill='url(#paintMTLOCKED31_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M213.266 112.738L227.135 98.8691L227.418 99.1519L213.266 113.304L199.114 99.1519L199.397 98.8691L213.266 112.738Z'
                  fill='url(#paintMTLOCKED32_linear)'
                />
              </g>
              <path
                opacity='0.5'
                d='M204.755 96.5L196.255 101V91H230.255V101.5L221.755 96.5C214.155 93.3 207.255 95.1667 204.755 96.5Z'
                fill='url(#paintMTLOCKED33_linear)'
              />
            </g>
            <mask
              id='maskMSLOCKED1'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='425'
              height='341'
            >
              <path d='M0.254883 0H424.255V341H0.254883V0Z' fill='#ABABAB' />
            </mask>
            <g mask='url(#maskMSLOCKED1)'>
              <g opacity='0.5'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M330.514 203.328C333.503 184.562 326.886 168.885 319.521 159.916L334.787 123.505L388.379 9.20454C400.05 35.0128 410.992 103.466 361.391 170.812C347.562 189.587 337.583 199.494 330.514 203.328Z'
                  fill='url(#paintMTLOCKED34_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M330.514 203.328C333.503 184.562 326.886 168.885 319.521 159.916L334.787 123.506L388.379 9.20455C400.05 35.0128 410.992 103.466 361.391 170.812C347.562 189.588 337.583 199.494 330.514 203.328Z'
                  fill='url(#paintMTLOCKED35_linear)'
                />
                <g filter='url(#filterMTLOCKED11_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M319.865 229.45C333.003 208.681 332.659 189.409 327.674 175.244L409.069 84.8555C407.213 129.978 386.906 222.055 320.525 229.379C320.304 229.403 320.084 229.427 319.865 229.45Z'
                    fill='url(#paintMTLOCKED36_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M320.25 229.561C333.388 208.792 333.044 189.52 328.059 175.356L409.454 84.9667C407.598 130.09 387.291 222.166 320.91 229.49C320.689 229.514 320.469 229.538 320.25 229.561Z'
                  fill='url(#paintMTLOCKED37_linear)'
                />
                <path
                  opacity='0.8'
                  d='M362.962 185.738L332.015 205.645L330.144 212.908L362.962 185.738Z'
                  fill='url(#paintMTLOCKED38_linear)'
                />
                <g filter='url(#filterMTLOCKED12_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M293.51 258.186C314.203 241.836 324.689 225.41 328.919 210.524L404.537 155.058C400.267 195.11 372.075 271.215 293.51 258.186Z'
                    fill='url(#paintMTLOCKED39_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M293.51 258.186C314.203 241.836 324.689 225.41 328.919 210.524L404.537 155.058C400.267 195.11 372.075 271.215 293.51 258.186Z'
                  fill='url(#paintMTLOCKED40_linear)'
                />
                <path
                  d='M366.612 217.659L320.077 229.934L316.518 235.73L366.612 217.659Z'
                  fill='url(#paintMTLOCKED41_linear)'
                />
                <g filter='url(#filterMTLOCKED13_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M317.909 233.072C308.664 246.251 293.876 259.943 271.335 273.246C262.625 278.387 255.121 283.195 248.688 287.684L248.084 288.188C355.907 294.475 390.453 238.152 394.396 208.631L317.909 233.072Z'
                    fill='url(#paintMTLOCKED42_linear)'
                  />
                </g>
                <path
                  d='M320.637 269.837L295.145 256.555L290.024 260.399L320.637 269.837Z'
                  fill='url(#paintMTLOCKED43_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M293.105 258.507C286.817 263.443 279.597 268.371 271.335 273.247C251.022 285.236 237.272 295.412 228.361 303.967C229.468 306.55 235.598 306.242 244.837 300.789C263.564 289.736 280.163 287.86 309.386 289.359C337.783 290.816 346.565 287.751 351.607 282.656C340.021 277.608 311.039 265.631 293.105 258.507Z'
                  fill='url(#paintMTLOCKED44_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M293.105 258.507C286.817 263.443 279.597 268.371 271.335 273.247C251.022 285.236 237.272 295.412 228.361 303.967C229.468 306.55 235.598 306.242 244.837 300.789C263.564 289.736 280.163 287.86 309.386 289.359C337.783 290.816 346.565 287.751 351.607 282.656C340.021 277.608 311.039 265.631 293.105 258.507Z'
                  fill='url(#paintMTLOCKED45_linear)'
                />
                <path
                  d='M275.254 273.632C348.638 221.288 339.457 182.779 321.691 157.547L320.833 158.875C336.742 189.308 337.721 221.573 270.442 268.261C181.745 325.14 194.335 345.203 195.742 351.762C196.869 357.009 202.022 355.445 204.458 354.008C206.139 339.467 208.29 327.113 275.254 273.632Z'
                  fill='url(#paintMTLOCKED46_linear)'
                />
                <path
                  d='M275.254 273.632C348.638 221.288 339.457 182.779 321.691 157.547L320.833 158.875C340.271 187.635 342.813 221.852 270.442 268.261C181.745 325.14 194.335 345.203 195.742 351.762C196.869 357.009 202.022 355.445 204.458 354.008C196.225 346.551 203.163 325.054 275.254 273.632Z'
                  fill='url(#paintMTLOCKED47_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M270.442 268.261C273.311 268.709 277.735 269.07 281.951 268.931C296.841 257.671 307.948 246.946 315.876 237.132C317.131 235.387 318.427 233.794 319.453 232.355C317.954 231.969 315.567 232.211 312.894 233.763C303.198 244.424 289.487 256.028 270.442 268.261Z'
                  fill='url(#paintMTLOCKED48_linear)'
                />
              </g>
              <g opacity='0.5'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M93.3268 203.328C90.3377 184.562 96.9551 168.885 104.32 159.916L89.0537 123.505L35.4624 9.20454C23.7911 35.0128 12.8488 103.466 62.4501 170.812C76.2786 189.587 86.2583 199.494 93.3268 203.328Z'
                  fill='url(#paintMTLOCKED49_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M93.3268 203.328C90.3377 184.562 96.955 168.885 104.32 159.916L89.054 123.506L35.4624 9.20455C23.7911 35.0128 12.8488 103.466 62.45 170.812C76.2786 189.588 86.2583 199.494 93.3268 203.328Z'
                  fill='url(#paintMTLOCKED50_linear)'
                />
                <g filter='url(#filterMTLOCKED14_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M103.976 229.45C90.838 208.681 91.1818 189.409 96.1674 175.244L14.7717 84.8555C16.6279 129.978 36.9354 222.055 103.316 229.379C103.537 229.403 103.757 229.427 103.976 229.45Z'
                    fill='url(#paintMTLOCKED51_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M103.591 229.561C90.4532 208.792 90.7969 189.52 95.7824 175.356L14.3866 84.9667C16.2428 130.09 36.5503 222.166 102.931 229.49C103.152 229.514 103.372 229.538 103.591 229.561Z'
                  fill='url(#paintMTLOCKED52_linear)'
                />
                <path
                  opacity='0.8'
                  d='M60.8789 185.738L91.8256 205.645L93.6972 212.908L60.8789 185.738Z'
                  fill='url(#paintMTLOCKED53_linear)'
                />
                <g filter='url(#filterMTLOCKED15_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M130.331 258.186C109.638 241.836 99.1518 225.41 94.9216 210.524L19.3045 155.058C23.5738 195.11 51.7659 271.215 130.331 258.186Z'
                    fill='url(#paintMTLOCKED54_linear)'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M130.331 258.186C109.638 241.836 99.1519 225.41 94.9216 210.524L19.3045 155.058C23.5738 195.11 51.7659 271.215 130.331 258.186Z'
                  fill='url(#paintMTLOCKED55_linear)'
                />
                <path
                  d='M57.2289 217.659L103.764 229.934L107.323 235.73L57.2289 217.659Z'
                  fill='url(#paintMTLOCKED56_linear)'
                />
                <g filter='url(#filterMTLOCKED16_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M105.932 233.072C115.177 246.251 129.966 259.943 152.506 273.246C161.216 278.387 168.72 283.195 175.153 287.684L175.757 288.188C67.9339 294.475 33.3877 238.152 29.4448 208.631L105.932 233.072Z'
                    fill='url(#paintMTLOCKED57_linear)'
                  />
                </g>
                <path
                  d='M103.204 269.837L128.696 256.555L133.817 260.399L103.204 269.837Z'
                  fill='url(#paintMTLOCKED58_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M130.737 258.507C137.024 263.443 144.244 268.371 152.506 273.247C172.819 285.236 186.569 295.412 195.48 303.967C194.373 306.55 188.243 306.242 179.004 300.789C160.277 289.736 143.678 287.86 114.455 289.359C86.0584 290.816 77.2763 287.751 72.2338 282.656C83.8205 277.608 112.803 265.631 130.737 258.507Z'
                  fill='url(#paintMTLOCKED59_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M130.737 258.507C137.024 263.443 144.244 268.371 152.506 273.247C172.819 285.236 186.569 295.412 195.48 303.967C194.373 306.55 188.243 306.242 179.004 300.789C160.277 289.736 143.678 287.86 114.455 289.359C86.0584 290.816 77.2763 287.751 72.2338 282.656C83.8205 277.608 112.803 265.631 130.737 258.507Z'
                  fill='url(#paintMTLOCKED60_linear)'
                />
                <path
                  d='M148.587 273.632C75.2033 221.288 84.3841 182.779 102.15 157.547L103.008 158.875C87.0992 189.308 86.1197 221.573 153.399 268.261C242.096 325.14 229.507 345.203 228.099 351.762C226.972 357.009 221.819 355.445 219.383 354.008C217.702 339.467 215.551 327.113 148.587 273.632Z'
                  fill='url(#paintMTLOCKED61_linear)'
                />
                <path
                  d='M148.587 273.632C75.2033 221.288 84.3841 182.779 102.15 157.547L103.008 158.875C83.5703 187.635 81.0284 221.852 153.399 268.261C242.096 325.14 229.507 345.203 228.099 351.762C226.972 357.009 221.819 355.445 219.383 354.008C227.616 346.551 220.678 325.054 148.587 273.632Z'
                  fill='url(#paintMTLOCKED62_linear)'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M153.399 268.261C150.53 268.709 146.106 269.07 141.89 268.931C127 257.671 115.893 246.946 107.965 237.132C106.71 235.387 105.414 233.794 104.388 232.355C105.887 231.969 108.274 232.211 110.947 233.763C120.643 244.424 134.354 256.028 153.399 268.261Z'
                  fill='url(#paintMTLOCKED63_linear)'
                />
              </g>
            </g>
            <mask
              id='maskMSLOCKED2'
              maskUnits='userSpaceOnUse'
              x='188'
              y='302'
              width='51'
              height='51'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M238.004 340.457C238.663 341.531 238.177 342.94 236.995 343.379L213.973 351.919C213.524 352.086 213.031 352.086 212.582 351.919L189.56 343.379C188.378 342.94 187.892 341.531 188.551 340.457L211.573 302.954C212.354 301.682 214.201 301.682 214.982 302.954L238.004 340.457Z'
                fill='url(#paintMTLOCKED64_linear)'
              />
            </mask>
            <g mask='url(#maskMSLOCKED2)'>
              <g opacity='0.5'>
                <path
                  d='M213.418 353.265L239.19 342.68L213.418 296.199L213.418 353.265Z'
                  fill='url(#paintMTLOCKED65_linear)'
                />
                <path
                  d='M213.419 353.265L187.647 342.68L213.419 296.199L213.419 353.265Z'
                  fill='url(#paintMTLOCKED66_linear)'
                />
              </g>
            </g>
            <path
              opacity='0.5'
              d='M213.255 314L224.255 318L218.755 309L213.255 300.5L207.755 309L202.255 318L213.255 314Z'
              fill='url(#paintMTLOCKED67_linear)'
            />
            <path
              opacity='0.5'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M213.255 300.5V314L202.255 318L213.255 300.5Z'
              fill='url(#paintMTLOCKED68_linear)'
            />
            <path
              opacity='0.5'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M212.546 377.955L201.255 373L203.755 373L212.756 376.951L221.755 372.955H223.962L212.962 377.955C212.83 378.015 212.678 378.015 212.546 377.955Z'
              fill='url(#paintMTLOCKED69_linear)'
            />
            <defs>
              <filter
                id='filterMTLOCKED0_d'
                x='265.755'
                y='324'
                width='61'
                height='39.5'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='2' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED1_f'
                x='262.255'
                y='297'
                width='59.5'
                height='71'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED2_f'
                x='266.255'
                y='277.5'
                width='60.5'
                height='54.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED3_d'
                x='99.7549'
                y='324'
                width='61'
                height='39.5'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='2' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED4_f'
                x='104.755'
                y='297'
                width='59.5'
                height='71'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED5_f'
                x='99.7549'
                y='277.5'
                width='60.5'
                height='54.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED6_f'
                x='162.255'
                y='320.5'
                width='102.5'
                height='41'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED7_f'
                x='169.256'
                y='328.55'
                width='94.076'
                height='57.1344'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED8_d'
                x='162.255'
                y='354.5'
                width='102'
                height='37'
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
                <feOffset dy='-4' />
                <feGaussianBlur stdDeviation='1.5' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED9_f'
                x='162.255'
                y='320.5'
                width='102.5'
                height='21.5'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
              </filter>
              <filter
                id='filterMTLOCKED10_f'
                x='105.955'
                y='81.7'
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
                id='filterMTLOCKED11_d'
                x='314.076'
                y='80.996'
                width='96.9231'
                height='152.314'
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
                <feOffset dx='-1.92973' />
                <feGaussianBlur stdDeviation='1.92973' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED12_d'
                x='287.721'
                y='151.199'
                width='118.745'
                height='112.328'
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
                <feOffset dx='-1.92973' />
                <feGaussianBlur stdDeviation='1.92973' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED13_d'
                x='238.436'
                y='196.982'
                width='165.609'
                height='99.3395'
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
                <feOffset dy='-2' />
                <feGaussianBlur stdDeviation='4.82432' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED14_d'
                x='8.98251'
                y='80.996'
                width='96.9231'
                height='152.314'
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
                <feOffset dx='-1.92973' />
                <feGaussianBlur stdDeviation='1.92973' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED15_d'
                x='13.5153'
                y='151.199'
                width='118.745'
                height='112.328'
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
                <feOffset dx='-1.92973' />
                <feGaussianBlur stdDeviation='1.92973' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.446731 0 0 0 0 0.444028 0 0 0 0 0.579167 0 0 0 0.12 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <filter
                id='filterMTLOCKED16_d'
                x='19.7962'
                y='196.982'
                width='165.609'
                height='99.3395'
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
                <feOffset dy='-2' />
                <feGaussianBlur stdDeviation='4.82432' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0.365689 0 0 0 0 0.351111 0 0 0 0 0.533333 0 0 0 0.2 0'
                />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
              </filter>
              <linearGradient
                id='paintMTLOCKED0_linear'
                x1='296.255'
                y1='278'
                x2='296.255'
                y2='357'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED1_linear'
                x1='296.255'
                y1='332'
                x2='296.255'
                y2='357.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED2_linear'
                x1='296.255'
                y1='333'
                x2='296.255'
                y2='361.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED3_linear'
                x1='296.255'
                y1='337'
                x2='296.255'
                y2='363.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED4_linear'
                x1='292.005'
                y1='305'
                x2='292.005'
                y2='360'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED5_linear'
                x1='296.493'
                y1='292'
                x2='296.493'
                y2='351.786'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED6_linear'
                x1='296.505'
                y1='281.5'
                x2='296.505'
                y2='328'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED7_linear'
                x1='130.255'
                y1='278'
                x2='130.255'
                y2='357'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED8_linear'
                x1='130.255'
                y1='332'
                x2='130.255'
                y2='357.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED9_linear'
                x1='130.255'
                y1='333'
                x2='130.255'
                y2='361.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED10_linear'
                x1='130.255'
                y1='337'
                x2='130.255'
                y2='363.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED11_linear'
                x1='134.505'
                y1='305'
                x2='134.505'
                y2='360'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED12_linear'
                x1='130.017'
                y1='292'
                x2='130.017'
                y2='351.786'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED13_linear'
                x1='130.005'
                y1='281.5'
                x2='130.005'
                y2='328'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED14_linear'
                x1='213.255'
                y1='320'
                x2='213.255'
                y2='391'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED15_linear'
                x1='197.66'
                y1='323'
                x2='197.66'
                y2='391'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED16_linear'
                x1='213.505'
                y1='324.5'
                x2='213.505'
                y2='357.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED17_linear'
                x1='216.294'
                y1='336.55'
                x2='216.294'
                y2='377.684'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED18_linear'
                x1='213.255'
                y1='365'
                x2='213.255'
                y2='391.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED19_linear'
                x1='213.255'
                y1='362'
                x2='213.255'
                y2='388.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED20_linear'
                x1='213.255'
                y1='361.5'
                x2='213.255'
                y2='385.555'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED21_linear'
                x1='213.255'
                y1='326'
                x2='213.255'
                y2='380.547'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED22_linear'
                x1='212.755'
                y1='358'
                x2='212.755'
                y2='377.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED23_linear'
                x1='208.464'
                y1='358.5'
                x2='208.464'
                y2='374.062'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED24_linear'
                x1='217.046'
                y1='358.5'
                x2='217.046'
                y2='374.062'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED25_linear'
                x1='213.505'
                y1='324.5'
                x2='213.505'
                y2='338'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED26_linear'
                x1='212.255'
                y1='60'
                x2='212.255'
                y2='350.505'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED27_linear'
                x1='212.105'
                y1='82'
                x2='212.105'
                y2='328'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED28_linear'
                x1='212.105'
                y1='82'
                x2='212.105'
                y2='328'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED29_linear'
                x1='203.255'
                y1='99'
                x2='203.255'
                y2='125.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED30_linear'
                x1='223.255'
                y1='99'
                x2='223.255'
                y2='125.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED31_linear'
                x1='223.173'
                y1='85'
                x2='223.173'
                y2='104.814'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED32_linear'
                x1='220.342'
                y1='92.076'
                x2='206.19'
                y2='106.228'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED33_linear'
                x1='213.255'
                y1='91'
                x2='213.255'
                y2='101.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED34_linear'
                x1='388.024'
                y1='9.11317'
                x2='337.511'
                y2='205.131'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED35_linear'
                x1='388.024'
                y1='9.11317'
                x2='337.511'
                y2='205.131'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED36_linear'
                x1='384.37'
                y1='78.4905'
                x2='343.874'
                y2='235.637'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED37_linear'
                x1='384.754'
                y1='78.6017'
                x2='344.259'
                y2='235.748'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED38_linear'
                x1='350.858'
                y1='182.619'
                x2='342.248'
                y2='216.027'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED39_linear'
                x1='365.663'
                y1='145.041'
                x2='333.829'
                y2='268.576'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED40_linear'
                x1='365.663'
                y1='145.041'
                x2='333.829'
                y2='268.576'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED41_linear'
                x1='345.308'
                y1='212.169'
                x2='337.822'
                y2='241.22'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED42_linear'
                x1='335.595'
                y1='193.478'
                x2='307.259'
                y2='303.437'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED43_linear'
                x1='306.765'
                y1='259.55'
                x2='305.143'
                y2='265.844'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED44_linear'
                x1='298.589'
                y1='259.92'
                x2='283.351'
                y2='319.05'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED45_linear'
                x1='298.589'
                y1='259.92'
                x2='283.351'
                y2='319.05'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED46_linear'
                x1='295.119'
                y1='150.7'
                x2='239.683'
                y2='365.822'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED47_linear'
                x1='295.119'
                y1='150.7'
                x2='239.683'
                y2='365.822'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED48_linear'
                x1='300.812'
                y1='227.552'
                x2='289.083'
                y2='273.065'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED49_linear'
                x1='35.817'
                y1='9.11317'
                x2='86.3296'
                y2='205.131'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED50_linear'
                x1='35.817'
                y1='9.11317'
                x2='86.3296'
                y2='205.131'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED51_linear'
                x1='39.4716'
                y1='78.4905'
                x2='79.9673'
                y2='235.637'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED52_linear'
                x1='39.0866'
                y1='78.6017'
                x2='79.5823'
                y2='235.748'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED53_linear'
                x1='72.9834'
                y1='182.619'
                x2='81.5926'
                y2='216.027'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED54_linear'
                x1='58.1778'
                y1='145.041'
                x2='90.0121'
                y2='268.576'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED55_linear'
                x1='58.1779'
                y1='145.041'
                x2='90.0121'
                y2='268.576'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED56_linear'
                x1='78.5329'
                y1='212.169'
                x2='86.0192'
                y2='241.22'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED57_linear'
                x1='88.246'
                y1='193.478'
                x2='116.582'
                y2='303.437'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED58_linear'
                x1='117.076'
                y1='259.55'
                x2='118.698'
                y2='265.844'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED59_linear'
                x1='125.252'
                y1='259.92'
                x2='140.49'
                y2='319.05'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED60_linear'
                x1='125.252'
                y1='259.92'
                x2='140.49'
                y2='319.05'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED61_linear'
                x1='128.722'
                y1='150.7'
                x2='184.158'
                y2='365.822'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED62_linear'
                x1='128.722'
                y1='150.7'
                x2='184.158'
                y2='365.822'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED63_linear'
                x1='123.029'
                y1='227.552'
                x2='134.758'
                y2='273.065'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED64_linear'
                x1='215.77'
                y1='315.593'
                x2='199.429'
                y2='339.902'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#D5D7D9' />
                <stop offset='1' stopColor='#E2E3E7' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED65_linear'
                x1='226.304'
                y1='353.265'
                x2='226.304'
                y2='296.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED66_linear'
                x1='200.533'
                y1='353.265'
                x2='200.533'
                y2='296.199'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED67_linear'
                x1='213.255'
                y1='300.5'
                x2='213.255'
                y2='318'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED68_linear'
                x1='207.755'
                y1='300.5'
                x2='207.755'
                y2='318'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
              <linearGradient
                id='paintMTLOCKED69_linear'
                x1='212.608'
                y1='372.955'
                x2='212.608'
                y2='378'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#AACCFF' stopOpacity='0' />
                <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
    </div>
  )
}

/**
 *
 * @param {string} size accepts 3 possible values. | sm -> 100*100px | md 200*200px | lg -> 300*300px | by default is sm
 * @param {boolean} shadow  activate the shadows | by default is true
 * @param {boolean} animation  activate the animation | by default is false
 * @param {number} stars sets the number of stars obtained 0 is none and 3 is the maximum  | -1 -> disable stars | by default is 0
 * @param {number} level  sets the range level (diamond) from 0 to 3 | -1 -> disable diamonds | by default is 0
 * @param {string} rank  takes 4 possible strict values. | explorer | creator | artisan | master | by default is explorer
 * @param {boolean} light  activate the lights | by default is true
 * @param {boolean} locked  show your locked version | by default is false
 * @returns {jsx} jsx component
 */
export const BadgeRank = ({
  animation = false,
  level = 0,
  lights = true,
  locked = false,
  mod = 'data',
  rank = 'explorer',
  shadow = true,
  size = 'sm',
  stars = 0
}: BadgesRankProps) => {
  const ranks = {
    explorer: (
      <Explorer
        shadow={shadow}
        animation={animation}
        stars={stars}
        level={level}
        lights={lights}
        locked={locked}
        size={size}
        rank={rank}
        mod={mod}
      />
    ),
    creator: (
      <Creator
        shadow={shadow}
        animation={animation}
        stars={stars}
        level={level}
        lights={lights}
        locked={locked}
        size={size}
        rank={rank}
        mod={mod}
      />
    ),
    artisan: (
      <Artisan
        shadow={shadow}
        animation={animation}
        stars={stars}
        level={level}
        lights={lights}
        locked={locked}
        size={size}
        rank={rank}
        mod={mod}
      />
    ),
    master: (
      <Master
        shadow={shadow}
        animation={animation}
        stars={stars}
        level={level}
        lights={lights}
        locked={locked}
        size={size}
        rank={rank}
        mod={mod}
      />
    )
  }

  return ranks[rank] || ranks.explorer
}
