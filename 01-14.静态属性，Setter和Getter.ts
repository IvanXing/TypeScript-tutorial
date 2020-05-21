// getter and setter
// class Person {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name + ' lee';
//   }
//   set name(name: string) {
//     const realName = name.split(' ')[0];
//     this._name = realName;
//   }
// }

// const person = new Person('dell');
// console.log(person.name);
// person.name = 'dell lee';
// console.log(person.name);


// 单例模式 一个类只允许生成一个实例
class Demo {
  // 创建一个instance私有属性挂在Demo上
  private static instance: Demo;

  private constructor(public name: string) {}

  // static是把方法直接挂在类上，不需要实例化就可调用
  // new一个实例赋值给instance再返出去
  static getInstance() {
    if (!this.instance) {  // 保证单例，有就不执行new，是否null or undefined
      this.instance = new Demo('dell lee');
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);
