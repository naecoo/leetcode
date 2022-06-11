/**
 * 题目链接：
 * https://leetcode.cn/problems/flip-string-to-monotone-increasing/
 *
 * @param {string} s
 * @return {number}
 */
function minFlipsMonoIncr(s) {
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
};
