/*
** 类的装饰器
*/
// 装饰器本身是一个函数，对类的修饰
// 类装饰器接受的 参数 是 构造函数
// 装饰器 通过 @ 符号来使用
// 装饰器是对 类 做修饰，定义类时 就已经执行了
// 装饰器是从下到上执行的，先定义的后执行
// 操作 constructor

// 根据条件装饰
function testDecorator1(flag: boolean) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log('dell');
      };
    };
  } else {
    return function(constructor: any) {};
  }
}

@testDecorator1(true)
class TestIt {}

const test1 = new TestIt();
(test1 as any).getName();
