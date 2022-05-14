/**
 * app.js
 */

const express = require('express');

const app =express();

app.use((req,res,next)=>{
    console.log("This is always fun")
    next();
});
app.use('/add-product',(req,res,next)=>{
    console.log('In the Middle ware!');
    res.send(`<h1>The "Add product" Page</h1>`);
});

app.use('/',(req,res,next)=>{
    console.log("In another middle ware");
    res.send(`<h1>Hello from Express</h1>`);

})

app.listen(3000,()=>{
    console.log('server running in 3000')
});
