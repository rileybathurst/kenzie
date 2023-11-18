import React from "react"
import { Link } from "gatsby"

const List = () => {
  return (
    <ul>
      <li key="gallery"><a href="#gallery">Gallery</a></li>
      <li key="videos"><Link to="videos">Videos</Link></li>
      <li key="competition-results"><a href="#competition-results">Competition Results</a></li>
      <li key="current-industry-positions">
        <a href="#current-industry-positions">Current Industry Positions</a>
      </li>
      <li key="writing"><a href="#writing">Writing</a></li>
      <li key="other-rad-things"><a href="#other-rad-things">Other Rad Things</a></li>
      <li key="sponsors"><a href="#sponsors">Sponsors</a></li>
    </ul>
  )
}

export default List