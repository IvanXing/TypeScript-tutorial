
// (...args: any[]) => any 函数 每个参数都是any
// new 指的是这是一个构造函数，可以接受很多参数，每个参数都是any
// T就是一个类

function testDecorator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      // 修改构造函数
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

// 装饰器装饰过后的类
const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test('dell');
console.log(test.getName());
