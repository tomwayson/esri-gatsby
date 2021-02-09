import * as React from "react"
import { setDefaultOptions } from 'esri-loader';
import Layout from "../components/layout"
import Map from "../components/Map";

// configure esri-loader to lazy load ArcGIS CSS
setDefaultOptions({ css: true });

// markup
const ContactPage = () => {
  return (
    <Layout>
      <title>Contact Us</title>
      <h2>Contact Us</h2>
      <p>Visit our headquarters.</p>
      <Map latitude={34.0573} longitude={-117.1949} />
      <p>380 New York St
        <br/>Redlands, CA 92373</p>
    </Layout>
  )
}

export default ContactPage
