// type annotation 类型注解, 我们来告诉 TS 变量是什么类型
// type inference 类型推断, TS 会自动的去尝试分析变量的类型
// 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// let count: number;   // 显式声明，叫做类型注解
// count = 123;

// let countInference = 123; // 自动推断，鼠标上浮会显示推断

// 自动推断数字类型
// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;

// 方法不调用，未定义，调用之前都是any，不能推断
function getTotal(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}
const total = getTotal(1, 2);

const obj = {
  name: "dell",
  age: 18,
};
