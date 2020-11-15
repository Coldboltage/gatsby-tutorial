import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      title,
      price,
      slug,
      image: { fixed },
      info: { info }
    }
  }
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <section className="single-product">
        <aricle>
          <Image fixed={fixed} alt={title} />
        </aricle>
        <aricle>
          <h1>{title}</h1>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>Add to Cart</button>
        </aricle>
      </section>
    </Layout>
  )
}

// This page has the slug pushed into it via product.slug
// Programatically, we have decided that the slug is the id to identify the post.
export const query = graphql`
  query GetSingleProduct($slug:String) { 
    product: contentfulProduct(slug: {eq: $slug}) {
      title
      price
      slug
      info {
        info
      }
      image {
        fixed (width: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default ComponentName
