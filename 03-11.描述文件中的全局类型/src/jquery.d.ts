// 定义全局变量 接收一个函数，返回空
// declare var $: (param: () => void) => void;

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

/*
** 函数重载写法1
*/

// 定义全局函数 $  根据参数不同，有重载机制
declare function $(readyFunc: () => void): void;   // 传入一个方法 返回空
declare function $(selector: string): JqueryInstance;  // 返回一个对象 里面有一个html方法
// new $.fn.init();的处理  new需要是一个构造函数  继续重载
// 对 对象和 类 的定义
declare namespace $ {
  namespace fn {
    class init {}
  }
}


/*
** 函数重载写法2：使用interface实现重载
*/

interface JQuery {
  (readyFunc: () => void): void;    
  (selector: string): JqueryInstance;
}

declare var $2: JQuery;