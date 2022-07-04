/**
 * 题目链接：
 * https://leetcode.cn/problems/minimum-absolute-difference/
 *
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  arr.sort((a, b) => a - b);
  const res = [];
  let best = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    const delta = arr[i] - arr[i - 1];
    if (delta < best) {
      best = delta;
      res.length = 0;
      res.push([arr[i - 1], arr[i]]);
    } else if (delta === best) {
      res.push([arr[i - 1], arr[i]]);
    }
  }
  return res;
};
