// 数组
const arr1: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];

// 数组里存储对象，看起来太复杂，引入类型别名
const objectArr1: { name: string; age: number }[] = [
  {
    name: "paul",
    age: 10,
  },
];

// type alias 类型别名
type User1 = { name: string; age: number };
const obArr: User1[] = [{ name: "dell", age: 10 }];

// 数组里每项都是class的类型，直接定义一个实例和new出来都可以
class Teacher {
  name: string;
  age: number;
}
const objectArr2: Teacher[] = [
  new Teacher(),
  {
    name: "dell",
    age: 28,
  },
];

// 元组 tuple => 数组每一项内容都确定
const teacherInfo: [string, string, number] = ["Dell", "male", 18];
// 应用：csv文件
const teacherList: [string, string, number][] = [
  ["dell", "male", 19],
  ["sun", "female", 26],
  ["jeny", "female", 38],
];
