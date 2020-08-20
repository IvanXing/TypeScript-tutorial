// ts中引入js写的文件是无法识别的，需要中间桥梁.d.ts这个翻译文件
// 安装.d.ts库，鼠标悬浮提示
import fs from "fs";
import path from "path";
import superagent from "superagent";
import DellAnalyzer from "./dellAnalyzer";
// import LeeAnalyzer from "./leeAnalyzer";  // 组合模式插入另一套

/* analyzer的类型： 一个实例，必须有analyze方法，且传递两个参数 */
export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../data/course.json");

  // 获取html
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  /* analyzer的类型： 一个实例，必须有analyze方法，且传递两个参数 */
  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const secret = "x3b174jsx";
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyzer = new DellAnalyzer();
// const analyzer = new LeeAnalyzer();
new Crowller(url, analyzer);
