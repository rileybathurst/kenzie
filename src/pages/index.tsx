import React, { useState, useRef, useEffect, Children } from 'react';
import { SEO } from "../components/seo"
import BonsaiBackflip from '../images/bonsai-backflip';
import SkiWax from '../images/ski-wax';
import GuayakiPowSurf from '../images/guayaki-pow-surf';
import Waterfall from '../images/waterfall';
import PowderTurn from '../images/powder-turn';
import IlluminationRock from '../images/illumination-rock';
import CliffDrop from '../images/cliff-drop';
import MtBaker from '../images/mt-baker';
import ProfileCraigieburn from '../images/profile-craigieburn';
import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';
import Video from '../components/video';

import Current from '../../content/current.yaml';
import Comps from '../../content/comps.yaml';
import Writing from '../../content/writing.yaml';
import Reviews from '../../content/reviews.yaml';

function List() {
  return (
    <ul>
      <li key="competition-results"><a href="#competition-results">Competition Results</a></li>
      <li key="current-industry-positions">
        <a href="#current-industry-positions">Current Industry Positions</a>
      </li>
      <li key="writing"><a href="#writing">Writing</a></li>
      <li key="other-rad-things"><a href="#other-rad-things">Other Rad Things</a></li>
      <li key="gallery"><a href="#gallery">Gallery</a></li>
      <li key="video-edits"><a href="#video-edits">Video Edits</a></li>
      <li key="sponsors"><a href="#sponsors">Sponsors</a></li>
    </ul>
  )
}

function Button() {

  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  // if (ref?.current?.clientHeight) {
  useEffect(() => {
    setAmount(ref?.current?.clientHeight);
  });
  // }

  // ? I wonder if I can do some fancy stuff with ternary operators here

  if (slide == "firstload") {

    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
          <span className='ripple'>
            {/* // * Stay Gold */}
          </span>
        </button>
        <nav
          id="menu_small"
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
          }}
          ref={ref}
        >
          <List />
        </nav>
      </>
    );
  } else if (slide == "menu") {
    // console.log(ref);

    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('close')}
        >
          <span
            style={{ transform: 'translateY(-2rem)' }}
            className="span-styles"
          >close<br />menu
          </span>
          <span className='ripple'>
            {/* // * Stay Gold */}
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(-' + amount + 'px)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          id="menu_small"
        >
          <List />
        </nav>
      </>
    );
  } else {

    // console.log(ref);
    return (
      <>
        <button
          className="button-styles"
          onClick={() => setSlide('menu')}
        >
          <span
            style={{ transform: 'translateY(0)' }}
            className="span-styles"
          >close<br />menu
          </span>
          <span className='ripple'>
            {/* // * Stay Gold */}
          </span>
        </button>
        <nav
          style={{
            transform: 'translateY(0)',
            marginBottom: '-' + amount + 'px',
            transition: '2s ease',
          }}
          ref={ref}
          id="menu_small"
        >
          <List />
        </nav>
      </>
    );
  }
}

