/**
 * 题目链接：
 * https://leetcode.cn/problems/largest-substring-between-two-equal-characters/
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = (s) => {
  const map = new Map();
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      max = Math.max(max, i - map.get(c) - 1);
    } else {
      map.set(c, i);
    }
  }
  return max;
};
