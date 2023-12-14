import React from 'react'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const DocumentEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      {...value ? { value } : {}}
      onChange={onChange}
    />
  )
}

export default DocumentEditor
