import React from "react"
import renderer from "react-test-renderer"
import { PureFooter as Footer } from "./index"

describe("Footer", () => {
  it("renders correctly", () => {
    const data = {
      contentfulSiteSettings: {
        disclaimer: {
          internal: {
            content: "The information presented herein by Consider Herbs is intended for educational purposes only. These statements have not been evaluated by the FDA and are not intended to diagnose, cure, treat or prevent disease. Individual results may vary, and before using any supplements, it is always advisable to consult with your own healthcare provider."
          }
        }
      }
    }
    const tree = renderer
      .create(<Footer data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})