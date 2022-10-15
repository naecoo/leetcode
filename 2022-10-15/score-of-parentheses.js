/**
 * 题目链接：
 * https://leetcode.cn/problems/score-of-parentheses/
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = (s) => {
  const st = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(0);
    } else {
      let v = st.pop();
      let top = st.pop() + Math.max(2 * v, 1);
      st.push(top);
    }
  }
  return st[0];
};
