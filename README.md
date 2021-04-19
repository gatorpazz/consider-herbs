

# consider-herbs
Consider Herbs is a Jamstack web app and e-commerce site built using Gatsby with React components, allowing visitors to learn about and purchase herbs, as well as viewing wellness videos produced and curated by the brand. This app also integrates with a CMS to give the admin client hands-on access to update the site's and store's contents.

This app serves the term project for the University of Florida's CEN3031 Spring 2021 course

![herbs](https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMjExNDE4MC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY2MzMwMDc1MH0.kwJLT77dLIvCs0D9qdAAPF_WISIbzHNH9JalMIJO6Q0/img.jpg?width=1245&quality=85&coordinates=0,0,0,0&height=700)

### Contributors
[Jeremy DePoyster](https://github.com/maulgoth)

[Michael Pascuzzi](https://github.com/gatorpazz)

[Omar Rahman](https://github.com/IBeRamen)


### Technologies Used

 - Gatsby
 - React
 - Contentful
 - Stripe API
 - use-shopping-cart
 - react-youtube
 - react-mailchimp-subscribe
 - Jest testing

### Requirements

 - node v12.18.3
 - npm minimum v7.5.4

### Installation
#### For Deployment
- Install the project locally:
	1. `git clone` the repo
	2. `npm install` to install all required packages
	3. Create `.env.development` file with the following Environment Variables (*some variables include GATSBY_\* so they may be used in client-side components*):
		 - GATSBY_CONTENTFUL_API: (*Contentful API key*)
		 - GATSBY_CONTENTFUL_SPACE: (*Contentful Space key*)
		 - GATSBY_STRIPE_PUBLISHABLE_KEY: (*Stripe public API key*)
		 - STRIPE_SECRET_KEY: (*Stripe secret API key*)
		 - GATSBY_STRIPE_SUCCESS_URL: (http://websiteurl.com/success/  *where websiteurl is the site's URL. This link is where Stripe Checkout redirects on successful checkout*)
		 - GATSBY_STRIPE_CANCEL_URL: (*http://websiteurl.com/cart which is the same as above, where Stripe Checkout redirects on cancelling the checkout*)
		 - GATSBY_REACT_APP_MAILCHIMP_URL: (*Mailchimp Signup URL*)
	4. `gatsby develop` will start the server for development, and any changes will hot reload.
	5. Add all Environment Variables from above to Netlify. (*If new installation, create Netlify deploy webhook as well and use that URL for NETLIFY_HOOK in CircleCI*)
	6. `git push origin prods` pushes the code to the repo and triggers CircleCI to execute the Jest tests and, on passing, trigger a Netlify deploy webhook that rebuilds and deploys the site.
- Add Project to CircleCI from github repo (*repo contains premade `config.yml` for CircleCI*)
- On CircleCI add Environment Variables:
	- NETLIFY_HOOK: (*Netlify deploy webhook URL*)
- Deployment and site rebuild are automatically triggered by any of the following actions:
	- Pushing code to `prods` branch
	- Changing anything on Contentful
	- Adding / Deleting / Updating product on Stripe
	Example:
	  - You add a new component to the Gatsby site and push the code to github: CircleCI runs the tests and rebuilds the site on Netlify.
	  - You add a new product or change a product's price on Stripe: Stripe's API sends a webhook to Netlify and rebuilds the site.
	  - You change the Hero Image, Feature Title, or add a Blog post on Contentful: Contentful sends a webhook to Netlify and rebuilds the site.

#### For Admin
**Stripe**
- Stripe Products:
	- When Adding Products Include:
		- Price
		- Name
		- Description
		- Metadata:
			- Size (8 oz, 10 ml, etc.)
		- Image
	- When Stripe Products are Updated or Deleted, the site will automatically rebuild.
	- Ground Shipping Stripe Product:
		- Price and Image may be edited
		- Price represents the Ground Shipping price for the Shop
		- This Product should not be removed


**Contentful**
- Contentful Types:
	- Site Settings - These settings change the text, images, and editables across the site.
		- Hero Title
		- Hero Bio
		- Hero Image
		- Call to Action Button Text - Main Button (links to Shop)
		- Disclaimer - Footer disclaimer text
		- Feature 1, 2, 3 Headlines
		- Feature 1, 2, 3 Texts
		- Feature 1, 2, 3 Images
		- Settings Lock - Keep this unchanged to prevent new Site Settings from being created (Never change this)
		- Site Logo
		- Contact Email - Contact Page
		- Email Subject - Contact Page
		- About Text - First paragraph About Page
		- About Text 2 - Second paragraph About Page
		- Shipping API ID - Stripe Price ID for Ground Shipping Product
		- Product Email - Success Page
		- Product Email Subject - Success Page
	- Blog - Blog Posts
		- Title - Blog Title in Bold
		- YouTube URL - *Optional.* Must be the YouTube video id following the *youtube.com/watch?v=* from the URL. Embeds video player on page.
		- Image URL - *Optional.* Image URL to embed image on page.
		- Description - Caption that runs underneath video, image, or both.
			
*No regular developer website maintenance is required once site is deployed, as builds are triggered by code-free Stripe and Contentful changes.*
