interface Point {
  x: number;
  y: number;
}

// 勾股定理
function tsDemo(data: Point): number {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({ x: 1, y: 123 });
