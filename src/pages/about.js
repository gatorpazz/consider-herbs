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
          aboutText2 {
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
            <div className="container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4 text-center">
                About us.
              </h1>
              <image link="https://www.considerherbs.com/static/media/Grid1.d2c7a8d9.jpg" />
              <h2 className="font-semibold text-lg mb-4 text-justify">
                {data.contentfulSiteSettings.aboutText.internal.content}
              </h2>
              <h2 className="font-semibold text-lg mb-4 text-justify">
                {data.contentfulSiteSettings.aboutText2.internal.content}
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default About