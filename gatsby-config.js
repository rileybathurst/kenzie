module.exports = {
  siteMetadata: {
    title: "Kenzie Bathurst",
    description: "Athlete, Adventurer, Outdoor lover",
    siteUrl: "https://kenzie.ski",
    ogImage: "https://kenzie.ski/kenzie-morris-bathurst-og.jpg",
    ogImageAlt: "Kenzie Morris Bathurst hiking with skis up mt hood",
    social: {
      instagram: "kenzbathurst",
      facebook: "kenziebathurst",
    }
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    "gatsby-transformer-sharp",
    // TODO: this is how Im getting the images for the slider I need to look into this more
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-import`),
          require('autoprefixer'),
          require('postcss-nested'),
        ],
      },
    },
  ]
};