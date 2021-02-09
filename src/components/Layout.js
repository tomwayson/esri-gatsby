import React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "2em",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const navListStyle = {
  listStyleType: 'none',
  paddingLeft: 0
}

const navListItemStyle = {
  display: 'inline-block',
  marginRight: '1em'
}

// markup
export default function Layout({ children }) {
  return (
    <main style={pageStyles}>
      <nav>
        <ul style={navListStyle}>
          <li style={navListItemStyle}><Link to="/">Home</Link></li>
          <li style={navListItemStyle}><Link to="/map/">Map</Link></li>
          <li style={navListItemStyle}><Link to="/contact/">Contact</Link></li>
        </ul>
      </nav>
      {children}
    </main>
  )
}