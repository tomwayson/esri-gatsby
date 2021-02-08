import * as React from "react"
import { setDefaultOptions } from 'esri-loader';
import { Link } from "gatsby"
import WebMap from "../components/WebMap";

// configure esri-loader to lazy load ArcGIS CSS
setDefaultOptions({ css: true });

// markup
const MapPage = () => {
  return (
    <main>
      <title>Map Page</title>
      <p><Link to="/">Home</Link></p>
      <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
    </main>
  )
}

export default MapPage
