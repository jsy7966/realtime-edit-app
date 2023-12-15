import { useEffect, useState } from 'react'
import QuillCursors from 'quill-cursors'

import AddTableBlot from './customModules/tableBlot'

const { Quill } = window

Quill.register('modules/cursors', QuillCursors)

Quill.register(AddTableBlot)

export const useGettingQuillInstance = () => {
  const [quillInstance, setQuillInstance] = useState()

  useEffect(() => {
    let nIntervId
    function getQuillInstanceWithInterval() {
      if (!nIntervId) {
        nIntervId = setInterval(getQuillInstance, 1000)
      }
    }

    function stopGettingQuillInstance() {
      clearInterval(nIntervId)
      nIntervId = null
    }

    function getQuillInstance() {
      if (document.getElementById('quill-container') && !quillInstance) {
        const _quillInstance = new window.Quill(document.getElementById('quill-container'), {
          theme: 'snow',
          modules: {
            table: false,
            cursors: true,
            toolbar: {
              container: document.getElementById('toolbar')
            }
          }
        })
        setQuillInstance(_quillInstance)
        stopGettingQuillInstance()
      }
    }

    getQuillInstanceWithInterval()
  }, [])

  useEffect(() => {
    if (quillInstance) {
      quillInstance.on('text-change', function() {
        var text = quillInstance.getContents()
        console.log(text)
      })
    }
  }, [quillInstance])

  return quillInstance
}