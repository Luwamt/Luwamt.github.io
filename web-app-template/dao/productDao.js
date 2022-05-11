/**
 * productDao.js
 */

"use strict";
//To do se ES6 class sntax
const product = require("../model/product")
const productDao= ()=>{
    const getProducts=()=>{
const products=[];
products.push(new product(1001,"Apple iphone15",1700));
products.push(new product(1001,"Samsung Android iphone15",1500));
products.push(new product(1001,"Google Pixel 11",1200));
return products;

    }
}
module.exports=productDao;