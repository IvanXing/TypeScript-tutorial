// npm install express --save
// npm install @types/express

import express, { Request, Response } from 'express';
import router from './router';

const app = express();

// // 根路径返回
// app.get('/', (req: Request, res: Response) => {
//   res.send('hello world');
// })

// 路由提取 接口路径
app.use(router);

// 启动服务器
app.listen(7001, () => {
  console.log('server is running');
});
