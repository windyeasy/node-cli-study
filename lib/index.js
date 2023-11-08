#!/usr/bin/env node

const { program } = require("commander");
const { helpOpts } = require("./core/help-options");
const { createProjectAction, createVueComponent } = require("./core/actions");

helpOpts();

// 1. 添加创建vue模板功能
program
  .command("create <project> [...others]")
  .description("create vue project into a folder, 比如studycli create airbnb")
  .action(createProjectAction);

// 2. 添加创建模板功能
program
  .command("appcpn <cpnname> [...others]")
  .description(
    "appcpn vue component template, 比如：studycli appcnp NavBar.vue -d src/components",
  )
  .action(createVueComponent);

// 解析参数
program.parse(process.argv);
// 放在后可以解析到参数在执行
// console.log(program.opts().dest);
