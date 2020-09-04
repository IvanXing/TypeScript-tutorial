function nameDecorator1(target: any, key: string): any {
  // descriptor 返回 替代 原 descriptor
  const descriptor: PropertyDescriptor = {
    writable: false
  };
  return descriptor;
}


// test.name = 'dell lee';

// 修改的并不是实例上的 name， 而是原型上的 name
// target 是 prototype
function nameDecorator(target: any, key: string): any {
  target[key] = 'lee';
}

// name 放在实例上
class Test {
  @nameDecorator
  name = 'Dell';
}

const test = new Test();
console.log((test as any).__proto__.name);
