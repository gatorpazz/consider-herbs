import './src/styles/global.css';

import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
// import App from './App'
// Remember to add your public Stripe key
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`)

const success_url = process.env.STRIPE_SUCCESS_URL;
const cancel_url = process.env.STRIPE_CANCEL_URL;

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={success_url}
      cancelUrl={cancel_url}
      currency="USD"
      allowedCountries={['US']}
      billingAddressCollection={true}
      // shipping_rates={["shr_1IfnFEI6CfECEKwgdvnNULcV"]}
    >
    {element}
  </CartProvider>
  )
}
