/**
 * 题目链接：
 * https://leetcode.cn/problems/defuse-the-bomb/
 *
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
  const len = code.length;
  const res = new Array(len).fill(0);

  if (k > 0) {
    let ksum = 0;
    for (let i = 0; i < k; i++) {
      ksum += code[i];
    }
    for (let i = 0; i < len; i++) {
      ksum = ksum - code[i] + code[(k + i) % len];
      res[i] = ksum;
    }
  }

  if (k < 0) {
    let ksum = 0;
    for (let i = len - 1; i >= len + k; i--) {
      ksum += code[i];
    }

    for (let i = len - 1; i >= 0; i--) {
      const index = i + k;
      ksum = ksum - code[i] + code[index >= 0 ? index : len + index];
      res[i] = ksum;
    }
  }

  return res;
};
