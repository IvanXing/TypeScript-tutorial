// 类型别名和类型断言

// type aliases
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType  = sum

 // 联合类型下的类型别名
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()  // 函数
  }
}

// type assertion

function getLength(input: string | number) : number {
    // 看成String
  // const str = input as String
  // if (str.length) {
  //   return str.length
  // } else {
  //   const number = input as Number
  //   return number.toString().length
  // }
  // 把input断言成String
  if((<string>input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}