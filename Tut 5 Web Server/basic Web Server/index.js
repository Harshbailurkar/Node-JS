var http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("hello world");
    fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("File not found!");
        return;
      }
      res.end(data);
    });
  })
  .listen(8080, () => console.log("server is running"));
