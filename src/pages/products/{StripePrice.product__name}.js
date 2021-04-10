import * as React from "react"
import { graphql, Link } from "gatsby"

const ProductDetail = ({ data }) => {
  const node = data.stripePrice;

  return (
    <div>
      <title>{node.product.name}</title>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold"></p>
            <Link to="/shop">
              <div className="modal-close cursor-pointer z-50">
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="md:flex md:items-center">
            <div className="w-full md:w-1/2">
              <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={node.product.images[0]} alt={node.product.name} />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              <h3 className="text-gray-700 uppercase font-bold text-lg">{node.product.name}</h3>
              <span className="text-gray-500 mt-3">${((node.unit_amount) / 100)}</span>
              <hr className="my-3" />
              <div className="mt-2">
                <label className="text-gray-700 text-sm" for="count">{node.product.description}</label>
                <div className="flex items-center mt-1">
                  <span className="text-gray-700 text-lg">Size: {node.product.metadata.size}</span>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <button className="px-8 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div >

  )
}

export const data = graphql`
  query($id: String) {
    stripePrice(id: {eq: $id}) {
    unit_amount
    product {
      name
      id
      description
      images
      metadata {
        size
        type
        }
      }
    }
  }
`
export default ProductDetail