(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"n+kD":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("Wbzz"),c=a("F6po");t.default=function(e){var t=e.data,a={name:t.stripePrice.product.name,description:t.stripePrice.product.description,id:t.stripePrice.id,price:t.stripePrice.unit_amount,currency:"USD",image:t.stripePrice.product.images[0],size:t.stripePrice.product.metadata.size},l=Object(c.b)(),s=l.addItem,m=l.cartDetails,r=l.setItemQuantity;return t.stripePrice.id===t.contentfulSiteSettings.shippingApiId?n.createElement("div",null):n.createElement("div",null,n.createElement("title",null,a.name),n.createElement("main",{className:"my-8"},n.createElement("div",{className:"container mx-auto px-6"},n.createElement("div",{className:"flex justify-between items-center pb-3"},n.createElement("p",{className:"text-2xl font-bold"}),n.createElement(i.a,{to:"/shop"},n.createElement("div",{className:"modal-close cursor-pointer z-50"},n.createElement("svg",{className:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},n.createElement("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}))))),n.createElement("div",{className:"md:flex md:items-center"},n.createElement("div",{className:"w-full md:w-1/2"},n.createElement("img",{className:"h-full w-full rounded-md object-cover max-w-lg mx-auto",src:a.image,alt:a.name})),n.createElement("div",{className:"w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2"},n.createElement("h3",{className:"text-gray-700 uppercase font-bold text-lg"},a.name),n.createElement("span",{className:"text-gray-500 mt-3"},"$",a.price/100),n.createElement("hr",{className:"my-3"}),n.createElement("div",{className:"mt-2"},n.createElement("label",{className:"text-gray-700 text-sm"},a.description),n.createElement("div",{className:"flex items-center mt-1"},n.createElement("span",{className:"text-gray-700 text-lg"},"Size: ",a.size))),n.createElement("div",{className:"flex items-center mt-6"},n.createElement("button",{className:"px-8 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-500 focus:outline-none focus:bg-green-500",onClick:function(){var e;s(a),e={name:"Ground Shipping",description:"Standard Ground Shipping",id:t.contentfulSiteSettings.shippingApiId,price:100*t.contentfulSiteSettings.shippingCost,currency:"USD",image:"https://files.stripe.com/links/MDB8YWNjdF8xSUlrY3FJNkNmRUNFS3dnfGZsX3Rlc3RfaGlDbEdXQ0s1QmgyQ0s4WDEyTnlkYXNS00dozCyHTS"},t.contentfulSiteSettings.shippingApiId in m||s(e),r(t.contentfulSiteSettings.shippingApiId,1),Object(i.c)("/cart")}},"Add to Cart")))))))}}}]);
//# sourceMappingURL=component---src-pages-products-stripe-price-product-name-js-02bfadcf5c0a4501ec2d.js.map