import { Button } from "antd"
const data = [
  ['', ''],
  ['', ''],
  ['', '']
]
const AttatchBlot = ({ quillInstance }) => {
    const attatchBlot = () => {
      const range = quillInstance.getSelection(true)
      const value = {
        data
      }
    
      quillInstance.insertEmbed(range.index, 'table-attachment', value)
      quillInstance.setSelection(0)
    }

    return (
      <Button onClick={attatchBlot} className='ql-toolbar button'>Attatch Blot</Button>
    )
}

export default AttatchBlot
