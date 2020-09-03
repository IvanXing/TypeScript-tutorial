///<reference path="components.ts" />

// 意思是后面的命名空间 是依赖于 components.ts 的命名空间的

// 配置 config 中的 outFile 选项
namespace Home {

  export namespace Dell {
    export const teacher: Components.user = {
      name: 'dell'
    };
  }
  
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
      new Components.Footer();
    }
  }
}
