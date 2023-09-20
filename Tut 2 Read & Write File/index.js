const fs = require("fs");

fs.readFile("./Files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  // before adding 'utf8' as parameter
  //console.log(data); //<Buffer 48 69 20 49 20 61 6d 20 48 61 72 73 68 2e>
  //console.log(data.toString());

  // after adding 'utf8' as parameter
  console.log(data);
});

console.log("Hello....");
// Node js will go read code from line1. if it found reading file , it will read it but instead of stopping there it will process next code( line Async await in JS) and ones reading process is over then it will process that read code.

// instade of hardcoding the path of file  just import path.(recommended)
const path = require("path"); //import path

fs.readFile(
  path.join(__dirname, "Files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// exits on uncought errors just past this code from documentation:

// fs.readFile("./Files/app.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error :" + err);
  process.exit(1);
});

//To write files

fs.writeFile(
  path.join(__dirname, "Files", "replay.txt"), // takes 3 args 1]path 2] content that you
  // want to write and 3] call back function that handel error
  // here new file will be created if file dosent exits.
  "Nice To meet You",
  (err) => {
    if (err) throw err;
    console.log("Wite Complete.........");
  }
);

// Write file will be over right on exitsing data

//Append File (Upadte the file)

fs.appendFile(
  path.join(__dirname, "Files", "test.txt"),
  "\n\tTesting append",
  (err) => {
    if (err) throw err;
    console.log("Append Complete.........");
  }
);

//It will Write in file without erasing the existing Content. it will append on last
// it will also create a file if file not exits

/// You can also put the appendFile inside callBack function of writeFile. This will ensure that the file that you want to append is already exits.

fs.writeFile(
  path.join(__dirname, "Files", "test2.txt"),
  "Nice To meet You",
  (err) => {
    if (err) throw err;
    console.log("Wite P2 Complete.........");

    fs.appendFile(
      path.join(__dirname, "Files", "test2.txt"),
      "\n\tTesting append",
      (err) => {
        if (err) throw err;
        console.log("Append p2 Complete.........");
      }
    );
  }
);

//Rename File
fs.rename(
  path.join(__dirname, "Files", "test2.txt"),
  path.join(__dirname, "Files", "test_2.txt"),
  (err) => {
    if (err) throw err;
    console.log("Rename Complete.........");
  }
);

//deleting the file

// fs.unlink(path.join(__dirname, "files", "test_2.txt"), (err) => {
//   if (err) throw err;
//   console.log("deleting.......");
// });

// here because of Node Js Async await behaviour. if rename file, append file, write file at a ame time then, most time rename file will execute first. Hence it will rename the file but after that if write, append file is execute it will create one again the file that we rename. hence it appers that rename creates a new file with new name but that not the case

// Hence we rename file inside a callback function.

fs.writeFile(
  path.join(__dirname, "Files", "test2.txt"),
  "Nice To meet You",
  (err) => {
    if (err) throw err;
    console.log("Wite P2 Complete.........");

    fs.appendFile(
      path.join(__dirname, "Files", "test2.txt"),
      "\n\tTesting append",
      (err) => {
        if (err) throw err;
        console.log("Append p2 Complete.........");

        fs.rename(
          path.join(__dirname, "Files", "test2.txt"),
          path.join(__dirname, "Files", "test_2.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename Complete.........");
          }
        );
      }
    );
  }
);

// this will create a callback hell hence we use call back promises
//we will see the in next file
