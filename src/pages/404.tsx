import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <main className="measure">
        <h2 className="crest">404</h2>
        <h1 className="mixta">Oops! Looks like this page has left the party.</h1>
        <p>Want to brighten up?<br />
          <Link to="/">Head to our home page.</Link>
        </p>
      </main>
    </>
  )
}

export default NotFoundPage
