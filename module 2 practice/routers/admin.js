const express = require('express');
const path = require('path');
const rootdir = require('../utils/path');


const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
    // console.log("Hello from the add-product middleware");
    // res.send('<form action="/admin/product" method="POST"><input name="title" type="text" placeholder="Title"/><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(rootdir, "views", "add-product.html"))
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });

  });
  
  router.post('/add-product', (req , res , next) => {
    // console.log(req.body);
    products.push({title : req.body.title});
    res.redirect('/');
    
  
  })


exports.routes = router
exports.products = products
