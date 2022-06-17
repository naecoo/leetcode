/**
 * 题目链接：
 * https://leetcode.cn/problems/generate-random-point-in-a-circle/
 *
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
function Solution(radius, x_center, y_center) {
  this.xc = x_center;
  this.yc = y_center;
  this.r = radius;
}

Solution.prototype.randPoint = function () {
  // 在一个正方形中采样
  while (true) {
    const x = Math.random() * (2 * this.r) - this.r;
    const y = Math.random() * (2 * this.r) - this.r;
    if (x * x + y * y <= this.r * this.r) {
      return [this.xc + x, this.yc + y];
    }
  }
};
// 更好的随机算法，需要对概率论，期望分布有一定了解
Solution.prototype.randPoint2 = function () {
  const u = Math.random();
  const theta = Math.random() * 2 * Math.PI;
  const r = Math.sqrt(u);
  return [this.xc + r * Math.cos(theta) * this.r, this.yc + r * Math.sin(theta) * this.r];
};
