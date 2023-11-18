import React, { useState, useRef, useEffect, Children } from 'react';
import { SEO } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from '../components/header';
import Footer from '../components/footer';

import BonsaiBackflip from '../images/bonsai-backflip';
import SkiWax from '../images/ski-wax';
import GuayakiPowSurf from '../images/guayaki-pow-surf';
import Waterfall from '../images/waterfall';
import PowderTurn from '../images/powder-turn';
import IlluminationRock from '../images/illumination-rock';
import CliffDrop from '../images/cliff-drop';
import MtBaker from '../images/mt-baker';
import ProfileCraigieburn from '../images/profile-craigieburn';
import Video from '../components/video';

import Current from '../../content/current.yaml';
import Comps from '../../content/comps.yaml';
import Writing from '../../content/writing.yaml';
import Reviews from '../../content/reviews.yaml';
import Videos from '../../content/videos.yaml';

const IndexPage = () => {
  return (
    <>
      <Header />

      <section id="gallery">
        <PowderTurn />
        <IlluminationRock />
        <CliffDrop />
        <MtBaker />
      </section>

      <main>
        <h2>{useSiteMetadata().description}</h2>

        <ProfileCraigieburn />
        <div className='image-column'>
          <BonsaiBackflip />
          <SkiWax />
          <GuayakiPowSurf />
          <Waterfall />
        </div>

        <article className="main-content">
          <section id="about">
            <h3>About</h3>
            <p>
              Kenzie Morris is based in Lake Tahoe, CA. She has been an athlete on
              the FWQ tour since 2013 and is now also a judge for the IFSA and
              TJFS tours. When she is not busy competing and traveling around the
              US, Canada, and New Zealand, she spends her time riding Squaw Valley
              Alpine Meadows. She has been a freeride coach since 2013 at Squaw
              Valley and loves teaching kids how to ski big mountain lines.
            </p>
            <blockquote>"Find your passion and make it everything"</blockquote>
          </section>

          <section id="current-industry-positions">
            <h3>Current Industry Positions</h3>
            <ul>
              {Current.current.map((postion) => {
                return <li key={postion}>{postion}</li>
              })}
            </ul>
          </section>

          <section id="competition-results">
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

          <hr />

          <section id="writing">
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

          <hr />

          <section id="gear-reviews">
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

          <hr />

          <section id="other-rad-things">
            <h3>Other Rad Things</h3>
            <div className="section-text">
              <ul>
                <li key="Facing">
                  <a
                    href="https://www.snowledge.co/blog/facing-fear-moving-mountains/"
                    target="_blank"
                    rel='noopener noreferrer'
                  >
                    Facing Fear and Moving Mountains - Snowledge Article
                  </a>
                </li>
                <li key="150">150 Days skied in 2017-18 Season</li>
              </ul>
            </div>
          </section>

        </article >

        <div className="main-background">
          {/* // * Stay Gold */}
        </div>
      </main>

      <section id="video-edits">
        <h2 className="text-center">Video Media</h2>
        {Videos.videos.map((video) => {
          return (
            <Video
              key={video.title}
              src={video.youtube}
              title={video.title}
              description={video.description}
            />
          )
        })}
      </section >

      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)