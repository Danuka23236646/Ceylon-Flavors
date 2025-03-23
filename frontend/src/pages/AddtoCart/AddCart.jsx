import React, { useState } from 'react';
import { MinusIcon, PlusIcon, TrashIcon, ArrowRightIcon } from 'lucide-react';

function AddCart() {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Function to add items to the cart
   * If an item already exists, it increases its quantity
   * Otherwise, it adds the item to the cart
   */
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  /**
   * Function to update item quantity in the cart
   * Prevents quantity from going below 1
   */
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  /**
   * Function to remove an item from the cart
   */
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  /**
   * Calculate total price of selected cart items
   */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cart Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Your <span className="text-emerald-500">Cart</span></h1>
      </div>
      {/* Cart Items */}
      <div className="divide-y divide-gray-200">
        {cartItems.length === 0 ? (
          <p className="p-6 text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center p-4 gap-4">
              {/* Product Image */}
              <div className="w-20 h-20 rounded overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              {/* Product Details */}
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              {/* Quantity Controls */}
              <div className="flex items-center bg-gray-100 rounded-md">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 text-pink-500 hover:bg-gray-200 rounded-l-md">
                  <MinusIcon size={16} />
                </button>
                <span className="px-3 py-1">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 text-pink-500 hover:bg-gray-200 rounded-r-md">
                  <PlusIcon size={16} />
                </button>
              </div>
              {/* Remove Item Button */}
              <button onClick={() => removeItem(item.id)} className="text-pink-500 hover:text-pink-700">
                <TrashIcon size={20} />
              </button>
            </div>
          ))
        )}
      </div>
      {/* Cart Total and Checkout */}
      <div className="p-6 bg-gray-50 flex justify-between items-center">
        <h2 className="font-medium text-gray-700">Total: ${subtotal.toFixed(2)}</h2>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition flex items-center">
          Proceed To Checkout <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default AddCart;