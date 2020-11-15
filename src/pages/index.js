import React from "react"
import Layout from "../components/Layout"
import {ExampleButton} from "../components/button"
import Header from "../examples/Header"

export default () => {
  return (
    <Layout>
      <h1 style={{color:"red", textTransform:"uppercase"}}>This is the Homepage</h1>
      <Header />
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
