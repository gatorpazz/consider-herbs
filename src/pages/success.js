import * as React from "react"
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from "gatsby"
import { useShoppingCart } from 'use-shopping-cart'

const Success = () => {
  const data = useStaticQuery(graphql`
    query {
        contentfulSiteSettings {
          successMessage
          productEmail
          productEmailSubject
      }
    }
  `);

  const { clearCart } = useShoppingCart();

  React.useEffect( () => {
    clearCart();
  })

  const emailLink = "mailto:" + data.contentfulSiteSettings.productEmail + "?subject=" + data.contentfulSiteSettings.productEmailSubject;

  return (
    <main>
      <Layout>
        <title>Consider Herbs - Thank You</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4 text-center">
                Thank you for your order!
              </h1>
              {/* <image link="https://www.considerherbs.com/static/media/Grid1.d2c7a8d9.jpg" /> */}
              <h2 className="font-semibold text-lg mb-4 text-center">
                {data.contentfulSiteSettings.successMessage}
              </h2>
              <h2 className="font-semibold text-lg mb-4 text-center">
                Please contact us at 
                <a href={emailLink} className="font-normal">
                  {" " + data.contentfulSiteSettings.productEmail + " "}
                </a>
                with any questions about your order!
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Success