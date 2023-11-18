import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Current from '../../content/current.yaml';

const IndustryPage = () => {
  return (
    <>
      <Header />
      <section id="current-industry-positions" className="stork">
        <h3>Current Industry Positions</h3>
        <ul>
          {Current.current.map((postion) => {
            return <li key={postion}>{postion}</li>
          })}
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default IndustryPage
