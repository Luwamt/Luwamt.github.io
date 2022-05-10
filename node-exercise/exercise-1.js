/**
 * Exercise-1.js
 */

const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type": "text/html"});
     res.end("Hello World from exercise-1");   
    }).listen(8080);