const IndexPage = () => {
  return (
    <>
      <header className='headingStyles'>
        <h1>
          <span className='courgette'>Kenzie</span>&nbsp;
          <span className='h1__remainder'>&#40;Morris&#41; Bathurst</span>
        </h1>

        {/* <Button /> */}
      </header>

      <section id="gallery">
        <PowderTurn />
        <IlluminationRock />
        <CliffDrop />
        <MtBaker />
      </section>

      <main>
        <h2>Athlete, Adventurer, Outdoor lover</h2>

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

          <section id="current-industry-positions accordion">
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

                // console.log(key, value);
                if (typeof value == 'object') {

                  // console.log(value);
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

        <Video
          src="https://www.youtube.com/embed/xCqefdpfq1M"
          snowledge={true}
          title="Seeking Snowledge Pilot | The Last Snow in Tahoe 2020"
          description="In this first episode of Seeking Snowledge Kenzie And Riley Bathurst
            travel to find snow in the middle of summer. A passion known by snow
            enthusiasts as Turns All Year, the challenge being making turns on
            snow in every calendar month of the year. They take the adventure
            south of Lake Tahoe to a place called the Carson Range and Roundtop
            Peak. Follow along as they make a fun pit stop along the way at their
            favorite state park on Lake Tahoe, D.L. Bliss."
        />

        <Video
          src="https://www.youtube.com/embed/O-WHcykonMg"
          snowledge={true}
          title="Passage an Eaglecrest Experience"
          description="A journey to Juneau."
        />

        <Video
          src="https://www.youtube.com/embed/IQ7nZMW4bDg"
          title="The Shred Report - Feb. 6-7 | Squaw Valley &amp; Alpine Meadows, California"
          description="The sun is shining and the groomers and park are firing! Watch this
            all ladies crew ski both resorts! Hitting the south-facing off-piste
            terrain in the afternoon."
        />

        <Video
          src="https://www.youtube.com/embed/Z83ovv8p-rM"
          snowledge={true}
          title="2017 Season Edit Ambassador"
          description="Snowledge Ambassador Kenzie Morris just released her 2017 season edit,
      and it's more than just skillful movements and powdery views–it's
      fluidity, grace, grit and so much more–watch and enjoy &#40;we sure did&#41;."
        />

        <Video
          src="https://www.youtube.com/embed/YaRpBbbJ6Ow"
          snowledge={true}
          title="Hunt For The Powder People"
          description="Snowledge Ambassadors Riley Bathurst and Kenzie Morris shred the
            beautiful and bold mountains of New Zealand in this new edit, Hunt For
            The Powder People"
        />

        <Video
          src="https://www.youtube.com/embed/2E6d4enOJuY"
          snowledge={true}
          title="Women&apos;s Ski Edit 2018"
          description="The trifecta of Tahoe talent came out swinging in this Snowledge
          women&apos;s ski edit. Kenzie Morris, Savannah Amos, and Jealeisa Gemperle
          took on terrain all around the basin and around the world with waist
          deep powder turns, head height cliffs, and silky smooth spring skiing."
        />

        <Video
          src="https://www.youtube.com/embed/vZ-UgL-xY20"
          snowledge={true}
          title="How To GoPro Tutorial"
          description="Your ready to rip it up but does someone really get rad if there isn’t
        a camera to film it? Well we have the guide to getting you out there
        with the skiers camera of choice, sit back and learn how how to Go
        Pro."
        />

        <Video
          src="https://www.youtube.com/embed/ENIEQkFUo_s"
          snowledge={true}
          title="Pacific North Quest"
          description="Ready to venture out beyond the slush laps and jump lines in Tahoe,
            the Snowledge team ventured out to explore the volcanoes of the
            Pacific Northwest: Lassen Peak, Crater Lake, Tumalo Mountain, Mt.
            Bachelor, South Sister, and Mt. Hood."
        />

        <Video
          src="https://www.youtube.com/embed/S-_txN58TFU"
          snowledge={true}
          title="Cascadia"
          description="The Cascadia crew gathers in Santa Cruz, California to plan, prepare
            and set the precedent for the following weeks. Loading up and setting
            off, the team convoys north and inland, leaving behind the urban
            hustle and bustle for a moonlit campsite. Joining company with local
            split-boarder Jeff Steele they find their footing on the flanks of Mt
            Lassen before pushing north into Oregon and setting up camp
            overlooking the pristine waters of Crater Lake."
        />
      </section >


      {/*       <aside id="sponsors">
        <h3 className="screen-reader">Sponsors</h3>
        <div className="section-text">
          <ul id="sponsors-list">
            <li key="snowledge">
              <Snowledge />
              <p>
                <a href="https://www.snowledge.co/ambassadors/kenzie-morris/"
                >Team Athlete</a
                >
              </p>
            </li>
            <li key="She">
              <SheShreds />
              <p>She Shreds Co - Ambassador</p>
            </li>
            <li key="Ambassador">
              <Mons />
              <p>Ambassador</p>
            </li>
          </ul>
        </div>
      </aside> */}

      <footer>
        <nav>
          <List />
        </nav>

        <div className="footer-social">
          <h4>Kenzie &#40;Morris&#41; Bathurst</h4>
          <h4 className="screen-reader">Social Media</h4>
          <ul>
            <li key="Instagram">
              <a href="https://www.instagram.com/kaygbiv/">
                <p className="screen-reader">instagram.com/kaygbiv</p>
                <Instagram />
              </a>
            </li>
            <li key="Facebook">
              <a href="https://www.facebook.com/kenziebathurst">
                <p className="screen-reader">facebook.com/kenziebathurst</p>
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO>
    {Children}
  </SEO>
)