import { useEffect, useState } from "react"

export const useGettingWsStatus = (wsProvider) => {
  const [status, setStatus] = useState('connecting')
  useEffect(() => {
    if (wsProvider) {
      wsProvider.on('status', e => setStatus(e.status))
    } else setStatus('connecting')
  }, [wsProvider])

  return status
}
