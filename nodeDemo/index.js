/**
 * index.js
 * 
 * @author Lily
 * @since 2022-05-09
 */
console.log("starting HTTP Server for hello world ...");
const http= require("http");
//Create and start an HTTPServer

http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type":"text/html"

    });
    const pageContent=`<!doctype html>
    <html lang="en"> 
    <head>
    <title> My Hello World webpage from Node.js</title>
    </head>
    <body>
    <h1> Helo World from Node.js 188</h1>
    </body>
    </html>`
    res.end(pageContent);
    //res.end("<h1>Hello World </h1>");
}).listen(8080);