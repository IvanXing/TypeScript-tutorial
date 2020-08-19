// 首选项=> quote => ts中用single
// tab => tabSize:2
// save => format on save

// npm install -g typescript
// tsc --v
// tsc xxx.ts  先编译生成js
// node xxx.js 运行

// 或者
// npm install -g ts-node
// ts-node xxx.ts

interface Point {
  x: number;
  y: number;
}

function tsDemo2(data: Point) {
  console.log("Dell TS");
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo2({ x: 1, y: 123 });
