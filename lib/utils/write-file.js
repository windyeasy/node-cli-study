const fs = require("fs");

function writeFile(path, content) {
  console.log(path);
  return fs.promises.writeFile(path, content);
}

module.exports = {
  writeFile,
};
