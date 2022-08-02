import React, { useState, useRef, useEffect } from 'react';

import { StaticImage } from "gatsby-plugin-image"
import BonsaiBackflip from '../images/bonsai-backflip';
import SkiWax from '../images/ski-wax';
import GuayakiPowSurf from '../images/guayaki-pow-surf';
import Waterfall from '../images/waterfall';

function CurrentIndustryPositions() {
  // I dont know how to make this reuseable
  // but i bet i coult set this boolean to the string
  const [hiddenBoolean, setHiddenBoolean] = useState(false);

  function handleClick() {
    setHiddenBoolean(hiddenBoolean === false ? true : false);
  }

  return (
    <section id="current-industry-positions accordion">
      <h3>
        <button
          type="button"
          aria-expanded={hiddenBoolean}
          className="accordion-trigger"
          aria-controls="sect1" id="accordion1id"
          onClick={handleClick}
        >
          <span className="accordion-title">
            Current Industry Positions
            <span className="accordion-icon">{/* stay gold */}</span>
          </span>
        </button>
      </h3>
      <div className="section-text accordion-panel"
        role="region"
        aria-labelledby="accordion1id"
        hidden={hiddenBoolean}
      >
        <ul>
          <li>IFSA Freeride World Qualifier Judge</li>
          <li>IFSA Junior Judge</li>
          <li>Tahoe Junior Freeride Series Judge</li>
          <li>Squaw Valley Ski Team Coach</li>
          <li>Marketing technical representative for Gore-Tex</li>
          <li>Hargoods Sales, Bootfitting</li>
          <li>Snowledge App Marketing/ Team Manager</li>
        </ul>
      </div>
    </section>
  )
}


function Accordion() {
  const [ariaExpanded, setAriaExpanded] = useState('flase');
  const [hiddenBoolean, setHiddenBoolean] = useState(false);

  function handleClick() {
    setAriaExpanded(ariaExpanded === 'true' ? 'flase' : 'true');
    setHiddenBoolean(hiddenBoolean === true ? false : true);
  }

  return (
    <div id="accordionGroup" className="accordion">
      <h3>
        <button
          type="button"
          aria-expanded={ariaExpanded}
          className="accordion-trigger"
          aria-controls="sect1" id="accordion1id"
          onClick={handleClick}
        >
          <span className="accordion-title">
            Personal Information
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div
        id="sect1"
        role="region"
        aria-labelledby="accordion1id"
        // className={`accordion-panel ${ariaExpanded}`}
        className={`accordion-panel`}
        hidden={hiddenBoolean}
      >
        <div>
          one
        </div>
      </div>
      <h3>
        <button type="button" aria-expanded={ariaExpanded} className="accordion-trigger" aria-controls="sect2" id="accordion2id"
          onClick={handleClick}
        >
          <span className="accordion-title">
            Billing Address
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div id="sect2" role="region" aria-labelledby="accordion2id"
        className={`accordion-panel ${ariaExpanded}`}
        onClick={handleClick}
      >
        <div>
          two
        </div>
      </div>
      <h3>
        <button type="button" aria-expanded={ariaExpanded} className="accordion-trigger" aria-controls="sect3" id="accordion3id"
          onClick={handleClick}
        >
          <span className="accordion-title">
            Shipping Address
            <span className="accordion-icon"></span>
          </span>
        </button>
      </h3>
      <div id="sect3" role="region" aria-labelledby="accordion3id"
        className={`accordion-panel ${ariaExpanded}`}
      >
        <div>
          three
        </div>
      </div>
    </div>
  )
}

{/* <!DOCTYPE html>
<html className="no-js" lang="en-US">

<head>
  <title>Kenzie (Morris) Bathurst | Athlete, Adventurer, Outdoor lover</title>
  <link rel="stylesheet" href="bundle.css" />

  <meta charset="utf-8" />
  <meta name="description" content="Kenzie Morris Bathurst Athlete, Adventurer, Outdoor lover" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="http://gmpg.org/xfn/11" />

  <link rel="stylesheet" href="https://use.typekit.net/oew5pba.css" />
  {/* brandon grotesque */}
/*   <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f7d134" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="theme-color" content="#ffffff" /> */

{/* Open Graph */ }
/*   <meta property="og:title" content="Kenzie Morris Bathurst" />
  <meta property="og:type" content="profile" />
  <meta property="profile:first_name" content="Kenzie" />
  <meta property="profile:last_name" content="Morris Bathurst" />
  <meta property="profile:gender" content="female" /> */

/*   <meta property="og:url" content="https://kenzie.ski/" />
  <meta property="og:image" content="https://kenzie.ski/img/kenzie-morris-bathurst-og.jpg" /> */

{/* twitter */ }
/*   <meta name="twitter:title" content="Kenzie Morris Bathurst" />
  <meta name="twitter:description" content="Athlete, Adventurer, Outdoor lover" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://kenzie.ski/img/kenzie-morris-bathurst-og.jpg" /> */

