import React, { useState } from "react";
import axios from "axios";

function AddMenu() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      description,
      price: parseFloat(price),
      availability,
    };

    try {
      const response = await axios.post("/api/menu", newItem);
      console.log("Menu item added:", response.data);
      alert("Menu item added successfully!");
      // Clear the form
      setName("");
      setDescription("");
      setPrice("");
      setAvailability(true);
    } catch (error) {
      console.error("Error adding menu item:", error.message);
      alert("Failed to add menu item!");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Menu Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            className="p-2 border rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            className="p-2 border rounded w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            className="p-2 border rounded w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Availability:</label>
          <select
            className="p-2 border rounded w-full"
            value={availability}
            onChange={(e) => setAvailability(e.target.value === "true")}
          >
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
