import * as React from "react"
import Layout from '../components/Layout'

const About = () => {
  return (
    <main>
      <Layout>
        <title>About Us</title>
        <div>
          <div className="py-20">
            <div className="container mx-auto px-6">
              <h1 className="font-bold text-5xl mb-4">
                About us.
              </h1>
              <h2 className="font-semibold text-xl mb-4">
                Our company is called Consider Herbs, and we are asking you to do just that: consider our herbs!
                We are confident that by the time you leave this site, you'll be buying herbs a'plenty for a
                lifetime.
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export default About