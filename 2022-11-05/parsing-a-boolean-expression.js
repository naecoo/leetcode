/**
 * 题目链接：
 * https://leetcode.cn/problems/parsing-a-boolean-expression/
 *
 */

const group = (exp) => {
  exp += ',';

  const res = [];
  let depth = 0;
  let str = '';
  for (const ch of exp) {
    if (ch === ',' && depth === 0) {
      res.push(str);
      str = '';
      continue;
    }
    str += ch;

    if (ch === '(') {
      depth++;
    } else if (ch === ')') {
      depth--;
    }
  }

  return res;
};
const every = (exp) => group(exp).every(parseBoolExpr);
const some = (exp) => group(exp).some(parseBoolExpr);

/**
 * @param {string} expression
 * @return {boolean}
 */
const parseBoolExpr = (expression) => {
  const len = expression.length;
  switch (expression[0]) {
    case '!':
      return !parseBoolExpr(expression.slice(2, len - 1));
    case '&':
      return every(expression.slice(2, len - 1));
    case '|':
      return some(expression.slice(2, len - 1));
    case 't':
      return true;
    case 'f':
      return false;
    default:
      throw new SyntaxError('Invalid Expression');
  }
};
