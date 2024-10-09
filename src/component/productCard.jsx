
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">₹{product.price.toFixed(2)}</p>
      <button 
        onClick={() => onAddToCart(product)} // Ensure product includes an id
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-amber-300 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};


export default ProductCard;
