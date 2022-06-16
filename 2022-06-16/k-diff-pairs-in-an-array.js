/**
 * 题目链接：
 * https://leetcode.cn/problems/k-diff-pairs-in-an-array/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findPairs(nums, k) {
  const visited = new Set();
  const res = new Set();
  nums.forEach(num => {
    if (visited.has(num + k)) {
      res.add(num);
    }
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    visited.add(num);
  });
  return res.size;
};
