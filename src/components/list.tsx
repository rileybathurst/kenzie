import React from "react"
import { Link } from "gatsby"

const List = () => {
  return (
    <ul>
      <li key="gallery"><Link to="/gallery">Gallery</Link></li>
      <li key="videos"><Link to="/videos">Videos</Link></li>
      <li key="competition-results"><Link to="/results">Competition Results</Link></li>
      <li key="industry"><Link to="/industry">Current Industry Positions</Link></li>
      <li key="writing"><Link to="/writing">Writing</Link></li>
    </ul>
  )
}

export default List