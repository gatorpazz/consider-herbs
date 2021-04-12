import * as React from "react"
import Layout from '../components/Layout'
import ShoppingCart from '../components/ShoppingCart'

const Cart = () => {
  return (
    <main>
      <Layout>
        <title>Your Cart</title>
        <div>
          <div className="py-20">
            <div className="text-center container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4">
                Your Cart.
              </h1>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Cart