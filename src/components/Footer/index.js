import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export const PureFooter = ({ data }) => (
  <footer className="bg-gray-100 object-bottom">
    <div className="container mx-auto px-10 pt-10 pb-6">
      <div className="flex flex-wrap">
        {/* <div className="w-full md:w-1/4 text-center md:text-left"> */}
        <div className="w-full md:w-1/4 text-left">
          <h5 className="mb-4 font-bold">
            Links
          </h5>
          <ul className="mb-4 font-semibold">
            <li className="mt-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mt-2">
              <Link to="/shop/">Shop</Link>
            </li>
            <li className="mt-2">
              <Link to="/blog/">Blog</Link>
            </li>
            <li className="mt-2">
              <Link to="/about/">About</Link>
            </li>
            <li className="mt-2">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="mt-4 text-left text-xs">{data.contentfulSiteSettings.disclaimer.internal.content}</p>
      </div>
      <div>
        <h3 className="mt-4 text-left">Consider Herbs © 2021</h3>
      </div>
    </div>
  </footer>
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSiteSettings {
        disclaimer {
          internal {
            content
          }
        }
      }
    }
  `)
  return <PureFooter data={data} />
}

export default Footer;