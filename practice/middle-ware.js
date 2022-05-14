/**
 * middle-ware.js
 */

const express=require('express');
const bodyParser=require('body-parser');
// const res = require('express/lib/response');
// const req = require('express/lib/request');

const app =express();

const jsonParser= bodyParser.json();
const urlencodedParser=bodyParser.urlencoded({extended: false});

app.post('/login',urlencodedParser, function(req,res){
    res.send('welcome,'+ req.body.username)
})
app.post('/api/users'+ jsonParser,()=>{
    res.send('hellow'+ req.body)
    console.log(req.body)
})
const port =2000;
app.listen(port, ()=>{
    console.log(`server runing ${port}`)
})