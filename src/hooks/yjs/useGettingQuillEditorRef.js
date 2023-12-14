import { useRef } from "react"

export const useGettingQuillEditorRef = () => {
  const quillRef = useRef()

  return {
    quillRef,
    getQuillRef: (reactQuillRef) => {
      quillRef.current = reactQuillRef?.getEditor()
    }
  }
}
