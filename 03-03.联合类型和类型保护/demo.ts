/*
** 联合类型
** 四种类型保护的方法
*/

interface Bird {
  fly: boolean;
  sing: ()=> {};
};

interface Dog {
  fly: boolean;
  bark: ()=> {};
};

// Bird | Dog => 联合类型
// 1. animal as Bird => 类型断言，通过类型断言来达到类型保护
function trainAnimal(animal: Bird | Dog) {
  // animal.sing()  // TS无法识别单独属性
  if(animal.fly) {
    (animal as Bird).sing()
  }else {
    (animal as Dog).bark()
  }
}

// 2. in 语法 做类型保护
function trainAnimal2(animal: Bird | Dog) {
  if('sing' in animal) {
    animal.sing();
  }else {
    animal.bark();
  }
}

// 3. typeof 语法 做类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

// 4. instanceof 语法 做类型保护
/*
** class 才可以被 instanceof 调用，使用此种，不用 interface 定义类型
*/
class NumberObj {
  count: number
}
function add2(first: object | NumberObj, second: object | NumberObj) {
  if(first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}