import React from 'react'
import { Alert } from 'react-bootstrap'

const PreviewAlert: React.FC = () => {
  return (
    <Alert variant="secondary">
      Preview Mode &#32;<Alert.Link href="/api/exit-preview">Leave preview mode</Alert.Link>
    </Alert>
  )
}

export default PreviewAlert
