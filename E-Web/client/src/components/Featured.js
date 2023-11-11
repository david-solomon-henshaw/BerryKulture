// import React from 'react';
// import k1 from '../assets/images/shrt_blk_kaftan.jpeg'; // Kaftan image
// import ag1 from '../assets/images/ag1.jpeg'; // Agbada image
// import { type } from '@testing-library/user-event/dist/type';
// import k2 from '../assets/images/black_and_white_kaftan.jpeg'; // Agbada image
// import k3 from '../assets/images/yellow_kaftan.jpeg'; // Agbada image
// import ag2 from '../assets/images/fg.jpg'; // Agbada image
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Combined collection containing both Kaftan and Agbada products
// const combinedCollection = [
//   {
//     collectionName: 'Kaftan',
//     products: [
      
//         {
//           name: "Casual Kaftan",
//           description: "A versatile and comfortable kaftan perfect for everyday style and relaxation.",
//           price: 8000,
//           image: k1
//         },
//         {
//           name: "Smart-fit Floral Kaftan",
//           description: "Elevate your fashion game with this designer kaftan featuring intricate patterns and exquisite details.",
//           price: 12000,
//           image: k2
//         },
//         {
//           name: "Yellow Striped",
//           description: "Indulge in luxury and elegance with this silk kaftan dress adorned with yellow stripes.",
//           price: 15000,
//           image: k3
//         }
      
      
//     ],
//   },
//   {
//     collectionName: 'Agbada',
//     products: [
//       {
//         name: 'Traditional Agbada',
//         description: 'Elegant traditional Agbada attire for special occasions.',
//         price: 15000,
//         image: ag1, // Agbada image
//       },
//       {
//         name: 'Royal Agbada Set',
//         description: 'Majestic and opulent, fit for royalty. Intricate embroidery, rich fabric, and regal allure. Elevate your style to a grand level.',
//         price: 25000,
//         image: ag2, // Agbada image
//       },
//       {
//         name: 'Embroidered Agbada',
//         description: 'Exquisitely embroidered Agbada for a regal look.',
//         price: 18000,
//         image: ag1, // Agbada image
//       },
//     ],
//   },
// ];

// const FeaturedProducts = ({cart,setCart}) => {
   
  
//   // const addTocart = (product) => {
//   //   const existingProductIndex = cart.findIndex((item) => item.name === product.name);

//   //   if (existingProductIndex !== -1) {
//   //     const updatedCart = [...cart];
//   //     updatedCart[existingProductIndex].quantity += 1;
//   //     updatedCart[existingProductIndex].total_price =
//   //       updatedCart[existingProductIndex].quantity * updatedCart[existingProductIndex].price;
//   //     setCart(updatedCart);
//   //   } else {
//   //     setCart((prevCart) => [
//   //       ...prevCart,
//   //       {
//   //         name: product.name,
//   //         price: product.price,
//   //         quantity: 1,
//   //         total_price: product.price,
//   //       },
//   //     ]);
//   //   }
//   //   console.log(cart)
//   // };
//   const addTocart = (product) => {
//     const existingProductIndex = cart.findIndex((item) => item.name === product.name);

//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       updatedCart[existingProductIndex].total_price =
//         updatedCart[existingProductIndex].quantity * updatedCart[existingProductIndex].price;
//       setCart(updatedCart);
//     } else {
//       setCart((prevCart) => [
//         ...prevCart,
//         {
//           name: product.name,
//           price: product.price,
//           quantity: 1,
//           total_price: product.price,
//         },
//       ]);
//     }

//     // Show a success notification
//     toast.success(`${product.name} added to the cart.`);
//   };
//   return (
//     <section className="container my-5">
//       {combinedCollection.map((collection, collectionIndex) => (
//         <div key={collectionIndex}>
//           <h2  className="text-center mb-4">Featured {collection.collectionName} Collection</h2>
//           <div className="row">
//             {collection.products.map((product, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="card mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <h5 style={{fontWeight: "900"}} className="card-title">{product.name}</h5>
//                     <p className="card-text">{product.description}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>
//                         <span className="text-primary">&#8358;{product.price.toFixed(2)}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="card-footer">
//                     <button onClick={ () => addTocart(product)} className="btn btn-primary btn-block">Add to Cart</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default FeaturedProducts;
import React from 'react'

const Featured = () => {
  return (
    <div>Featured</div>
  )
}

export default Featured