/**
 * bodyparser.js
 */
const express=require("express");
const app = express();

const bodyparser= require('body-parser');

app.use(bodyparser.urlencoded());




app.use("/add-product",(req,res,next)=>{
    console.log('In the middle ware!');

    res.send(`<form action="/product" method="post">
    <input name="title"> <button type="submit">Submit</button></form>`);
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.send(req.body)
    //res.redirect('/');
})
app.use("/",(req,res,next)=>{
    console.log('Hello express!');
    res.send("Hello Robiel")
    next();
});
app.listen(3001,()=>{
    console.log('server running in 3001')
});
