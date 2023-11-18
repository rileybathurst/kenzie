import * as React from "react"
import Videos from '../../content/videos.yaml';
import Header from "../components/header";
import Footer from "../components/footer";
import Video from '../components/video';

const VideosPage = () => {
  return (
    <>
      <Header />
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

export default VideosPage
