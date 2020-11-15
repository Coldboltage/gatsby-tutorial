import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data: {product: { id, price, slug, title}} }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>${price}</h2>

    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "artistic-seat"}) {
      id
      price
      slug
      title
    }
  }
`

export default ComponentName