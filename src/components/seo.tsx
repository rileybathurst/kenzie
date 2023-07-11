import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({
  children
}) => {
  const {
    title,
    description,
    ogImage,
    ogImageAlt,
    siteUrl: url,
  } = useSiteMetadata()

  const seo = {
    title: title,
    description: description,
    ogImage: ogImage,
    ogImageAlt: ogImageAlt,
    siteUrl: url,
  }

  console.log(seo.title)

  return (
    <>
      <title>{seo.title}</title>
      <meta name="image" content={seo.ogImage} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>⛷️</text></svg>" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
      <meta property="og:image:alt" content={seo.ogImageAlt} />
      {/* {children} */}
    </>
  )
}