import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
  {
    contentfulSiteSettings {
      disclaimer {
        internal {
          content
        }
      }
    }
  }
  `)
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-10 pt-10 pb-6">
        <div className="flex flex-wrap">
          {/* <div class="w-full md:w-1/4 text-center md:text-left"> */}
          <div class="w-full md:w-1/4 text-left">
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
                <Link to="/about/">About Us</Link>
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
}

export default Footer;