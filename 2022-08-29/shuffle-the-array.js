/**
 * 题目链接：
 * https://leetcode.cn/problems/shuffle-the-array/
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
  const res = new Array(n * 2);
  for (let i = 0, j = 0; i < n; i++) {
    res[j++] = nums[i];
    res[j++] = nums[i + n];
  }
  return res;
};
