/*
** 类中get和set访问器
** get和set不能用同名的装饰器Decorator
*/



function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // descriptor.writable = false;
}

class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator           // 给set增加装饰器
  set name(name: string) {
    this._name = name;
  }
}

const test = new Test('dell');
test.name = 'dell lee';
console.log(test.name);
