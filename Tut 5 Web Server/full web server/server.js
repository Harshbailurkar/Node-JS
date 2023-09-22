const http = require("http");
const path = require("path");
const fs = require("fs");
const fspromises = require("fs").promises;
// const logEvents = require("./logEvents");
// const EventEmitter = require("events");
const PORT = process.env.PORT || 3500; // Define the port

// class Emitter extends EventEmitter {}
// //initilize object-
// const myEmitter = new Emitter();

// myEmitter.on("log", (msg, filename) => logEvents(msg, filename));

const serveFile = async (filepath, contentType, response) => {
  try {
    const rawdata = await fspromises.readFile(
      filepath,
      !contentType.includes("image") ? "utf8" : "" // for images displaying
    );
    const data =
      contentType === "application/json" ? JSON.parse(rawdata) : rawdata;
    response.writeHead(filepath.includes("404.html") ? 404 : 200, {
      "content-Type": contentType,
    });
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    );
  } catch (err) {
    console.log(err);
    // myEmitter.emit("log", `${err.name} \t ${err.message}`, "errlog.txt");
    response.statusCode = 500;
    response.end();
  }
};

//defining server:

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // myEmitter.emit("log", `${req.url} \t ${req.method}`, "reqlog.txt");
  const extension = path.extname(req.url);

  let contentType;

  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  let filepath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html") // index.html in view
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html") // index.html in subdir
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url) // all the HTML files in view
      : path.join(__dirname, req.url); //other file line img, css etc

  // makes the .html extension not require in browser
  if (!extension && req.url.slice(-1) !== "/") filepath += ".html";

  const fileExits = fs.existsSync(filepath);

  if (fileExits) {
    serveFile(filepath, contentType, res);
  } else {
    // server the 404 or redirect 301

    switch (path.parse(filepath).base) {
      case "old-page.html": // server give old-page.html even if file dosen exits
        res.writeHead(301, { Location: "/new-page.html" }); // writeHead
        res.end();
        break;

      case "www-page.html":
        res.writeHead(301, { Location: "/" });
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, "view", "404.html"), "text/html", res);
    }
  }
});

//This line must be at end
server.listen(PORT, () =>
  console.log(`server is running on port localhost:${PORT} `)
);
