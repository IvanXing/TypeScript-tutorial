import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import router from './router';

// 问题1: express 库的类型定义文件 .d.ts 文件类型描述不准确 => npm install body-parser --save
// 问题2: 当我使用中间件的时候，对 req 或者 res 做了修改之后呢，实际上类型并不能改变。

const app = express();
// 使用 body-parser
// 先去解析html，再去使用router
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(7001, () => {
  console.log('server is running');
});
