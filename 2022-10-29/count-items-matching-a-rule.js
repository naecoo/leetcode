/**
 * 题目链接：
 * https://leetcode.cn/problems/count-items-matching-a-rule/
 *
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  const index = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2;
  let count = 0;
  items.forEach((item) => {
    if (item[index] === ruleValue) {
      count++;
    }
  });
  return count;
};
