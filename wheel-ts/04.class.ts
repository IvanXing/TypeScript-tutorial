// 类：定义了一切事物的抽象特点
// 对象：类的实例 new
// OOP：封装 继承 多态

// npm install -g ts-node
// ts-node class.ts

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`;
    }
}

const snake = new Animal('huluwa');
console.log(snake.run())


class Dog extends Animal {
    bark() {
      return `${this.name} is barking`
    }
}
  
const xiaobao = new Dog('xiaobao')

// 方法的重写
// 子类的构造函数中必须使用super()调用父类的构造方法

class Cat extends Animal {
    constructor(name) {
      super(name)
      console.log(this.name)
    }
    run() {
      return 'Meow, ' + super.run()    // 调用父类方法
    }
}
  
const maomao = new Cat('maomao')


// 修饰符  
// 默认都是public   
// private  
// protected 子类可以访问属性
// readonly 只读


// 静态属性，静态方法，不需要实例化就可以调用
// 类和实例没有太大关系的部分
class Animal2 {
    name: string;
    // 静态属性
    static categoies: string[] = ['mammal', 'bird']
    // 静态方法
    static isAnimal(a) {
      return a instanceof Animal
    }
    constructor(name: string) {
      this.name = name
    }
    run() {
      return `${this.name} is running`
    }
  }
  
  console.log(Animal2.categoies)
  const snake2 = new Animal('lily')
  console.log(Animal2.isAnimal(snake2))



  // 接口对类的一部分行为进行抽象
  // 不同类有共有的特性 => 提取成接口 implements

  interface Radio {
    switchRadio(): void;
  }
  
  interface Battery {
    checkBatteryStatus();
  }
  interface RadioWithBattery extends Radio {
    checkBatteryStatus();
  }
  class Car implements Radio{
    switchRadio() {
  
    }
  }
  
  class Cellphone implements RadioWithBattery {
    switchRadio() {
  
    }
    checkBatteryStatus() {
  
    }
  }