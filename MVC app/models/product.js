// const product = [];
const fs = require('fs');

const path = require('path');

const dirname = require('../util/path')

let p = path.join(dirname, 'data', 'products.json')

const getProductsFromFile = (cb) => {

    fs.readFile(p , (error , fileConternt) => {
        if(error){
           return cb([]);
        }
        cb(JSON.parse(fileConternt));
        
     })
} 


module.exports = class Product {
    constructor(title){
        this.title = title
    }
    
    save(){
        // product.push(this);
        getProductsFromFile((products) => {
            products.push(this);
          
                fs.writeFile(p, JSON.stringify(products) , (error) => {
                    console.log(error);
                })
        })        

    
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
      
    }
}
