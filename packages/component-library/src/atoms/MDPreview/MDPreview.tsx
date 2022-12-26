/* eslint-disable react/no-children-prop */
import { useTheme } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface MDPreviewProps {
  description: string
}

interface elementProps {
  node: React.ReactNode
}

const MDPreview = ({ description }: MDPreviewProps) => {
  const theme = useTheme()

  const textStyle = { color: theme.palette.text.primary }

  return (
    <div style={{ maxWidth: '85vw' }}>
      <ReactMarkdown
        // change any component's color into textStyle
        components={{
          p: ({ node, ...props }: elementProps) => (
            <p {...props} style={{ ...textStyle, textAlign: 'justify' }} />
          ),
          span: ({ node, ...props }: elementProps) => (
            <div
              {...props}
              style={{
                ...textStyle,
                textAlign: 'justify'
              }}
            />
          ),
          div: ({ node, ...props }: elementProps) => (
            <div
              {...props}
              style={{ ...textStyle, textAlign: 'justify', width: '100%', alignItems: 'center' }}
            />
          )
        }}
        children={description}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  )
}

export default MDPreview
