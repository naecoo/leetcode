/**
 * 题目链接：
 * https://leetcode.cn/problems/count-the-number-of-consistent-strings/
 *
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let bit = 0;
  for (const ch of allowed) {
    bit |= 1 << (ch.codePointAt() - 97);
  }
  let res = 0;
  for (const word of words) {
    let valid = true;
    for (const ch of word) {
      if (!(bit & (1 << (ch.codePointAt() - 97)))) {
        valid = false;
        break;
      }
    }
    if (valid) res++;
  }
  return res;
};

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings1 = function (allowed, words) {
  const set = new Set(allowed.split(''));
  let res = 0;
  for (const word of words) {
    let valid = true;
    for (const ch of word) {
      if (!set.has(ch)) {
        valid = false;
        break;
      }
    }
    if (valid) {
      res++;
    }
  }
  return res;
};
