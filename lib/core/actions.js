const { promisify } = require("util");
const { VUE_REPO } = require("../config/repo");
const download = promisify(require("download-git-repo"));
// 创建项目处理函数
async function createProjectAction(project) {
  try {
    await download(VUE_REPO, project, { clone: true });
  } catch (err) {
    console.log(err);
    console.log("github 连接失败，请重试~");
  }
}

module.exports = {
  createProjectAction,
};
