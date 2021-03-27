import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useStaticQuery, graphql, Link } from "gatsby"

export const PureLanding = ({ data }) => (
  <div>
    <div className="py-20">
      <div className="container mx-auto px-8 md">
        <img src={data.contentfulSiteSettings.heroImage.file.url} alt="hero" />
        <h1 className="font-bold text-5xl mb-4">
          {data.contentfulSiteSettings.heroTitle}
        </h1>
        <h2 className="font-semibold text-xl mb-4">
          {data.contentfulSiteSettings.heroBio}
        </h2>
        <Link to="/shop">
          <button className="text-white font-bold bg-green-500 py-3 px-5 shadow rounded-lg tracking-wider">
            {data.contentfulSiteSettings.callToActionButton}
          </button>
        </Link>
      </div>
    </div>
    <div className="container mx-auto px-8 lg:flex grid-cols-3">
      <div className="lg:w-1/3 mx-4 mb-12 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-3xl mb-4">{data.contentfulSiteSettings.feature1Headline}</h3>
            <img src={data.contentfulSiteSettings.feature1Image.file.url} alt="" />
            <p className="font-semibold text-xl">{data.contentfulSiteSettings.feature1Text}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3  mb-12 mx-4 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-3xl mb-4">{data.contentfulSiteSettings.feature2Headline}</h3>
            <img src={data.contentfulSiteSettings.feature2Image.file.url} alt="" />
            <p className="font-semibold text-xl">{data.contentfulSiteSettings.feature2Text}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 mb-12 mx-4 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-3xl mb-4">{data.contentfulSiteSettings.feature3Headline}</h3>
            <img src={data.contentfulSiteSettings.feature3Image.file.url} alt="" />
            <p className="font-semibold text-xl">{data.contentfulSiteSettings.feature3Text}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="mb-12 mx-4 bg-gray-50 rounded-xl shadow-md overflow-hidden  text-center">
        <div className="p-8">
          <MailchimpSubscribe
            url={process.env.REACT_APP_MAILCHIMP_URL}
          />
        </div>
      </div>
    </div>
  </div>
)

const Landing = () => {
  const data = useStaticQuery(graphql`
    query {
        contentfulSiteSettings {
        id
        heroTitle
        heroBio
        callToActionButton
        feature1Headline
        feature1Text
        feature2Headline
        feature2Text
        feature3Headline
        feature3Text
        heroImage {
        file {
        url
      }
        }
        feature1Image {
        file {
        url
      }
        }
        feature2Image {
        file {
        url
      }
        }
        feature3Image {
        file {
        url
      }
        }
      }
    }
  `)
  return <PureLanding data={data} />
}

export default Landing