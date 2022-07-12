/**
 * 题目链接：
 * https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/
 *

 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */


function oddCells(m, n, indices) {
  const matrix = new Array(m).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < indices.length; i++) {
    const [ri, ci] = indices[i];
    // row
    for (let j = 0; j < n; j++) {
      matrix[ri][j]++;
    }
    // col
    for (let j = 0; j < m; j++) {
      matrix[j][ci]++;
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] & 1) {
        res++;
      }
    }
  }

  return res;
};
