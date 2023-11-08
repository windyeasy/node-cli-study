const ejs = require("ejs");
const path = require("path");
function compileEjs(tempName, data) {
  return new Promise((resolve, reject) => {
    // 1. 获取模板
    const absolutePath = path.resolve(__dirname, `../template/${tempName}`);
    console.log(absolutePath);
    //   使用ejs编译模板
    ejs.renderFile(absolutePath, data, (err, result) => {
      if (err) {
        console.log("编译模板失败：", err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = compileEjs;
