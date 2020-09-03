import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './router';

/*
** 1. 类型描述不准确的问题 => 继承扩展
** 2. 中间件类型扩展问题 => 类型融合
*/

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

/*
** custom.d.ts文件中 类型融合，扩充一个 teacherName 属性
*/
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'dell';
  next();
});

app.use(router);

app.listen(7001, () => {
  console.log('server is running');
});
