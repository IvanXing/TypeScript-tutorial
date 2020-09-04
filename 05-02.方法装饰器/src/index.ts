// 装饰器是一个函数，在定义时，就进行了装饰，不需要实例化时才装饰


// 普通方法，target 对应的是类的 prototype
// 静态方法，target 对应的是类的构造函数

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target, key);  // key是装饰方法的名字
  // descriptor 是 对函数进行控制的 descriptor
  // descriptor.writable = true;
  descriptor.value = function() {   // 可以对原来的方法进行变更
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator          // 给类里的方法加装饰器
  getName() {
    return this.name;
  }
  // 静态方法
  // static getName2() {
  //   return '123';
  // }
}

const test = new Test('dell');
// descriptor.writable = false 的话，getName方法外部不能修改
// test.getName = () => {
//   return '123';
// }
console.log(test.getName());
