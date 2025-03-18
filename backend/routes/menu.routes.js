import express from "express";
import Menu from "../modles/menu.model.js"; 

const router = express.Router();

// Get all menu items
router.get("/", async (req, res) => {
  try {
    const items = await Menu.find();
    if (!items || items.length === 0) {
      return res.status(404).json({ message: "No menu items found" });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// Get a single menu item by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Menu.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
});

// Add a new menu item
router.post("/", async (req, res) => {
  const { name, description, price, availability } = req.body;

  // Input validation
  if (!name || !description || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newItem = new Menu({
      name,
      description,
      price: parseFloat(price), // Ensure price is stored as a number
      availability: availability ?? true, // Default to true if not specified
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: "Error saving item: " + error.message });
  }
});

// Update an existing menu item
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, price, availability } = req.body;

  // Input validation
  if (!name || !description || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const updatedItem = await Menu.findByIdAndUpdate(
      id,
      { name, description, price: parseFloat(price), availability },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item: " + error.message });
  }
});

// Delete a menu item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Menu.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item: " + error.message });
  }
});

export default router;
