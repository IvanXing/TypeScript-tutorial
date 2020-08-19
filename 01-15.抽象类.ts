// readonly类属性修饰符

class Person10 {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const person10 = new Person10("Dell");
// person10.name = 'hello'; // readonly报错
console.log(person10.name);

// 抽象类  提取图像类公共部分
// 抽象类只能被继承，不能被直接实例化

abstract class Geom {
  width: number;
  getType() {
    return "Gemo";
  }
  abstract getArea(): number; // abstract抽象方法，子类需要具体实现
}

// 抽象类的实现类
class Circle extends Geom {
  // 子类继承了抽象类，需要实现抽象类里没有实现的抽象方法
  getArea() {
    return 123;
  }
}
class Square {}
class Triangle {}

// ========================

// 接口
interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

interface Driver {
  name: string;
  age: number;
}

const teacher = {
  name: "dell",
  teachingAge: 3,
};

const student = {
  name: "lee",
  age: 18,
};

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

// getUserInfo(teacher);
// getUserInfo(student);
