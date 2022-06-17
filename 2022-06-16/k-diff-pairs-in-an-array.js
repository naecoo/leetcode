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
  nums.forEach((num) => {
    // 因为(0,1) 和（1,0）是相同的一对，这里我们存储小的数字就可以了
    if (visited.has(num + k)) {
      res.add(num);
    }
    if (visited.has(num - k)) {
      res.add(num - k);
    }
    visited.add(num);
  });
  return res.size;
}
