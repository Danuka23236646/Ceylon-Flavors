const Menu = require("../models/menuModel");

// Get all menu items
exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new menu item
exports.addMenu = async (req, res) => {
    const { name, description, price, image } = req.body;

    try {
        const newMenu = new Menu({ name, description, price, image });
        await newMenu.save();
        res.json(newMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an existing menu item
exports.updateMenu = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    try {
        const updatedMenu = await Menu.findByIdAndUpdate(id, { name, description, price, image }, { new: true });
        res.json(updatedMenu);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a menu item
exports.deleteMenu = async (req, res) => {
    const { id } = req.params;

    try {
        await Menu.findByIdAndDelete(id);
        res.json({ message: "Menu item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
