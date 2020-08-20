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

// DellAnalyzer也得遵循 Analyzer类型，要求有analyze方法，返回一个字符串
export default class DellAnalyzer implements Analyzer {
  // 提取数据
  private getCourseInfo(html: string) {
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

  // 爬取数据生成json
  generateJsonContent(courseInfo: CourseResult, filePath: string) {
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
}
