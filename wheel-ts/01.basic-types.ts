// 定义原始类型

// 原始值：值不可变，改变返回新值
// Boolean  Null  Undefined  Number BigInt String  Symbol
// 对象
// Object

let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'dodo'
let message: string = `Hello, ${firstName}, age is ${age}`

// 所有类型的子类型
let u: undefined = undefined
let n: null = null
let num: number = undefined


let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型
let numberOrString: number | string = 234
numberOrString = 'abc'

// Array
let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

// arguments 伪数组 IArguments
function test() {
  console.log(arguments)
}

// 元组 Tuple 限定了数据类型的数组
let user: [string, number] = ['dodo', 1]
