import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../state';

import 'react-toastify/dist/ReactToastify.css';


const KultureJacketsCollections = ( ) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux


  const [sortType, setSortType] = useState('default'); // Default sorting type

  const filterItemsByCategory = (items) => {
    // Use the filter method to get items with category "KultureJackets"
    const kultureJackets = items.filter(item => item.attributes.category === "Kulture Jacket");
    
   // console.log(kultureJackets, "filtered function")
    return kultureJackets;
  };
  
  const sortKultureJackets = (sortingType, kultureJackets, setKultureJackets) => {
    let sortedKultureJackets = [...kultureJackets];

    if (sortingType === 'price-low-high') {
      sortedKultureJackets.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sortingType === 'price-high-low') {
      sortedKultureJackets.sort((a, b) => b.attributes.price - a.attributes.price);
    }

    setSortType(sortingType);
    setKultureJackets(sortedKultureJackets);
  };

  const  allItems = useSelector((state) => state.cart.items);
  const kultureJackets = filterItemsByCategory(allItems);
  
  console.log(kultureJackets, "Kulture Jackets Items")




 


  return (
    <section className="container py-5">
      <h2 className="mb-4">Kulture Jackets Collections </h2>


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
          <option value="price-high-low">Priproductce: High to Low</option>
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

export default KultureJacketsCollections;
