// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被使用
// protected 允许在类内及继承的子类中使用


// class Person {
//   public name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
//   private sayABC() {
//     this.name;
//   }
// }


// class Teacher extends Person {
//   public sayBye() {
//     this.sayHi();
//   }
// }

// const person = new Person();
// person.name = 'dell';   // 类外
// console.log(person.name);
// person.sayHi();

// constructor的内容
// class Person {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   // 简化写法
//   constructor(public name: string) {}
// }

// new一个实例的瞬间 constructor 会被执行

// const person = new Person('dell');
// console.log(person.name);

class Person8 {
  constructor(public name: string) {}
}

class Teacher8 extends Person8 {
  constructor(public age: number) {
    super('dell');   //调用父类的构造函数
  }
}

const teacher8 = new Teacher8(28);
console.log(teacher8.age);
console.log(teacher8.name);
