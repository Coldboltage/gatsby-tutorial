import React from 'react'
import Layout from "../components/Layout"
import Header from "../examples/Header"
// To be deleted
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

const examples = ({data}) => {
  const {site: {info: {author}}} = data
  return (
    <Layout>
      <p>Hello from the examples page</p>
      <Header />
      <HeaderStatic />
      <h5>{author}</h5>
    </Layout>
  )
}

export const data = graphql`
query MyQuery {
  site {
    info:siteMetadata {
      author
      data
      description
      title
      person {
        age
        name
      }
    }
  }
}
`

export default examples
