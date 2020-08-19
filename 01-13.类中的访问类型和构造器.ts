// private, protected, public 类中的访问类型
// public 允许 在类的内外 被调用
// private 允许在类内被使用
// protected 允许在类内 及 继承的子类中使用

class Person {
  public name: string;
  public sayHi() {
    this.name;
    console.log("hi");
  }
  private sayABC() {
    this.name;
  }
}

// 继承的子类中，父类的protected可以用
class Teacher extends Person {
  public sayBye() {
    this.sayHi(); // 可以调用父类protected的东西
  }
}

// 调用部分
const person = new Person();
person.name = "dell"; // 类外调用，public类型可以直接修改
console.log(person.name);
person.sayHi();

// constructor
// new一个实例的瞬间 constructor 会被执行

class Person2 {
  // // 传统写法
  // public name1: string;
  // constructor(name: string) {
  //   this.name1 = name; // public name: string定义的属性
  // }
  // 简化写法
  constructor(public name1: string) {}
}

const person2 = new Person2("dell");
console.log(person2.name1);

// 示例
class Person8 {
  constructor(public name: string) {}
}

class Teacher8 extends Person8 {
  constructor(public age: number) {
    super("dell"); //调用父类的构造函数，传递参数
  }
}

const teacher8 = new Teacher8(28);
console.log(teacher8.age); // 28
console.log(teacher8.name); // dell
