import { useEffect, useState } from "react";

export const useGettingQuillInstance = () => {
  const [quillInstance, setQuillInstance] = useState()

  useEffect(() => {
    let nIntervId
    function getQuillInstanceWithInterval() {
      if (!nIntervId) {
        nIntervId = setInterval(getQuillInstance, 1000)
      }
    }
  
    function getQuillInstance() {
      if (window.quillInstance && !quillInstance) setQuillInstance(window.quillInstance)
    }
    getQuillInstanceWithInterval()
    return (() => {
      function stopGettingQuillInstance() {
        clearInterval(nIntervId)
        nIntervId = null
      }
      stopGettingQuillInstance()
    })
  }, [])

  return quillInstance
}