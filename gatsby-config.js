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
    `gatsby-plugin-postcss`
  ],
};
