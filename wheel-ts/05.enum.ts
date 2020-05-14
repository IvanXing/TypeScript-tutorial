const enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }
  const value = 'UP'
  if (value === Direction.Up) {
    console.log('go up!')
}

// 加 const变成常量枚举 提升性能，代码编译大幅度减少
