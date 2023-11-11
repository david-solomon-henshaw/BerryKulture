

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount } from '../state';

function Cart({  onIncrease, onDecrease }) {
  // Calculate the total quantity and total price
  const cart = useSelector((state) => state.cart.cart)
  console.log("cart", cart)
  const dispatch = useDispatch()
  
  const calculateTotalCost = (cart) => {
    let total = 0;

    for (const item of cart) {
      total += item.quantity * parseInt(item.price, 10);
    }

    return total;
  };

  // Calculate the total cost
  const totalCost = calculateTotalCost(cart);


  return (
    <div className='wrapper' style={{ height: "100vh" }}>
      <div className="container mt-5">
        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <div className="alert alert-info">
            Your cart is empty. Start adding items to your cart by browsing our products.
          </div>
        ) : (
          <div>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>image</th>
                  <th>Item</th>
                  <th>Price (₦)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody text-center>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                      style={{ "height": "100px"}}
                      src={`http://localhost:1337${item.image}`} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td className="text-center" >
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(decreaseCount((item)))}
                      >
                        -
                      </button>
                      <br/>
                      {item.quantity}
                      <br/>

                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => dispatch(increaseCount((item)))}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="alert alert-success">
        Total Cost: ₦{totalCost}
      </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
