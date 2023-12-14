import { useEffect, useState } from 'react'

import { createUuid } from '../../util'

export const useRealTimeChat = (socket) => {
  const [userId, setUserId] = useState()
  const [messages, setMessages] = useState([])
  useEffect(() => {
    if (socket) {
      setUserId(createUuid())
      socket.on('messagesUpdated', v => {
        setMessages(v)
      })
    }
  }, [socket])

  const sendMessage = (v) => {
    if (!userId) return
    const newMessage = {
      message: v,
      sentTime: new Date(),
      sender: userId
    }
    setMessages([ ...messages, newMessage ])
    socket.emit('updateMessages', [ ...messages, newMessage ])
  }

  return {
    userId,
    messages,
    sendMessage
  }
}
