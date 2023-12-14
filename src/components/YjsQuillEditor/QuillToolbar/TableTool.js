import { Button, Dropdown } from 'antd'
import { TableOutlined } from '@ant-design/icons'

export const TableTool = ({ quillInstance }) => {
  const table = quillInstance?.getModule('table');
  const tableItems = [
    {
      key: '1',
      onClick: () => {
        table.insertTable(2, 2)
      },
      label: <Button className='ql-toolbar button' type='text'>테이블 추가</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.insertRowAbove()
      },
      label: <Button className='ql-toolbar button' type='text'>위에 행 추가</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.insertRowBelow()
      },
      label: <Button className='ql-toolbar button' type='text'>아래에 행 추가</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.insertColumnLeft()
      },
      label: <Button className='ql-toolbar button' type='text'>위에 열 추가</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.insertColumnRight()
      },
      label: <Button className='ql-toolbar button' type='text'>아래에 열 추가</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.deleteRow()
      },
      label: <Button className='ql-toolbar button' type='text'>행 삭제</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.deleteColumn()
      },
      label: <Button className='ql-toolbar button' type='text'>테이블 삭제</Button>
    },
    {
      key: '1',
      onClick: () => {
        table.deleteTable()
      },
      label: <Button className='ql-toolbar button' type='text'>테이블 추가</Button>
    },
  ]
  return (
    <Dropdown className='ql-picker' menu={{ items: tableItems }}>
    <TableOutlined />
  </Dropdown>
  )
}
