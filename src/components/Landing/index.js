import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
// data

// markup
const Landing = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSiteSettings {
        id
        heroTitle
        heroBio
        callToActionButton
      }
    }
  `)

  return (
    <div>
      <div className="py-20">
        <div className="container mx-auto px-8">
          <h1 className="font-bold text-5xl mb-4">
            {data.contentfulSiteSettings.heroTitle}
          </h1>
          <h2 className="font-semibold text-xl mb-4">
            {data.contentfulSiteSettings.heroBio}
          </h2>
          <Link to="/shop">
            <button className="text-white font-bold bg-green-400 py-3 px-5 shadow rounded-lg tracking-wider">
              {data.contentfulSiteSettings.callToActionButton}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing