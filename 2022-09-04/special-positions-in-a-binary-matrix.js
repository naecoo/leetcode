/**
 * 题目链接：
 * https://leetcode.cn/problems/special-positions-in-a-binary-matrix/
 *
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = (mat) => {
  const m = mat.length;
  const n = mat[0].length;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] += mat[i][j];
      cols[j] += mat[i][j];
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        if (rows[i] === 1 && cols[j] === 1) res++;
        break;
      }
    }
  }
  return res;
};
