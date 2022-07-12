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
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (const index of indices) {
    rows[index[0]]++;
    cols[index[1]]++;
  }
  let oddx = 0, oddy = 0;
  for (let i = 0; i < m; i++) {
    if ((rows[i] & 1) !== 0) {
      oddx++;
    }
  }
  for (let i = 0; i < n; i++) {
    if ((cols[i] & 1) !== 0) {
      oddy++;
    }
  }
  // 奇数+偶数=奇数
  return oddx * (n - oddy) + (m - oddx) * oddy;
};

function oddCells1(m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  indices.forEach(indice => {
    rows[indice[0]]++;
    cols[indice[1]]++;
  });

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((rows[i] + cols[j]) & 1) {
        res++;
      }
    }
  }

  return res;
}

function oddCells2(m, n, indices) {
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
