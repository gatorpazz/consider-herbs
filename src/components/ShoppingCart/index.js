import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Link, useStaticQuery } from "gatsby"

export const PureShoppingCart = ({ data }) => {
  const { removeItem, incrementItem, decrementItem, cartDetails,
    redirectToCheckout, totalPrice, cartCount, clearCart } = useShoppingCart();

  const removeItemFromCart = (id) => {
    removeItem(id);
    if (cartCount == 2) {
      removeItem(data.contentfulSiteSettings.shippingApiId);
      console.log("HAHA");
    }
  }

  const decreaseItemCart = (id) => {
    decrementItem(id);
    if (cartCount == 2) {
      removeItem(data.contentfulSiteSettings.shippingApiId);
      console.log("HAHA");
    }
  }

  return (
    <div className="px-2 container">
      <div className="text-center">
        <div>
          {Object.keys(cartDetails).map((key) => (
            key === data.contentfulSiteSettings.shippingApiId ?
              // GROUND SHIPPING:
              <div className="mb-12 md:w-128 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={cartDetails[key].id}>
                <div className="md:flex">
                  <div className="hidden md:flex md:flex-shrink-0">
                    <img className="flex-none w-full object-cover md:w-48" src={cartDetails[key].image} alt={cartDetails[key].name} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-gray-900 font-bold tracking-wide text-xl">{cartDetails[key].name}</h3>
                    <p className="mt-2 text-gray-700 font-bold text-md">${cartDetails[key].value / 100}</p>
                  </div>
                </div>
              </div>
              : // NOT GROUND SHIPPING:
              <div className="mb-12 md:w-128 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={cartDetails[key].id}>
                <div className="md:flex">
                  <div className="hidden md:flex md:flex-shrink-0">
                    <img className="flex-none w-full object-cover md:w-48" src={cartDetails[key].image} alt={cartDetails[key].name} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-gray-900 font-bold tracking-wide text-xl">{cartDetails[key].name}</h3>
                    <p className="mt-2 text-gray-700 font-bold text-md">${((cartDetails[key].price) / 100)}</p>
                    <div className="mt-2">
                      <button onClick={() => decreaseItemCart(cartDetails[key].id)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <span className="text-gray-700 text-lg mx-2">{cartDetails[key].quantity}</span>
                      <button onClick={() => incrementItem(cartDetails[key].id)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                    </div>
                    <p className="mt-2 text-gray-700 font-bold text-md">Item Total: ${cartDetails[key].value / 100}</p>
                    <button className="px-8 mt-5 py-2 bg-green-400 text-white text-sm font-medium rounded hover:bg-green-300 focus:outline-none focus:bg-green-300"
                      onClick={() => removeItemFromCart(cartDetails[key].id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
        <div className=" font-semibold mb-5 bg-gray-50 text-lg divide-y divide-gray-300">
          <div className="py-3">
            <h1 className="font-bold">
              Products: ${(("id_considerherbs_groundshipping" in cartDetails)) ? ((totalPrice / 100) - data.contentfulSiteSettings.shippingCost).toFixed(2) : ((totalPrice / 100)).toFixed(2)}
            </h1>
            <h1 className="text-gray-500">
              + Shipping: ${data.contentfulSiteSettings.shippingCost.toFixed(2)}
            </h1>
          </div>
          <div className="py-3">
            <h1 className="font-bold">
              Cart Total: ${(totalPrice / 100).toFixed(2)}
            </h1>
          </div>
        </div>
        <div>
          <button className="px-8 mt-5 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
            onClick={() => redirectToCheckout()}>
            Checkout
          </button>
        </div>
        <div>
          <button className="px-8 mt-5 py-2 bg-green-300 text-white text-sm font-medium rounded hover:bg-green-300 focus:outline-none focus:bg-green-300"
            onClick={() => clearCart()}>
            Empty Cart
          </button>
        </div>
        <Link to="/shop/">
          <button className="px-8 my-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500">
            Back to Shop
          </button>
        </Link>
      </div>
    </div >
  )
}

const ShoppingCart = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSiteSettings {
        shippingCost
        shippingApiId
      }
    }
  `)
  return <PureShoppingCart data={data} />
}

export default ShoppingCart;