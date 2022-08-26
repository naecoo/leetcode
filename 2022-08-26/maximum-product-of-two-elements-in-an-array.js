/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-product-of-two-elements-in-an-array/
 *
 * @param {number[]} nums
 * @return {number}
 */

const maxProduct = (nums) => {
  let max1 = 0;
  let max2 = 0;
  nums.forEach(num => {
    if (num >= max1) {
      max2 = max1;
      max1 = num;
    } else if (num >= max2) {
      max2 = num;
    }
  });

  return (max1 - 1) * (max2 - 1);
};

const maxProduct1 = (nums) => {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
};
