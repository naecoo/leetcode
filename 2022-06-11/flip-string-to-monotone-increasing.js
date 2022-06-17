/**
 * 题目链接：
 * https://leetcode.cn/problems/flip-string-to-monotone-increasing/
 *
 * @param {string} s
 * @return {number}
 */
function minFlipsMonoIncr(s) {
  // 动态规划 + 滚动数组优化
  // 以0结尾，以1结尾的修改次数
  let dp0 = 0,
    dp1 = 0;
  for (let i = 0; i < s.length; i++) {
    // 关键在这里，0结尾的前面必须也是0
    // 但是1结尾的，前面可以是0或者1
    let ndp0 = dp0,
      ndp1 = Math.min(dp0, dp1);
    if (s[i] === '0') {
      ndp1++; // 当前字符为0，如果以1结尾需要翻转一次
    } else {
      ndp0++; // 当前字符为1，如果以0结尾需要翻转一次
    }
    dp0 = ndp0;
    dp1 = ndp1;
  }
  return Math.min(dp0, dp1);
}

function minFlipsMonoIncr2(s) {
  // 定义分界点，统计分界点左边1的数量和右边0的数量之和，就是需要翻转的次数
  // 寻找最小的分界点

  // 初始化，分界点在最左边，直接统计右边0的数量即可
  let count = 0;
  for (const ch of s) {
    if (ch === '0') {
      count++;
    }
  }
  let ans = count; // 记录答案
  for (const ch of s) {
    if (ch === '1') {
      // 分界点左边1的数量加一
      count++;
    } else {
      // 分界点右边0的数量减一
      count--;
    }
    // 更新最小值
    ans = Math.min(ans, count);
  }
  return ans;
}
