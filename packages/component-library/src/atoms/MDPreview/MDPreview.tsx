/* eslint-disable react/no-children-prop */
import { useTheme } from '@mui/material'

interface MDPreviewProps {
  description: string
}

interface elementProps {
  children: any
}

export const MDPreview = async ({ description }: MDPreviewProps) => {
  const theme = useTheme()

  const textStyle = { color: theme.palette.text.primary }

  const ReactMarkdown = (await import('react-markdown')).default
  const rehypeRaw = (await import('rehype-raw')).default

  return (
    <div style={{ maxWidth: '85vw' }}>
      <ReactMarkdown
        // change any component's color into textStyle
        components={{
          p: ({ children, ...props }: elementProps) => (
            <p {...props} style={{ ...textStyle, textAlign: 'justify' }}>
              {children}
            </p>
          ),
          span: ({ children, ...props }: elementProps) => (
            <div
              {...props}
              style={{
                ...textStyle,
                textAlign: 'justify'
              }}
            >
              {children}
            </div>
          ),
          div: ({ children, ...props }: elementProps) => (
            <div
              {...props}
              style={{ ...textStyle, textAlign: 'justify', width: '100%', alignItems: 'center' }}
            >
              {children}
            </div>
          )
        }}
        children={description}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  )
}
