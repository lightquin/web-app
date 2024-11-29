// Import the item model
const Item = require('../models/item'); // Adjust the path as necessary
const asyncHandler = require('express-async-handler'); // For handling async errors

// @desc    Get all items
// @route   GET /items
exports.getItems = asyncHandler(async (req, res) => {
    const items = await Item.find(); // Fetch all items from the database
    res.status(200).json(items); // Send the items as a JSON response
});

// @desc    Get a single item by ID
// @route   GET /items/:id
exports.getItemById = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id); // Find item by ID
    if (!item) {
        res.status(404).json({ message: 'Item not found' }); // Handle not found
    } else {
        res.status(200).json(item); // Send the item as a JSON response
    }
});

// @desc    Create a new item
// @route   POST /items
exports.createItem = asyncHandler(async (req, res) => {
    const newItem = new Item(req.body); // Create a new item instance
    const savedItem = await newItem.save(); // Save the item to the database
    res.status(201).json(savedItem); // Send the created item as a JSON response
});

// @desc    Update an item by ID
// @route   PUT /items/:id
exports.updateItem = asyncHandler(async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the item
    if (!updatedItem) {
        res.status(404).json({ message: 'Item not found' }); // Handle not found
    } else {
        res.status(200).json(updatedItem); // Send the updated item as a JSON response
    }
});

// @desc    Delete an item by ID
// @route   DELETE /items/:id
exports.deleteItem = asyncHandler(async (req, res) => {
    const deletedItem = await Item.findByIdAndDelete(req.params.id); // Delete the item
    if (!deletedItem) {
        res.status(404).json({ message: 'Item not found' }); // Handle not found
    } else {
        res.status(204).send(); // Send a no content response
    }
});
