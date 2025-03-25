
const express = require('express');
const router = express.Router();
const home = require('../controller/home')



router.get('/', home.gethomePage)
router.get('/add-product', home.createProduct)
router.get('/products', home.getProducts)
router.post('/products', home.postProduct)
router.post('/delete-product', home.deleteProduct)

module.exports = router