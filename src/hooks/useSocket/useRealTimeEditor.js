import { useEffect, useState } from 'react'

export const useRealTimeEditor = (socket) => {
  const [content, setContent] = useState(null)
  useEffect(() => {
    if (socket) {
      socket.on('documentChanged', e => setContent(e))
    }
  }, [socket])

  const postDocument = (e) => {
    socket.emit('chageDocument', e)
    setContent(e)
  }

  return {
    content,
    postDocument
  }
}
