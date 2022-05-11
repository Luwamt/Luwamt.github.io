/**
 * calculate.js
 */

const express= require("express");
const app =express();
// this checks the view folder if render is called
app.set("view engine","ejs");

// get request from localhost:3000/
app.get("/calculator.js",(req, res)=>{

var q = req.query;
var n1 =parseFloat(q.num1);
var n2 =parseFloat(q.num2);
var operation= q.operation;

var result;

if(operation=='add'){
    result=n1+n2;
}else if(operation=='subtract'){
    result=n1-n2;
}else if(operation=='multiply'){
    result=n1*n2;
}else{
    result=n1/n2;
}

res.render('resultPage',{answer:result});

});

const port =3000;
app.listen(port,(req,res)=>{
    console.log(`server runnnig in port ${port}`)
});

// add the numbers
// app.get("/add/:num1/:num2",(req,res)=>{
// var n1 =parseFloat(req.params.num1);
// var n2 =parseFloat(req.params.num2);
// var sum= n1+n2;
// res.render("add" ,{number: sum});
// })
 //subtract the numbers
// app.get("/sub/:num1/:num2",(req,res)=>{
//     var n1 =parseFloat(req.params.num1);
//     var n2 =parseFloat(req.params.num2);
//     var sum= n1-n2;
//     res.render("add" ,{number: sum});
//     })
//     //multiply the numbers
//     app.get("/mult/:num1/:num2",(req,res)=>{
//         var n1 =parseFloat(req.params.num1);
//         var n2 =parseFloat(req.params.num2);
//         var sum= n1*n2;
//         res.render("add" ,{number: sum});
//         });
//         //divide the numbers
//         app.get("/div/:num1/:num2",(req,res)=>{
//             var n1 =parseFloat(req.params.num1);
//             var n2 =parseFloat(req.params.num2);
//             var sum= n1/n2;
//             res.render("add" ,{number: sum});
//             });


