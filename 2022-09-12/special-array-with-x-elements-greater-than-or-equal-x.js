/**
 * 题目链接：
 * https://leetcode.cn/problems/special-array-with-x-elements-greater-than-or-equal-x/
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums) => {
  const n = nums.length;
  // 降序
  nums.sort((a, b) => b - a);
  // 遍历 1 到 n
  for (let i = 1; i <= n; ++i) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
      return i;
    }
  }
  return -1;
};
