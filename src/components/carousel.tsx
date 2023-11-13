import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
const Carousel = () => {

  const { allImageSharp } = useStaticQuery(graphql`
    query allImageSharpQuery {
      allImageSharp {
        nodes {
          gatsbyImageData
        }
      }
    }
  `)


  const galleryRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? allImageSharp.length - 1 : prevIndex - 1));

    if (currentIndex === 0) {
      galleryRef.current.lastChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      galleryRef.current.children[currentIndex - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handleNext = (currentIndex) => {
    setCurrentIndex((prevIndex) => (prevIndex === allImageSharp.length - 1 ? 0 : prevIndex + 1));

    if (currentIndex === galleryRef.current.children.length - 1) {
      galleryRef.current.children[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    } else {
      galleryRef.current.children[currentIndex + 1].scrollIntoView({

      });
    }
  };

  const handleLabelClick = (index) => {
    setCurrentIndex(index);

    // ! theres isnt a name this wont work
    let i = allImageSharp.nodes.findIndex((element) => element.name === index);

    galleryRef.current.children[i].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
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
          {allImageSharp.nodes.map((photos) => (
            <button
              title={photos.name}
              key={photos.name}
              // I can push up the index of the number I am clicking on
              onClick={() => handleLabelClick(photos.name)}
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