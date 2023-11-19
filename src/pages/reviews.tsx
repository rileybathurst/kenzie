import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Reviews from '../../content/reviews.yaml';

const ReviewsPage = () => {
  return (
    <>
      <Header />
      <section id="gear-reviews" className="stork">
        <h3>Powder Magazine Gear Reviews</h3>
        {Reviews.reviews.map((review) => {

          let linked = review.link ? (
            <a href={review.link} target="_blank" rel='noopener noreferrer'>
              {review.year}
            </a>
          ) : (
            review.year
          )

          const products = Object.entries(review).map(([key, value]) => {
            if (typeof value == 'object') {
              const nest = Object.entries(value).map(([value]) => {
                return (<li key={value}>{value}</li>);
              })
              return (
                <ul>
                  <li>{key}
                    <ul>
                      {nest}
                    </ul>
                  </li>
                </ul>
              )
            }
          })

          return (
            <div className="section-text" key={review.year}>
              <h4>{linked}</h4>
              {products}
            </div>
          )
        })
        }
      </section >
      <Footer />
    </>
  )
}

export default ReviewsPage
