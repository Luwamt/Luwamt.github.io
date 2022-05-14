/**
 * number.js
 */
 console.log("Server running!");
const express= require("express");
const { listen } = require("express/lib/application");
const app= express();

app.set('view engine', 'pug'); // this checks the view folder if render is called


// get request from localhost:9000/
app.get('/number.js', function(req, res){

  var q= req.query;
  var n1= parseInt(q.num1);
  var n2= parseInt(q.num2);
  var operation= q.operation;

  var result;
});
//const port =9000;
app.listen(port, (req,res)=>{
    console.log("Server running! in 9000");
});
