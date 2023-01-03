interface HideContentProps {
  hide: boolean
  children: any
}

export const HideContent = ({ hide, children }: HideContentProps) => {
  return <div style={{ display: hide ? 'none' : 'block' }}>{children}</div>
}

HideContent.defaultProps = {
  hide: false
}
