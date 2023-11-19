import React from 'react';
import { Link } from "gatsby"
import { SEO } from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"

import Header from '../components/header';
import Footer from '../components/footer';

import Carousel from '../components/carousel';
import ProfileCraigieburn from '../images/profile-craigieburn';
import Video from '../components/video';

import Reviews from '../../content/reviews.yaml';
import Videos from '../../content/videos.yaml';

const IndexPage = () => {

  return (
    <>
      <Header />

      <Carousel />

      <main>
        <h2>{useSiteMetadata().description}</h2>

        <ProfileCraigieburn />

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
          {/*           <ul>
            <li key="videos"><Link to="/videos">Videos</Link></li>
            <li key="competition-results"><Link to="/results">Competition Results</Link></li>
            <li key="industry"><Link to="/industry">Current Industry Positions</Link></li>
            <li key="writing"><Link to="/writing">Writing</Link></li>
            <li key="reviews"><Link to="/reviews">Reviews</Link></li>
          </ul> */}
        </section>


        <div className="main-background">
          {/* // * Stay Gold */}
        </div>
        <section id="video-edits" className='main-videos'>
          <Video
            key={Videos.videos[0].title}
            src={Videos.videos[0].youtube}
            title={Videos.videos[0].title}
            description={Videos.videos[0].description}
          />
        </section >

      </main>



      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)