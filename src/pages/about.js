import * as React from "react"
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
        contentfulSiteSettings {
          aboutText {
            internal {
              content
            }
          }
      }
    }
  `);
  return (
    <main>
      <Layout>
        <title>About Us</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-bold text-5xl mb-4">
                About us.
              </h1>
              <h2 className="font-semibold text-lg mb-4">
                {data.contentfulSiteSettings.aboutText.internal.content}
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default About