import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export const PureBlogPosts = ({ data }) => (
  <div className="">
    {data.allContentfulBlog.edges.map(({ node }) => (
      <div key={node.id} className="mt-20 mb-20">
        <h1 className="font-bold text-5xl mb-4">
          {node.title}
        </h1>
        {(node.imageUrl != null) ? <img src={node.imageUrl} alt={node.title} /> : <div></div>}
        {(node.youTubeUrl != null) ? <p>{node.youTubeUrl}</p> : <div></div>}
        <h2 className="font-semibold text-xl mb-4">
          {node.description}
        </h2>
      </div>
    ))}
  </div>
)

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query
      {
        allContentfulBlog {
          edges {
            node {
              imageUrl
              youTubeUrl
              title
              description
              id
            }
          }
        }
      }
  `)
  return <PureBlogPosts data={data} />
}

export default BlogPosts;