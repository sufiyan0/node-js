const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const porductsContoller = require('../controllers/products')

const router = express.Router();

router.get('/', porductsContoller.getProducts );

module.exports = router;
