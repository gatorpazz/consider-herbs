import * as React from "react"
import Layout from '../components/Layout'
// data

// markup
const Blog = () => {
  return (
    <main>
      <Layout>
        <title>Blog</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-2">
                This is the blog.
              </h1>
              <h2 className="font-semibold text-xl mb-4">
                You won't believe this, but there will be a ton of really
                great blog posts on here at some point.
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Blog
