const express = require('express');
const router = express.Router();

const product = require('../controller/product');

router.get('/', product.getAll);
router.get('/:id', product.getById);

module.exports = router;