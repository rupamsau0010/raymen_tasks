const os = require("os");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const fileType = process.argv[3].split(".")[1];

if (process.argv[2] !== ".") {
  const dirPathArgs = process.argv[2].split("/").slice(3);

  let dirPath = "";
  dirPathArgs.forEach((element) => (dirPath = dirPath + element + "/"));

  const MyDir = path.join(os.homedir(), dirPath);

  let count = 0;
  fs.readdir(MyDir, (err, files) => {
    if (!err && files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].split(".")[1] === fileType) {
          count += 1;
        }
      }
      if (count > 0) {
        console.log(chalk.green(count));
      } else {
        console.log(chalk.red(`No files found with ${process.argv[3]}`));
      }
    }
  });
} else {
  const MyDir = "../Raymen_Teacheron";
  let count = 0;
  fs.readdir(MyDir, (err, files) => {
    if (!err && files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].split(".")[1] === fileType) {
          count += 1;
        }
      }
      if (count > 0) {
        console.log(chalk.green(count));
      } else {
        console.log(chalk.red(`No files found with ${process.argv[3]}`));
      }
    }
  });
}
