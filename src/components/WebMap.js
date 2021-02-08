import * as React from "react"
import { useWebMap } from 'esri-loader-hooks'

const WebMap = ({ id }) => {
  const itemId = id || 'e691172598f04ea8881cd2a4adaa45ba'
  const [ref] = useWebMap(itemId)
  return <div style={{ height: 600, maxWidth: 600 }} ref={ref} />
}

export default WebMap
