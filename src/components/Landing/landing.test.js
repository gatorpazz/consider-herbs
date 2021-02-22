import React from "react"
import renderer from "react-test-renderer"
import Landing from "./index"

describe("Landing", () => {

  beforeEach(data = useStaticQuery(graphql`
  {
    contentfulSiteSettings {
      id
      heroTitle
      heroBio
      callToActionButton
    }
  }
`))

  it("renders correctly", () => {
    const tree = renderer
      .create(<Landing />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
