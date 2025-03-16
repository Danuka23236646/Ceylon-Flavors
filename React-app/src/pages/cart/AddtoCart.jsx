import React, { useState } from 'react'
import { MinusIcon, PlusIcon, TrashIcon, ArrowRightIcon } from 'lucide-react'
// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: 'Vegetable Salad',
    description: 'Fresh vegetable salad',
    price: 15.69,
    quantity: 1,
    selected: true,
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/bA3JsGop2oJqRMWeL6VRJM/Screenshot_2025-03-16_170732.png',
  },
  {
    id: 2,
    name: 'Vegetable Salad',
    description: 'Fresh vegetable salad',
    price: 15.69,
    quantity: 1,
    selected: true,
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/bA3JsGop2oJqRMWeL6VRJM/Screenshot_2025-03-16_170732.png',
  },
  {
    id: 3,
    name: 'Vegetable Salad',
    description: 'Fresh vegetable salad',
    price: 15.69,
    quantity: 1,
    selected: false,
    image:
      'https://uploadthingy.s3.us-west-1.amazonaws.com/bA3JsGop2oJqRMWeL6VRJM/Screenshot_2025-03-16_170732.png',
  },
]
function AddToCart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item,
      ),
    )
  }
  const toggleSelection = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item,
      ),
    )
  }
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }
  // Calculate subtotal and total
  const subtotal = cartItems.reduce(
    (sum, item) => (item.selected ? sum + item.price * item.quantity : sum),
    0,
  )
  const total = subtotal // In this example, total equals subtotal since there's no tax or shipping
  return (
    <div
      id="addtocart"
      className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Cart Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold">
          Your <span className="text-emerald-500">Cart</span>
        </h1>
      </div>
      {/* Cart Items */}
      <div className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center p-4 gap-4">
            {/* Selection Circle */}
            <div
              className="w-6 h-6 rounded-full border-2 flex-shrink-0 cursor-pointer flex items-center justify-center"
              onClick={() => toggleSelection(item.id)}
              style={{
                borderColor: item.selected ? '#ff6b6b' : '#d1d5db',
                backgroundColor: item.selected ? '#ff6b6b' : 'transparent',
              }}
            >
              {item.selected && (
                <div className="w-3 h-3 bg-white rounded-full"></div>
              )}
            </div>
            {/* Product Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Product Details */}
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            {/* Price */}
            <div className="font-semibold text-gray-800 w-20 text-right">
              ${item.price.toFixed(2)}
            </div>
            {/* Quantity Controls */}
            <div className="flex items-center bg-gray-100 rounded-md">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 text-pink-500 hover:bg-gray-200 rounded-l-md"
              >
                <MinusIcon size={16} />
              </button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 text-pink-500 hover:bg-gray-200 rounded-r-md"
              >
                <PlusIcon size={16} />
              </button>
            </div>
            {/* Delete Button */}
            <button
              onClick={() => removeItem(item.id)}
              className="text-pink-500 hover:text-pink-700"
            >
              <TrashIcon size={20} />
            </button>
          </div>
        ))}
      </div>
      {/* Cart Total and Checkout */}
      <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0 w-full md:w-auto">
          <h2 className="font-medium text-gray-700 mb-2">Cart Total</h2>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition flex items-center justify-center">
          Proceed To Checkout
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
export default AddToCart