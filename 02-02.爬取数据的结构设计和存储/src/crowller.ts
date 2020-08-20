// ts中引入js写的文件是无法识别的，需要中间桥梁.d.ts这个翻译文件
// 安装.d.ts库，鼠标悬浮提示
import fs from "fs";
import path from "path";
import superagent from "superagent";
import cheerio from "cheerio";

interface Course {
  title: string;
  count: number;
}

interface CourseResult {
  time: number; // 时间戳
  data: Course[];
}

interface Content {
  [propName: number]: Course[]; // 时间戳 数字
}

class Crowller {
  private secret = "x3b174jsx";
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = "";

  // 提取数据
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
    return {
      time: new Date().getTime(),
      data: courseInfos,
    };
  }

  // 获取html
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }

  // 爬取数据生成json
  generateJsonContent(courseInfo: CourseResult) {
    // __dirname 当前路径， 目标路径
    const filePath = path.resolve(__dirname, "../data/course.json");
    let fileContent: Content = {};
    // 判断目标路径是否存在
    if (fs.existsSync(filePath)) {
      // 如果文件本身有内容，读出存储 （事先创建一个空course.json还未判断）
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseInfo.time] = courseInfo.data; // 新爬到的内容
    return fileContent;
  }

  async initSpiderProcess() {
    const filePath = path.resolve(__dirname, "../data/course.json");
    const html = await this.getRawHtml();
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo);
    fs.writeFileSync(filePath, JSON.stringify(fileContent)); // 只能存储stringfy
  }

  constructor() {
    this.initSpiderProcess();
  }
}

const crowller = new Crowller();
