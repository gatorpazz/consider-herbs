require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "consider-herbs",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_API,
        spaceId: process.env.CONTENTFUL_SPACE,
      },
    },
    {
      resolve: "gatsby-source-stripe",
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    `gatsby-plugin-postcss`
  ],
}
