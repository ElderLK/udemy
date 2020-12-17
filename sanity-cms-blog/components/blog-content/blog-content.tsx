import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/highlight-code/highlight-code'
import { urlFor } from 'lib/api'

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    code: (props: any) => (
      <HighlightCode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </HighlightCode>
    ),
    /* eslint-disable-next-line react/display-name */
    image: ({ node: { asset, alt, position } }: any) => {
      const styles: React.CSSProperties = {}
      if (position === 'left') {
        styles.float = position
        styles.marginRight = '30px'
      } else if (position === 'right') {
        styles.float = position
        styles.marginLeft = '30px'
      }
      return (
        <div className="blog-image" style={styles}>
          <img src={urlFor(asset).height(300).fit('max').url() || ``} alt={alt} />
          <div className="image-alt">{alt}</div>
        </div>
      )
    },
    /* eslint-disable-next-line react/display-name */
    codesandbox: (props: any) => {
      const splitURL = props.node.url.split('/')
      const viewString = props.node.view ? `&view=${props.node.view}` : ''
      const [, , , , container] = splitURL
      const embedUrl = `https://codesandbox.io/embed/${container}?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fstyles.css&theme=${props.node.theme}${viewString}`
      return (
        <iframe
          src={embedUrl}
          style={{ width: '100%', height: '500px', border: 0, overflow: 'hidden' }}
          title={props.node?.container}
          allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      )
    },
  },
}

interface BlogContentParams {
  content: any
}

const BlogContent: React.FC<BlogContentParams> = ({ content }: BlogContentParams) => {
  return <BlockContent blocks={content} serializers={serializers} />
}

export default BlogContent
