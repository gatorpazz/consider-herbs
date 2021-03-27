import * as React from "react"
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
        contentfulSiteSettings {
          contactEmail
          emailSubject
      }
    }
  `);

  const emailLink = "mailto:" + data.contentfulSiteSettings.contactEmail + "?subject=" + data.contentfulSiteSettings.emailSubject;
  
  return (
    <main>
      <Layout>
        <title>Contact Us</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-bold text-5xl mb-4">
                Contact Us
              </h1>
              <h2 className="font-semibold text-xl mb-4">
                Let us know how we can help.
              </h2>
              <div>
                <h3>
                  <a href={emailLink}>
                    {data.contentfulSiteSettings.contactEmail}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Contact