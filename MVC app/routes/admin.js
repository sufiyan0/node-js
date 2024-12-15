const path = require('path');

const express = require('express');

const porductsContoller = require(('../controllers/products'));

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', porductsContoller.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', porductsContoller.postAddProducts);


module.exports = router;

