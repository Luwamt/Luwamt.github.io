/**
 * server.js
 */

const express =require('express');

const app =expres();
app.get('/',(req,res)=>{
    var sql=require("mysql");
    //config for your databse

    var config={
        user:'root',
        password:'rootsq',
        server:'localhost',
        database:'restdb',
        options:{trustServiceCertificate:true}
    };
    //connect to your database
    sql.connect(config,(err)=>{
        if(err)
        console.log(err);
        //create request object
        var request=new sql.Request();
        //query to the database and get the records
        request.query('select * from aliens', (err,recordset)=>{
            if(err) console.log(err);
            //send records as a response
            res.send(recordset);
        });
    });
});

var server=app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})