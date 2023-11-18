import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Writing from '../../content/writing.yaml';

const IndustryPage = () => {
  return (
    <>
      <Header />
      <section id="writing" className="stork">
        <h3>Writing</h3>
        <ul>
          {Writing.writing.map((article) => {
            if (article.link) {
              return (
                <li key={article}>
                  <a href={article.link} target="_blank" rel='noopener noreferrer'>
                    {article.title}
                  </a>
                  &nbsp;- {article.publication}
                </li>
              )
            } else {
              return (
                <li key={article}>
                  {article.title} -&nbsp;
                  {article.publication}
                </li>
              )
            }
          })}
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default IndustryPage
