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
    successUrl="stripe.com"
    cancelUrl="twitter.com/stripe"
    currency="USD"
    allowedCountries={['US']}
    billingAddressCollection={true}
  >
    {element}
  </CartProvider>
  )
}
