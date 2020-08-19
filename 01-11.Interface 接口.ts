// interface 和 type 相类似，但并不完全一致

interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any; // 还可以传入一个属性名是字符串，属性值任意类型的一个不确定的参数
  say(): string;
}

// 类型别名（type）可以定义单个属性，也就是基础类型，
// 接口interface只能定义对象
type Person2 = string;

// 接口的继承
interface Teacher extends Person {
  teach(): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: "dell",
  sex: "male",
  say() {
    return "say hello";
  },
  teach() {
    return "teach";
  },
};

// 对象传入函数调用属于弱校验，可以多属性，直接写对象传入，强校验，不能多
getPersonName(person);
setPersonName(person, "lee");

// 类应用了一个接口
// class User implements Person {
//   name = 'dell';
//   say() {
//     return 'hello';
//   }
// }

// 接口代表函数，接收string类型的参数，返回string
interface SayHi {
  (word: string): string;
}
const say: SayHi = (word: string) => {
  return word;
};

say("ddddd");

// tsc --init 初始化ts工程
// tsc xx.ts 编译
