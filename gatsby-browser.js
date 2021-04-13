import './src/styles/global.css';

import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
// import App from './App'
// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
    mode="client-only"
    stripe={stripePromise}
    successUrl="http://localhost:8000"
    cancelUrl="http://localhost:8000/cart/"
    currency="USD"
    allowedCountries={['US']}
    billingAddressCollection={true}
    shipping_rates={["shr_1IfnFEI6CfECEKwgdvnNULcV"]}
  >
    {element}
  </CartProvider>
  )
}
