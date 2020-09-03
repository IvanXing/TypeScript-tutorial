import { Router, Request, Response } from 'express';
import Crowller from './crowller';
import DellAnalyzer from './dellAnalyzer';

const router = Router();

// 增加登录，防止恶意攻击，爬取代码体积变大
router.get('/', (req: Request, res: Response) => {
  res.send(`
    <html>
      <body>
        <form method="post" action="/getData">
          <input type="password" name="password" />
          <button>提交</button>
        </form>
      </body>
    </html>
  `);
});

// 改成post
router.post('/getData', (req: Request, res: Response) => {
  // 初始状态req.body是没有的，需要安装 body-parser
  if (req.body.password === '123') {
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const analyzer = DellAnalyzer.getInstance();
    new Crowller(url, analyzer);
    res.send('getData Success!');
  } else {
    res.send('password Error!');
  }
});

export default router;
