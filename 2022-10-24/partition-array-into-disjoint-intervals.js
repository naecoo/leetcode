/**
 * 题目链接：
 * https://leetcode.cn/problems/partition-array-into-disjoint-intervals/
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = function (nums) {
  const n = nums.length;
  let leftMax = nums[0],
    leftPos = 0,
    curMax = nums[0];
  for (let i = 1; i < n - 1; i++) {
    curMax = Math.max(curMax, nums[i]);
    if (nums[i] < leftMax) {
      leftMax = curMax;
      leftPos = i;
    }
  }
  return leftPos + 1;
};

const partitionDisjoint1 = function (nums) {
  const size = nums.length;
  const mins = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = size - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    mins[i] = min;
  }

  for (let i = 0; i < size - 1; i++) {
    max = Math.max(max, nums[i]);
    if (max <= mins[i + 1]) {
      return i + 1;
    }
  }

  return 0;
};
