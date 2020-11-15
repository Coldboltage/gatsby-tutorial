const path = require("path");
const { title } = require("process");

// create page dynamincally

const { Component } = require("react");

exports.createPages = async ({ graphql, actions }) => {
  // Grabbing createPage function from actions
  const { createPage } = actions;
  // Node asks for the ()
  const result = await graphql(`
    query GetProduct {
      products: allContentfulProduct {
        nodes {
          slug
          title
        }
      }
    }
  `)
  result.data.products.nodes.forEach((product) => {
    // For each product, we're creating a new page. 
    createPage({
      // Creates the path of the page
      path: `/products/${product.slug}`,
      // Our template at /src/templates/ will be the component design
      component: path.resolve(`src/template/product-template.js`),
      // The context is the information to be extracted to the page. You must query the info first
      context: {
        slug: product.slug,
      }
    })
  })
}