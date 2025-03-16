const express = require('express');
const router = express.Router();
const Menu = require('../models/menu.model');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const items = await Menu.find();
        if (items.length === 0) {
            return res.status(404).json({ message: 'No menu items found' });
        }

        const menu = items.map(item => ({
            id: item._id,
            name: item.name,
            description: item.description,
            price: item.price,
            availability: item.availability,
        }));

        res.json({ menu });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new menu item
router.post('/', async (req, res) => {
    const { name, description, price, availability } = req.body;
    const newItem = new Menu({ name, description, price, availability });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an existing menu item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price, availability } = req.body;

    try {
        const updatedItem = await Menu.findByIdAndUpdate(
            id,
            { name, description, price, availability },
            { new: true }
        );

        if (!updatedItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await Menu.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