export function PowderTurn() {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie-morris-powder-turn.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

export function IlluminationRock() {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie-morris-illumination-rock.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

export function CliffDrop() {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie_morris-alpine_meadows-cliff_drop.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

export function MtBaker() {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie_morris-mt_baker-powder_air.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle"
    breakpoints={[300, 600, 900]}
    width={650}
  />
}

export function ProfileCraigieburn() {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie_morris-profile-craigieburn.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle profile-image"
    breakpoints={[300, 600, 900]}
    width={650}
    objectFit="contain"
  />
}

function List() {
  return (
    <ul>
      <li><a href="#competition-results">Competition Results</a></li>
      <li>
        <a href="#current-industry-positions">Current Industry Positions</a>
      </li>
      <li><a href="#writing">Writing</a></li>
      <li><a href="#other-rad-things">Other Rad Things</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#video-edits">Video Edits</a></li>
      <li><a href="#sponsors">Sponsors</a></li>
    </ul>
  )
}

function Button() {

  const [slide, setSlide] = useState('firstload');
  const [amount, setAmount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setAmount(ref.current.clientHeight);
  });

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
          <span className='ripple'>{/* stay gold */}</span>
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
          <span className='ripple'>{/* stay gold */}</span>
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
          <span className='ripple'>{/* stay gold */}</span>
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
          {/* <a href="#"> */}
          <span className='courgette'>Kenzie</span>&nbsp;
          <span className='h1__remainder'>&#40;Morris&#41; Bathurst</span>
          {/* </a> */}
        </h1>

        {/* <div id="header_menu" className="header-menu"> */}
        <Button />
        {/* </div> */}
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

          {/* <hr /> */}

          <CurrentIndustryPositions />

          {/* <hr /> */}

          <section id="competition-results">
            <h3>Competition Results</h3>
            <div className="section-text">
              <ul>
                <li>Powder Magazine Powder Week Queen &#40;2013&#41; 1st</li>
                <li>
                  Freeride World Qualifiers:
                  <ul className="results-sub">
                    <li>Beartooth Basin &#40;2017&#41; 6th</li>
                    <li>Snowbird &#40;2013&#41; 7th</li>
                    <li>Chill Series &#40;2013&#41; 8th</li>
                    <li>Winter Park &#40;2013&#41; 12th</li>
                    <li>Snowbird &#40;2015&#41; 12th</li>
                    <li>Castle Mountain &#40;2013&#41; 13th</li>
                    <li>Crystal Mountain &#40;2016&#41; 13th</li>
                  </ul>
                </li>
                <li>
                  Cardrona Uni Games &#40;2006&#41;
                  <ul className="results-sub">
                    <li>Half Pipe 2nd</li>
                    <li>Big Air 3rd</li>
                  </ul>
                </li>
                <li>CUBA Rail Jam &#40;2006&#41; 1st</li>
                <li>Mt Hutt Rail Jam &#40;2006&#41; 1st</li>
                <li>Methven Rail Jam &#40;2006&#41; 2nd</li>
              </ul>
            </div>
          </section>

          <hr />

          <section id="writing">
            <h3>Writing</h3>
            <ul>
              <li>
                <a
                  href="https://www.moonshineink.com/think-local/what-does-it-mean-to-be-a-tahoe-truckee-local/"
                  target="_blank"
                >Ten Markers of a True Tahoe/Truckee-ite - Moonshine Ink</a
                >
              </li>
              <li>
                <a
                  href="https://sheshreds.co/blogs/news/cascadia-behind-the-scenes-backcountry-mountaineering-adventure"
                  target="_blank"
                >Cascadia: Behind The Scenes Backcountry Mountaineering
                  Adventure - Sheshreds.co</a
                >
              </li>
              <li>Throw &amp; Tell - Disc Golf - Chill Adventures</li>
              <li><a href="#">Skiing is my Boyfriend - Newschoolers</a></li>
            </ul>
          </section>

          <hr />

          <section id="gear-reviews">
            <h3>Powder Magazine Gear Reviews</h3>

            <h4>
              <a
                href="https://www.powder.com/gear-locker/best-hybrid-ski-boots-of-2019/"
                target="_blank"
              >2019 Buyers Guide</a
              >
            </h4>
            <h5>Boots</h5>
            <ul>
              <li>Technica Mach1MV Heat 95 W</li>
              <li>Lange XT110 Free W LV</li>
              <li>ROXA R3W 105 TI</li>
              <li>Rossignol Alltrack Elite 100 LT</li>
            </ul>

            <h4>
              <a
                href="https://www.pressreader.com/usa/powder/20180901/282832191933192"
                target="_blank"
              >2018 Buyers Guide</a
              >
            </h4>

            <h4>
              <a
                href="https://www.powder.com/stories/the-safe-zone/best-womens-skis/"
                target="_blank"
              >2015 Buyers Guide</a
              >
            </h4>
            <h5>Skis</h5>
            <ul>
              <li>Head Great Joy</li>
              <li>Kastle FX 104</li>
            </ul>

            <h5>Boots</h5>
            <ul>
              <li>Dalbello Krypton Kryzma.i.d.</li>
              <li>Lange XT 110 W</li>
              <li>Head Raptor 110 RS W</li>
              <li>HK2 Minaret 100</li>
            </ul>

            <h4><a href="#">2014 Buyers Guide</a></h4>
          </section>

          <hr />

          <section id="other-rad-things">
            <h3>Other Rad Things</h3>
            <div className="section-text">
              <ul>
                <li>
                  <a
                    href="https://www.snowledge.co/blog/facing-fear-moving-mountains/"
                    target="_blank"
                  >Facing Fear and Moving Mountains - Snowledge Article</a
                  >
                </li>
                <li>2013, 2014, 2018 POWDER Magazine Buyers Guide Boot tester</li>
                <li>150 Days skied in 2017-18 Season</li>
              </ul>
            </div>
          </section>



















          {/* <Accordion /> */}





































        </article>

        <div className="main-background">{/* stay gold */}</div>
      </main>

      <section id="video-edits">
        {/* anchor and html ot used for any ui */}
        <h2 className="text-center">Video Media</h2>
        {/* 
      <article className="video-area">
        <iframe title="2017 season edit" loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/Z83ovv8p-rM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe loading="lazy">
        <div className="video-area-title">
          <svg enable-background="new 0 0 391 117" viewBox="0 0 391 117" xmlns="http://www.w3.org/2000/svg"><path d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"/><path d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"/><path d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"/><path d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"/><path d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"/><path d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"/><path d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"/><path d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"/><path d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"/><path d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"/></svg> this can be just the snowledge icon 
          <h4>Passage</h4>
        </div>
        <p>Alaska.</p>
        <div className="video-area-background"> stay gold <div>
        <div className="video-area-spacer"> stay gold </div>
      </article>
    */}

        <article className="video-area">
          <iframe
            title="passage"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xCqefdpfq1M"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <h4>Seeking Snowledge Pilot | The Last Snow in Tahoe 2020</h4>
          </div>
          <p>
            In this first episode of Seeking Snowledge Kenzie And Riley Bathurst
            travel to find snow in the middle of summer. A passion known by snow
            enthusiasts as Turns All Year, the challenge being making turns on
            snow in every calendar month of the year. They take the adventure
            south of Lake Tahoe to a place called the Carson Range and Roundtop
            Peak. Follow along as they make a fun pit stop along the way at their
            favorite state park on Lake Tahoe, D.L. Bliss.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="passage"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O-WHcykonMg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <h4>Passage an Eaglecrest Experience</h4>
          </div>
          <p>A journey to Juneau.</p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="squaw shred report"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IQ7nZMW4bDg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <h4>
              The Shred Report - Feb. 6-7 | Squaw Valley &amp; Alpine Meadows,
              California
            </h4>
          </div>
          <p>
            The sun is shining and the groomers and park are firing! Watch this
            all ladies crew ski both resorts! Hitting the south-facing off-piste
            terrain in the afternoon.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="2017 season edit"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z83ovv8p-rM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <svg
              enable-background="new 0 0 391 117"
              viewBox="0 0 391 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
              />
              <path
                d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
              />
              <path
                d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
              />
              <path
                d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
              />
              <path
                d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
              />
              <path
                d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
              />
              <path
                d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
              />
              <path
                d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
              />
              <path
                d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
              />
              <path
                d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
              />
            </svg>
            {/* this can be just the snowledge icon */}
            <h4>2017 Season Edit Ambassador</h4>
          </div>
          <p>
            Snowledge Ambassador Kenzie Morris just released her 2017 season edit,
            and it's more than just skillful movements and powdery views–it's
            fluidity, grace, grit and so much more–watch and enjoy &#40;we sure did&#41;.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="hunt for the powder people"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YaRpBbbJ6Ow"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <svg
              enable-background="new 0 0 391 117"
              viewBox="0 0 391 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
              />
              <path
                d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
              />
              <path
                d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
              />
              <path
                d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
              />
              <path
                d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
              />
              <path
                d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
              />
              <path
                d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
              />
              <path
                d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
              />
              <path
                d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
              />
              <path
                d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
              />
            </svg>
            <h4>Hunt For The Powder People</h4>
          </div>
          <p>
            Snowledge Ambassadors Riley Bathurst and Kenzie Morris shred the
            beautiful and bold mountains of New Zealand in this new edit, Hunt For
            The Powder People.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="womens edit"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2E6d4enOJuY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <svg
              enable-background="new 0 0 391 117"
              viewBox="0 0 391 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
              />
              <path
                d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
              />
              <path
                d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
              />
              <path
                d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
              />
              <path
                d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
              />
              <path
                d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
              />
              <path
                d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
              />
              <path
                d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
              />
              <path
                d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
              />
              <path
                d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
              />
            </svg>
            <h4>Women’s Ski Edit 2018</h4>
          </div>
          <p>
            The trifecta of Tahoe talent came out swinging in this Snowledge
            women’s ski edit. Kenzie Morris, Savannah Amos, and Jealeisa Gemperle
            took on terrain all around the basin and around the world with waist
            deep powder turns, head height cliffs, and silky smooth spring skiing.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="hot to gopro"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vZ-UgL-xY20"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <svg
              enable-background="new 0 0 391 117"
              viewBox="0 0 391 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
              />
              <path
                d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
              />
              <path
                d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
              />
              <path
                d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
              />
              <path
                d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
              />
              <path
                d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
              />
              <path
                d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
              />
              <path
                d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
              />
              <path
                d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
              />
              <path
                d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
              />
            </svg>
            <h4>How To GoPro Tutorial</h4>
          </div>
          <p>
            Your ready to rip it up but does someone really get rad if there isn’t
            a camera to film it? Well we have the guide to getting you out there
            with the skiers camera of choice, sit back and learn how how to Go
            Pro.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="pacific north quest"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ENIEQkFUo_s"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-area-title">
            <svg
              enable-background="new 0 0 391 117"
              viewBox="0 0 391 117"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
              />
              <path
                d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
              />
              <path
                d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
              />
              <path
                d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
              />
              <path
                d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
              />
              <path
                d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
              />
              <path
                d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
              />
              <path
                d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
              />
              <path
                d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
              />
              <path
                d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
              />
            </svg>
            <h4>Pacific North Quest</h4>
          </div>
          <p>
            Ready to venture out beyond the slush laps and jump lines in Tahoe,
            the Snowledge team ventured out to explore the volcanoes of the
            Pacific Northwest: Lassen Peak, Crater Lake, Tumalo Mountain, Mt.
            Bachelor, South Sister, and Mt. Hood.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>

        <article className="video-area">
          <iframe
            title="cascadia"
            loading="lazy"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/S-_txN58TFU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div className="video-area-title">
            <h4>Cascadia</h4>
          </div>
          <p>
            The Cascadia crew gathers in Santa Cruz, California to plan, prepare
            and set the precedent for the following weeks. Loading up and setting
            off, the team convoys north and inland, leaving behind the urban
            hustle and bustle for a moonlit campsite. Joining company with local
            split-boarder Jeff Steele they find their footing on the flanks of Mt
            Lassen before pushing north into Oregon and setting up camp
            overlooking the pristine waters of Crater Lake.
          </p>
          <div className="video-area-background">{/* stay gold */}</div>
          <div className="video-area-spacer">{/* stay gold */}</div>
        </article>
      </section>

      <aside id="sponsors">
        <h3 className="screen-reader">Sponsors</h3>
        <div className="section-text">
          <ul id="sponsors-list">
            <li>
              <svg
                enable-background="new 0 0 391 117"
                viewBox="0 0 391 117"
                xmlns="http://www.w3.org/2000/svg"
                className="snowledge"
              >
                <path
                  d="m104.86 116.11c-1.23-.27-2.49-.45-3.69-.82-8.44-2.57-14.08-7.96-15.9-16.71-2.56-12.36 5.76-24.1 18.24-26.09 7.93-1.27 15.09.45 20.94 6.06 10.34 9.91 8.23 26.88-4.1 34.27-2.72 1.63-5.65 2.63-8.77 3.11-.27.04-.54.12-.81.19-1.98-.01-3.95-.01-5.91-.01zm-5.73-21.98c.1.76.16 1.53.32 2.28 1.44 6.77 9.12 9.45 14.2 4.98 2.74-2.41 3.71-6.85 2.35-10.77-1.65-4.77-6.58-7.08-11.3-5.3-3.31 1.24-5.52 4.78-5.57 8.81z"
                />
                <path
                  d="m390.95 115.06c-.38.02-.77.06-1.15.06-11.2 0-22.4 0-33.6 0-1.54 0-1.54 0-1.54-1.5 0-13.09 0-26.19 0-39.28 0-1.44.01-1.45 1.47-1.45h33.18c1.44 0 1.45.01 1.45 1.47 0 2.98-.03 5.97.02 8.95.01.96-.3 1.28-1.27 1.28-6.42-.04-12.85-.03-19.27-.04-1.59 0-1.59-.03-1.59 1.52-.01 2.64-.01 2.64 2.69 2.64h16.54c1.38 0 1.4.02 1.4 1.43 0 2.53-.04 5.06.02 7.58.03 1.09-.36 1.37-1.4 1.36-5.93-.04-11.87-.02-17.8-.02-1.44 0-1.44 0-1.44 1.47-.01 2.92-.01 2.92 2.94 2.92 6.46 0 12.92.01 19.38.02-.03 3.86-.03 7.72-.03 11.59z"
                />
                <path
                  d="m332.8 116.11c-1.46-.21-2.93-.31-4.36-.63-8.18-1.82-14.33-6.23-16.99-14.39-4.24-13 3.34-26.56 18-28.78 7.63-1.16 14.74.37 20.94 5.24 1.08.85 1.08.84.24 1.85-2.11 2.54-4.25 5.05-6.31 7.62-.64.8-1.1.88-1.95.23-2.97-2.26-6.3-3.39-10.06-2.74-3.9.68-6.8 3.65-7.43 7.62-.56 3.58.09 6.85 2.8 9.49 2.56 2.5 7.62 3.45 10.95 2.07.6-.25.89-.62.86-1.27-.03-.63-.05-1.27.01-1.89.08-.94-.23-1.33-1.24-1.28-1.68.07-3.37 0-5.05.03-.77.01-1.07-.27-1.06-1.05.03-2.35.03-4.7 0-7.06-.01-.77.29-1.05 1.06-1.05 6.18.02 12.36.02 18.54 0 .76 0 1.07.27 1.07 1.04-.02 5.93.01 11.87-.04 17.8 0 .43-.36 1-.72 1.27-4.54 3.45-9.7 5.28-15.37 5.7-.45.03-.9.11-1.35.17-.85.01-1.7.01-2.54.01z"
                />
                <path
                  d="m-.05 108.31c1.36-1.55 2.73-3.1 4.08-4.66.92-1.06 1.84-2.12 2.69-3.24.52-.68.93-.72 1.63-.23 4.37 3.06 9.24 4.49 14.57 4.3.62-.02 1.26-.15 1.84-.37 1.23-.48 1.41-1.86.27-2.53-.86-.51-1.86-.81-2.84-1.07-3.59-.97-7.22-1.76-10.77-2.85-2.6-.79-5.02-2.11-6.78-4.26-3.17-3.88-3.11-8.23-1.34-12.61 1.6-3.97 4.78-6.48 8.8-7.57 8.84-2.4 17.39-1.59 25.33 3.27 2.37 1.45 1.97 1.14.56 3.15-1.59 2.27-3.24 4.5-4.87 6.74-.22.31-.46.61-.75 1-.37-.22-.69-.4-1.01-.6-3.62-2.28-7.56-3.49-11.85-3.5-.68 0-1.4.18-2.02.47-1.01.48-1.14 1.65-.23 2.31.61.44 1.36.76 2.09.94 2.76.67 5.55 1.2 8.31 1.91 2.86.73 5.64 1.73 8.08 3.47 2.84 2.03 4.39 4.75 4.5 8.27.2 6.55-3 11.33-9.16 13.61-3.68 1.36-7.48 1.72-11.38 1.52-3.88-.2-7.67-.79-11.32-2.15-2.81-1.05-5.44-2.43-7.79-4.33-.19-.15-.42-.24-.63-.36-.01-.2-.01-.42-.01-.63z"
                />
                <path
                  d="m82.95 1.51c4.43 4.55 8.86 9.1 13.3 13.64 6.38 6.53 12.76 13.05 19.14 19.57 5.84 5.97 11.67 11.95 17.51 17.93 3.26 3.34 6.53 6.67 9.79 10.01.14.15.26.31.28.65-.22-.15-.47-.27-.67-.45-9.21-8.07-18.42-16.14-27.64-24.21-8.58-7.52-17.17-15.02-25.73-22.56-.82-.72-1.31-.73-2.18-.01-10.69 8.83-21.42 17.61-32.14 26.4-3.09 2.54-6.2 5.06-9.26 7.64-.76.64-1.44.75-2.39.44-4.49-1.5-9.02-2.91-13.51-4.41-.82-.27-1.43-.19-2.15.26-8.6 5.45-17.21 10.87-25.82 16.3-.29.18-.58.35-.77.61 1.12-1.22 2.17-2.52 3.36-3.66 5.88-5.58 11.79-11.13 17.7-16.68 4.27-4.01 8.56-8.01 12.81-12.05.62-.59.98-.55 1.52.06 2.39 2.71 4.83 5.38 7.21 8.1.65.75 1.06.71 1.74.02 12.26-12.31 24.55-24.6 36.83-36.9.22-.22.41-.47.62-.71.17.01.31.01.45.01z"
                />
                <path
                  d="m128.22 72.94c.6-.04 1.01-.08 1.42-.08 4.04-.01 8.07.03 12.11-.03.98-.01 1.42.29 1.69 1.24 1.64 5.73 3.35 11.45 5.04 17.17.12.39.24.78.46 1.48.25-.69.39-1.06.52-1.45 1.94-5.79 3.89-11.58 5.79-17.38.31-.94.76-1.25 1.73-1.23 3.23.06 6.46.07 9.69-.01 1.05-.02 1.48.39 1.79 1.32 1.89 5.77 3.83 11.52 5.75 17.28.13.39.27.77.52 1.48.28-.94.47-1.56.65-2.19 1.63-5.52 3.28-11.03 4.88-16.56.25-.87.66-1.16 1.55-1.15 4.07.04 8.14.02 12.21.02.34 0 .68.05 1.19.08-.21.74-.36 1.37-.56 1.99-3.67 11.28-7.35 22.55-11.02 33.83-.62 1.9-1.26 3.8-1.84 5.71-.22.73-.62 1-1.37 1-3.4-.02-6.81-.03-10.21.01-.84.01-1.25-.29-1.52-1.08-2.06-5.93-4.17-11.85-6.27-17.77-.18-.52-.38-1.03-.69-1.85-.25.62-.39.96-.51 1.3-2.16 6.08-4.34 12.16-6.46 18.26-.31.89-.78 1.17-1.69 1.15-3.4-.09-6.8-.14-10.21-.14-.89 0-1.12-.49-1.33-1.17-2.38-7.38-4.78-14.75-7.18-22.13-1.92-5.91-3.84-11.81-5.75-17.72-.13-.39-.22-.79-.38-1.38z"
                />
                <path
                  d="m55.39 95.9v1.47c0 5.44-.02 10.88.02 16.32.01 1.03-.24 1.42-1.35 1.41-3.86-.06-7.72-.05-11.58-.01-.96.01-1.27-.31-1.27-1.27.03-13.27.04-26.54.03-39.81 0-.94.29-1.31 1.27-1.3 3.65.04 7.3.03 10.95 0 .78-.01 1.31.26 1.79.87 4.46 5.56 8.94 11.1 13.41 16.64.17.21.37.4.73.78.03-.58.06-.95.06-1.31 0-5.09 0-10.18 0-15.27 0-1.7 0-1.71 1.65-1.7 3.72.04 7.44.13 11.16.11 1.09 0 1.36.38 1.36 1.41-.03 8.74-.02 17.48-.02 26.22v13.16c0 1.42-.01 1.43-1.39 1.44-3.37 0-6.74-.02-10.11.02-.86.01-1.42-.3-1.95-.96-4.67-5.84-9.37-11.65-14.07-17.47-.15-.17-.32-.34-.69-.75z"
                />
                <path
                  d="m268.3 94.03c0-6.6.02-13.2-.02-19.79-.01-1.06.31-1.38 1.37-1.37 5.51.05 11.02-.03 16.53.04 4.64.06 9.15.89 13.32 3.05 6.44 3.33 9.64 8.78 10.12 15.9.29 4.19-.24 8.28-2.25 12.05-2.8 5.26-7.35 8.25-12.92 9.89-3.6 1.06-7.3 1.35-11.03 1.32-4.56-.03-9.12-.02-13.69-.03-1.43 0-1.43-.01-1.43-1.47 0-6.53 0-13.06 0-19.59zm14.19-.04v7.57c0 .56.01 1.08.79 1.07 1.33-.03 2.67.05 3.99-.1 2.01-.22 3.93-.8 5.49-2.16 2.11-1.84 2.6-4.29 2.53-6.96-.09-3.59-1.92-6.35-5.38-7.31-1.96-.54-4.07-.52-6.11-.76-.99-.12-1.36.25-1.33 1.28.06 2.46.02 4.91.02 7.37z"
                />
                <path
                  d="m230.36 93.98c0-6.56 0-13.13 0-19.69 0-1.4.02-1.43 1.4-1.43 11.13.01 22.25.03 33.38.01.99 0 1.36.28 1.34 1.31-.06 3.02-.05 6.04 0 9.06.02 1-.29 1.34-1.31 1.33-6.49-.04-12.99 0-19.48-.04-1.07-.01-1.39.31-1.37 1.37.05 2.8.01 2.8 2.76 2.8 5.51 0 11.02.03 16.53-.02 1.08-.01 1.4.34 1.37 1.39-.06 2.53-.01 5.05-.02 7.58 0 1.34-.07 1.4-1.46 1.4-5.9 0-11.79 0-17.69 0-1.47 0-1.47.01-1.47 1.45-.01 2.95-.01 2.95 2.9 2.95 6.04 0 12.08.02 18.11-.02 1.06-.01 1.4.31 1.38 1.37-.06 3.05-.04 6.11-.01 9.16.01.87-.3 1.15-1.16 1.15-11.34-.02-22.68-.03-34.01.01-1.05 0-1.21-.45-1.2-1.33.02-6.61.01-13.21.01-19.81z"
                />
                <path
                  d="m212.41 115.09c-5.2 0-10.39-.02-15.59.02-1.02.01-1.41-.23-1.41-1.34.03-13.2.03-26.4 0-39.6 0-1.01.33-1.33 1.33-1.32 3.86.05 7.72.05 11.59 0 1.03-.01 1.31.36 1.31 1.35-.03 9.09-.02 18.19-.02 27.28 0 1.51 0 1.52 1.52 1.52 5.69 0 11.38.03 17.06-.02 1.08-.01 1.4.35 1.38 1.39-.05 3.16-.05 6.32 0 9.48.01.95-.29 1.28-1.27 1.27-5.3-.05-10.6-.03-15.9-.03z"
                />
              </svg>
              <p>
                <a href="https://www.snowledge.co/ambassadors/kenzie-morris/"
                >Team Athlete</a
                >
              </p>
            </li>
            <li>
              <div className="sponsor-stack">
                {/* volkl */}<svg
                  enable-background="new 0 0 360.46 119.04"
                  viewBox="0 0 360.46 119.04"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m120.13.25c1.31-.13 2.62-.38 3.93-.39 77.37-.01 154.75-.01 232.12 0h4.28v119.18c-1.54 1.12-3.25.64-4.85.64-77.04.03-154.08.03-231.12.01-1.46 0-3.01.41-4.38-.48 0-39.65.01-79.31.02-118.96zm42.85 44.73c6.01 10.38 11.61 20.05 17.1 29.52h9.16c5.54-9.69 11.06-19.35 16.86-29.5-4.1 0-7.23 0-10.48 0-3.59 6.43-7.15 12.81-11.05 19.79-4.01-7.19-7.6-13.63-11.04-19.81-3.6 0-6.58 0-10.55 0zm44.34 9.73v19.68h32.74c0-6.7 0-13.06 0-19.68-11.04 0-21.76 0-32.74 0zm69.84 19.92c0-10.23 0-19.85 0-29.52-3.13 0-5.89 0-8.88 0v29.15c2.93 1.96 5.8.03 8.88.37zm13.4-11.21c4.34-4.53 7.88-8.22 11.84-12.34-4.64 0-8.26 0-10.51 0-4.78 4.42-8.75 8.09-12.81 11.84 4.01 3.92 7.88 7.7 11.66 11.4h12.24c-4.62-4.06-8.34-7.32-12.42-10.9zm26.96 11.13c0-10.19 0-19.82 0-29.48-3.15 0-5.93 0-8.78 0-.53 1.49-1 2.84-1.18 3.35 1.5 9.16.08 17.68.98 26.13zm-68.21.01c3.32.09 6.1.51 8.8-.23 0-9.93 0-19.58 0-29.12-3.16 0-5.91 0-8.8 0zm-38.15-23.9h9.68c.66-1.98.78-3.67-.16-5.65-3.12-.07-6.3-.56-9.52.38zm14.86-5.63c.15 2.17-.59 3.9.63 5.84 3.09-.11 6.29.64 9.43-.53.06-1.91.75-3.7-.64-5.31-2.94 0-5.85 0-9.42 0z"
                    fill="#242424"
                  />
                  <path
                    d="m120.13.25c-.01 39.66-.02 79.31-.03 118.97-4.65.08-9.3.22-13.96.23-33.44.02-66.89.02-100.33.02-1.81 0-3.62 0-5.81 0 0-39.85 0-79.28 0-119.47h10.83c35.44 0 70.88.01 106.32.02 1 0 1.99.15 2.98.23zm-92.8 77.06c1.84 3.58 3.47 7.11 6.47 10.42 8.79-15.1 17.36-29.83 26.4-45.36 3.13 4.76 4.58 9.23 7.91 13.04 2.17-3.69 4.07-6.94 6.12-10.42-2.63-4.41-5.22-8.77-7.61-12.78-4.76 0-8.88 0-13.1 0-3 4.99-5.95 9.88-9.47 15.74-4.62-4.75-6.67-10.7-10.66-16.11-2.22 3.77-4.18 7.1-6.16 10.46 3.44 6.02 6.76 11.82 10.1 17.65-3.39 5.87-6.68 11.59-10 17.36zm59.32-45.87c-9.11 15.65-17.72 30.43-26.66 45.79-2.74-4.74-5.08-8.78-7.72-13.34-2.35 4.01-4.24 7.25-6.12 10.47 1.63 5.11 5.14 8.84 7.24 12.95h13.41c3.18-5.39 6.26-10.6 9.61-16.27 3.99 5.54 5.98 11.68 10.4 16.59 2.29-3.59 4.56-6.8 5.85-10.61-3.34-5.79-6.61-11.47-9.91-17.2 3.47-6.01 6.74-11.69 10.09-17.51-1.92-3.38-3.79-6.67-6.19-10.87z"
                    fill="#f2e137"
                  />
                  <g fill="#242424">
                    <path
                      d="m27.33 77.31c3.32-5.78 6.61-11.5 9.98-17.36-3.33-5.83-6.66-11.64-10.1-17.65 1.98-3.37 3.94-6.69 6.16-10.46 3.99 5.42 6.04 11.36 10.66 16.11 3.52-5.85 6.47-10.75 9.47-15.74h13.1c2.39 4.02 4.98 8.37 7.61 12.78-2.05 3.48-3.95 6.73-6.12 10.42-3.32-3.81-4.77-8.28-7.91-13.04-9.02 15.53-17.6 30.26-26.38 45.36-3-3.31-4.63-6.84-6.47-10.42z"
                    />
                    <path
                      d="m86.65 31.44c2.4 4.2 4.27 7.48 6.2 10.87-3.35 5.82-6.62 11.49-10.09 17.51 3.3 5.72 6.57 11.41 9.91 17.2-1.29 3.81-3.57 7.02-5.85 10.61-4.42-4.9-6.41-11.05-10.4-16.59-3.35 5.67-6.43 10.89-9.61 16.27-4.27 0-8.57 0-13.41 0-2.1-4.12-5.61-7.84-7.24-12.95 1.88-3.22 3.77-6.46 6.12-10.47 2.64 4.56 4.98 8.6 7.72 13.34 8.93-15.35 17.54-30.14 26.65-45.79z"
                    />
                    <path
                      d="m215.28 67.46c0-2.03 0-3.65 0-5.67h16.3c.98 1.73.55 3.5.31 5.67-5.37 0-10.74 0-16.61 0z"
                    />
                  </g>
                </svg>
                {/* marker */}<svg
                  enable-background="new 0 0 507.62 102.39"
                  viewBox="0 0 507.62 102.39"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m102.64 0v66.76c-8.53 0-16.79 0-25.49 0 0-9.45 0-18.87 0-28.55-9.17-6.38-14.97-15.97-23.34-22.81-17.66 17.17-35.1 34.12-52.46 51 0-21.65 0-43.82 0-66.4z"
                    fill="#9d1532"
                  />
                  <g fill="#242225">
                    <path
                      d="m191.75 83.91c-4.33 0-8.45 0-13.14 0 0-13.63 0-27.18 0-40.73-.4-.21-.8-.42-1.2-.62-5.32 5.76-10.64 11.51-16.35 17.7-5.48-5.95-10.85-11.78-16.93-18.38v41.77c-4.88.75-9.25.53-13.84.21 0-19.45 0-38.56 0-58.07h17.77c4.09 4.42 8.46 9.16 13.02 14.1 4.6-4.99 8.86-9.61 13.12-14.24h17.55z"
                    />
                    <path
                      d="m201.16 63.27c3.3-3.61 6.89-7.52 10.57-11.54h18.51c-5.65 6.27-10.77 11.95-16.46 18.27h26.83c0-10.22 0-20.32 0-30.89-13.06 0-26.12 0-39.45 0-.73-4.67-.37-8.91-.25-13.39h53.47v57.98c-17.74 0-35.29 0-53.23 0 .01-6.36.01-12.95.01-20.43z"
                    />
                    <path
                      d="m385.32 25.71h53.43v20.08c-3.51 3.84-7.2 7.88-10.95 11.98-5.86 0-11.65 0-18.62 0 5.66-6.42 10.79-12.24 16.45-18.66-9.37 0-17.76 0-26.49 0v31.28h39.28c.86 4.63.43 8.73.37 13.27-17.81 0-35.48 0-53.46 0-.01-19.26-.01-38.48-.01-57.95z"
                    />
                    <path
                      d="m304.22 61.02c6.98 7.66 13.56 14.88 20.73 22.74-6.63 0-12.34 0-18.59 0-6.66-7.26-13.6-14.84-20.83-22.71 6.38-7.22 12.59-14.23 19.37-21.9-9.39 0-17.78 0-26.7 0v44.41c-4.72.95-8.98.44-13.57.41 0-19.41 0-38.63 0-58.21h53.33v20.15c-4.22 4.64-8.78 9.66-13.74 15.11z"
                    />
                    <path
                      d="m447.32 25.67h53.25v20.28c-4.26 4.69-8.82 9.73-13.66 15.07 6.84 7.52 13.48 14.83 20.71 22.78-6.71 0-12.44 0-18.58 0-6.74-7.36-13.68-14.93-20.85-22.76 6.67-7.32 13.03-14.3 19.86-21.8-9.3 0-17.97 0-27.19 0v44.4c-4.75.71-8.99.54-13.54.19 0-19.41 0-38.65 0-58.16z"
                    />
                  </g>
                  <path
                    d="m83.14 102.39c-26.95 0-54.21 0-83.14 0 18.24-18.46 35.56-36 53.89-54.56v42.63h41.69c-4.65 4.47-8.46 8.12-12.44 11.93z"
                    fill="#9d1532"
                  />
                  <path
                    d="m327.75 25.73c4.32-.56 8.58-.33 13.21-.09v23.73c7.81-8.5 14.82-16.13 21.68-23.6h18.6c-8.82 9.66-16.94 18.57-25.51 27.96 8.96 9.82 17.88 19.59 27.31 29.92-6.46 0-12.28 0-18.59 0-7.34-7.98-14.97-16.26-23.29-25.31v25.4c-4.67 0-8.88 0-13.41 0 0-19.3 0-38.54 0-58.01z"
                    fill="#242225"
                  />
                </svg>
                {/* dalbello */}<svg
                  enable-background="new 0 0 536.59 96.95"
                  viewBox="0 0 536.59 96.95"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 25.98c7.05-9.52 13.11-17.69 19.09-25.75h51.4c26.46.01 52.92-.27 79.38.14 13.76.21 27.36 2.02 40.3 7.53 15.81 6.73 22.03 25.07 13.25 39.92-8.42 14.24-21.55 22.78-36.02 29.59-18.87 8.88-38.92 13.53-59.56 16.3-10.74 1.44-21.52 1.73-32.27 2.58-2.11.17-4.27.4-6.42-1.51 9.49-4.49 18.96-8.62 28.12-13.36 17.69-9.17 35.13-18.8 48.84-33.69 5.65-6.14 6.38-14.03 1.57-17.54-4.24-3.09-9.52-3.82-14.62-4.06-6.97-.34-13.97-.14-20.96-.14-35.11 0-70.23 0-105.34 0-1.78-.01-3.54-.01-6.76-.01z"
                    fill="#a8d42d"
                  />
                  <path
                    d="m101.64 41.53c-5.67 7.82-10.84 14.96-16.01 22.1-6.94 9.59-13.9 19.17-20.81 28.79-1.58 2.2-3.13 4.11-6.3 4.1-15.62-.08-31.25-.03-46.87-.05-.76 0-1.52-.32-3.05-.67 5.74-7.91 11.08-15.31 16.45-22.69 6.95-9.55 13.92-19.07 20.83-28.64 1.51-2.09 3.06-3.69 5.97-3.67 15.62.09 31.25.06 46.87.09.62 0 1.23.26 2.92.64z"
                    fill="#a8d42d"
                  />
                  <path
                    d="m365.84 28.75c7.41 0 14.06-.05 20.7.01 11.77.11 17.68 10.54 11.8 20.8-.49.85-1.08 1.64-1.68 2.55 4.21 3.99 5.09 8.89 4.15 14.2-1.01 5.74-4.9 9.84-10.68 10.15-7.92.43-15.88.11-24.03.11-.1-1.6-.24-2.89-.24-4.18-.02-14.37-.02-28.73-.02-43.64zm9.81 19.44c4.03 0 7.5.21 10.93-.07 2.65-.22 4.06-2.05 4.06-4.76 0-2.39-.85-4.43-3.43-4.68-3.87-.38-7.81-.73-11.55.23-.01 3.21-.01 6-.01 9.28zm.09 9.14v9.64c4.02 0 7.81.16 11.57-.05 3.01-.17 4.3-2.18 4.17-5.09-.12-2.71-1.5-4.39-4.29-4.47-3.76-.11-7.52-.03-11.45-.03z"
                  />
                  <path
                    d="m243.8 38.15c0-3.27 0-6.03 0-9.24 9.89 0 19.65-.31 29.38.12 5.37.24 10.21 5.35 10.67 10.91.71 8.56.82 17.19-.05 25.74-.64 6.2-5.98 10.57-12.31 10.99-1.82.12-3.65.04-5.48.04-5.3 0-10.59 0-16.22 0 0-10.55 0-20.85 0-31.31h9.3v21.14c4.81.74 9.17.62 14.28 0 1.68-9.24 1.31-18.2.25-27.56-10.18-1.26-19.8 0-29.82-.83z"
                  />
                  <path
                    d="m327.01 76.54c-3.19 0-6.11 0-9.45 0 0-4.74 0-9.31 0-14.27-5.13 0-9.86 0-14.88 0-1.14 4.5.03 9.32-.7 14.24-3.08 0-6 0-9.28 0 0-12.26-.51-24.48.18-36.63.46-8.17 6.87-11.29 19.64-11.13 8.03.1 14.05 4.35 14.35 11.48.51 12.01.14 24.05.14 36.31zm-24.25-24.23c5.06-.52 9.94.51 14.89-.66-.75-4.62 1.25-8.94-1.81-12.39-12.22-3.02-14.97-.38-13.08 13.05z"
                  />
                  <path
                    d="m536.44 52.89c0 3.3.04 6.61-.02 9.91-.02 1.31-.07 2.66-.4 3.92-2.07 7.95-8.73 10.99-21.68 9.98-6.81-.53-12.19-5.54-12.54-12.51-.38-7.58-.38-15.2-.03-22.78.34-7.38 6-12.21 13.41-12.69 16.03-1.03 22.46 3.6 21.27 20.21-.09 1.31-.01 2.64-.01 3.96zm-9.74.12c-.01 0-.01 0-.02 0 0-3.14-.04-6.28.01-9.42.05-3.54-1.78-5.13-5.2-5.15-1.66-.01-3.32-.02-4.98.01-3.17.06-5.01 1.56-5.03 4.83-.03 6.28 0 12.56-.01 18.84 0 2.19.86 3.83 3.01 4.63 7.51 2.81 12.18-.36 12.21-8.28.01-1.82.01-3.64.01-5.46z"
                  />
                  <path
                    d="m434.69 57.48c-5.76 0-10.87 0-16.33 0-.08 3.11-.51 5.82.58 8.99 6.05 1.31 12.38-.01 18.76.76.66 3.1.43 6.01.09 9.41-7.32 0-14.59.23-21.85-.09-4.32-.19-7.37-3.84-7.43-8.52-.14-10.25-.15-20.51.03-30.76.08-4.73 3.17-8.23 7.51-8.4 6.94-.27 13.89-.07 21.08-.07v9.62c-6.05 0-11.96 0-17.68 0-1.88 3.32-1.1 6.21-1.04 9.55h15.58c1.08 3.18.37 5.95.7 9.51z"
                  />
                  <path
                    d="m455.01 28.94v37.26c4.66 1.73 9.23.11 13.94 1.21.74 2.78.31 5.67.21 9.09-5.9 0-11.67.38-17.35-.13-3.78-.34-6.43-3.27-6.48-7.13-.2-13.37-.08-26.74-.08-40.29 3.25-.01 6.2-.01 9.76-.01z"
                  />
                  <path
                    d="m345.77 66.9h13.98c1.04 3.41.41 6.41.44 9.78-5.73 0-11.02.29-16.27-.08-4.81-.34-7.65-3.57-7.74-8.2-.24-13-.08-26.01-.08-39.33h9.67z"
                  />
                  <path
                    d="m483.88 66.94h14.02c.87 3.34.44 6.13.41 9.51-5.93 0-11.87.48-17.68-.17-3.95-.44-6.28-3.74-6.31-7.85-.1-13.03-.04-26.06-.04-39.38h9.59c.01 12.3.01 24.62.01 37.89z"
                  />
                </svg>
              </div>
              <p>Local Athlete</p>
            </li>
            <li>
              <svg
                enable-background="new 0 0 221.87 107.12"
                viewBox="0 0 221.87 107.12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m114 20.64c8.01 8.01 16.04 16.01 24.02 24.06 4.62 4.9 7.19-5.02 11.26-6.51-9.37-10.25-35.05-35.61-38.67-38.19-24.05 23.98-48.02 48.16-72.16 72.06-7.28-7.28-14.12-14.12-20.56-20.56 6.16-6.16 12.57-12.57 19.03-19.03 1.43 2.62 3.47 5.04 6.62 7.2 2.14-3.15 4.93-5.44 7.48-8.08-.64-3.1-1.56-4.12-14.79-16.55-12.13 12.13-24 24-36.23 36.23 10.19 13.65 25.56 26.42 37.89 38.85 25.22-20.83 48.46-48.39 73.56-72.03.72.72 1.64 1.63 2.55 2.55zm-75.98 51.48c-.04.01-.06 0 0 0z"
                />
                <path d="m185.5 15.14c.2-.02.09-.05 0 0z" />
                <path
                  d="m185.46 15.17c-24.83 24.51-49.25 49.81-74.28 73.95-10.02-8.08-19.03-19-29-28.32-4.21 1.33-6 5.47-9.27 7.74l38.58 38.58c24.17-25.11 50.2-48.88 73.35-74.71 6.68 6.68 13.18 13.18 19.68 19.68-6.74 6.52-13.47 14.03-20.67 20.29-1.74-1.65-3.26-3.09-4.38-4.15-11.95 12.08-11.22 6.68 4.8 22.11 12.18-12.17 24.02-24.06 36.16-36.14 1.08-1.07 2.15-2.07.82-3.24-11.85-11.85-23.7-23.7-35.79-35.79z"
                />
                <path
                  d="m185.5 15.14c-.02 0-.03.01-.06.01.01.01.01.01.02.02.01-.02.02-.02.04-.03z"
                />
              </svg>
              <p>She Shreds Co - Ambassador</p>
            </li>
            <li>
              <svg
                enable-background="new 0 0 754.13 388.01"
                viewBox="0 0 754.13 388.01"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m103.66 107.46c4.29-10.32 8.11-19.46 11.89-28.62 9.46-22.92 19.03-45.8 28.25-68.82 1.71-4.28 3.91-5.53 8.4-5.46 16.63.29 33.28.11 50.29.11v168.05c-16.57 0-33.29 0-50.55 0 0-22.65 0-45.38 0-68.1-.39-.09-.77-.17-1.16-.26-9.18 22.72-18.36 45.45-27.76 68.71-12.24 0-24.7.1-37.16-.16-1.12-.02-2.58-2.17-3.23-3.63-9.07-20.55-18.03-41.16-27.01-61.75-.44-1.02-.91-2.03-2.39-2.94v68.07c-18.16 0-35.56 0-53.23 0 0-55.87 0-111.45 0-167.62 1.76-.12 3.5-.34 5.25-.34 16.16-.03 32.33.08 48.49-.1 3.66-.04 5.53 1.01 7.05 4.53 13.35 31.04 26.93 61.97 40.44 92.94.6 1.36 1.22 2.71 2.43 5.39z"
                />
                <path
                  d="m314.31 2.06c23.56-1.01 44.81 5.05 63.08 20.37 16.61 13.92 26.16 31.55 28.48 53.16 2.37 22.11.11 43.49-12.18 62.46-14.8 22.84-36.53 35.44-63.35 39.07-18.96 2.57-37.66.97-55.46-6.35-32.99-13.57-50.35-38.93-53-74.02-2.25-29.86 6.13-56.13 30.4-75.48 18.09-14.42 39.07-20.23 62.03-19.21zm28.91 89.16c-1.07-13.17-1.74-26.12-6.86-38.34-4.7-11.24-12.26-16.23-23.86-16.03-10.88.18-17.98 5.43-22.11 16.86-6.14 17.02-5.68 34.68-4 52.28.64 6.71 2.34 13.46 4.55 19.84 2.93 8.47 8.83 14.46 18.02 16.24 14 2.71 25.63-4.24 29.37-18.93 2.63-10.39 3.32-21.27 4.89-31.92z"
                />
                <path
                  d="m538.83 81.74c0-25.94 0-51.88 0-78.2 1.95-.1 3.57-.25 5.18-.25 11.66-.02 23.33.15 34.99-.1 4.06-.09 5.54.95 5.41 5.24-.3 9.99-.1 19.99-.1 29.99v126.96 7.1c-10.9 0-21.32.1-31.73-.13-1.28-.03-2.68-1.74-3.76-2.91-24.12-26.01-48.21-52.06-72.3-78.1-1-1.08-2.01-2.15-3.85-4.11v84.96c-15.5 0-30.39 0-45.6 0 0-56.13 0-112.17 0-168.9 9.24 0 18.39.57 27.44-.17 7.94-.65 13.09 2.21 18.29 8.06 20.25 22.78 41.04 45.08 61.6 67.58 1.09 1.2 1.96 2.6 2.93 3.91.49-.32 1-.63 1.5-.93z"
                />
                <path
                  d="m748.4 36.36c-8.17 5.18-15.88 10.07-23.79 15.09-1.14-1.32-2.12-2.41-3.04-3.53-10.53-12.87-27.37-17.96-43.18-12.76-2.93.96-5.85 2.59-8.18 4.61-7.86 6.78-6.55 18.51 2.98 22.48 7.45 3.11 15.62 4.48 23.43 6.77 10.35 3.04 21.08 5.25 30.89 9.55 30.62 13.43 32.67 49.73 17.01 71.06-5.84 7.96-13.09 14.33-21.96 18.47-28.18 13.16-57.14 14.83-86.35 3.96-16.61-6.18-28.39-18.17-36.82-34.36 7.96-4.93 15.82-9.79 23.74-14.69 3.86 4.13 7.3 8.45 11.37 12.06 12.66 11.23 27.44 13.38 43.44 9.24 1.75-.45 3.47-1.23 5.06-2.11 5.64-3.13 9.22-7.6 8.89-14.43-.32-6.67-4.22-11.08-10.09-12.95-9.65-3.06-19.62-5.11-29.37-7.84-7.03-1.97-14.15-3.88-20.88-6.67-33.38-13.8-34.19-54.59-16.66-75.2 13.13-15.44 30.11-22.9 50.09-22.95 13.27-.04 26.73.06 39.77 2.17 19.28 3.12 33.48 14.58 43.65 32.03z"
                />
                <path
                  d="m.02 203.12c1.28-.09 2.25-.21 3.23-.21 27.65.02 55.31-.13 82.96.21 6.57.08 13.35 1.06 19.64 2.95 14.94 4.5 24.66 14.34 26.75 30.28 2.23 17.04-4.1 30.29-18.84 39.35-1.26.77-2.59 1.42-4.6 2.52 5 10.94 9.78 21.87 14.96 32.59 5.12 10.59 10.66 20.99 16.42 32.27-6.49 0-12.24 0-17.98 0-10 0-19.99-.1-29.99.07-2.9.05-4.47-.85-5.7-3.53-7.26-15.7-15.04-31.18-21.9-47.05-2.31-5.34-5-7.61-10.57-6.57-1.1.2-2.25.14-3.87.23v56.44c-17.06 0-33.61 0-50.52 0 .01-46.26.01-92.64.01-139.55zm50.75 27.79v37.9c8.3-.47 16.12-1.1 23.08-5.7 5.68-3.76 8.14-9.07 7.64-15.72-.51-6.67-4.27-11.48-10.46-13.21-6.41-1.79-13.2-2.2-20.26-3.27z"
                />
                <path
                  d="m227.87 346.43c-32.52-.6-55.16-7.89-70.55-29.11-16.72-23.06-18.72-48.88-8.22-74.97 9.96-24.76 30.07-37.43 55.83-41.3 19.31-2.9 38.32-1.48 55.81 8.17 26.57 14.65 39.02 42.08 35.54 73.41-4.63 41.66-40.85 64.73-68.41 63.8zm16.08-72.57c-.89-11.62-1.42-23.08-6.68-33.69-2.47-4.98-6.14-8.64-11.64-10.19-11.32-3.19-20.53 1.22-25.01 12.24-4.5 11.06-5 22.78-4.22 34.4.59 8.87 2.27 17.78 4.5 26.4 1.64 6.34 6.35 10.86 12.89 12.89 12.12 3.76 23.27-2.72 26.59-16.42 2.01-8.35 2.43-17.08 3.57-25.63z"
                />
                <path
                  d="m436.54 202.9c-5.84 14.06-11.26 27.27-16.81 40.43-12.99 30.81-25.91 61.66-39.17 92.35-2.82 6.53-6.72 12.63-10.54 18.67-12.56 19.86-30.97 29.59-54.22 30.48-6.12.23-12.25.04-18.73.04 0-6.69 0-12.93 0-19.57 3.76-.69 7.65-1.3 11.49-2.13 17.42-3.77 26.76-16.38 33.71-31.36.66-1.43-.26-3.86-.97-5.61-15.63-38.9-31.33-77.78-47.02-116.66-.8-1.97-1.55-3.96-2.59-6.64h22.91c7.83 0 15.67.2 23.49-.09 3.78-.14 5.44 1.07 6.63 4.73 7.5 23.1 15.27 46.11 22.97 69.14.41 1.23.91 2.44 1.8 4.8 2.94-8.09 5.55-15.18 8.08-22.29 6.14-17.24 12.34-34.47 18.3-51.77 1.14-3.3 2.55-4.72 6.29-4.62 11.15.28 22.3.1 34.38.1z"
                />
                <path
                  d="m647.85 203.09h106.12v31.21c-18.27 0-36.36 0-54.8 0v21.92h45.39v28.9c-15.1 0-30.01 0-45.33 0v26.32h54.91v31.3c-35.48 0-70.69 0-106.28 0-.01-46.39-.01-92.75-.01-139.65z"
                />
                <path
                  d="m524.72 203.08h51.18v108.38h55.6v31.28c-35.59 0-70.98 0-106.78 0 0-46.4 0-92.77 0-139.66z"
                />
                <path
                  d="m441.36 295.67c-3.57-10.46-6.69-20.05-10.15-29.52-1.17-3.19-1.12-5.82.26-8.98 6.82-15.71 13.35-31.54 20.01-47.32.43-1.03 1.01-2 1.83-3.61 18.68 45.78 37.12 90.97 55.83 136.82-16.57 0-32.34.06-48.1-.13-1.13-.01-2.74-1.61-3.27-2.84-1.59-3.65-3.03-7.41-3.99-11.26-.97-3.89-2.86-5.15-6.96-5.06-14.14.3-28.28.11-43.34.11 3.93-9.33 7.54-18.16 11.49-26.84.42-.93 2.84-1.3 4.34-1.33 7.07-.12 14.16-.04 22.05-.04z"
                />
              </svg>
              <p>Ambassador</p>
            </li>
          </ul>
        </div>
      </aside>

      <footer>
        <nav>
          <ul>
            <li><a href="#competition-results">Competition Results</a></li>
            <li>
              <a href="#current-industry-positions">Current Industry Positions</a>
            </li>
            <li><a href="#other-rad-things">Other Rad Things</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#video-edits">Video Edits</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </nav>

        <div className="footer-social">
          <h4>Kenzie &#40;Morris&#41; Bathurst</h4>
          <h4 className="screen-reader">Social Media</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/kaygbiv/">
                <p className="screen-reader">instagram.com/kaygbiv</p>
                <svg
                  enable-background="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path
                    d="m256 49.47c67.27 0 75.23.26 101.8 1.47 24.56 1.12 37.9 5.22 46.78 8.67 11.76 4.57 20.15 10.03 28.97 18.84 8.82 8.82 14.28 17.21 18.84 28.97 3.45 8.88 7.55 22.22 8.67 46.78 1.21 26.56 1.47 34.53 1.47 101.8s-.26 75.23-1.47 101.8c-1.12 24.56-5.22 37.9-8.67 46.78-4.57 11.76-10.03 20.15-18.84 28.97-8.82 8.82-17.21 14.28-28.97 18.84-8.88 3.45-22.22 7.55-46.78 8.67-26.56 1.21-34.53 1.47-101.8 1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67-11.76-4.57-20.15-10.03-28.97-18.84-8.82-8.82-14.28-17.21-18.84-28.97-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.56-1.47-34.53-1.47-101.8s.26-75.23 1.47-101.8c1.12-24.56 5.22-37.9 8.67-46.78 4.57-11.76 10.03-20.15 18.84-28.97 8.82-8.82 17.21-14.28 28.97-18.84 8.88-3.45 22.22-7.55 46.78-8.67 26.57-1.21 34.53-1.47 101.8-1.47m0-45.39c-68.42 0-77 .29-103.87 1.52-26.81 1.22-45.13 5.48-61.15 11.71-16.57 6.44-30.62 15.05-44.62 29.06-14 14-22.62 28.05-29.06 44.61-6.23 16.02-10.49 34.34-11.71 61.15-1.22 26.87-1.51 35.45-1.51 103.87s.29 77 1.52 103.87c1.22 26.81 5.48 45.13 11.71 61.15 6.44 16.57 15.05 30.62 29.06 44.62 14.01 14.01 28.05 22.62 44.62 29.06 16.02 6.23 34.34 10.49 61.15 11.71 26.87 1.23 35.45 1.52 103.87 1.52s77-.29 103.87-1.52c26.81-1.22 45.13-5.48 61.15-11.71 16.57-6.44 30.62-15.05 44.62-29.06 14.01-14.01 22.62-28.05 29.06-44.62 6.23-16.02 10.49-34.34 11.71-61.15 1.23-26.87 1.52-35.45 1.52-103.87s-.29-77-1.52-103.87c-1.22-26.81-5.48-45.13-11.71-61.15-6.44-16.57-15.05-30.62-29.06-44.62-14.01-14.01-28.05-22.62-44.62-29.06-16.02-6.23-34.34-10.49-61.15-11.71-26.88-1.22-35.46-1.51-103.88-1.51z"
                  />
                  <path
                    d="m256 126.64c-71.45 0-129.36 57.92-129.36 129.36s57.91 129.36 129.36 129.36 129.36-57.91 129.36-129.36-57.91-129.36-129.36-129.36zm0 213.33c-46.38 0-83.97-37.6-83.97-83.97s37.6-83.97 83.97-83.97c46.38 0 83.97 37.6 83.97 83.97s-37.59 83.97-83.97 83.97z"
                  />
                  <circle cx="390.48" cy="121.52" r="30.23" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/kenziebathurst">
                <p className="screen-reader">facebook.com/kenziebathurst</p>
                <svg
                  enable-background="new 0 0 1024 1024"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>facebook</title>
                  <path
                    d="m1024 512c0-282.77-229.23-512-512-512s-512 229.23-512 512c0 255.55 187.23 467.37 432 505.78v-357.78h-130v-148h130v-112.8c0-128.32 76.44-199.2 193.39-199.2 56.02 0 114.61 10 114.61 10v126h-64.56c-63.6 0-83.44 39.47-83.44 79.96v96.04h142l-22.7 148h-119.3v357.78c244.77-38.41 432-250.23 432-505.78z"
                  />
                  <path
                    d="m711.3 660 22.7-148h-142v-96.04c0-40.49 19.84-79.96 83.44-79.96h64.56v-126s-58.59-10-114.61-10c-116.95 0-193.39 70.88-193.39 199.2v112.8h-130v148h130v357.78c26.07 4.09 52.78 6.22 80 6.22s53.93-2.13 80-6.22v-357.78z"
                    fill="none"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default IndexPage