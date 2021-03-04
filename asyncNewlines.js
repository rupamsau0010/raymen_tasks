const fs = require("fs");
const chalk = require('chalk');

fs.readFile(process.argv[2], function (err, contents) {
  if (!err && contents) {
    var lines = contents.toString().split("\n").length;
    console.log(chalk.green(lines));
  } else if(err) {
    console.log(chalk.red("No file found"));
  }
});
