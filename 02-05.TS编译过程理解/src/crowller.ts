import fs from "fs";
import path from "path";
import superagent from "superagent";
import DellAnalyzer from "./dellAnalyzer";

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, "../data/course.json");

  // 获取html
  private async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  private writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }

  private async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const secret = "x3b174jsx";
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

// const analyzer = new DellAnalyzer();
// 单例模式用法
const analyzer = DellAnalyzer.getInstance();
new Crowller(url, analyzer);

// private只允许 new实例，不允许外部调用
