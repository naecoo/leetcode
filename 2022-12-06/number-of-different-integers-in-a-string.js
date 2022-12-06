/**
 * 题目链接：
 * https://leetcode.cn/problems/number-of-different-integers-in-a-string/
 *
 */

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const set = new Set();
  const divider = '&';

  const nums = word.replaceAll(/[a-z]+/g, divider).trim().split(divider);

  nums.forEach(n => {
    if (n) {
      set.add(removePrefixZero(n));
    }
  });

  return set.size;
};

const removePrefixZero = (str) => {
  if (str.length === 1) return str;

  let i = 0;
  while (str[i] === '0') {
    i++;
  }
  return i === str.length ? '0' : str.slice(i);
};
