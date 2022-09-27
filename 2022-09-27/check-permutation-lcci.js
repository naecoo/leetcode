/**
 * 题目链接：
 * https://leetcode.cn/problems/check-permutation-lcci/
 *
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const CheckPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const map = new Map();
  for (const ch of s1) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  let cnt = map.size;
  for (let i = 0; i < s2.length; i++) {
    const ch = s2[i];
    const val = map.get(ch) - 1;
    map.set(ch, val);

    if (val === 0) {
      cnt--;
    }
  }

  return cnt === 0;
};
