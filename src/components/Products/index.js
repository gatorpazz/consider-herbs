import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export const PureProducts = ({ data }) => (
  <div>
    <div className="">
      {data.allStripePrice.edges.map(({ node }) => (
        <Link to={node.productPath}>
          <div className="hover:shadow-2xl mb-12 md:w-96 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={node.id}>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="flex-none md:h-48 w-full object-cover md:w-48" src={node.product.images[0]} alt={node.product.name} />
              </div>
              <div className="p-8">
                <h3 className="text-gray-900 font-bold tracking-wide text-xl">{node.product.name}</h3>
                <p className="mt-2 text-gray-700 font-bold text-xl">${((node.unit_amount) / 100)}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <div>

    </div>
  </div>
)

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      allStripePrice(
        filter: { active: { eq: true } }
        sort: { fields: [unit_amount] }
      ) {
        edges {
          node {
            productPath: gatsbyPath(filePath: "/products/{StripePrice.product__name}")
            id
            active
            currency
            unit_amount
            product {
              id
              name
              images
              metadata {
                size
                type
              }
              description
            }
          }
        }
      }
    }
  `)
  return <PureProducts data={data} />
}

export default Products;