import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenuItems(response.data.menu);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome to Ceylon Flavors
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Menu</h2>
      {menuItems.length === 0 ? (
        <p className="text-gray-600">No menu items available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-gray-700 font-semibold">Price: ${item.price}</p>
              <p
                className={`mt-2 text-sm font-medium ${
                  item.availability ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.availability ? "Available" : "Unavailable"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;


