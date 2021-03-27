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
            <div className="text-center container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4">
                Shop with us.
              </h1>
              <select className="mb-16" name="herbs" id="herbs">
                <option value="plh">Price Low to High</option>
                <option value="phl">Price High to Low</option>
                <option value="type">Type</option>
              </select>
              <Products />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Shop