// 基础类型, boolean, number, string, void, undfined, symbol, null
let count: number;
count = 123;

// 对象类型, {}, Class, function, []
const func = (str: string) => {
  return parseInt(str, 10);
};

// 后面是函数的类型  传入str 返回number
// :后面是函数类型，=后面是函数的实现
const func1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

// Date类型
const date = new Date();

// 其他的 case
interface Person {
  name: 'string';
}
const rawData = '{"name": "dell"}';   //json串
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '456';
