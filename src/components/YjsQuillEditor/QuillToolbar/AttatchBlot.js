import { Button } from "antd"
const data = [
  ['a', 'a'],
  ['a', 'a'],
  ['a', 'a']
]
const ratio = [0.3, 0.7]
const AttatchBlot = ({ quillInstance }) => {
    const attatchBlot = () => {
      const range = quillInstance.getSelection(true)
      const value = {
        data,
        ratio
      }
    
      quillInstance.insertEmbed(range.index, 'table-attachment', value)
      quillInstance.setSelection(0)
    }

    return (
      <Button onClick={attatchBlot} className='ql-toolbar button'>Attatch Blot</Button>
    )
}

export default AttatchBlot
