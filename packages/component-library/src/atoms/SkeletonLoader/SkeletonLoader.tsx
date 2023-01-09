import { Skeleton } from '@mui/material'

interface SkeletonLoaderProps {
  renderCondition?: boolean
  width: string
  height: string
  variant?: 'text' | 'rectangular' | 'rounded' | 'circular' | undefined
  className?: string
  style?: object
}

export const SkeletonLoader = ({
  renderCondition,
  className,
  width,
  height,
  variant,
  style
}: SkeletonLoaderProps) => {
  return renderCondition ? (
    <div style={{ width: '100%', ...style }} className={className}>
      <Skeleton width={width} height={height} variant={variant} />
    </div>
  ) : null
}

SkeletonLoader.defaultProps = {
  renderCondition: true,
  width: '100%',
  height: '70px',
  variant: 'rect'
}
