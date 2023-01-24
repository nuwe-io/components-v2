/* eslint-disable react/no-children-prop */
import { useTheme } from '@mui/material'
import rehypeRaw from 'rehype-raw'
//import ReactMarkdown from 'react-markdown'
//const ReactMarkdown = (await import('react-markdown')) as typeof import('react-markdown')
const ReactMarkdown = (await import('react-markdown')).default

interface MDPreviewProps {
  description: string
}

interface elementProps {
  children: any
}

export const MDPreview = ({ description }: MDPreviewProps) => {
  const theme = useTheme()

  const textStyle = { color: theme.palette.text.primary }

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
