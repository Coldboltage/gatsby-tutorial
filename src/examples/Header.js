import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
query {
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

const Header = () => {
  const { site: { info: { title, person: { age, name } } } } = useStaticQuery(getData);

  return (
    <div>
      {/* <h2>Title: {data.site.siteMetadata.title}</h2>
      <h2>Name: {data.site.siteMetadata.person.name}</h2> */}

      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  )
}

export default Header
