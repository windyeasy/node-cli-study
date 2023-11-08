const { program } = require("commander");
function helpOpts() {
  // 1. 处理版本
  const version = require("../../package.json").version;
  program.version(version, "-v --version");

  //   2. 增强其他的options操作
  program.option("-w --why", "a why cli program~");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如：-d src/components",
  );

  // 3. 添加额外帮助文档
  program.on("--help", () => {
    console.log(""); // 加一个换行
    console.log("others:");
    console.log("  other help one!");
    console.log("  other help two!");
  });
}

module.exports = {
  helpOpts,
};
