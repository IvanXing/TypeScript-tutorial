// 基础类型 null, undefined, symbol, boolean, void
const count: number = 123;
const teacherName: string = "Dell";

// 对象类型
class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  // 赋值
  name: "Dell",
  age: 18,
};

// 类型是number数组
const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

// 函数类型 返回number类型
const getTotal1: () => number = () => {
  return 123;
};
