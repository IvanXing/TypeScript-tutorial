/*
** 泛型解决什么问题
** 参数的类型统一需求
*/
function joinall(first: string | number, second: string | number){
  return `${first}${second}`;
}
joinall(1, '1')
joinall('2', '2');
// 都不会报错，但是现在有一个需求，第一个参数传入string，第二个参数也希望传入string，而不是number
// 参数的类型统一需求


/*
** 泛型： generic 泛指的类型，调用传入时决定
*/
// 1. 传入普通值
function joina<ABC>(first: ABC, second: ABC) {
  return `${first}${second}`;
}
joina<number>(1, 1);
joina<string>('a', 'b');

// 2. 传入数组
function joinb<ABC>(params: ABC[]) {
  return params;
}
joinb<number>([1, 2, 3]);
joinb<string>(['a', 'b']);

// 3. 传入数组另一个写法 T[]
function map<T>(params: Array<T>) {
  return params;
}
map<string>(['123', '345']);

// 4. 传入不同泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join<number, string>(1, '1');
join(1, '1');  // 不写类型不会报错，会自动推断，上面调用同理不写也会推断

// 5. 定义返回值也是 T 类型
function anotherJoin<T>(first: T, second: T): T {
  return first;
}




