import React from 'react'
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const Blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>Minim irure velit nisi irure. Qui eu ex anim velit cillum mollit labore labore Lorem aliqua exercitation deserunt nostrud cillum. Ea ipsum deserunt nisi ex ut elit cillum labore officia nulla consequat. Aliqua aliqua tempor dolor qui incididunt voluptate et eiusmod enim sint ut anim sunt.</p>
      </div>
    </Layout>
  )
}

export default Blog
