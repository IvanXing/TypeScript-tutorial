// function add(first: number, second: number): number {
//   return first + second;
// }

// 没有返回值 void
// function sayHello(): void {
//   console.log('hello');
// }

// 没有返回值 never 不可能执行完
// function errorEmitter(): never {
//   while(true) {}
//      // 后面的执行不到
// }


// 函数执行一些 ** 解构 ** 的东西
function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

// 解构 就算只有一个 也不直接写，写在后面
function getNumber({ first }: { first: number }) {
  return first;
}

const total1 = add({ first: 1, second: 2 });
const count1 = getNumber({ first: 1 });
