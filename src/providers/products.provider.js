import React, {createContext, useState} from 'react'

// This will be used for shopping cart state

export const ProductsContext = createContext({
  test: ''
})

const ProductsProvider = ({children}) => {
  const [test] = useState('the provider has been connected');
  return (
    <ProductsContext.Provider value={{test}}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider