//To Avoid CallBack Hell we use Async function and promises

const fspromises = require("fs").promises;
const path = require("path");

const fileOps = (async () => {
  try {
    const data = await fspromises.readFile(
      path.join(__dirname, "Files", "starter.txt"),
      "utf8",
      console.log("reading....")
    );

    await fspromises.writeFile(
      path.join(__dirname, "Files", "start.txt"),
      " hello my name is Harsh and this is async await problem \n",
      console.log("writing....")
    );
    await fspromises.appendFile(
      path.join(__dirname, "Files", "start.txt"),
      " I am appending to the file \n",
      console.log("appending....")
    );

    await fspromises.rename(
      path.join(__dirname, "Files", "start.txt"),
      path.join(__dirname, "Files", "index.txt"),
      console.log("renaming....")
    );

    // await fspromises.unlink(path.join(__dirname, "Files", "test_2.txt"),
    //   console.log("deleting.....")
    // );    // delete the file

    let data2 = await fspromises.readFile(
      path.join(__dirname, "Files", "index.txt"),
      "utf8"
    );
    console.log(data);
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
})();
