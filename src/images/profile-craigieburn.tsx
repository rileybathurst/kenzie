import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"

const ProfileCraigieburn = () => {
  return <StaticImage
    src="https://kenzie-ski.s3.us-west-1.amazonaws.com/kenzie_morris-profile-craigieburn.webp"
    alt="kenzie morris powder turn"
    itemProp="photo"
    className="clip-circle profile-image"
    breakpoints={[300, 600, 900]}
    width={650}
    objectFit="contain"
  />
};

export default ProfileCraigieburn;