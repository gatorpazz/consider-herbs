// import React from 'react'
// import { graphql, useStaticQuery } from "gatsby"

// export const PureProductDetail = ({ node }) => (
//   <div className="">
//       <div className="hover:shadow-2xl mb-12 md:w-96 mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden" key={node.id}>
//         <div className="md:flex">
//           <div className="md:flex-shrink-0">
//             <img className="flex-none md:h-48 w-full object-cover md:w-48" src={node.product.images[0]} alt={node.product.name} />
//           </div>
//           <div className="p-8">
//             <h3 className="uppercase tracking-wide text-sm text-green-600 font-semibold">{node.product.name}</h3>
//             <p className="mt-2 text-gray-500">${((node.unit_amount) / 100)}</p>
//             <p className="mt-2 text-gray-500">${node.description}</p>
//             <p className="mt-2 text-gray-500">${node.metadata.size}</p>
//             <p className="mt-2 text-gray-500">${node.metadata.type}</p>
//           </div>
//         </div>
//       </div>
//   </div>
// )

// const ProductDetail = ({ props }) => {
//   return <PureProductDetail node={props.data.} />
// }

// export default ProductDetail;