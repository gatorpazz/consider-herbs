import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { navigate } from 'gatsby'

const ShoppingCart = () => {
  const { addItem, removeItem, incrementItem, decrementItem,
    clearCart, cartDetails, cartCount,
    totalPrice } = useShoppingCart()

  // const products = [
  //   {
  //     name: 'Bananas',
  //     description: 'Yummy yellow fruit',
  //     id: 'id_banana001',
  //     price: 439,
  //     currency: 'USD',
  //     image: 'https://my-image.com/banana.jpg'
  //   },
  //   {
  //     name: 'Green Peppers',
  //     description: 'Good n Crunchy',
  //     id: 'id_pepper001',
  //     price: 300,
  //     currency: 'USD',
  //     image: 'https://my-image.com/pepper.jpg'
  //   }
  // ]

  return (
    <div className="px-2 container">
      <div className="text-center ">
        <div>
          <div className="font-semibold mb-5">
            <h1>
              Item Count: {cartCount}
            </h1>
            <h1>
              Cart Total: ${totalPrice / 100}
            </h1>
          </div>
          <div>
            {Object.keys(cartDetails).map((key) => (
              <div>
                <div className="hover:shadow-2xl mb-12 md:w-96 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={cartDetails[key].id}>
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img className="flex-none md:h-48 w-full object-cover md:w-48" src={cartDetails[key].image} alt={cartDetails[key].name} />
                    </div>
                    <div className="p-8">
                      <h3 className="text-gray-900 font-bold tracking-wide text-xl">{cartDetails[key].name}</h3>
                      <p className="mt-2 text-gray-700 font-bold text-md">${((cartDetails[key].price) / 100)}</p>
                      <p className="mt-2 text-gray-700 font-bold text-md">Item Total: ${cartDetails[key].value / 100}</p>
                      <button className="px-8 mt-5 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
                        onClick={() => incrementItem(cartDetails[key].id)}>
                        Increase
                      </button>
                      <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                        onClick={() => decrementItem(cartDetails[key].id)}>
                        Decrease
                      </button>
                      <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                        onClick={() => removeItem(cartDetails[key].id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="font-regular" id={key}>
                  <h3>Name: {cartDetails[key].name}</h3>
                  <h1>ID: {cartDetails[key].id}</h1>
                  <h3>Price: ${cartDetails[key].price / 100}</h3>
                  <h3>Quantity: {cartDetails[key].quantity}</h3>
                  <h3>Item Total: ${cartDetails[key].value / 100}</h3>
                </div>
                <div>
                  <div>
                    <button className="px-8 mt-5 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
                      onClick={() => incrementItem(cartDetails[key].id)}>
                      Increase
                    </button>
                  </div>
                  <div>
                    <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                      onClick={() => decrementItem(cartDetails[key].id)}>
                      Decrease
                    </button>
                  </div>
                  <div>
                    <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                      onClick={() => removeItem(cartDetails[key].id)}>
                      Remove
                    </button>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* {products.map((item) => (
          <div>
            <div>
              <button className="px-8 mt-5 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
                onClick={() => incrementItem(item.id)}>
                Increment {item.name}
              </button>
            </div>
            <div>
              <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                onClick={() => decrementItem(item.id)}>
                Decrease {item.name}
              </button>
            </div>
            <div>
              <button className="px-8 mt-5 py-2 bg-yellow-300 text-white text-sm font-medium rounded hover:bg-yellow-200 focus:outline-none focus:bg-yellow-200"
                onClick={() => removeItem(item.id)}>
                Remove {item.name}
              </button>
            </div>
          </div>
        ))
        } */}
        <div>
          <button className="px-8 mt-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            onClick={clearCart}>
            Empty Cart
          </button>
        </div>
        <div>
          <button className="px-8 mt-5 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
            onClick={() => console.log(cartDetails)}>
            Log Cart
          </button>
        </div>

      </div>
    </div>
    // </div>
  )
}

export default ShoppingCart;