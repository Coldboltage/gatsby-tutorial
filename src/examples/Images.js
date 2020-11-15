import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/field.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "dog.jpg"}) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        id
      }
    }
    fluid: file(relativePath: {eq: "water.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
        id
      }
    }
  }
`


const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic Image</h3>
        <img src={img} width="100%" alt="An Image"/>
      </article>
      <article className="single-image">
        <h3>Fixed Image/Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>Fluid Image/SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
