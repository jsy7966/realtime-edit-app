import { useEffect } from 'react'
import { QuillToolbar } from './QuillToolbar'
import { useBindingQuill } from '../../hooks/yjs/useBindingQuill.js'
import { useYjsWebsocket } from '../../hooks/yjs/useYjsWebsocket.js'
import { useGettingWsStatus } from '../../hooks/yjs/useGettingWsStatus.js'
import { useGettingQuillInstance } from '../../hooks/yjs/useGettingQuillInstance.js'
import { Button } from 'antd'

export default function YjsQuillEditor ({ roomName }) {
  const quillInstance = useGettingQuillInstance()
  const { ydoc, wsProvider } = useYjsWebsocket(roomName)
  const { isBindingFinished } = useBindingQuill(quillInstance, ydoc, wsProvider)
  const _status = useGettingWsStatus(wsProvider)
  const status = isBindingFinished ? _status : 'connecting'

  
  return (
    <>
      {status}
      <Button onClick={() => console.log(quillInstance?.getContents())}>Delta Log</Button>
      <QuillToolbar quillInstance={quillInstance} />
      <div id="quill-container"></div>
    </>
  )
}
