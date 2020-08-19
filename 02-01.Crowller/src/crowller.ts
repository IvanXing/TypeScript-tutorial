// npm install @types/superagent
// ts中引入js是无法识别的，需要中间桥梁.d.ts这个翻译文件
import superagent from "superagent";

class Crowller {
  private secret = "x3b174jsx";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";
  async getRawHtml() {
    const result = await superagent.get(this.url);
    // result 是一个 superagent.Response 类型 点击进入 查看返回值
    // console.log(result.text);
    this.rawHtml = result.text;
  }
  constructor() {
    this.getRawHtml(); // 获取原始html
  }
}

const crowller = new Crowller();
