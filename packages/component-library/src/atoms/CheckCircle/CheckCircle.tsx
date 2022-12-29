interface CheckCircleProps {
  size?: string
  color?: string
}

export const CheckCircle = ({ size = '24', color = '#000000' }: CheckCircleProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
    <polyline points='22 4 12 14.01 9 11.01'></polyline>
  </svg>
)
