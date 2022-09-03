/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-length-of-pair-chain/
 *
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = (pairs) => {
  // 贪心
  let curr = -Number.MAX_VALUE;
  let res = 0;
  // 按照第二个数字从小到大排序，优先选择第二个数字最小的，为后面的值提供选择空间
  pairs.sort((a, b) => a[1] - b[1]);
  for (const p of pairs) {
    if (curr < p[0]) {
      curr = p[1];
      res++;
    }
  }
  return res;
}
const findLongestChain1 = (pairs) => {
  // 动态规划
  const n = pairs.length;
  pairs.sort((a, b) => a[0] - b[0]);
  const dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[n - 1];
};
