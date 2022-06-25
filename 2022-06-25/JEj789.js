/**
 * 题目链接：
 * https://leetcode.cn/problems/JEj789/
 *
 * @param {number[][]} costs
 * @return {number}
 */
function minCost(costs) {
  // 动态规划 + 滚动数组
  let res = [0, 0, 0];
  let pre = [0, 0, 0];
  // 动态规划
  for (let i = 0; i < costs.length; i++) {
    res[0] = Math.min(pre[1], pre[2]) + costs[i][0];
    res[1] = Math.min(pre[0], pre[2]) + costs[i][1];
    res[2] = Math.min(pre[0], pre[1]) + costs[i][2];
    res.forEach((val, index) => {
      pre[index] = val;
    })
  }
  return Math.min(...res);
};

function minCost1(costs) {
  // 动态规划
  const n = costs.length;
  const dp = new Array(n + 1).fill(null).map(() => new Array(3).fill(0));
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i - 1][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i - 1][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i - 1][2];
  }
  return Math.min(...dp[n]);
};
