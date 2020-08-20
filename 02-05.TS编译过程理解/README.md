- ts-node 把文件编译成 js 再执行
- tsc 编译成 js 文件
- tsc 的时候，会结合 tscnfig.json 文件进行控制

- tsconfig 中 ==> "outDir": "./build", 把编译后的文件放到 build 文件夹中

- "build": "tsc -w" 改动自动编译 -watch 参数

- npm install nodemon -D
- nodemonConfig 配置忽略文件夹

```js
"scripts": {
  "build": "tsc -w",
  "start": "nodemon node ./build/crowller.js"
}
// 先运行 yarn build  同时运行 yarn start
// tsc -w监测ts文件修改，并生成js，start监控js，比ts-node每次运行方便些
// 但是现在要开两个命令行工具
```

- 同时并行执行多个命令工具
- npm install concurrently -D
