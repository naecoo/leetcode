/**
 * 题目链接：
 * https://leetcode.cn/problems/mean-of-array-after-removing-some-elements/
 *
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
const trimMean = (arr) => {
  arr.sort((a, b) => a - b);
  const size = arr.length;
  const padding = size / 20;
  let sum = 0;
  for (let i = padding; i < size - padding; i++) {
    sum += arr[i];
  }
  return sum / (size - 2 * padding);
};
