const fs = require("fs");

//Sync call
//file name and data
// if file exists, it will be overwritten
//if file does not exist, it will be created
fs.writeFileSync("./Files/text.text", "hey there!");

//Async call
fs.writeFile("./Files/text1.text", "hey there!", (err) => {
  if (err) {
    console.log(err);
  }
});
//Sync call
const result = fs.readFileSync("./Files/text.text", "utf-8");

console.log(result);
//Async call its return type is void. it always require callback function
fs.readFile("./Files/text.text", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

fs.appendFileSync("./Files/text.text", "hello world");
fs.appendFile(
  "./Files/text.text",
  new Date().getDate().toLocaleString(),
  (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  }
);

fs.cp("./Files/text.text", "./Files/text2.text", (err) => {
  if (err) {
    console.log(err);
  }
});
//to delete file
// fs.unlink("./Files/text2.text", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

console.log(fs.Stats("./Files/text.text"));

fs.mkdir("./Files/1", (err) => {
  if (err) {
    console.log(err);
  }
});
fs.mkdir("./Files/1/2", (err) => {
  if (err) {
    console.log(err);
  }
});
