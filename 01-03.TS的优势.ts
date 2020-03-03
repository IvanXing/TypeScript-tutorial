interface Point {
  x: number;
  y: number;
}

function demo(data: Point) {
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

demo({ x: 1, y: 4 });

// function demo(data) {
//     return Math.sqrt(data.x ** 2 + data.y ** 2);
// }

// demo({x: 1, y: 2});
