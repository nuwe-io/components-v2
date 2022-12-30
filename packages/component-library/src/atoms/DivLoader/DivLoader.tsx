interface DivLoaderProps {
  show: boolean
  className: any
  style: any
  children: any
}

export const DivLoader = ({ show, className, style, children }: DivLoaderProps) => {
  return (
    show && (
      <div className={className} style={style}>
        {children}
      </div>
    )
  )
}
