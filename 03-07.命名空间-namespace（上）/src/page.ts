/*
** 编译后避免生成太多全局变量，并且只暴露Page
** 模块化
*/

namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Header';
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Content';
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Footer';
      document.body.appendChild(elem);
    }
  }

  export class Page {   // 编译后  Home.Page = Page; 会通过命名空间暴露出去
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
