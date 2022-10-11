/**
 * 题目链接：
 * https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/
 *
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = (s1, s2) => {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;

      if (count > 2) return false;
    }

    map.set(s1[i], (map.get(s1[i]) ?? 0) + 1);
    map.set(s2[i], (map.get(s2[i]) ?? 0) - 1);
  }

  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
};
