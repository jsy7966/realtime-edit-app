import { useState } from 'react'

export const useSelectServiceType = () => {
  const [type, setType] = useState('chat')

  return {
    type,
    onSelect: val => setType(val)
  }
}
