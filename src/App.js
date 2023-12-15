import './App.css'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { Input, Table } from 'antd'
import styled from 'styled-components'
import { Radio } from 'antd'
import { renderToString } from 'react-dom/server'

import { useRadioSelect } from './hooks/useRadioSelect'
import YjsQuillEditor from './components/YjsQuillEditor'
import { useMemo } from 'react';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: () => <Input />
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    render: () => <Input />
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: () => <Input />
  },
];
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
`

function App() {
  const { type: roomName, onSelect: onSelectRoomName } = useRadioSelect('1')

  // // extracting style tag
  // const cache = useMemo(() => createCache(), []);
  // const html = renderToString(
  //   <StyleProvider cache={cache}>
  //     <Table columns={columns} dataSource={dataSource} />
  //   </StyleProvider>,
  // );

  // // Grab style from cache
  // const styleText = extractStyle(cache);

  return (
    <Container>
      <Radio.Group value={roomName} onChange={e => onSelectRoomName(e.target.value)}>
        <Radio.Button value={'1'}>ROOM 1</Radio.Button>
        <Radio.Button value={'2'}>ROOM 2</Radio.Button>
      </Radio.Group>
      <YjsQuillEditor roomName={roomName} />
    </Container>
  )
}

export default App
