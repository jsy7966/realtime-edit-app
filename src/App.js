import './App.css'

import styled from 'styled-components'
import { Radio } from 'antd'

import { useRadioSelect } from './hooks/useRadioSelect'
import YjsQuillEditor from './components/YjsQuillEditor'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
`

function App() {
  const { type: roomName, onSelect: onSelectRoomName } = useRadioSelect('1')

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
