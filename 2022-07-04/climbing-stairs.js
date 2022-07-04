/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let p = 0, q = 1, r = 2;
  for (let i = 1; i < n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return q;
}
