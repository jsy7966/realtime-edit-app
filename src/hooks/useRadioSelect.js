import { useState } from 'react'

export const useRadioSelect = (defVal) => {
  const [type, setType] = useState(defVal)

  return {
    type,
    onSelect: val => setType(val)
  }
}
