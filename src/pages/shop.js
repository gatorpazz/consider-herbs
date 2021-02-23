import * as React from "react"
import Layout from '../components/Layout'
import Products from '../components/Products'

const Shop = () => {
  return (
    <main>
      <Layout>
        <title>Shop</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4">
                Shop with us.
              </h1>
              <h2 className="font-semibold text-xl mb-8">
                Until you drop, all the herbs you can want.
              </h2>
              <Products />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Shop