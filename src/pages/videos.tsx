import * as React from "react"
import Video from '../components/video';
import { Link } from "gatsby"

import YAMLData from "../../content/title.yaml"


function Boolean({ data }) {

  console.log(data)

  /*  {
     data.map((video => {
       if (video.F) {
         return <Video
           src={video.src}
           snowledge={video.snowledge}
           title={video.title}
           description={video.description}
         />
       } else {
         return <div>
           {video.title}
         </div>
       }
     }))
   } */



  return null;
}


const VideosPage = () => {

  console.log((YAMLData.something));

  return (
    <main id="video-edits">
      <a href={YAMLData.something}>maybe</a >
      <h1 className="text-center">Videos</h1>
      {YAMLData.title}
      {YAMLData.md}
      {/* {YAMLData.numbers.map((data) => {
        console.log(data)
        return <div>
          {data}
        </div>
      })} */}

      {/* <Boolean data={YAMLData.videos} /> */}

      {
        YAMLData.single.map((data) => {
          console.log(data);
          console.log(data.src);
          if (data?.F) {
            console.log('🦄')
            return <>
              <h1>
                before
                {data.src}
              </h1>
            </>
          } else {
            return null;
          }
        })
      }

      {/* 
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
      /> */}
    </main >
  )
}

export default VideosPage
