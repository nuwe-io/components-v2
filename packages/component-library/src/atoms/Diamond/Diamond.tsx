const colors = {
  frontend: '#D14BFC',
  backend: '#FA8529',
  fullstack: '#E162A8',
  mobile: '#FE2727',
  data: '#289DFF',
  algorithms: '#15CBB2',
  'ux/ui': '#F8FF8D',
  cybersecurity: '#FFFFFF',
  'business analytics': '#3D3D3D',
  blockchain: '#C92626'
}

interface DiamondProps {
  width?: string
  height?: string
  mod?: string
}

const Diamond0 = ({ width = '68px', height = '68px', mod = 'data' }: DiamondProps) => {
  const modalities = {
    data: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 68 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M33.9185 35.0444H0.663818L33.9185 69.3489V35.0444Z' fill='url(#paintD00_linear)' />
        <path d='M33.9183 35.0445V0.739944L67.173 35.0445H33.9183Z' fill='url(#paintD01_linear)' />
        <path d='M33.9183 35.0443V69.3489L67.173 35.0443H33.9183Z' fill='url(#paintD02_linear)' />
        <path
          d='M33.9185 35.0443H0.663818L33.9185 0.739788V35.0443Z'
          fill='url(#paintD03_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 17.291 35.0444)'
          fill='url(#paintD04_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.7992 35.0444L33.9183 17.3849L51.0373 35.0444L33.9183 52.7039L16.7992 35.0444ZM17.7826 35.0444L33.9183 51.6895L50.0539 35.0444L33.9183 18.3994L17.7826 35.0444Z'
          fill='url(#paintD05_linear)'
        />
        <path
          d='M18.5747 50.5827C9.53255 45.7418 5.53312 38.7493 3.44646 35.1635H0.838135L4.3159 38.7493L29.3558 64.7468V64.0296C26.7127 57.0014 30.9788 52.794 33.3552 51.6584L30.2253 48.4312C30.3412 50.8815 27.6891 55.4622 18.5747 50.5827Z'
          fill='#93E8FF'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M30.0751 41.4631C33.9689 45.1234 39.1476 47.3554 44.8319 47.3554C54.141 47.3554 62.0941 41.3693 65.2681 32.9267L36.9157 3.6931C28.7276 6.96571 22.922 15.166 22.922 24.7644C22.922 30.6254 25.0866 35.9651 28.6366 39.9799L30.0751 41.4631Z'
          fill='#74E4FF'
        />
        <path
          d='M38.9197 22.613L34.3986 17.9514C43.2746 19.3594 37.8336 7.40703 34.0861 0.918576L48.6575 15.7999L63.0902 30.8605L49.5269 22.2544C36.0332 13.7918 36.891 18.9076 38.9197 22.613Z'
          fill='url(#paintD06_linear)'
        />
        <g filter='url(#filterD00_f)'>
          <path
            d='M34.0507 10.7797L34.4342 17.556L41.0063 17.9514L34.4342 18.3468L34.0507 25.1231L33.6673 18.3468L27.0952 17.9514L33.6673 17.556L34.0507 10.7797Z'
            fill='white'
          />
        </g>
        <path
          d='M34.0507 10.7797L34.4342 17.556L41.0063 17.9514L34.4342 18.3468L34.0507 25.1231L33.6673 18.3468L27.0952 17.9514L33.6673 17.556L34.0507 10.7797Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD00_f'
            x='23.0952'
            y='6.77966'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD00_linear'
            x1='32.3114'
            y1='45.5629'
            x2='22.492'
            y2='56.4479'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#65B5FF' />
            <stop offset='1' stopColor='#64E4FF' />
          </linearGradient>
          <linearGradient
            id='paintD01_linear'
            x1='76.8268'
            y1='43.7701'
            x2='61.2835'
            y2='-0.363441'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#8EECFF' />
            <stop offset='1' stopColor='#A8EFFF' />
          </linearGradient>
          <linearGradient
            id='paintD02_linear'
            x1='64.5538'
            y1='32.4271'
            x2='52.5188'
            y2='79.1407'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2E3DB0' />
            <stop offset='1' stopColor='#55C1F2' />
          </linearGradient>
          <linearGradient
            id='paintD03_linear'
            x1='39.9274'
            y1='0.255112'
            x2='-0.613834'
            y2='8.93491'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2354C0' />
            <stop offset='1' stopColor='#A3E9FF' />
          </linearGradient>
          <linearGradient
            id='paintD04_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#2A67C4' />
            <stop offset='0.349209' stopColor='#2E3AB0' />
            <stop offset='1' stopColor='#79E8FF' />
          </linearGradient>
          <linearGradient
            id='paintD05_linear'
            x1='34.0501'
            y1='17.2347'
            x2='34.0662'
            y2='50.0453'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#D7F8FF' />
            <stop offset='0.176669' stopColor='#9EEDFF' />
            <stop offset='0.432173' stopColor='#66E3FF' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD06_linear'
            x1='47.6141'
            y1='19.9236'
            x2='34.0322'
            y2='17.8971'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#D3F6FF' />
            <stop offset='0.603219' stopColor='#D3F6FF' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
    backend: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 67 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 68.7889V34.4844Z'
          fill='url(#paintD0BACKEND0_linear)'
        />
        <path
          d='M33.2546 34.4845V0.179947L66.5093 34.4845H33.2546Z'
          fill='url(#paintD0BACKEND1_linear)'
        />
        <path
          d='M33.2546 34.4844V68.7889L66.5093 34.4844H33.2546Z'
          fill='url(#paintD0BACKEND2_linear)'
        />
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 0.179798V34.4844Z'
          fill='url(#paintD0BACKEND3_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 16.6273 34.4844)'
          fill='url(#paintD0BACKEND4_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.1355 34.4844L33.2546 16.8249L50.3736 34.4844L33.2546 52.144L16.1355 34.4844ZM17.1189 34.4844L33.2546 51.1295L49.3902 34.4844L33.2546 17.8394L17.1189 34.4844Z'
          fill='url(#paintD0BACKEND5_linear)'
        />
        <path
          d='M17.9111 50.0227C8.86885 45.1818 4.86942 38.1894 2.78276 34.6035H0.174438L3.6522 38.1894L28.6921 64.1868V63.4697C26.049 56.4414 30.3151 52.234 32.6915 51.0984L29.5616 47.8712C29.6775 50.3215 27.0254 54.9022 17.9111 50.0227Z'
          fill='#FEBE8F'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4115 40.9032C33.3052 44.5634 38.4839 46.7954 44.1682 46.7954C53.4773 46.7954 61.4304 40.8093 64.6044 32.3667L36.252 3.13312C28.0639 6.40572 22.2583 14.606 22.2583 24.2045C22.2583 30.0654 24.423 35.4051 27.9729 39.4199L29.4115 40.9032Z'
          fill='#FFAF74'
        />
        <path
          d='M38.256 22.053L33.7349 17.3914C42.6109 18.7994 37.1699 6.84704 33.4224 0.358586L47.9938 15.2399L62.4265 30.3005L48.8632 21.6944C35.3695 13.2318 36.2273 18.3476 38.256 22.053Z'
          fill='url(#paintD0BACKEND6_linear)'
        />
        <g filter='url(#filterD0BACKEND0_f)'>
          <path
            d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
            fill='white'
          />
        </g>
        <path
          d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD0BACKEND0_f'
            x='22.4315'
            y='6.21967'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD0BACKEND0_linear'
            x1='31.6477'
            y1='45.0029'
            x2='21.8283'
            y2='55.8879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFA462' />
            <stop offset='1' stopColor='#FB842D' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND1_linear'
            x1='76.1631'
            y1='43.2101'
            x2='60.6198'
            y2='-0.923437'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FEBD8D' />
            <stop offset='1' stopColor='#FFC093' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND2_linear'
            x1='63.8901'
            y1='31.8671'
            x2='51.8551'
            y2='78.5807'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#D46515' />
            <stop offset='1' stopColor='#F3934D' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND3_linear'
            x1='39.2637'
            y1='-0.304878'
            x2='-1.27753'
            y2='8.37492'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#CE6D26' />
            <stop offset='1' stopColor='#FFD0AE' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND4_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#C85B0C' />
            <stop offset='0.349209' stopColor='#E66A10' />
            <stop offset='1' stopColor='#FFA05C' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND5_linear'
            x1='33.3864'
            y1='16.6747'
            x2='33.4025'
            y2='49.4853'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFE5D2' />
            <stop offset='0.176669' stopColor='#FFC59A' />
            <stop offset='0.432173' stopColor='#FFA361' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD0BACKEND6_linear'
            x1='46.9504'
            y1='19.3636'
            x2='33.3685'
            y2='17.3371'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFE7D5' />
            <stop offset='0.603219' stopColor='#FFE2CC' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
    frontend: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 67 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 68.7889V34.4844Z'
          fill='url(#paintD0FRONTEND0_linear)'
        />
        <path
          d='M33.2546 34.4845V0.179947L66.5093 34.4845H33.2546Z'
          fill='url(#paintD0FRONTEND1_linear)'
        />
        <path
          d='M33.2546 34.4844V68.7889L66.5093 34.4844H33.2546Z'
          fill='url(#paintD0FRONTEND2_linear)'
        />
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 0.179798V34.4844Z'
          fill='url(#paintD0FRONTEND3_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 16.6273 34.4844)'
          fill='url(#paintD0FRONTEND4_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.1355 34.4844L33.2546 16.8249L50.3736 34.4844L33.2546 52.144L16.1355 34.4844ZM17.1189 34.4844L33.2546 51.1295L49.3902 34.4844L33.2546 17.8394L17.1189 34.4844Z'
          fill='url(#paintD0FRONTEND5_linear)'
        />
        <path
          d='M17.9111 50.0227C8.86885 45.1818 4.86942 38.1894 2.78276 34.6035H0.174438L3.6522 38.1894L28.6921 64.1868V63.4697C26.049 56.4414 30.3151 52.234 32.6915 51.0984L29.5616 47.8712C29.6775 50.3215 27.0254 54.9022 17.9111 50.0227Z'
          fill='#F095FF'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4115 40.9032C33.3052 44.5634 38.4839 46.7954 44.1682 46.7954C53.4773 46.7954 61.4304 40.8093 64.6044 32.3667L36.252 3.13312C28.0639 6.40572 22.2583 14.606 22.2583 24.2045C22.2583 30.0654 24.423 35.4051 27.9729 39.4199L29.4115 40.9032Z'
          fill='#EC78FF'
        />
        <path
          d='M38.256 22.053L33.7349 17.3914C42.6109 18.7994 37.1699 6.84704 33.4224 0.358586L47.9938 15.2399L62.4265 30.3005L48.8632 21.6944C35.3695 13.2318 36.2273 18.3476 38.256 22.053Z'
          fill='url(#paintD0FRONTEND6_linear)'
        />
        <g filter='url(#filterD0FRONTEND0_f)'>
          <path
            d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
            fill='white'
          />
        </g>
        <path
          d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD0FRONTEND0_f'
            x='22.4315'
            y='6.21967'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD0FRONTEND0_linear'
            x1='31.6477'
            y1='45.0029'
            x2='21.8283'
            y2='55.8879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#EA66FF' />
            <stop offset='1' stopColor='#E963FF' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND1_linear'
            x1='76.1631'
            y1='43.2101'
            x2='60.6198'
            y2='-0.923437'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#F090FF' />
            <stop offset='1' stopColor='#F4AEFF' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND2_linear'
            x1='63.8901'
            y1='31.8671'
            x2='51.8551'
            y2='78.5807'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#9E30AF' />
            <stop offset='1' stopColor='#D74FED' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND3_linear'
            x1='39.2637'
            y1='-0.304878'
            x2='-1.27753'
            y2='8.37492'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AC23C3' />
            <stop offset='1' stopColor='#F2A1FF' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND4_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#AD28C3' />
            <stop offset='0.349209' stopColor='#A32DB6' />
            <stop offset='1' stopColor='#ED7EFF' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND5_linear'
            x1='33.3864'
            y1='16.6747'
            x2='33.4025'
            y2='49.4853'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FADBFF' />
            <stop offset='0.176669' stopColor='#F19DFF' />
            <stop offset='0.432173' stopColor='#EA66FF' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD0FRONTEND6_linear'
            x1='46.9504'
            y1='19.3636'
            x2='33.3685'
            y2='17.3371'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F9D2FF' />
            <stop offset='0.603219' stopColor='#F9D2FF' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 67 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 68.7889V34.4844Z'
          fill='url(#paintD0MOBILE0_linear)'
        />
        <path
          d='M33.2546 34.4845V0.179947L66.5093 34.4845H33.2546Z'
          fill='url(#paintD0MOBILE1_linear)'
        />
        <path
          d='M33.2546 34.4844V68.7889L66.5093 34.4844H33.2546Z'
          fill='url(#paintD0MOBILE2_linear)'
        />
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 0.179798V34.4844Z'
          fill='url(#paintD0MOBILE3_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 16.6273 34.4844)'
          fill='url(#paintD0MOBILE4_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.1355 34.4844L33.2546 16.8249L50.3736 34.4844L33.2546 52.144L16.1355 34.4844ZM17.1189 34.4844L33.2546 51.1295L49.3902 34.4844L33.2546 17.8394L17.1189 34.4844Z'
          fill='url(#paintD0MOBILE5_linear)'
        />
        <path
          d='M17.9111 50.0227C8.86885 45.1818 4.86942 38.1894 2.78276 34.6035H0.174438L3.6522 38.1894L28.6921 64.1868V63.4697C26.049 56.4414 30.3151 52.234 32.6915 51.0984L29.5616 47.8712C29.6775 50.3215 27.0254 54.9022 17.9111 50.0227Z'
          fill='#FD9191'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4115 40.9032C33.3052 44.5634 38.4839 46.7954 44.1682 46.7954C53.4773 46.7954 61.4304 40.8093 64.6044 32.3667L36.252 3.13312C28.0639 6.40572 22.2583 14.606 22.2583 24.2045C22.2583 30.0654 24.423 35.4051 27.9729 39.4199L29.4115 40.9032Z'
          fill='#FF7474'
        />
        <path
          d='M38.256 22.053L33.7349 17.3914C42.6109 18.7994 37.1699 6.84704 33.4224 0.358586L47.9938 15.2399L62.4265 30.3005L48.8632 21.6944C35.3695 13.2318 36.2273 18.3476 38.256 22.053Z'
          fill='url(#paintD0MOBILE6_linear)'
        />
        <g filter='url(#filterD0MOBILE0_f)'>
          <path
            d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
            fill='white'
          />
        </g>
        <path
          d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD0MOBILE0_f'
            x='22.4315'
            y='6.21967'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD0MOBILE0_linear'
            x1='31.6477'
            y1='45.0029'
            x2='21.8283'
            y2='55.8879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6464' />
            <stop offset='1' stopColor='#FF6464' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE1_linear'
            x1='76.1631'
            y1='43.2101'
            x2='60.6198'
            y2='-0.923437'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FF9191' />
            <stop offset='1' stopColor='#FFB0B0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE2_linear'
            x1='63.8901'
            y1='31.8671'
            x2='51.8551'
            y2='78.5807'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AF2B2B' />
            <stop offset='1' stopColor='#F95959' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE3_linear'
            x1='39.2637'
            y1='-0.304878'
            x2='-1.27753'
            y2='8.37492'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C12525' />
            <stop offset='1' stopColor='#FFA4A4' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE4_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#BE2727' />
            <stop offset='0.349209' stopColor='#AF2C2C' />
            <stop offset='1' stopColor='#FF7C7C' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE5_linear'
            x1='33.3864'
            y1='16.6747'
            x2='33.4025'
            y2='49.4853'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD9D9' />
            <stop offset='0.176669' stopColor='#FF9999' />
            <stop offset='0.432173' stopColor='#FF6666' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE6_linear'
            x1='46.9504'
            y1='19.3636'
            x2='33.3685'
            y2='17.3371'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD5D5' />
            <stop offset='0.603219' stopColor='#FFCCCC' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
    fullstack: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 67 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 68.7889V34.4844Z'
          fill='url(#paintD0MOBILE0_linear)'
        />
        <path
          d='M33.2546 34.4845V0.179947L66.5093 34.4845H33.2546Z'
          fill='url(#paintD0MOBILE1_linear)'
        />
        <path
          d='M33.2546 34.4844V68.7889L66.5093 34.4844H33.2546Z'
          fill='url(#paintD0MOBILE2_linear)'
        />
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 0.179798V34.4844Z'
          fill='url(#paintD0MOBILE3_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 16.6273 34.4844)'
          fill='url(#paintD0MOBILE4_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.1355 34.4844L33.2546 16.8249L50.3736 34.4844L33.2546 52.144L16.1355 34.4844ZM17.1189 34.4844L33.2546 51.1295L49.3902 34.4844L33.2546 17.8394L17.1189 34.4844Z'
          fill='url(#paintD0MOBILE5_linear)'
        />
        <path
          d='M17.9111 50.0227C8.86885 45.1818 4.86942 38.1894 2.78276 34.6035H0.174438L3.6522 38.1894L28.6921 64.1868V63.4697C26.049 56.4414 30.3151 52.234 32.6915 51.0984L29.5616 47.8712C29.6775 50.3215 27.0254 54.9022 17.9111 50.0227Z'
          fill='#FD9191'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4115 40.9032C33.3052 44.5634 38.4839 46.7954 44.1682 46.7954C53.4773 46.7954 61.4304 40.8093 64.6044 32.3667L36.252 3.13312C28.0639 6.40572 22.2583 14.606 22.2583 24.2045C22.2583 30.0654 24.423 35.4051 27.9729 39.4199L29.4115 40.9032Z'
          fill='#FF7474'
        />
        <path
          d='M38.256 22.053L33.7349 17.3914C42.6109 18.7994 37.1699 6.84704 33.4224 0.358586L47.9938 15.2399L62.4265 30.3005L48.8632 21.6944C35.3695 13.2318 36.2273 18.3476 38.256 22.053Z'
          fill='url(#paintD0MOBILE6_linear)'
        />
        <g filter='url(#filterD0MOBILE0_f)'>
          <path
            d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
            fill='white'
          />
        </g>
        <path
          d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD0MOBILE0_f'
            x='22.4315'
            y='6.21967'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD0MOBILE0_linear'
            x1='31.6477'
            y1='45.0029'
            x2='21.8283'
            y2='55.8879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6464' />
            <stop offset='1' stopColor='#FF6464' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE1_linear'
            x1='76.1631'
            y1='43.2101'
            x2='60.6198'
            y2='-0.923437'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FF9191' />
            <stop offset='1' stopColor='#FFB0B0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE2_linear'
            x1='63.8901'
            y1='31.8671'
            x2='51.8551'
            y2='78.5807'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AF2B2B' />
            <stop offset='1' stopColor='#F95959' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE3_linear'
            x1='39.2637'
            y1='-0.304878'
            x2='-1.27753'
            y2='8.37492'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C12525' />
            <stop offset='1' stopColor='#FFA4A4' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE4_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#BE2727' />
            <stop offset='0.349209' stopColor='#AF2C2C' />
            <stop offset='1' stopColor='#FF7C7C' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE5_linear'
            x1='33.3864'
            y1='16.6747'
            x2='33.4025'
            y2='49.4853'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD9D9' />
            <stop offset='0.176669' stopColor='#FF9999' />
            <stop offset='0.432173' stopColor='#FF6666' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE6_linear'
            x1='46.9504'
            y1='19.3636'
            x2='33.3685'
            y2='17.3371'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD5D5' />
            <stop offset='0.603219' stopColor='#FFCCCC' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    ),
    algorithms: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 67 69'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 68.7889V34.4844Z'
          fill='url(#paintD0MOBILE0_linear)'
        />
        <path
          d='M33.2546 34.4845V0.179947L66.5093 34.4845H33.2546Z'
          fill='url(#paintD0MOBILE1_linear)'
        />
        <path
          d='M33.2546 34.4844V68.7889L66.5093 34.4844H33.2546Z'
          fill='url(#paintD0MOBILE2_linear)'
        />
        <path
          d='M33.2548 34.4844H0.00012207L33.2548 0.179798V34.4844Z'
          fill='url(#paintD0MOBILE3_linear)'
        />
        <rect
          width='23.8887'
          height='23.8887'
          transform='matrix(0.696034 -0.718009 0.696034 0.718009 16.6273 34.4844)'
          fill='url(#paintD0MOBILE4_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.1355 34.4844L33.2546 16.8249L50.3736 34.4844L33.2546 52.144L16.1355 34.4844ZM17.1189 34.4844L33.2546 51.1295L49.3902 34.4844L33.2546 17.8394L17.1189 34.4844Z'
          fill='url(#paintD0MOBILE5_linear)'
        />
        <path
          d='M17.9111 50.0227C8.86885 45.1818 4.86942 38.1894 2.78276 34.6035H0.174438L3.6522 38.1894L28.6921 64.1868V63.4697C26.049 56.4414 30.3151 52.234 32.6915 51.0984L29.5616 47.8712C29.6775 50.3215 27.0254 54.9022 17.9111 50.0227Z'
          fill='#FD9191'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4115 40.9032C33.3052 44.5634 38.4839 46.7954 44.1682 46.7954C53.4773 46.7954 61.4304 40.8093 64.6044 32.3667L36.252 3.13312C28.0639 6.40572 22.2583 14.606 22.2583 24.2045C22.2583 30.0654 24.423 35.4051 27.9729 39.4199L29.4115 40.9032Z'
          fill='#FF7474'
        />
        <path
          d='M38.256 22.053L33.7349 17.3914C42.6109 18.7994 37.1699 6.84704 33.4224 0.358586L47.9938 15.2399L62.4265 30.3005L48.8632 21.6944C35.3695 13.2318 36.2273 18.3476 38.256 22.053Z'
          fill='url(#paintD0MOBILE6_linear)'
        />
        <g filter='url(#filterD0MOBILE0_f)'>
          <path
            d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
            fill='white'
          />
        </g>
        <path
          d='M33.387 10.2197L33.7705 16.996L40.3426 17.3914L33.7705 17.7868L33.387 24.5631L33.0036 17.7868L26.4315 17.3914L33.0036 16.996L33.387 10.2197Z'
          fill='white'
        />
        <defs>
          <filter
            id='filterD0MOBILE0_f'
            x='22.4315'
            y='6.21967'
            width='21.9111'
            height='22.3434'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD0MOBILE0_linear'
            x1='31.6477'
            y1='45.0029'
            x2='21.8283'
            y2='55.8879'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6464' />
            <stop offset='1' stopColor='#FF6464' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE1_linear'
            x1='76.1631'
            y1='43.2101'
            x2='60.6198'
            y2='-0.923437'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FF9191' />
            <stop offset='1' stopColor='#FFB0B0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE2_linear'
            x1='63.8901'
            y1='31.8671'
            x2='51.8551'
            y2='78.5807'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AF2B2B' />
            <stop offset='1' stopColor='#F95959' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE3_linear'
            x1='39.2637'
            y1='-0.304878'
            x2='-1.27753'
            y2='8.37492'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C12525' />
            <stop offset='1' stopColor='#FFA4A4' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE4_linear'
            x1='-5.15384'
            y1='9.74551'
            x2='29.6192'
            y2='8.1474'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#BE2727' />
            <stop offset='0.349209' stopColor='#AF2C2C' />
            <stop offset='1' stopColor='#FF7C7C' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE5_linear'
            x1='33.3864'
            y1='16.6747'
            x2='33.4025'
            y2='49.4853'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD9D9' />
            <stop offset='0.176669' stopColor='#FF9999' />
            <stop offset='0.432173' stopColor='#FF6666' />
            <stop offset='0.685688' stopColor='white' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD0MOBILE6_linear'
            x1='46.9504'
            y1='19.3636'
            x2='33.3685'
            y2='17.3371'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD5D5' />
            <stop offset='0.603219' stopColor='#FFCCCC' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return modalities[mod]
}

const Diamond1 = ({ width = '68px', height = '68px', mod = 'data' }: DiamondProps) => {
  const modalities = {
    data: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1D0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1D1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158661L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1D2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1D3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1D4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1D5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#64DBFF'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1D6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42337 42.3617 4.39806L36.4105 0.18483L0.18483 26.6148L7.28809 48.1978Z'
          fill='#74E4FF'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1D7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.4251L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1D8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filter0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7083V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2364L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2364L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7083L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filter0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1D0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#2A67C4' />
            <stop offset='0.349209' stopColor='#2E3AB0' />
            <stop offset='1' stopColor='#79E8FF' />
          </linearGradient>
          <linearGradient
            id='paintD1D1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#A5F0FF' />
            <stop offset='1' stopColor='#BAF3FF' />
          </linearGradient>
          <linearGradient
            id='paintD1D2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7CD0FF' />
            <stop offset='1' stopColor='#2354C0' />
          </linearGradient>
          <linearGradient
            id='paintD1D3_linear'
            x1='19.7541'
            y1='69.441'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#55C1F2' />
            <stop offset='1' stopColor='#2E3DB0' />
          </linearGradient>
          <linearGradient
            id='paintD1D4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#64E4FF' />
            <stop offset='0.630208' stopColor='#458CD7' />
            <stop offset='1' stopColor='#458CD7' />
          </linearGradient>
          <linearGradient
            id='paintD1D5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#5BB2EC' />
            <stop offset='1' stopColor='#48D5FF' />
          </linearGradient>
          <linearGradient
            id='paintD1D6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#93E8FF' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1D7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1D8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#D7F8FF' />
            <stop offset='0.176669' stopColor='#52B5EC' />
            <stop offset='0.432173' stopColor='#CAF4FD' />
            <stop offset='0.685688' stopColor='#D4F4FB' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    backend: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1BACKEND0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1BACKEND1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158653L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1BACKEND2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1BACKEND3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1BACKEND4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1BACKEND5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#FFA666'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1BACKEND6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42336 42.3617 4.39806L36.4105 0.184826L0.18483 26.6148L7.28809 48.1978Z'
          fill='#FFAF75'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1BACKEND7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.425L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1BACKEND8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filterD1BACKEND0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7082V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2363L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2363L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7082L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filterD1BACKEND0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1BACKEND0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#CA6D2A' />
            <stop offset='0.0814149' stopColor='#EA6708' />
            <stop offset='0.349209' stopColor='#FF9040' />
            <stop offset='1' stopColor='#FFB37D' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FFCCA7' />
            <stop offset='1' stopColor='#FFD8BB' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FEB17A' />
            <stop offset='1' stopColor='#FF7E21' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND3_linear'
            x1='19.7541'
            y1='69.4411'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F39856' />
            <stop offset='0.9999' stopColor='#B4652D' />
            <stop offset='1' stopColor='#B0652E' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFA666' />
            <stop offset='0.630208' stopColor='#D67F41' />
            <stop offset='1' stopColor='#E68D4E' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#EF9A5C' />
            <stop offset='1' stopColor='#FF964A' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#FFC195' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1BACKEND8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFE5D3' />
            <stop offset='0.176669' stopColor='#ED9351' />
            <stop offset='0.432173' stopColor='#FFE2CD' />
            <stop offset='0.685688' stopColor='#D4F4FB' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    frontend: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1FRONTEND0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1FRONTEND1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158653L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1FRONTEND2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1FRONTEND3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1FRONTEND4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1FRONTEND5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#EA64FF'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1FRONTEND6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42336 42.3617 4.39806L36.4105 0.184826L0.18483 26.6148L7.28809 48.1978Z'
          fill='#EC71FF'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1FRONTEND7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.425L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1FRONTEND8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filterD1FRONTEND0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7082V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2363L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2363L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7082L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filterD1FRONTEND0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1FRONTEND0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#B32BC9' />
            <stop offset='0.349209' stopColor='#9829AA' />
            <stop offset='1' stopColor='#ED7BFF' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#F3A7FF' />
            <stop offset='1' stopColor='#F6BCFF' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#ED7CFF' />
            <stop offset='1' stopColor='#AC22C3' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND3_linear'
            x1='19.7541'
            y1='69.4411'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E358F9' />
            <stop offset='1' stopColor='#9428A5' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E95EFF' />
            <stop offset='0.630208' stopColor='#BB3BCF' />
            <stop offset='1' stopColor='#BA3ECE' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#DE5DF2' />
            <stop offset='1' stopColor='#E543FF' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#F19CFF' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1FRONTEND8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FADAFF' />
            <stop offset='0.176669' stopColor='#D650EB' />
            <stop offset='0.432173' stopColor='#F8CBFF' />
            <stop offset='0.685688' stopColor='#F8D7FD' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158653L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1MOBILE2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1MOBILE3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1MOBILE4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1MOBILE5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#FF6161'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1MOBILE6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42336 42.3617 4.39806L36.4105 0.184826L0.18483 26.6148L7.28809 48.1978Z'
          fill='#FF7474'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1MOBILE7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.425L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1MOBILE8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filterD1MOBILE0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7082V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2363L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2363L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7082L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filterD1MOBILE0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1MOBILE0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#C82B2B' />
            <stop offset='0.349209' stopColor='#D84238' />
            <stop offset='1' stopColor='#FF7D7D' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FFA7A7' />
            <stop offset='1' stopColor='#FFC7C7' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF7C7C' />
            <stop offset='1' stopColor='#C31F1F' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE3_linear'
            x1='19.7541'
            y1='69.4411'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F95959' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6666' />
            <stop offset='0.630208' stopColor='#D84646' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#ED5F5F' />
            <stop offset='1' stopColor='#FF4141' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#93E8FF' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD7D7' />
            <stop offset='0.176669' stopColor='#F15454' />
            <stop offset='0.432173' stopColor='#FFCDCD' />
            <stop offset='0.685688' stopColor='#FFDBDB' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    fullstack: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158653L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1MOBILE2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1MOBILE3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1MOBILE4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1MOBILE5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#FF6161'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1MOBILE6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42336 42.3617 4.39806L36.4105 0.184826L0.18483 26.6148L7.28809 48.1978Z'
          fill='#FF7474'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1MOBILE7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.425L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1MOBILE8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filterD1MOBILE0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7082V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2363L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2363L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7082L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filterD1MOBILE0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1MOBILE0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#C82B2B' />
            <stop offset='0.349209' stopColor='#D84238' />
            <stop offset='1' stopColor='#FF7D7D' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FFA7A7' />
            <stop offset='1' stopColor='#FFC7C7' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF7C7C' />
            <stop offset='1' stopColor='#C31F1F' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE3_linear'
            x1='19.7541'
            y1='69.4411'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F95959' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6666' />
            <stop offset='0.630208' stopColor='#D84646' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#ED5F5F' />
            <stop offset='1' stopColor='#FF4141' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#93E8FF' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD7D7' />
            <stop offset='0.176669' stopColor='#F15454' />
            <stop offset='0.432173' stopColor='#FFCDCD' />
            <stop offset='0.685688' stopColor='#FFDBDB' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    algorithms: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 74 70'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M36.5397 15.8662L25.51 23.724L15.1123 31.4341L19.2219 43.9883L23.2968 56.6235L36.5397 56.9019L49.7825 56.6235L53.788 44.0006L57.967 31.4341L47.1997 23.724L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE0_linear)'
        />
        <path
          d='M36.5397 15.8662V0L0.0473022 26.4966L15.1202 31.4152L36.5397 15.8662Z'
          fill='url(#paintD1MOBILE1_linear)'
        />
        <path
          d='M36.5396 16.0249V0.158653L73.1907 26.6553L57.9591 31.4152L36.5396 16.0249Z'
          fill='url(#paintD1MOBILE2_linear)'
        />
        <path
          d='M23.3706 56.6424L14.0467 69.3093L0.0472202 26.4966L15.1202 31.4151L23.3706 56.6424Z'
          fill='url(#paintD1MOBILE3_linear)'
        />
        <path
          d='M49.7086 56.6425L59.2284 69.3355H14.0096L23.3707 56.6425H49.7086Z'
          fill='url(#paintD1MOBILE4_linear)'
        />
        <path
          d='M49.7086 56.6424L59.2283 69.3354L73.032 26.6552L57.959 31.4151L49.7086 56.6424Z'
          fill='url(#paintD1MOBILE5_linear)'
        />
        <path
          d='M36.5953 16.0798C60.0681 30.9356 62.8405 29.0175 72.2665 26.0603L73.1907 26.6148L58.035 31.6051L36.5953 16.0798Z'
          fill='#FF6161'
        />
        <path
          opacity='0.2'
          d='M54.5233 47.6848C60.2898 58.4786 68.5084 40.4767 71.8969 30.1265L65.6128 49.9027L59.1439 69.3093C58.7743 65.6128 58.035 50.4572 49.7179 56.5564L54.5233 41.7704C54.0797 45.6148 54.3385 47.3152 54.5233 47.6848Z'
          fill='url(#paintD1MOBILE6_linear)'
        />
        <path
          opacity='0.2'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.28809 48.1978C11.3715 50.4618 16.0702 51.751 21.07 51.751C36.7897 51.751 49.5331 39.0076 49.5331 23.2879C49.5331 16.0392 46.8234 9.42336 42.3617 4.39806L36.4105 0.184826L0.18483 26.6148L7.28809 48.1978Z'
          fill='#FF7474'
        />
        <path
          d='M16.0798 22.9183C20.6972 22.7201 32.406 18.7289 36.5953 15.8949L15.1556 31.4202C12.5681 25.6907 8.50195 25.321 3.8147e-06 26.6148L30.3113 4.62062C18.6673 14.2315 9.42607 23.2039 16.0798 22.9183Z'
          fill='url(#paintD1MOBILE7_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.5433 15.4098L25.2925 23.425L14.678 31.296L18.8699 44.1018L18.8704 44.1034L23.0257 56.9876L36.5396 57.2717L50.0547 56.9876L54.1386 44.1173L54.1402 44.1125L58.4037 31.2923L47.4169 23.425L36.5433 15.4098ZM36.5359 16.3228L46.9844 24.0246L57.5302 31.5761L53.4355 43.8889L49.5101 56.2596L36.5396 56.5322L23.5677 56.2595L19.5736 43.8749L19.5731 43.8734L15.5464 31.5724L25.7273 24.0231L36.5359 16.3228Z'
          fill='url(#paintD1MOBILE8_linear)'
        />
        <path
          opacity='0.1'
          d='M34.5623 69.3093C44.0253 63.8385 38.1356 58.7127 34.0078 56.7412H23.1032L14.0467 69.3093H34.5623Z'
          fill='white'
        />
        <g filter='url(#filterD1MOBILE0_f)'>
          <path
            d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
            fill='white'
          />
        </g>
        <path
          d='M15.5253 24.3969L15.0366 30.1923L9.24123 30.6809L15.0366 31.1696L15.5253 36.965L16.0139 31.1696L21.8093 30.6809L16.0139 30.1923L15.5253 24.3969Z'
          fill='white'
        />
        <path
          d='M15.5253 22.5486L14.8412 22.5762L14.1615 22.6587L13.4906 22.7957L12.833 22.9862L12.1928 23.229L11.5742 23.5225L10.9813 23.8648L10.4178 24.2538L9.88744 24.6868L9.39365 25.1611L8.93962 25.6736L8.52831 26.2209L8.16237 26.7996L7.84419 27.4059L7.57582 28.0358L7.359 28.6852L7.19515 29.35L7.08532 30.0258L7.03022 30.7082V31.3929L7.08532 32.0754L7.19515 32.7512L7.359 33.416L7.57582 34.0654L7.84419 34.6953L8.16237 35.3016L8.52831 35.8802L8.93962 36.4276L9.39365 36.9401L9.88744 37.4144L10.4178 37.8474L10.9813 38.2363L11.5742 38.5787L12.1928 38.8722L12.833 39.115L13.4906 39.3055L14.1615 39.4424L14.8412 39.525L15.5253 39.5525L16.2094 39.525L16.8891 39.4424L17.5599 39.3055L18.2176 39.115L18.8578 38.8722L19.4763 38.5787L20.0693 38.2363L20.6328 37.8474L21.1631 37.4144L21.6569 36.9401L22.1109 36.4276L22.5222 35.8802L22.8882 35.3016L23.2064 34.6953L23.4747 34.0654L23.6915 33.416L23.8554 32.7512L23.9652 32.0754L24.0203 31.3929V30.7082L23.9652 30.0258L23.8554 29.35L23.6915 28.6852L23.4747 28.0358L23.2064 27.4059L22.8882 26.7996L22.5222 26.2209L22.1109 25.6736L21.6569 25.1611L21.1631 24.6868L20.6328 24.2538L20.0693 23.8648L19.4763 23.5225L18.8578 23.229L18.2176 22.9862L17.5599 22.7957L16.8891 22.6587L16.2094 22.5762L15.5253 22.5486Z'
          fill='white'
          fillOpacity='0.17'
        />
        <defs>
          <filter
            id='filterD1MOBILE0_f'
            x='7.76261'
            y='22.9183'
            width='15.5253'
            height='15.5253'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='0.7393' result='effect1_foregroundBlur' />
          </filter>
          <linearGradient
            id='paintD1MOBILE0_linear'
            x1='45.0973'
            y1='65.9825'
            x2='8.9846'
            y2='15.6731'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0203454' stopColor='#C82B2B' />
            <stop offset='0.349209' stopColor='#D84238' />
            <stop offset='1' stopColor='#FF7D7D' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE1_linear'
            x1='37.8513'
            y1='39.9704'
            x2='44.7024'
            y2='7.55135'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.14601' stopColor='#FFA7A7' />
            <stop offset='1' stopColor='#FFC7C7' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE2_linear'
            x1='67.0859'
            y1='34.4599'
            x2='75.3564'
            y2='4.068'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF7C7C' />
            <stop offset='1' stopColor='#C31F1F' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE3_linear'
            x1='19.7541'
            y1='69.4411'
            x2='31.1476'
            y2='29.4158'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#F95959' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE4_linear'
            x1='7.20821'
            y1='65.2432'
            x2='47.2396'
            y2='85.4635'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF6666' />
            <stop offset='0.630208' stopColor='#D84646' />
            <stop offset='1' stopColor='#AF3030' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE5_linear'
            x1='57.9872'
            y1='53.5074'
            x2='74.4769'
            y2='44.369'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#ED5F5F' />
            <stop offset='1' stopColor='#FF4141' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE6_linear'
            x1='52.1206'
            y1='53.2296'
            x2='66.5369'
            y2='54.3385'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FBFEFF' />
            <stop offset='1' stopColor='#93E8FF' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE7_linear'
            x1='16.8191'
            y1='15.1556'
            x2='20.3307'
            y2='28.463'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' stopOpacity='0.36' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paintD1MOBILE8_linear'
            x1='14.3236'
            y1='15.393'
            x2='53.1555'
            y2='55.9923'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FFD7D7' />
            <stop offset='0.176669' stopColor='#F15454' />
            <stop offset='0.432173' stopColor='#FFCDCD' />
            <stop offset='0.685688' stopColor='#FFDBDB' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return modalities[mod]
}

const Diamond2 = ({ height = '68px', mod = 'data' }: DiamondProps) => {
  const id = mod.substring(0, 3)

  return (
    <svg style={{ color: colors[mod], height: height }} viewBox='0 0 100 100'>
      <defs>
        <mask id={id} x='0' y='0'>
          <image href='/dev/images/diamond.svg' x='0' y='0' width='100' height='100' />
        </mask>
      </defs>
      <rect
        x='0'
        y='0'
        width='100'
        height='100'
        style={{ stroke: 'none', fill: 'currentColor' }}
        mask={`url(#${id})`}
      />
    </svg>
  )
}

const Diamond3 = ({ width = '68px', height = '68px', mod = 'data' }: DiamondProps) => {
  const modalities = {
    data: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3D0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3D1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3D2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3D3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3D4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3D5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3D6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3D7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3D8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3D9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3D10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3D11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3D12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3D0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#466CC6' />
            <stop offset='1' stopColor='#75D2F4' />
          </linearGradient>
          <linearGradient
            id='paintD3D1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#3D46F7' />
            <stop offset='1' stopColor='#35E3FB' />
          </linearGradient>
          <linearGradient
            id='paintD3D2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#35D8FB' />
          </linearGradient>
          <linearGradient
            id='paintD3D3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2251BD' />
            <stop offset='1' stopColor='#26A7F4' />
          </linearGradient>
          <linearGradient
            id='paintD3D4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#1A43AF' />
          </linearGradient>
          <linearGradient
            id='paintD3D6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#579BEB' />
          </linearGradient>
          <linearGradient
            id='paintD3D7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2F41B2' />
            <stop offset='1' stopColor='#89DFFF' />
          </linearGradient>
          <linearGradient
            id='paintD3D10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#579BEB' />
          </linearGradient>
          <linearGradient
            id='paintD3D11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2A58C6' />
            <stop offset='1' stopColor='#4FF4FF' />
          </linearGradient>
          <linearGradient
            id='paintD3D12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#60F5FF' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    backend: (
      <svg
        width={width}
        height={width}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3BACKEND0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3BACKEND1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3BACKEND2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3BACKEND3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3BACKEND4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3BACKEND5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3BACKEND6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3BACKEND7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3BACKEND8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3BACKEND9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3BACKEND10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3BACKEND11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3BACKEND12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3BACKEND0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C67942' />
            <stop offset='1' stopColor='#FF985E' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#FE9041' />
            <stop offset='1' stopColor='#FB8633' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#B3662F' />
            <stop offset='1' stopColor='#FF8833' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#BA6122' />
            <stop offset='1' stopColor='#FF7411' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AE622C' />
            <stop offset='1' stopColor='#FF8D3C' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#F39D5F' />
            <stop offset='1' stopColor='#E06005' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#E6955C' />
            <stop offset='1' stopColor='#C66F31' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AC622D' />
            <stop offset='1' stopColor='#FF8833' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AC632E' />
            <stop offset='1' stopColor='#FF8B38' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#BA6A31' />
            <stop offset='1' stopColor='#FFBD8E' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#EF9A5E' />
            <stop offset='0.9999' stopColor='#F09757' />
            <stop offset='1' stopColor='#F09656' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#C96D2B' />
            <stop offset='1' stopColor='#FF9D56' />
          </linearGradient>
          <linearGradient
            id='paintD3BACKEND12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FCA05E' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    frontend: (
      <svg
        width={width}
        height={width}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3FRONTEND0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3FRONTEND1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3FRONTEND2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3FRONTEND3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3FRONTEND4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3FRONTEND5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3FRONTEND6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3FRONTEND7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3FRONTEND8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3FRONTEND9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3FRONTEND10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3FRONTEND11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3FRONTEND12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3FRONTEND0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#B343C5' />
            <stop offset='1' stopColor='#E176F2' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#E03EFA' />
            <stop offset='1' stopColor='#E032FC' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9B2EAC' />
            <stop offset='1' stopColor='#E43AFF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AB21C0' />
            <stop offset='1' stopColor='#DC26F9' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9E30AF' />
            <stop offset='1' stopColor='#E437FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#DB5FEF' />
            <stop offset='1' stopColor='#9D19B2' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#D859EC' />
            <stop offset='1' stopColor='#B23FC5' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#A02EB2' />
            <stop offset='1' stopColor='#E333FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9E30AF' />
            <stop offset='1' stopColor='#E336FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#9E2EAF' />
            <stop offset='1' stopColor='#EF8EFF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#DF5FF3' />
            <stop offset='1' stopColor='#D152E6' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#B52DCB' />
            <stop offset='1' stopColor='#E751FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#EA62FF' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg
        width={width}
        height={width}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3MOBILE0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3MOBILE1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3MOBILE2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3MOBILE3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3MOBILE4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3MOBILE5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3MOBILE6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3MOBILE7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3MOBILE8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3MOBILE9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3MOBILE10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3MOBILE11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3MOBILE12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3MOBILE0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#CF4A4A' />
            <stop offset='1' stopColor='#FE8989' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#FB3D3D' />
            <stop offset='1' stopColor='#FF3333' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AF3030' />
            <stop offset='1' stopColor='#FF3434' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#C52626' />
            <stop offset='1' stopColor='#F92626' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#B22F2F' />
            <stop offset='1' stopColor='#FE3737' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#F16060' />
            <stop offset='1' stopColor='#A91818' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#F16161' />
            <stop offset='1' stopColor='#DA3939' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#B23030' />
            <stop offset='1' stopColor='#FF3636' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#B03030' />
            <stop offset='1' stopColor='#FF3434' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#B73232' />
            <stop offset='1' stopColor='#FF8B8B' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#F16060' />
            <stop offset='1' stopColor='#D64B4B' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#BC2D2D' />
            <stop offset='1' stopColor='#F92F2F' />
          </linearGradient>
          <linearGradient
            id='paintD3MOBILE12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FE5F5F' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    fullstack: (
      <svg
        width={width}
        height={width}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3BACKEND0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3FRONTEND1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3FRONTEND2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3FRONTEND3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3FRONTEND4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3FRONTEND5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3FRONTEND6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3FRONTEND7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3FRONTEND8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3FRONTEND9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3FRONTEND10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3FRONTEND11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3FRONTEND12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3FRONTEND0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#B343C5' />
            <stop offset='1' stopColor='#E176F2' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#E03EFA' />
            <stop offset='1' stopColor='#E032FC' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9B2EAC' />
            <stop offset='1' stopColor='#E43AFF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#AB21C0' />
            <stop offset='1' stopColor='#DC26F9' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9E30AF' />
            <stop offset='1' stopColor='#E437FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#DB5FEF' />
            <stop offset='1' stopColor='#9D19B2' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#D859EC' />
            <stop offset='1' stopColor='#B23FC5' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#A02EB2' />
            <stop offset='1' stopColor='#E333FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#9E30AF' />
            <stop offset='1' stopColor='#E336FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#9E2EAF' />
            <stop offset='1' stopColor='#EF8EFF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#DF5FF3' />
            <stop offset='1' stopColor='#D152E6' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#B52DCB' />
            <stop offset='1' stopColor='#E751FF' />
          </linearGradient>
          <linearGradient
            id='paintD3FRONTEND12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#EA62FF' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    ),
    algorithms: (
      <svg
        width={width}
        height={height}
        viewBox='0 0 311 258'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M155.2 0L246.063 37.6368L283.7 128.5L246.063 219.363L155.2 257L64.3367 219.363L26.7 128.5L64.3367 37.6368L155.2 0Z'
          fill='url(#paintD3BACKEND0_linear)'
        />
        <path
          d='M155.105 128.8L64.105 37.7998L118.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3D1_linear)'
        />
        <path
          d='M155.21 128.808H26.5165L65.7609 91.6849L64.3467 37.9448L155.21 128.808Z'
          fill='url(#paintD3D2_linear)'
        />
        <path
          d='M155.105 128.8L246.105 37.7998L192.105 39.2998L155.105 0.299805V128.8Z'
          fill='url(#paintD3D3_linear)'
        />
        <path
          d='M155 128.808H283.693L244.449 91.6849L245.863 37.9448L155 128.808Z'
          fill='url(#paintD3D4_linear)'
        />
        <path
          d='M155.21 128.8L246.21 219.8L192.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3D5_linear)'
        />
        <path
          d='M155.105 128.792H283.798L244.554 165.915L245.968 219.655L155.105 128.792Z'
          fill='url(#paintD3D6_linear)'
        />
        <path
          d='M155.21 128.8L64.21 219.8L118.21 218.3L155.21 257.3V128.8Z'
          fill='url(#paintD3D7_linear)'
        />
        <path
          d='M155.315 128.792H26.6215L65.8659 165.915L64.4517 219.655L155.315 128.792Z'
          fill='url(#paintD3D8_linear)'
        />
        <path
          d='M155.2 63.5L201.162 82.5381L220.2 128.5L201.162 174.462L155.2 193.5L109.238 174.462L90.2 128.5L109.238 82.5381L155.2 63.5Z'
          fill='url(#paintD3D9_linear)'
        />
        <g opacity='0.3'>
          <path
            d='M155.2 63.5L118.2 39L109.2 82.5L65.7 91.5L90.2 128.5L65.7 166L109.2 174.5L118.2 218.5L155.2 193.5L192.2 218.5L201.2 174.5L245.2 165.5L220.2 128.5L244.2 91.5L201.2 82.5L192.2 39.5L155.2 63.5Z'
            fill='url(#paintD3D10_linear)'
          />
        </g>
        <g opacity='0.6'>
          <path
            d='M117.823 38.3576L155.21 93.7723L192.443 38.2534L179.696 103.874L245.281 90.9442L189.866 128.332L245.385 165.564L179.764 152.817L192.694 218.403L155.307 162.988L118.074 218.507L130.821 152.886L65.2359 165.816L120.651 128.428L65.1317 91.1957L130.753 103.943L117.823 38.3576Z'
            fill='url(#paintD3D11_linear)'
          />
        </g>
        <g opacity='0.4'>
          <path
            d='M90.2 128.5L155.2 63.5L220.2 128.5L155.2 193.5L90.2 128.5Z'
            fill='url(#paintD3D12_linear)'
          />
        </g>
        <path
          d='M132.2 96.5L135.379 97.8256L138.564 99.136L139.874 102.321L141.2 105.5L139.874 108.679L138.564 111.864L135.379 113.174L132.2 114.5L129.021 113.174L125.836 111.864L124.526 108.679L123.2 105.5L124.526 102.321L125.836 99.136L129.021 97.8256L132.2 96.5Z'
          fill='white'
          fillOpacity='0.59'
        />
        <g opacity='0.1'>
          <path
            d='M112 51L123.303 55.7869L134.627 60.519L139.287 72.0209L144 83.5L139.287 94.9791L134.627 106.481L123.303 111.213L112 116L100.697 111.213L89.3726 106.481L84.7133 94.9791L80 83.5L84.7133 72.0209L89.3726 60.519L100.697 55.7869L112 51Z'
            fill='white'
            fillOpacity='0.59'
          />
        </g>
        <path
          d='M139.2 107.5L140.966 108.236L142.735 108.964L143.463 110.734L144.2 112.5L143.463 114.266L142.735 116.036L140.966 116.764L139.2 117.5L137.434 116.764L135.664 116.036L134.936 114.266L134.2 112.5L134.936 110.734L135.664 108.964L137.434 108.236L139.2 107.5Z'
          fill='white'
          fillOpacity='0.87'
        />
        <defs>
          <linearGradient
            id='paintD3D0_linear'
            x1='67.6999'
            y1='40.5'
            x2='225.2'
            y2='242'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#466CC6' />
            <stop offset='1' stopColor='#75D2F4' />
          </linearGradient>
          <linearGradient
            id='paintD3D1_linear'
            x1='109.605'
            y1='0.299804'
            x2='150.012'
            y2='133.878'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#3D46F7' />
            <stop offset='1' stopColor='#35E3FB' />
          </linearGradient>
          <linearGradient
            id='paintD3D2_linear'
            x1='32.1734'
            y1='70.1181'
            x2='155.2'
            y2='136'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#35D8FB' />
          </linearGradient>
          <linearGradient
            id='paintD3D3_linear'
            x1='163.7'
            y1='35.5'
            x2='215.2'
            y2='86.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2251BD' />
            <stop offset='1' stopColor='#26A7F4' />
          </linearGradient>
          <linearGradient
            id='paintD3D4_linear'
            x1='224.2'
            y1='74'
            x2='228.7'
            y2='137.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D5_linear'
            x1='225.22'
            y1='197'
            x2='148.7'
            y2='193.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#1A43AF' />
          </linearGradient>
          <linearGradient
            id='paintD3D6_linear'
            x1='252.834'
            y1='127.512'
            x2='196.252'
            y2='179.145'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#579BEB' />
          </linearGradient>
          <linearGradient
            id='paintD3D7_linear'
            x1='85.2'
            y1='197'
            x2='170.2'
            y2='183'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D8_linear'
            x1='19.7'
            y1='132.5'
            x2='155.305'
            y2='121.6'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#2E35AC' />
            <stop offset='1' stopColor='#359CFB' />
          </linearGradient>
          <linearGradient
            id='paintD3D9_linear'
            x1='110.939'
            y1='83.9864'
            x2='190.609'
            y2='185.912'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2F41B2' />
            <stop offset='1' stopColor='#89DFFF' />
          </linearGradient>
          <linearGradient
            id='paintD3D10_linear'
            x1='107.103'
            y1='123.232'
            x2='257.729'
            y2='132.961'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.153262' stopColor='#5DB9ED' />
            <stop offset='1' stopColor='#579BEB' />
          </linearGradient>
          <linearGradient
            id='paintD3D11_linear'
            x1='68.322'
            y1='92.2218'
            x2='237.364'
            y2='187.501'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#2A58C6' />
            <stop offset='1' stopColor='#4FF4FF' />
          </linearGradient>
          <linearGradient
            id='paintD3D12_linear'
            x1='189.2'
            y1='174.5'
            x2='117.7'
            y2='72'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#60F5FF' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  return modalities[mod]
}

export const Diamond = ({ width = '68px', height = '68px', diamond = 0, mod = 'data' }) => {
  const template = {
    0: <Diamond0 width={width} height={height} mod={mod} />,
    1: <Diamond1 width={width} height={height} mod={mod} />,
    2: <Diamond2 width={width} height={height} mod={mod} />,
    3: <Diamond3 width={width} height={height} mod={mod} />
  }

  return template[diamond]
}
