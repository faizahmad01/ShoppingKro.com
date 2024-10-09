// Cart.jsx
import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity, onBuyNow }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">Cart ({cart.length} items)</h2>
      <ul>
        {cart.map((item) => (
          <li key={item._id} className="flex justify-between items-center mb-6"> {/* Changed to mb-6 for increased spacing */}
            <span>{item.name}</span>
            <div className="flex items-center">
              <button 
                onClick={() => onDecreaseQuantity(item._id)} 
                className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button 
                onClick={() => onIncreaseQuantity(item._id)} 
                className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
              >
                +
              </button>
              <button 
                onClick={() => onRemoveFromCart(item._id)} 
                className="ml-4 text-red-500 hover:underline"
              >
                Remove
              </button>
              <button 
                onClick={() => onBuyNow(item)} 
                className="ml-4 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
