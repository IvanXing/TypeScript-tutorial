// Interface 接口
// 对对象的形状（shape）进行描述
// 对类（class）进行抽象
// Duck Typing  会嘎嘎，会游泳，就可以看成鸭子，推断策略，关注对象如何被使用


interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

let dodo: Person = {
    id: 1234,
    name: 'dodo',
}
