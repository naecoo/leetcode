/**
 * 题目链接：
 * https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 *
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = (sentence, searchWord) => {
  let ans = -1;
  sentence.split(' ').some((word, index) => word.startsWith(searchWord) && (ans = index + 1));
  return ans;
}
