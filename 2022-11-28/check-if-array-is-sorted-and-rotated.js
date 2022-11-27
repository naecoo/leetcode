/**
 * 题目链接：
 * https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated/
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let n = nums.length,
    x = 0;
  for (let i = 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      x = i;
      break;
    }
  }
  if (x === 0) {
    return true;
  }
  for (let i = x + 1; i < n; ++i) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }
  return nums[0] >= nums[n - 1];
};
