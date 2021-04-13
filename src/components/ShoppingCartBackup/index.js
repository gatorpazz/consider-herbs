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
        <div className="hover:shadow-2xl mb-12 md:w-128 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={cartDetails[key].id}>
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="flex-none md:h-48 w-full object-cover md:w-48" src={cartDetails[key].image} alt={cartDetails[key].name} />
            </div>
            <div className="p-8">
              <h3 className="text-gray-900 font-bold tracking-wide text-xl">{cartDetails[key].name}</h3>
              <p className="mt-2 text-gray-700 font-bold text-md">${((cartDetails[key].price) / 100)}</p>
              <p className="mt-2 text-gray-700 font-bold text-md">Item Total: ${cartDetails[key].value / 100}</p>
              <p className="mt-2 text-gray-700 font-bold text-md">Quantity: {cartDetails[key].quantity}</p>
              <button className="px-8 mt-5 py-2 bg-yellow-600 text-white text-sm font-medium rounded hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500"
                onClick={() => incrementItem(cartDetails[key].id)}>
                +
                </button>
              <button className="px-8 mt-5 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500"
                onClick={() => decrementItem(cartDetails[key].id)}>
                -
                </button>
              <button className="px-8 mt-5 py-2 bg-blue-400 text-white text-sm font-medium rounded hover:bg-blue-300 focus:outline-none focus:bg-blue-300"
                onClick={() => removeItem(cartDetails[key].id)}>
                Remove
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
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