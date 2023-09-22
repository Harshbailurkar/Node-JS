const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fspromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const datetime = `${format(new Date(), "yyyyMMdd\t HH:mm:ss")}`;
  const logItems = `${datetime}\t ${uuid()} \t ${message}\n`;
  console.log(logItems);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fspromises.mkdir(path.join(__dirname, "logs"));
    }
    //  for testing
    await fspromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItems
    );
    let read = await fspromises.readFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      "utf8"
    );
    console.log(read);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
