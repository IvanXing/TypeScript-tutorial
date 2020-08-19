// 定义函数的三种方式
// function hello() {}
// const hello1 = function() {}
// const hello2 = () => {}

// 入参 + 返回值（返回值会自动推断，但是最好加）
// function add(first: number, second: number): number {
//   return first + second;
// }

// 返回值的类型 void never

// 没有返回值，不return， void
// function sayHello(): void {
//   console.log('hello');
// }

// 没有返回值 never 不可能执行完
// function errorEmitter(): never {
//   throw new Error(); // 1.抛错后面写的的执行不到
//   while(true) {} // 2.死循环后面写的也执行不到
// }

// 函数执行一些 ** 解构语法 ** 的东西
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

// 解构 就算只有一个 也不直接写，写在后面
function getNumber({ first }: { first: number }) {
  return first;
}

const total1 = add({ first: 1, second: 2 });
const count1 = getNumber({ first: 1 });
