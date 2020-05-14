// 函数声明   最后是返回值的类型
function add(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 函数表达式
const add2 = function(x: number, y: number, z: number = 10): number {
    if (typeof z === 'number') {
      return x + y + z
    } else {
      return x + y
    }
  }
  
// z是可选参数  写在最后   定义add2的函数类型
const add3: (x: number, y: number, z?: number) => number = add2