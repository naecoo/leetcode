/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-score-after-splitting-a-string/
 *
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
  let one_count = 0;
  for (const ch of s) {
    if (ch === '1') one_count++;
  }

  let max = 0;
  let left_one_count = 0;
  let left_zero_count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const ch = s[i];
    if (ch === '1') left_one_count++;
    else left_zero_count++;
    max = Math.max(
      max,
      left_zero_count + (one_count - left_one_count)
    );
  }

  return max;
};
