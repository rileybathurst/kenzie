import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { SEO } from "../components/seo"
import Carousel from "../components/carousel"

const PhotoPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  )
}

export default PhotoPage

export const Head = () => (
  <SEO
    title="Gallery"
  />
)