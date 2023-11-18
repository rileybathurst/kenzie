import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Comps from '../../content/comps.yaml';

const ResultsPage = () => {
  return (
    <>
      <Header />
      <section id="competition-results" className="stork">
        <h3>Competition Results</h3>
        <div className="section-text">
          <ul>
            {Comps.comps.map((result) => {
              if ('event' in result) {
                return (<li>{result.event} - {result.year} - {result.result}</li>)
              } else {
                const events = Object.entries(result).map(([key, value]) => {
                  if (typeof value === 'object') {
                    const nested = Object.entries(value).map(([key, value]) => {
                      return (<> - {value}</>)
                    })
                    return (<li>{key}{nested}</li>)
                  }
                })
                const year = result.year ? " - " + result.year : '';
                return <li>{result.series}{year}<ul>{events}</ul></li>
              }
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ResultsPage
