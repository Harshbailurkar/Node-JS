// 1] node runs on server - not in browser
// 2] The Console is the terminal Window

console.log("hello world");

// 3] Global Object instead of window object

// console.log(global);

// Imports in Node:

const os = require("os");
const path = require("path");
const math = require("./Math");
const { mul, sub, div } = require("./Math");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename)); // gives directory path of file
console.log(path.basename(__filename)); // gives just file name
console.log(path.extname(__filename)); // gives extension name. (here .js)

console.log(path.parse(__filename)); // gives all data(root,dir,base,ext,name)

console.log(math.add(2, 3));
console.log(math.Tavg(1, 2, 3));
console.log(mul(3, 4));
console.log(sub(4, 2));
console.log(div(9, 1));
