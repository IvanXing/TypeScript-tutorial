// npm install @types/superagent
// ts中引入js写的文件是无法识别的，需要中间桥梁.d.ts这个翻译文件
// 安装.d.ts库，鼠标悬浮提示
import superagent from "superagent";
import cheerio from "cheerio";

interface Course {
  title: string;
  count: number;
}

class Crowller {
  private secret = "x3b174jsx";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";

  getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text(); // 有两个course-desc 取第一个
      const count = parseInt(descs.eq(1).text().split("：")[1], 10);
      courseInfos.push({ title, count });
    });
    const result = {
      time: new Date().getTime(),
      data: courseInfos,
    };
    console.log(result);
  }

  async getRawHtml() {
    const result = await superagent.get(this.url);
    // result 是一个 superagent.Response 类型 点击进入 查看返回值
    // console.log(result.text);
    this.rawHtml = result.text;
    this.getCourseInfo(result.text); // 分析html
  }
  constructor() {
    this.getRawHtml(); // 获取原始html
  }
}

const crowller = new Crowller();
