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
        callToActionButton: "Explore Today"
      }
    }
    const tree = renderer
      .create(<Landing data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
