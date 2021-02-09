import * as React from "react"
import { setDefaultOptions } from 'esri-loader';
import Layout from "../components/layout"
import WebMap from "../components/WebMap";

// configure esri-loader to lazy load ArcGIS CSS
setDefaultOptions({ css: true });

// markup
const MapPage = () => {
  return (
    <Layout>
      <title>Map Page</title>
      <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
    </Layout>
  )
}

export default MapPage
