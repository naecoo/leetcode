/**
 * 题目链接：
 * https://leetcode.cn/problems/rank-transform-of-an-array/
 *
 * @param {number[]} arr
 * @return {number[]}
 */
function arrayRankTransform(arr) {
  const res = [...arr];
  const map = new Map();
  let index = 1;
  arr.sort((a, b) => a - b);
  arr.forEach(num => {
    if (!map.has(num)) {
      map.set(num, index++);
    }
  });
  return res.map(num => map.get(num));
};
