import React from "react"

const YT = (props: {
  src: string
}) => {

  // console.log(props.src)

  return (
    <iframe
      title="passage"
      loading="lazy"
      width="560"
      height="315"
      src={props.src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default YT