/**
 * 题目链接：
 * https://leetcode.cn/problems/height-checker/
 *
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  const expected = new Array(Math.max(...heights) + 1).fill(0);
  heights.forEach(height => {
    expected[height]++;
  });
  let diff = 0;
  let index = 0;
  expected.forEach((count, expect) => {
    while (count-- > 0) {
      if (heights[index++] !== expect) {
        diff++;
      }
    }
  });
  return diff;
};
