const { promisify } = require("util");
const { program } = require("commander");

const { VUE_REPO } = require("../config/repo");
const execCommand = require("../utils/exec-command");
const compileEjs = require("../utils/compile-ejs");
const { writeFile } = require("../utils/write-file");
const download = promisify(require("download-git-repo"));

// 创建项目处理函数
async function createProjectAction(project) {
  try {
    // 1. 克隆项目
    await download(VUE_REPO, project, { clone: true });
    // 2. 给予提示
    // console.log(`cd ${project}`);
    // console.log("npm install");
    // console.log("npm run dev");

    // 3. 帮助执行命令
    const cmdName = process.platform === "win32" ? "npm.cmd" : "npm";
    // const cmdName = "pnpm";
    await execCommand(cmdName, ["install"], { cwd: `./${project}` });
    await execCommand(cmdName, ["run", "dev"], { cwd: `./${project}` });
  } catch (err) {
    console.log(err);
    console.log("github 连接失败，请重试~");
  }
}

// 2. 创建一个vue组件
async function createVueComponent(cpnname) {
  // 1. 获取模板
  const result = await compileEjs("appcontent.vue.ejs", {
    name: cpnname,
    lowname: cpnname.toLowerCase(),
  });
  // 2. 写入模板
  const dest = program.opts().dest || "src/components";
  await writeFile(`${dest}/${cpnname}.vue`, result);
  console.log("创建组件成功~");
}

module.exports = {
  createProjectAction,
  createVueComponent,
};
