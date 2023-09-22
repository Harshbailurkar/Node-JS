console.log("testing");
// in terminal :
/* 
  npm i nodemon -g : it monitors you file and when you save it automatically restart the server


  To create project:
                  npm init -y
  Add pakages/ dependencies:

        npm i date-fns  // for date. this will add as dependencies in json file

  create .gitignore file and write node_modules ( this will skip the module folder when we push on git or deploy before deployment write npm install and delete node_module folder)

 npm i nodemon -D // this will save nodemon as dev dependencies
 write this inside script in json file and delete previous one:
 "start": "node index",
 "dev": "nodemon index"

 now you can run the program by npm run dev

*/

const { format } = require("date-fns");

console.log(format(new Date(), "dd/MM/yyyy\t HH:mm:ss"));

/* npm i uuid : allows us to generate id for diferent entries
 */

const { v4: uuid } = require("uuid");

console.log("first id" + uuid());
console.log("second Id " + uuid());

// you can use uuid as:
// const uuid = require("uuid");
// console.log(uuid.v4());
