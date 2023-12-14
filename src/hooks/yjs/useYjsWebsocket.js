import * as Y from 'yjs'

import { useEffect, useState } from 'react'
import { WebsocketProvider } from 'y-websocket'

export const useYjsWebsocket = (roomName) => {
  const [ydoc, setYdoc] = useState()
  const [wsProvider, setWsProvider] = useState()
  useEffect(() => {
    const _ydoc = new Y.Doc()
    const provider = new WebsocketProvider('ws://localhost:1234', roomName, _ydoc)
    setYdoc(_ydoc)
    setWsProvider(provider)

    return () => {
      if (provider) provider.destroy()
      setWsProvider(null)
    }
  }, [roomName])

  return { ydoc, wsProvider }
}
