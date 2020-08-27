/*
** getter and setter
** 保护私有变量
*/

class Person1 {
  constructor(private _name: string) {}
  get name() {
    return this._name + " lee";
  }
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = realName;
  }
}

const person1 = new Person1("dell");
// person1._name 类外无法调用
console.log(person1.name); // get
person1.name = "dell lee"; // set
console.log(person1.name);

/*
** ============单例模式代码=====================
** 单例模式 ==> 一个类只允许生成一个实例，只能new一次，存储起来
*/ 

class Demo {
  // 创建一个instance私有属性挂在Demo上，Demo属性的
  // 保证单例，有就不执行new，instance是否null or undefined
  private static instance: Demo;

  // new 要调用 constructor，设置为私有，就不能new
  private constructor(public name: string) {}

  /*
  ** static: 是把方法直接挂在类上，不需要实例化就可调用
  */
  // new一个实例赋值给instance再返出去
  static getInstance() {
    // 有没有instance Demo
    if (!this.instance) {
      // 此时的new可以调用类内的 constructor
      this.instance = new Demo("dell lee");
    }
    // 返回创建的Demo实例
    return this.instance;
  }
}

// demo1 === demo2
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1.name);
console.log(demo2.name);


// // 不希望出现可以实例化多个
// const xxx = new Demo();
// const yyy = new Demo();
