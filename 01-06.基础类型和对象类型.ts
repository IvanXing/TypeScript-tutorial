// 基础类型 null, undefined, symbol, boolean, void
const count: number = 123;
const teacherName: string = 'Dell';

// 对象类型

class Person {}

const teacher: {
  name: string;
  age: number;
} = {    // 赋值
  name: 'Dell',
  age: 18
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

// 函数类型 返回number
const getTotal1: () => number = () => {
  return 123;
};
