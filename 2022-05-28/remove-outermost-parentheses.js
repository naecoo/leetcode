/**
 * 题目链接：
 * https://leetcode.cn/problems/remove-outermost-parentheses/
 *
 * @param {string} s
 * @return {string}
 */
function removeOuterParentheses(s) {
  let stack = 0;
  let res = '';
  for (const c of s) {
    if (c === ')') stack--;
    if (stack > 0) res += c;
    if (c === '(') stack++;
  }
  return res;
};

// 第二种解法
function removeOuterParentheses1(s) {
  let stack = 0;
  let start = 0;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack++;
    } else {
      stack--;
    }

    if (stack === 0 && start !== i) {
      res += s.slice(start + 1, i);
      start = i + 1;
    }
  }
  return res;
};
