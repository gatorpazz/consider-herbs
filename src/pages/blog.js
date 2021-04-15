import * as React from "react"
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

const Blog = () => {
  return (
    <main>
      <Layout>
        <title>Blog</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6">
              {/* <h2 className="font-semibold text-xl mb-4">
                Replace w Blog Posts
              </h2> */}
              <BlogPosts />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Blog