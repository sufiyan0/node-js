const product = require('../models/product')
const Product = require('../models/product')


exports.gethomePage = (req, res,next) => {
    res.render('home')
}


exports.createProduct = (req, res,next) => {
    res.render('add-product')
}


exports.postProduct = (req, res,next) => {
    const { name, description, image, price } = req.body;
    Product.create({
        name: name,
        price: price,
        imageUrl: image,
        description: description,
    })
    .then((result) => {
        console.log("Product added successfully ");
        debugger
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect('/')
}

exports.getProducts = (req, res,next) => {
    Product.findAll()
        .then((products) => {
            res.render('products', { products: products });
            console.log(products)
        })
        .catch((err) => {
            console.log(err);
        });
}


exports.deleteProduct = (req, res,next) => {
    const prodId = req.body.productId;
    Product.findByPk(prodId)
    .then(product => {
        return product.destroy();
    }).then(result => {
        res.redirect('/products')
    })
}



