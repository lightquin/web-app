const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.patch('/:id', itemController.partialUpdateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
