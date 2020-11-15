/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial Site",
    description: "This is a random description",
    author: "Alan Reid",
    data: ["item 1", "item 2"],
    person: { name: "Alan", age: "29" }
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pn0nvtzhdkap`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
