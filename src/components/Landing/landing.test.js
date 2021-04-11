import React from "react"
import renderer from "react-test-renderer"
import { PureLanding as Landing } from "./index"

describe("Landing", () => {
  it("renders correctly", () => {
    const data = {
      contentfulSiteSettings: {
        id: "8ad82eb0-2504-51d6-b2f5-03808afda33d",
        heroTitle: "Get back to your nature.",
        heroBio: "Consider the holistic power of herbs and experience the healthy effects of our earth.",
        callToActionButton: "Explore Today",
        feature1Headline: "Feature 1 Text Here",
        feature1Text: "You won't believe all the things that feature one has in store. Check out this icon above me.",
        feature2Headline: "Feature 2 Text Goes Here",
        feature2Text: "It's really quite unbelievable. You won't believe all the things that feature two has in store. ",
        feature3Headline: "Feature 3 Will Be Shown",
        feature3Text: "Can you feel it? That's the power of herbs healing your body. Really, it's true.",
        heroImage: {
          file: {
            url: "//images.ctfassets.net/l7aye13px8h4/1vq9ylwI0cK5ArUt0FMfL0/dba43fd73de8413901048c44897fe41d/IMG_0264.jpg"
          }
        },
        feature1Image: {
          file: {
            url: "//images.ctfassets.net/l7aye13px8h4/4BEnbw0GIPZWYwbkNEAsjN/cb15eaee66260373fd55b278aa8e85ce/IMG_0291.jpg"
          }
        },
        feature2Image: {
          file: {
            url: "//images.ctfassets.net/l7aye13px8h4/6851HOwp5dLgiVuOzcapz5/7a64695affa6be8fc6bae619444e355d/IMG_8249__1_.jpg"
          }
        },
        feature3Image: {
          file: {
            url: "//images.ctfassets.net/l7aye13px8h4/63DM5qkSAdP8Lp3wyoZf1C/7fcd9a4466284f68fdf342429a230f93/IMG_0311.jpg"
          }
        }
      }
    }

    const url = "TEST123";
    
    const tree = renderer
      .create(<Landing data={data} url={url} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})