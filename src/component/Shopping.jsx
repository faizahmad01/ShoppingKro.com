import React, { useEffect, useState } from 'react';
import ProductCard from "../component/productCard.jsx";
import Cart from "../component/Cart.jsx"; 

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item._id === product._id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }]; // Ensure product has id
      }
    });
    alert(`${product.name} has been added to your cart!`);
  };
  

  // Remove product from cart
  const handleRemoveFromCart = (_id) => {
    setCart(prevCart => prevCart.filter(item => item._id !== _id));
  };

  // Increase product quantity in cart
  const handleIncreaseQuantity = (_id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease product quantity in cart
  const handleDecreaseQuantity = (_id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === _id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle the buy now functionality
  const handleBuyNow = async (item) => {
    const orderData = {
      productId: item._id,  // Ensure this is the correct field from your product
      name: item.name,
      price: item.price,
      quantity: item.quantity, // Use the quantity from the cart
    };
  
    console.log("Order Data:", orderData); // Log the order data
  
    try {
      const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Purchase successful! Order ID: ${result.orderId}`);
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
      } else {
        const errorData = await response.json();
        alert(`Purchase failed: ${errorData.message}`);
        console.error("Error Data:", errorData); // Log error details
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Purchase failed. Please try again.');
    }
  };
  
  
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart 
        cart={cart} 
        onRemoveFromCart={handleRemoveFromCart} 
        onIncreaseQuantity={handleIncreaseQuantity} 
        onDecreaseQuantity={handleDecreaseQuantity} 
        onBuyNow={handleBuyNow} 
      />
    </div>
  );
};

export default Shopping;

