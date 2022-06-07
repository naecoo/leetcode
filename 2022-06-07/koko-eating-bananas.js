/**
 * 题目链接：
 * https://leetcode.cn/problems/koko-eating-bananas/
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function minEatingSpeed(piles, h) {
  // 是否能按k吃完
  const possible = (k) => {
    let times = 0;
    for (let i = 0; i < piles.length && times <= h; i++) {
      times += Math.ceil(piles[i] / k);
    }
    return times <= h;
  }

  let lo = 0, hi = 10e9;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (possible(mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return lo;
};
