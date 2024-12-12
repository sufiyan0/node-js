const path = require("path")
const rootdir = require('../utils/path');

const express = require("express");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    // console.log("Hello from the products middleware" , adminData.products);
    // res.sendFile(path.join(rootdir, "views", "shop.html"))
    res.render('shop', {
        prods: adminData.products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: adminData.products.length > 0,
        activeShop: true,
        productCSS: true
    })
});


module.exports = router