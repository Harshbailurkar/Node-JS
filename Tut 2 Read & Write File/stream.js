//used if there it lot of data to read,write. and we want the write/read at ones not in pieces format.
// it is more efficent

const fs = require("fs");

const rs = fs.createReadStream("./Files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./Files/lorem-2.txt");

// ws.write("are vedya bat ka grip nikalke sidha bat apane ......");

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
