import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MailingListForm from '../MailingListForm'
import { useStaticQuery, graphql, Link } from "gatsby"

export const PureLanding = ({ data, url }) => (
  <div>
    <div className="py-20">
      <div className="container mx-auto px-8 grid xl:grid-cols-7 gap-4">
        <div className="xl:col-span-3 sm:text-center xl:text-left">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {data.contentfulSiteSettings.heroTitle}
          </h1>
          <h2 className="font-semibold mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl ">
            {data.contentfulSiteSettings.heroBio}
          </h2>
          <Link to="/shop">
            <button className="mt-5 text-white font-bold bg-green-500 py-3 px-5 shadow rounded-lg tracking-wider">
              {data.contentfulSiteSettings.callToActionButton}
            </button>
          </Link>
        </div>
        <div className="xl:col-span-4">
          <img src={data.contentfulSiteSettings.heroImage.file.url} alt="hero" />
        </div>
      </div>
    </div>
    <div className="container mx-auto px-8 lg:flex grid-cols-3">
      <div className="lg:w-1/3 mx-4 mb-12 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-center text-3xl mb-4">{data.contentfulSiteSettings.feature1Headline}</h3>
            <img src={data.contentfulSiteSettings.feature1Image.file.url} alt="" />
            <p className="font-semibold text-xl">{data.contentfulSiteSettings.feature1Text}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3  mb-12 mx-4 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-center text-3xl mb-4">{data.contentfulSiteSettings.feature2Headline}</h3>
            <img src={data.contentfulSiteSettings.feature2Image.file.url} alt="" />
            <p className="font-semibold text-xl">{data.contentfulSiteSettings.feature2Text}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 mb-12 mx-4 bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-8">
            <h3 className="font-bold text-center text-3xl mb-4">{data.contentfulSiteSettings.feature3Headline}</h3>
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
            url={url}
            render={({ subscribe, status, message }) => (
              <MailingListForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    </div>
  </div>
)

const Landing = () => {
  const url = process.env.REACT_APP_MAILCHIMP_URL;

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
  return <PureLanding data={data} url={url} />
}

export default Landing