// 分析整个 html 写入
import { Analyzer } from "./crowller";

export default class LeeAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}
