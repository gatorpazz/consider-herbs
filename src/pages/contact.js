import * as React from "react"
import Layout from '../components/Layout'
// data

// markup
const Contact = () => {
  return (
    <main>
      <Layout>
        <title>Contact Us</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-bold text-5xl mb-4">
                Contact Us
              </h1>
              <h2 className="font-semibold text-xl mb-4">
                Let us know how we can help.
              </h2>
              <div>
                <h3>
                  <a href="mailto:abc@test.com?subject=Question for Consider Herbs">
                    dee@considerherbs.com
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default Contact
