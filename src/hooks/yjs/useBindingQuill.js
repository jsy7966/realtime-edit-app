import { useEffect, useState } from 'react'
import { QuillBinding } from 'y-quill'

export const useBindingQuill = (quillRef, ydoc, provider) => {
  const [quillBinding, setQuillBinding] = useState(null)
  const bind = () => {
    const type = ydoc.getText('quill')
    setQuillBinding(new QuillBinding(type, quillRef, provider.awareness))
  }
  const unbind = () => {
    if (quillBinding)  {
      quillBinding.destroy()
      setQuillBinding(null)
    }
  }
  useEffect(() => {
    if (provider && quillRef && ydoc) {
      bind()
    }

    return () => {
      unbind()
    }
  }, [provider, quillRef, ydoc])

  return {
    unbind,
    isBindingFinished: !!quillBinding
  }
}
