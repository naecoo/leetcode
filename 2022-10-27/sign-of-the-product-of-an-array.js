/**
 * 题目链接：
 * https://leetcode.cn/problems/sign-of-the-product-of-an-array/
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = (nums) => {
  let sign = 1;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    }
    if (num < 0) {
      sign = -sign;
    }
  }
  return sign;
};
