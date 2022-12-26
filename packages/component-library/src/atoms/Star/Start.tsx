interface StartProps {
  width: number
  height: number
  locked: boolean
}
export const Start = ({ width = 140, height = 137, locked = false }: StartProps) => {
  if (!locked) {
    return (
      <svg width={`${width}px`} height={`${height}px`} viewBox='0 0 140 137' fill='none'>
        <g filter='url(#filterSTAR0_ddd)'>
          <g filter='url(#filterSTAR1_id)'>
            <path
              d='M66.9137 33.3478C68.2632 30.703 72.0423 30.703 73.3919 33.3478L82.8464 51.8761C83.3748 52.9116 84.3665 53.632 85.5146 53.8146L106.058 57.0808C108.99 57.547 110.158 61.1412 108.059 63.242L93.3597 77.9593C92.5381 78.7818 92.1594 79.9476 92.3405 81.0959L95.5823 101.643C96.0451 104.576 92.9877 106.797 90.3413 105.451L71.8018 96.0182C70.7657 95.491 69.5399 95.491 68.5038 96.0182L49.9643 105.451C47.3179 106.797 44.2605 104.576 44.7233 101.643L47.9651 81.0959C48.1462 79.9476 47.7675 78.7818 46.9459 77.9593L32.2461 63.242C30.1478 61.1412 31.3156 57.547 34.248 57.0808L54.791 53.8146C55.9391 53.632 56.9308 52.9116 57.4592 51.8761L66.9137 33.3478Z'
              fill='#569B51'
            />
          </g>
          <path
            d='M66.9137 33.3478C68.2632 30.703 72.0423 30.703 73.3919 33.3478L82.8464 51.8761C83.3748 52.9116 84.3665 53.632 85.5146 53.8146L106.058 57.0808C108.99 57.547 110.158 61.1412 108.059 63.242L93.3597 77.9593C92.5381 78.7818 92.1594 79.9476 92.3405 81.0959L95.5823 101.643C96.0451 104.576 92.9877 106.797 90.3413 105.451L71.8018 96.0182C70.7657 95.491 69.5399 95.491 68.5038 96.0182L49.9643 105.451C47.3179 106.797 44.2605 104.576 44.7233 101.643L47.9651 81.0959C48.1462 79.9476 47.7675 78.7818 46.9459 77.9593L32.2461 63.242C30.1478 61.1412 31.3156 57.547 34.248 57.0808L54.791 53.8146C55.9391 53.632 56.9308 52.9116 57.4592 51.8761L66.9137 33.3478Z'
            fill='url(#paintSTAR0_linear)'
          />
          <path
            d='M66.9145 33.3471C68.2641 30.7023 72.0432 30.7023 73.3928 33.3471L82.8473 51.8753C83.3757 52.9108 84.3673 53.6313 85.5154 53.8138L106.058 57.0801C108.991 57.5463 110.159 61.1404 108.06 63.2413L93.3605 77.9586C92.539 78.7811 92.1602 79.9468 92.3414 81.0951L95.5831 101.642C96.0459 104.575 92.9885 106.796 90.3421 105.45L71.8026 96.0174C70.7665 95.4903 69.5408 95.4903 68.5046 96.0174L49.9652 105.45C47.3187 106.796 44.2614 104.575 44.7241 101.642L47.9659 81.0951C48.1471 79.9468 47.7683 78.7811 46.9468 77.9586L32.2469 63.2413C30.1486 61.1404 31.3164 57.5463 34.2489 57.0801L54.7919 53.8138C55.94 53.6313 56.9316 52.9108 57.46 51.8753L66.9145 33.3471Z'
            fill='url(#paintSTAR1_lineard)'
          />
          <path
            d='M66.9145 33.3471C68.2641 30.7023 72.0432 30.7023 73.3928 33.3471L82.8473 51.8753C83.3757 52.9108 84.3673 53.6313 85.5154 53.8138L106.058 57.0801C108.991 57.5463 110.159 61.1404 108.06 63.2413L93.3605 77.9586C92.539 78.7811 92.1602 79.9468 92.3414 81.0951L95.5831 101.642C96.0459 104.575 92.9885 106.796 90.3421 105.45L71.8026 96.0174C70.7665 95.4903 69.5408 95.4903 68.5046 96.0174L49.9652 105.45C47.3187 106.796 44.2614 104.575 44.7241 101.642L47.9659 81.0951C48.1471 79.9468 47.7683 78.7811 46.9468 77.9586L32.2469 63.2413C30.1486 61.1404 31.3164 57.5463 34.2489 57.0801L54.7919 53.8138C55.94 53.6313 56.9316 52.9108 57.46 51.8753L66.9145 33.3471Z'
            fill='url(#paintSTAR2_radiald'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M81.7676 52.4263L72.3131 33.898C71.4133 32.1348 68.8939 32.1348 67.9942 33.898L58.5397 52.4263C57.8352 53.8069 56.513 54.7676 54.9822 55.011L34.4392 58.2772C32.4842 58.588 31.7057 60.9841 33.1046 62.3846L47.8044 77.102C48.8998 78.1987 49.4048 79.753 49.1632 81.2841L45.9215 101.831C45.613 103.786 47.6512 105.267 49.4155 104.369L67.955 94.9371C69.3365 94.2342 70.9708 94.2342 72.3523 94.9371L90.8918 104.369C92.6561 105.267 94.6943 103.786 94.3858 101.831L91.144 81.2841C90.9025 79.753 91.4075 78.1987 92.5029 77.102L107.203 62.3846C108.602 60.9841 107.823 58.588 105.868 58.2772L85.3251 55.011C83.7943 54.7676 82.4721 53.8069 81.7676 52.4263ZM73.3928 33.3471C72.0432 30.7023 68.2641 30.7023 66.9145 33.3471L57.46 51.8753C56.9316 52.9108 55.94 53.6313 54.7919 53.8138L34.2489 57.0801C31.3164 57.5463 30.1486 61.1404 32.2469 63.2413L46.9468 77.9586C47.7683 78.7811 48.1471 79.9468 47.9659 81.0951L44.7241 101.642C44.2614 104.575 47.3187 106.796 49.9652 105.45L68.5046 96.0174C69.5408 95.4903 70.7665 95.4903 71.8026 96.0174L90.3421 105.45C92.9885 106.796 96.0459 104.575 95.5831 101.642L92.3414 81.0951C92.1602 79.9468 92.539 78.7811 93.3605 77.9586L108.06 63.2413C110.159 61.1404 108.991 57.5463 106.058 57.0801L85.5154 53.8138C84.3673 53.6313 83.3757 52.9108 82.8473 51.8753L73.3928 33.3471Z'
            fill='url(#paintSTAR3_lineard)'
          />
          <path
            d='M68.5781 51.5378C69.2783 50.3276 71.0255 50.3276 71.7257 51.5378L77.263 61.1085C77.5205 61.5535 77.9543 61.8687 78.4572 61.9761L89.2705 64.2849C90.6379 64.5769 91.1778 66.2385 90.2432 67.2784L82.8521 75.5023C82.5084 75.8847 82.3427 76.3947 82.396 76.9061L83.5416 87.9036C83.6865 89.2943 82.273 90.3213 80.9952 89.7537L70.8899 85.2657C70.42 85.057 69.8837 85.057 69.4139 85.2657L59.3086 89.7537C58.0307 90.3213 56.6172 89.2943 56.7621 87.9036L57.9078 76.9061C57.961 76.3947 57.7953 75.8847 57.4516 75.5023L50.0606 67.2784C49.126 66.2385 49.6659 64.5769 51.0332 64.2849L61.8466 61.9761C62.3494 61.8687 62.7832 61.5535 63.0407 61.1085L68.5781 51.5378Z'
            fill='url(#paintSTAR4_lineard)'
          />
          <path
            d='M93.236 65.784C71.2991 86.514 51.7069 77.345 44.6529 70.1692C33.9229 54.2232 57.4693 66.98 78.3332 61.3989C95.0243 56.9339 95.223 62.4619 93.236 65.784Z'
            fill='url(#paintSTAR5_lineard)'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M67.6668 37.4731C68.1148 37.6998 68.2943 38.2467 68.0676 38.6947L65.4972 43.7751C65.2705 44.2231 64.7235 44.4025 64.2755 44.1758C63.8275 43.9491 63.6481 43.4022 63.8748 42.9542L66.4452 37.8739C66.6719 37.4258 67.2188 37.2464 67.6668 37.4731Z'
            fill='#9AD096'
          />
          <circle cx='36.212' cy='59.4246' r='0.909117' fill='#9AD096' />
          <circle cx='63.4856' cy='45.4858' r='0.909117' fill='#9AD096' />
          <path
            d='M61.4697 54.8706C54.5738 64.6386 57.0382 69.9569 59.1324 71.395C65.4927 74.2657 77.0817 57.3272 77.8659 52.8448C78.6501 48.3624 70.0896 42.6606 61.4697 54.8706Z'
            fill='url(#paintSTAR6_lineard)'
            fillOpacity='0.6'
          />
        </g>

        <defs>
          <filter
            id='filterSTAR0_ddd'
            x='0.566708'
            y='0.7514'
            width='139.173'
            height='135.714'
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
              values='0 0 0 0 0.339167 0 0 0 0 0.608333 0 0 0 0 0.319375 0 0 0 0.59 0'
            />
            <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='3.82651' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.339167 0 0 0 0 0.608333 0 0 0 0 0.319375 0 0 0 0.6 0'
            />
            <feBlend mode='normal' in2='effect1_dropShadow' result='effect2_dropShadow' />
            <feBlend mode='normal' in='SourceGraphic' in2='effect2_dropShadow' result='shape' />
          </filter>
          <filter
            id='filterSTAR1_id'
            x='31.1788'
            y='25.3034'
            width='77.948'
            height='80.5501'
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
            <feOffset dy='-6.06078' />
            <feGaussianBlur stdDeviation='7.57597' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.117152 0 0 0 0 0.271082 0 0 0 0 0.105834 0 0 0 1 0'
            />
            <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
          </filter>
          <linearGradient
            id='paintSTAR0_lineard'
            x1='70.1528'
            y1='27'
            x2='90.4564'
            y2='105.487'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#569B51' stopOpacity='0' />
            <stop offset='1' stopColor='#66BA5E' stopOpacity='0.63' />
          </linearGradient>
          <linearGradient
            id='paintSTAR1_lineard'
            x1='70.1536'
            y1='26.9993'
            x2='90.4572'
            y2='105.486'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#569B51' stopOpacity='0' />
            <stop offset='1' stopColor='#66BA5E' stopOpacity='0.66' />
          </linearGradient>
          <radialGradient
            id='paintSTAR2_radiald'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(59.5472 60.6366) rotate(52.6712) scale(52.9729)'
          >
            <stop offset='0.738765' stopColor='#569B51' stopOpacity='0' />
            <stop offset='0.89825' stopColor='#66BA5E' stopOpacity='0.38' />
            <stop offset='1' stopColor='#9CD098' />
          </radialGradient>
          <linearGradient
            id='paintSTAR3_lineard'
            x1='95.6088'
            y1='87.6071'
            x2='53.7895'
            y2='49.7272'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#66BA5E' stopOpacity='0.63' />
            <stop offset='0.218803' stopColor='#66BA5E' stopOpacity='0' />
            <stop offset='0.491108' stopColor='#569B51' stopOpacity='0.6' />
            <stop offset='0.733041' stopColor='#569B51' />
            <stop offset='1' stopColor='white' stopOpacity='0' />
            <stop offset='1' stopColor='#66BA5E' stopOpacity='0' />
          </linearGradient>
          <linearGradient
            id='paintSTAR4_lineard'
            x1='70.1519'
            y1='48.8177'
            x2='69.5458'
            y2='89.1219'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#66BA5E' />
            <stop offset='0.277442' stopColor='#8FD789' stopOpacity='0.51' />
            <stop offset='1' stopColor='#D6FFD2' stopOpacity='0.15' />
          </linearGradient>
          <linearGradient
            id='paintSTAR5_lineard'
            x1='68.1994'
            y1='64.1893'
            x2='67.8992'
            y2='78.5131'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#34692F' stopOpacity='0' />
            <stop offset='0.731853' stopColor='#8CD985' stopOpacity='0.46' />
          </linearGradient>
          <linearGradient
            id='paintSTAR6_lineard'
            x1='64.1818'
            y1='56.1772'
            x2='72.2309'
            y2='63.774'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.223958' stopColor='#A3DF9E' stopOpacity='0.5' />
            <stop offset='1' stopColor='#CFCFCF' stopOpacity='0' />
          </linearGradient>
        </defs>
      </svg>
    )
  } else {
    return (
      <svg
        width={`${width - 5}px`}
        height={`${height - 5}px`}
        viewBox='0 0 140 137'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filterSTARTLOCKED0_i)'>
          <path
            d='M53.5998 1.86133C53.9639 1.10853 55.0361 1.10853 55.4002 1.86133L70.6114 33.3118C70.7525 33.6037 71.0264 33.809 71.3462 33.8627L104.481 39.421C105.271 39.5534 105.592 40.5134 105.042 41.0947L81.2677 66.2076C81.0563 66.4309 80.9594 66.739 81.0049 67.043L86.2394 102.046C86.3611 102.86 85.5025 103.465 84.7774 103.075L54.973 87.0769C54.6776 86.9184 54.3224 86.9184 54.027 87.0769L24.2226 103.075C23.4975 103.465 22.6389 102.86 22.7606 102.046L27.9951 67.043C28.0406 66.739 27.9437 66.4309 27.7323 66.2076L3.95793 41.0947C3.40764 40.5134 3.72929 39.5534 4.51869 39.421L37.6538 33.8627C37.9736 33.809 38.2475 33.6037 38.3886 33.3118L53.5998 1.86133Z'
            fill='url(#paintSTARLOCKED0_linear)'
          />
        </g>
        <path
          d='M53.5998 1.86133C53.9639 1.10853 55.0361 1.10853 55.4002 1.86133L70.6114 33.3118C70.7525 33.6037 71.0264 33.809 71.3462 33.8627L104.481 39.421C105.271 39.5534 105.592 40.5134 105.042 41.0947L81.2677 66.2076C81.0563 66.4309 80.9594 66.739 81.0049 67.043L86.2394 102.046C86.3611 102.86 85.5025 103.465 84.7774 103.075L54.973 87.0769C54.6776 86.9184 54.3224 86.9184 54.027 87.0769L24.2226 103.075C23.4975 103.465 22.6389 102.86 22.7606 102.046L27.9951 67.043C28.0406 66.739 27.9437 66.4309 27.7323 66.2076L3.95793 41.0947C3.40764 40.5134 3.72929 39.5534 4.51869 39.421L37.6538 33.8627C37.9736 33.809 38.2475 33.6037 38.3886 33.3118L53.5998 1.86133Z'
          fill='url(#paintSTARLOCKED1_linear)'
        />
        <path
          d='M50.5929 8.08347C52.2219 4.71541 56.7833 4.7154 58.4123 8.08346L69.824 31.6783C70.4617 32.997 71.6587 33.9145 73.0444 34.1469L97.8401 38.3063C101.38 38.9001 102.789 43.477 100.256 46.1523L82.5136 64.8941C81.522 65.9416 81.0648 67.4261 81.2835 68.8884L85.1963 95.0539C85.7549 98.7889 82.0646 101.618 78.8703 99.903L56.4929 87.8912C55.2423 87.2199 53.7628 87.2199 52.5122 87.8912L30.1348 99.903C26.9406 101.618 23.2503 98.7889 23.8088 95.0539L27.7217 68.8884C27.9404 67.4261 27.4832 65.9416 26.4916 64.8941L8.74872 46.1523C6.21601 43.477 7.62557 38.9001 11.165 38.3063L35.9607 34.1469C37.3465 33.9145 38.5434 32.997 39.1812 31.6783L50.5929 8.08347Z'
          fill='url(#paintSTARLOCKED2_linear)'
        />
        <path
          d='M50.5929 8.08347C52.2219 4.71541 56.7833 4.7154 58.4123 8.08346L69.824 31.6783C70.4617 32.997 71.6587 33.9145 73.0444 34.1469L97.8401 38.3063C101.38 38.9001 102.789 43.477 100.256 46.1523L82.5136 64.8941C81.522 65.9416 81.0648 67.4261 81.2835 68.8884L85.1963 95.0539C85.7549 98.7889 82.0646 101.618 78.8703 99.903L56.4929 87.8912C55.2423 87.2199 53.7628 87.2199 52.5122 87.8912L30.1348 99.903C26.9406 101.618 23.2503 98.7889 23.8088 95.0539L27.7217 68.8884C27.9404 67.4261 27.4832 65.9416 26.4916 64.8941L8.74872 46.1523C6.21601 43.477 7.62557 38.9001 11.165 38.3063L35.9607 34.1469C37.3465 33.9145 38.5434 32.997 39.1812 31.6783L50.5929 8.08347Z'
          fill='url(#paintSTARLOCKED3_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M68.5207 32.3799L57.109 8.78507C56.023 6.5397 52.9821 6.5397 51.8961 8.78508L40.4844 32.3799C39.634 34.1382 38.0382 35.3615 36.1905 35.6714L11.3948 39.8308C9.03512 40.2266 8.09543 43.2779 9.7839 45.0614L27.5268 63.8033C28.8489 65.1999 29.4585 67.1792 29.1669 69.129L25.254 95.2945C24.8817 97.7845 27.3419 99.6703 29.4714 98.5272L51.8488 86.5154C53.5163 85.6204 55.4889 85.6204 57.1564 86.5154L79.5338 98.5272C81.6633 99.6703 84.1235 97.7845 83.7511 95.2945L79.8382 69.129C79.5467 67.1792 80.1562 65.1999 81.4784 63.8033L99.2213 45.0615C100.91 43.2779 99.97 40.2266 97.6104 39.8308L72.8147 35.6714C70.967 35.3615 69.3711 34.1382 68.5207 32.3799ZM58.4123 8.08346C56.7833 4.7154 52.2219 4.71541 50.5929 8.08347L39.1812 31.6783C38.5434 32.997 37.3465 33.9145 35.9607 34.1469L11.165 38.3063C7.62557 38.9001 6.21601 43.477 8.74872 46.1523L26.4916 64.8941C27.4832 65.9416 27.9404 67.4261 27.7217 68.8884L23.8088 95.0539C23.2503 98.7889 26.9406 101.618 30.1348 99.903L52.5122 87.8912C53.7628 87.2199 55.2423 87.2199 56.4929 87.8912L78.8703 99.903C82.0646 101.618 85.7549 98.7889 85.1963 95.0539L81.2835 68.8884C81.0648 67.4261 81.522 65.9416 82.5136 64.8941L100.256 46.1523C102.789 43.477 101.38 38.9001 97.8401 38.3063L73.0444 34.1469C71.6587 33.9145 70.4617 32.997 69.824 31.6783L58.4123 8.08346Z'
          fill='url(#paintSTARLOCKED4_linear)'
        />
        <path
          d='M52.9061 30.6918C53.5963 29.4332 55.4044 29.4332 56.0946 30.6918L63.1773 43.6073C63.4281 44.0646 63.8632 44.3921 64.372 44.5068L78.3499 47.6556C79.6843 47.9562 80.2215 49.5672 79.3345 50.6084L69.6794 61.9426C69.3591 62.3186 69.2056 62.8088 69.2541 63.3004L70.7409 78.3576C70.8794 79.7609 69.4369 80.781 68.1599 80.1827L55.2719 74.1436C54.783 73.9146 54.2177 73.9146 53.7289 74.1436L40.8408 80.1827C39.5638 80.781 38.1213 79.7609 38.2599 78.3575L39.7466 63.3004C39.7952 62.8088 39.6416 62.3186 39.3213 61.9426L29.6663 50.6084C28.7793 49.5672 29.3164 47.9562 30.6508 47.6556L44.6288 44.5068C45.1376 44.3921 45.5726 44.0646 45.8234 43.6073L52.9061 30.6918Z'
          fill='url(#paintSTARLOCKED5_linear)'
        />
        <path
          d='M82.3644 49.3906C55.8863 75.7892 32.2382 64.1129 23.724 54.9749C10.7727 34.6684 39.1935 50.9136 64.3766 43.8062C84.523 38.1204 84.7628 45.16 82.3644 49.3906Z'
          fill='url(#paintSTARLOCKED6_linear)'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M51.5014 13.3377C52.0422 13.6264 52.2588 14.3229 51.9852 14.8934L48.8826 21.363C48.609 21.9335 47.9489 22.162 47.4081 21.8733C46.8673 21.5847 46.6508 20.8882 46.9244 20.3177L50.0269 13.8481C50.3005 13.2776 50.9607 13.0491 51.5014 13.3377Z'
          fill='url(#paintSTARLOCKED7_linear)'
        />
        <ellipse
          cx='13.5334'
          cy='41.2921'
          rx='1.09732'
          ry='1.15772'
          fill='url(#paintSTARLOCKED8_linear)'
        />
        <ellipse
          cx='46.454'
          cy='23.54'
          rx='1.09732'
          ry='1.15772'
          fill='url(#paintSTARLOCKED9_linear)'
        />
        <path
          d='M44.021 35.4927C35.6975 47.9319 38.6721 54.7044 41.1998 56.5358C48.8767 60.1916 62.8648 38.6211 63.8114 32.913C64.7579 27.2048 54.4253 19.9438 44.021 35.4927Z'
          fill='url(#paintSTARLOCKED10_linear)'
        />
        <defs>
          <filter
            id='filterSTARTLOCKED0_i'
            x='3.68311'
            y='-4.76405'
            width='101.634'
            height='107.961'
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
            <feOffset dy='-6.06078' />
            <feGaussianBlur stdDeviation='7.57597' />
            <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0.595833 0 0 0 0 0.83025 0 0 0 0 1 0 0 0 1 0'
            />
            <feBlend mode='normal' in2='shape' result='effect1_innerShadow' />
          </filter>
          <linearGradient
            id='paintSTARLOCKED0_linear'
            x1='54.5'
            y1='0'
            x2='54.5'
            y2='115'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED1_linear'
            x1='54.5'
            y1='0'
            x2='54.5'
            y2='115'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED2_linear'
            x1='54.5026'
            y1='5.55742'
            x2='54.5026'
            y2='100.416'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED3_linear'
            x1='54.5026'
            y1='5.55742'
            x2='54.5026'
            y2='100.416'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED4_linear'
            x1='54.5026'
            y1='5.55742'
            x2='54.5026'
            y2='100.416'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED5_linear'
            x1='54.5004'
            y1='27.7847'
            x2='54.5004'
            y2='87.2142'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED6_linear'
            x1='51.9423'
            y1='41.6777'
            x2='51.9423'
            y2='65.6039'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED7_linear'
            x1='49.5749'
            y1='13.1692'
            x2='49.3075'
            y2='22.0411'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED8_linear'
            x1='13.5334'
            y1='40.1344'
            x2='13.5334'
            y2='42.4498'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED9_linear'
            x1='46.454'
            y1='22.3823'
            x2='46.454'
            y2='24.6977'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
          <linearGradient
            id='paintSTARLOCKED10_linear'
            x1='44.4272'
            y1='33.961'
            x2='56.8609'
            y2='47.0765'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#AACCFF' stopOpacity='0' />
            <stop offset='1' stopColor='#AACCFF' stopOpacity='0.3' />
          </linearGradient>
        </defs>
      </svg>
    )
  }
}
