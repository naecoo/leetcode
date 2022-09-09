/**
 * 题目链接：
 * https://leetcode.cn/problems/crawler-log-folder/
 *
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = (logs) => {
  let depth = 0;
  for (const log of logs) {
    if (log.startsWith('..')) {
      depth = Math.max(0, depth - 1);
    } else if (!log.startsWith('./')) {
      depth += 1;
    }
  }
  return depth;
};
