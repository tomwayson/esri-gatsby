import * as React from "react"
import { useMap, useGraphic } from 'esri-loader-hooks'

const Map = ({ latitude, longitude }) => {
  const geometry = { type: 'point', latitude, longitude }
  const symbol = { type: 'simple-marker', color: [226, 119, 40] }
  // load the map
  const center = [longitude, latitude]
  const [ref, view] = useMap(
    { basemap: 'streets' },
    { view: { center, zoom: 13 } 
  })
  // show a point on the map
  useGraphic(view, { geometry, symbol })
  return (<div style={{ height: 400 }} ref={ref} />)
}

export default Map;
