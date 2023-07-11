import React from "react"
import YT from "./yt"
import Snowledge from "../svg/snowledge"

function IfSnowledge(props) {
  if (props.snowledge) {
    return (
      <Snowledge />
    )
  }
  else {
    return null;
  }
}

const Video = (props) => {

  // console.log(props.src)

  return (
    <article className="video-area">
      <YT
        src={props.src}
      />
      <div className="video-area-title">
        <IfSnowledge snowledge={props.snowledge} />
        <h4>{props.title}</h4>
      </div>
      <p>{props.description}</p>
      <div className="video-area-background">{/* Stay Gold */}</div>
      <div className="video-area-spacer">{/* Stay Gold */}</div>
    </article>

  )
}

export default Video