/**
 * server.js
 */
console.log(`Starting HttpServer on port 8080..`);
const http= require("http");
const dt= require("./mydateApp");

http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.write(`the date and time are currently: ${dt.myDate()}`);
    res.end();
}).listen(8080);