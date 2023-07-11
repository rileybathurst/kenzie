import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

const CliffDrop = () => {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie_morris-alpine_meadows-cliff_drop.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle"
    breakpoints={[300, 600, 900]}
    width={650}
  />
};

export default CliffDrop;