import * as React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
// data


// markup
const IndexPage = ({data}) => {
  return (
    <main>
      <Layout>
        <title>Home Page</title>
        <h1>
          {data.contentfulSiteSettings.heroTitle}
        </h1>
        <p>
          {data.contentfulSiteSettings.heroBio}
        </p>
        <button>
          {data.contentfulSiteSettings.callToActionButton}
        </button>
      </Layout>
    </main>
  )
}

export const query = graphql`
  {
    contentfulSiteSettings {
      heroTitle
      heroBio
      callToActionButton
    }
  }
`

export default IndexPage
