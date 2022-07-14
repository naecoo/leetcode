/**
 * 题目链接：
 * https://leetcode.cn/problems/asteroid-collision/
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = [];
  for (const aster of asteroids) {
    let alive = true;
    // 检查是否会碰撞
    while (alive && aster < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
      alive = stack[stack.length - 1] < -aster; // aster 是否仍然存在
      if (stack[stack.length - 1] <= -aster) {  // 栈顶行星爆炸
        stack.pop();
      }
    }
    // 继续保留
    if (alive) {
      stack.push(aster);
    }
  }

  return stack;
};
