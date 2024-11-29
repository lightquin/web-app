const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler'); // Import express-async-handler
const itemController = require('../controllers/itemController');

// Use asyncHandler for each route that calls an async function
router.get('/', asyncHandler(itemController.getAllItems));
router.post('/', asyncHandler(itemController.createItem));
router.put('/:id', asyncHandler(itemController.updateItem));
router.patch('/:id', asyncHandler(itemController.partialUpdateItem));
router.delete('/:id', asyncHandler(itemController.deleteItem));

module.exports = router;
