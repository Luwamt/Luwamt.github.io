/**
 * server.js
 */
const http= require("http");

http.createServer(function(requirest, reponse){
    response.writeHead(200,{
        "Content-Type": "text/html"
    });
    console.log(request.url);
    reponse.write(request.url);
    response.end();

}).listen(8080);