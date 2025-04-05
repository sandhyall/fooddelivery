'use client';
import React, { useContext } from 'react';
import { StoreContext } from '../Context/page'; // Path to your context file
import Header from '../Header/page';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';
const Cart = () => {
  // Access the context, and ensure it's not null
  const context = useContext(StoreContext);

  if (!context) {
    // If the context is not available (null or undefined), render a fallback
    return <div>Loading...</div>; // You can display a loading message or something else
  }

  const { cartitem, food_list, removeFromcart } = context;

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Render cart items */}
        {Object.keys(cartitem).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          Object.keys(cartitem).map((itemId) => {
            const item = food_list.find((food) => food.id === itemId);
            if (!item) return null; // Item not found in food_list, skip rendering
            const { name, price } = item;
            const quantity = cartitem[itemId];
            return (
              <div key={itemId}>
                <p>{name}</p>
                <p>{price}</p>
                <p>{quantity}</p>
                <p>{price * quantity}</p>
                <button onClick={() => removeFromcart(itemId)}>Remove</button>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
