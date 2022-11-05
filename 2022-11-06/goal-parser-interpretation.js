/**
 * 题目链接：
 * https://leetcode.cn/problems/goal-parser-interpretation/
 *
 */

/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => command.replaceAll('(al)', 'al').replaceAll('()', 'o');

/**
 * @param {string} command
 * @return {string}
 */
const interpret1 = (command) => {
  const m = {
    G: 'G',
    '()': 'o',
    '(al)': 'al'
  };
  let res = '';
  let s = '';
  for (const ch of command) {
    s += ch;
    if (m[s]) {
      res += m[s];
      s = '';
    }
  }
  return res;
};
