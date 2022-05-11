/**
 * server.js
 */

const express = require("express");
const app = express();
app.use("/", (req, res, next) => {
  console.log(`Serving home page content...`);
  const homeContent = `<!doctype html>
    <html lang lang='en'>
    <head>
    <title> My First Express</title>
    </head>
    <body>
<h1>Welcome to my express first code </h1>
    </body>
    </html>
    `;
    res.send(homeContent);
});
const port = 3002;
app.listen(port, () => {
  console.log(`Web erver started on port ${port}`);
});
