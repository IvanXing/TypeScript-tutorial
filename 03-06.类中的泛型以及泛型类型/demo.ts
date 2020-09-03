/*
** 1. 传入简单类型数组
*/

class DataManager1<T extends number | string> {
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
const data1 = new DataManager1<number>([1]);
data1.getItem(0);

/*
** 2. 传入 包含 name 属性的对象 的 数组
*/
interface Item {
  name: string;
}
class DataManager2<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;  // 返回的name是string
  }
}
const data2 = new DataManager2<Item>([{name: 'lisa'}]);
data2.getItem(0);


/*
** 3. 函数中
*/
const func1: () => string = () => {   // func1 是一个 () => string 类型的函数
  return '123'
}

const func2: <T>() => string = <T>() => {
  return '123';
}

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}
const func: <T>(param: T) => T = hello;
