/**
 * 题目链接：
 * https://leetcode.cn/problems/merge-strings-alternately/
 *
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
  let i = 0,
    j = 0;
  let res = '';
  let count = 0;
  while (i < word1.length && j < word2.length) {
    res += count % 2 === 0 ? word1[i++] : word2[j++];
    count++;
  }

  if (i < word1.length) {
    res += word1.slice(i);
  }
  if (j < word2.length) {
    res += word2.slice(j);
  }

  return res;
};
