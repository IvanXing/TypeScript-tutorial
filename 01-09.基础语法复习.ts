// 基础类型, boolean, number, string, void, undfined, symbol, null
// 声明和赋值放在一行，可以推断，放在两行不能推断
let count: number;
count = 123;

// 对象类型, {}, Class, function, []

// 函数约定方式1
const func = (str: string): number => {
  return parseInt(str, 10);
};

// 函数约定方式2
// 后面是函数的类型，接收一个string类型的参数，返回number
// 冒号后面是函数类型，等号后面是函数的实现
const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

// Date类型
const date: Date = new Date();

// 其他的 case

//json串
interface Person {
  name: "string";
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);

// or
let temp: number | string = 123;
temp = "456";
