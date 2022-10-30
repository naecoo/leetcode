/**
 * 题目链接：
 * https://leetcode.cn/problems/letter-case-permutation/
 *
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = (s) => {
  const set = new Set();
  const size = s.length;
  const re = /\w/;
  const backtrack = (paths, index) => {
    if (index === size) {
      set.add(paths);
      return;
    }

    backtrack(paths + s[index], index + 1);
    if (re.test(s[index])) {
      backtrack(paths + reverse(s[index]), index + 1);
    }
  };

  backtrack('', 0);
  return Array.from(set);
};

function reverse(a) {
  return a.charCodeAt() >= 97 ? a.toUpperCase() : a.toLowerCase();
}
