/**
 * 题目链接：
 * https://leetcode.cn/problems/consecutive-numbers-sum/
 *
 * @param {number} n
 * @return {number}
 */
function consecutiveNumbersSum(n) {
  // 数学法
  const t = 2 * n;
  let ans = 0;
  for (let k = 1; k * k < t; k++) {
    if (t % k == 0 && (Math.floor(t / k) + 1 - k) % 2 == 0) {
      ans++;
    }
  }
  return ans;
}

// 暴力解法
function consecutiveNumbersSum1(n) {
  let ans = 0;
  let sum = 0;
  let start = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
    while (sum > n) sum -= start++
    if (sum === n) ans++;
  }
  return ans;
};
