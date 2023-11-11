import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../state';


const KultureShirtCollections = ({ cart, setCart }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux


  const filterItemsByCategory = (items) => {
    // Use the filter method to get items with category "KultureJackets"
    const kultureJackets = items.filter(item => item.attributes.category === "Kulture Shirt");
    
   // console.log(kultureJackets, "filtered function")
    return kultureJackets;
  };


  const  allItems = useSelector((state) => state.cart.items);
  const kultureJackets = filterItemsByCategory(allItems);
  






  // // Function to sort products based on price or recently added
  // const sortProducts = (type) => {
  //   let sortedProducts = [...products];
  //   if (type === 'price-low-high') {
  //     sortedProducts.sort((a, b) => a.price - b.price);
  //   } else if (type === 'price-high-low') {
  //     sortedProducts.sort((a, b) => b.price - a.price);
  //   } else if (type === 'recently-added') {
  //     sortedProducts.sort((a, b) => b.id - a.id);
  //   }
  //   setSortType(type);
  //   setProducts(sortedProducts);
  // };

 


  return (
    <section className="container py-5">
      <h2 className="mb-4">Kulture Shirt Collections </h2>


      {/* Sort options */}
      {/* <div className="mb-3">
        <label className="me-2">Sort by:</label>
        <select
          onChange={(e) => sortProducts(e.target.value)}
          value={sortType}
          className="form-select"
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="recently-added">Recently Added</option>
        </select>
      </div> */}

      {/* Product listing */}
      <div className="row">
        {kultureJackets.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.formats.small.url}`}  // Adjust the URL according to your Strapi setup src={product.image}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.attributes.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">&#8358;{product.attributes.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={ () =>  dispatch(addToCart( {
                      "id": product.id,
                      "name": `${product.attributes.name}`,
                      "quantity": 1,
                      "price": `${product.attributes.price}`,
                      "image": `${product.attributes.image.data.attributes.formats.small.url}`,
                  
                    }))}
                  >
                    Add to Cart
                  </button>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-secondary me-2"
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KultureShirtCollections;
