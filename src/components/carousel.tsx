import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Carousel = () => {

  let slide = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  }

  const { allImageSharp } = useStaticQuery(graphql`
    query allImageSharpQuery {
      allImageSharp(filter: {id: {ne: "11bbb740-534c-5ca3-b3f9-46dc0148cd9f"}}) {
        nodes {
          gatsbyImageData(
              height: 1080
            )
        }
      }
    }
  `)

  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (currentIndex) => {

    setCurrentIndex((prevIndex) => (prevIndex === 0 ? allImageSharp.nodes.length - 1 : prevIndex - 1));

    if (currentIndex === 0) {
      galleryRef.current.lastChild.scrollIntoView(slide);
    } else {
      galleryRef.current.children[currentIndex - 1].scrollIntoView(slide);
    }
  };

  const handleNext = (currentIndex) => {

    setCurrentIndex((prevIndex) => (prevIndex === allImageSharp.nodes.length - 1 ? 0 : prevIndex + 1));

    if (currentIndex === galleryRef.current.children.length - 1) {
      galleryRef.current.children[0].scrollIntoView(slide);
    } else {
      galleryRef.current.children[currentIndex + 1].scrollIntoView(slide);
    }
  };

  const handleLabelClick = (index) => {
    galleryRef.current.children[index].scrollIntoView(slide)
  }

  return (
    <>
      <div className="carousel__wrap">
        <section
          className="carousel"
          ref={galleryRef}
        >
          {allImageSharp.nodes.map((photos) => (
            <div
              key={photos.hash}
              className="slider"
              ref={useRef()}
            >
              <GatsbyImage
                image={photos.gatsbyImageData}
                alt={photos.name}
              />
            </div>
          ))}
        </section>

        <section className="carousel__label">
          <button onClick={() => handlePrev(currentIndex)}>Previous</button>
          {allImageSharp.nodes.map((photos, index) => (
            <button
              title={photos.name}
              key={photos.name}
              // I can push up the index of the number I am clicking on
              onClick={() => handleLabelClick(index)}
              className="slider"
            >
              <GatsbyImage
                image={photos.gatsbyImageData}
                alt={photos}
              />
            </button>
          ))}
          <button onClick={() => handleNext(currentIndex)}>Next</button>
        </section >
      </div >
    </>
  );
}

export default Carousel