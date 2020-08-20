// ts中引入js写的文件是无法识别的，需要中间桥梁.d.ts这个翻译文件
// 安装.d.ts库，鼠标悬浮提示
import fs from "fs";
import path from "path";
import superagent from "superagent";
import DellAnalyzer from "./dellAnalyzer";

class Crowller {
  private filePath = path.resolve(__dirname, "../data/course.json");
  private secret = "x3b174jsx";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";

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

  constructor(private analyzer: any) {
    this.initSpiderProcess();
  }
}

const analyzer = new DellAnalyzer();
const crowller = new Crowller(analyzer);
