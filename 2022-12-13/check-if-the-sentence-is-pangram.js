/**
 * 题目链接：
 * https://leetcode.cn/problems/check-if-the-sentence-is-pangram/
 *
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const set = new Set();
  for (const ch of sentence) {
    set.add(ch);
  }
  return set.size === 26;
};
