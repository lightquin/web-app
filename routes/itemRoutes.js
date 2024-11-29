const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAllItems);
router.post('/add', itemController.addItem);
router.post('/update', itemController.updateItem);
router.delete('/delete/:id', itemController.deleteItem);

module.exports = router;