import React, { createRef, useEffect } from 'react'
import highlight from 'highlight.js'

interface HighlightCodeParams {
  children: React.ReactNode
  language: string
}

const HighlightCode: React.FC<HighlightCodeParams> = ({
  children,
  language,
}: HighlightCodeParams) => {
  const code = createRef<HTMLElement>()

  useEffect(() => {
    if (code.current) highlight.highlightBlock(code.current)
  }, [])

  return (
    <pre>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  )
}

export default HighlightCode
