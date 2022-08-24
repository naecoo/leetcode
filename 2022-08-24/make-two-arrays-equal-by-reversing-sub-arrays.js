/**
 * 题目链接：
 * https://leetcode.cn/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 *
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = (target, arr) => {
  const map = new Map();
  for (let i = 0; i < target.length; i++) {
    map.set(target[i], (map.get(target[i]) ?? 0) + 1);
    map.set(arr[i], (map.get(arr[i]) ?? 0) - 1);
  }

  for (let [_, count] of map.entries()) {
    if (count !== 0) return false;
  }
  return true;
};
