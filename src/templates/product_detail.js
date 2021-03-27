// import * as React from "react"
// import Layout from '../components/Layout'

// export default function ProductDetail({ data }) {
//   const node = data.stripePrice;
//   return (
//     <main>
//       <Layout>
//         <title>Product Detail</title>
//         <div className="">
//           <div className="hover:shadow-2xl mb-12 md:w-96 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={node.id}>
//             <div className="md:flex">
//               <div className="md:flex-shrink-0">
//                 <img className="flex-none md:h-48 w-full object-cover md:w-48" src={node.product.images[0]} alt={node.product.name} />
//               </div>
//               <div className="p-8">
//                 <h3 className="uppercase tracking-wide text-sm text-green-600 font-semibold">{node.product.name}</h3>
//                 <p className="mt-2 text-gray-500">${((node.unit_amount) / 100)}</p>
//                 <p className="mt-2 text-gray-500">${node.description}</p>
//                 <p className="mt-2 text-gray-500">${node.metadata.size}</p>
//                 <p className="mt-2 text-gray-500">${node.metadata.type}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </main>
//   )
// }


// export const query = graphql`
//   query($slug: String!) {
//     StripePrice(fields: { slug: { eq: $slug } }) {
//       id
//       active
//       currency
//       unit_amount
//       product {
//         id
//         name
//         images
//         metadata {
//           size
//           type
//         }
//         description
//       }
//     }
//   }
// `