
/**
 * 题目链接：
 * https://leetcode.cn/problems/matchsticks-to-square/submissions/
 *
 *
 * @param {number[]} matchsticks
 * @returns {boolean}
 */
function makesquare(matchsticks) {
  const sum = matchsticks.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0) {
    return false;
  }
  // 从大到小排序，剪枝
  matchsticks.sort((a, b) => b - a);
  const edges = new Array(4).fill(0);
  return backtrack(0, sum / 4);

  function backtrack(index, len) {
    // 所有火柴用完
    if (index === matchsticks.length) {
      return true;
    }
    // 遍历每一条边，进行填充
    for (let i = 0; i < edges.length; i++) {
      edges[i] += matchsticks[index];
      // 边小于等于边长，试一下下一条火柴
      if (edges[i] <= len && backtrack(index + 1, len)) {
        return true;
      }
      edges[i] -= matchsticks[index];
    }
    return false;
  };
}
