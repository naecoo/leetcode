/**
 * 题目链接：
 * https://leetcode.cn/problems/build-an-array-with-stack-operations/
 *
 */

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
const buildArray = (target, n) => {
  const res = [];
  let val = 1;
  for (const item of target) {
    while (val < item) {
      val++;
      res.push('Push', 'Pop');
    }
    res.push('Push');
    val++;
  }
  return res;
};
