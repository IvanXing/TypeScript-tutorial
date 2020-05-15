interface Point {
  x: number;
  y: number;
}

function tsDemo2(data: Point) {
  console.log('Dell TS');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo2({ x: 1, y: 123 });
