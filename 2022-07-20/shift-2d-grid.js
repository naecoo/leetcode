/**
 * 题目链接：
 * https://leetcode.cn/problems/shift-2d-grid/
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid, k) {
  const m = grid.length, n = grid[0].length;
  const ret = new Array(m).fill(null).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const index1 = (i * n + j + k) % (m * n);
      ret[Math.floor(index1 / n)].splice(index1 % n, 1, grid[i][j]);
    }
  }
  return ret;
};
