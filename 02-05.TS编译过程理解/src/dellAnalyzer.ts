// 单例模式，类不能被外部实例化，变成私有的constructor

import fs from "fs";
import cheerio from "cheerio";
import { Analyzer } from "./crowller";

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

export default class DellAnalyzer implements Analyzer {
  // 单例模式，注意调用方法
  private static instance: DellAnalyzer;

  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return DellAnalyzer.instance;
  }

  // 提取数据
  private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $(".course-item");
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const descs = $(element).find(".course-desc");
      const title = descs.eq(0).text();
      const count = parseInt(descs.eq(1).text().split("：")[1], 10);
      courseInfos.push({ title, count });
    });
    return {
      time: new Date().getTime(),
      data: courseInfos,
    };
  }

  // 爬取数据生成json
  private generateJsonContent(courseInfo: CourseResult, filePath: string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    fileContent[courseInfo.time] = courseInfo.data; // 新爬到的内容
    return fileContent;
  }

  public analyze(html: string, filePath: string) {
    const courseInfo = this.getCourseInfo(html);
    const fileContent = this.generateJsonContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }

  // 单例模式 私有constructor
  private constructor() {}
}
