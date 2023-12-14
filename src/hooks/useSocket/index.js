import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { useRealTimeChat } from './useRealTimeChat'
import { useRealTimeEditor } from './useRealTimeEditor'

export const useSocket = () => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
   const server = 'http://localhost:7000'

   const connectionOptions = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
   }

   const newSocket = io(server, connectionOptions)
   setSocket(newSocket)

   newSocket.on('connect', () => {
    console.log('Connected to newSocket.io server!')
   })

   return () => {
    newSocket.disconnect()
   }
  }, [])

  const { content, postDocument } = useRealTimeEditor(socket)

  const { messages, userId, sendMessage } = useRealTimeChat(socket)

  return {
    content,
    postDocument,
    userId,
    messages,
    sendMessage
  }
}
