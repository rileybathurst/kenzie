import * as React from "react"
import { graphql, useStaticQuery } from "gatsby";

const SPage = () => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      markdownRemark(frontmatter: {title: {eq: "🦄"}}) {
        id
        html
      }
    }
  `)

  console.log(data)

  return (
    <main>

      hey
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </main >
  )
}

export default SPage
