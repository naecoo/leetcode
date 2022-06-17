/**
 * 题目链接：
 * https://leetcode.cn/problems/random-point-in-non-overlapping-rectangles/
 *
 */
// 前缀和 + 二分搜索
var Solution = function (rects) {
  this.arr = [0];
  this.rects = rects;
  for (const rect of rects) {
    const a = rect[0],
      b = rect[1],
      x = rect[2],
      y = rect[3];
    this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1));
  }
};

Solution.prototype.pick = function () {
  let k = Math.floor(Math.random() * this.arr[this.arr.length - 1]);
  const rectIndex = binarySearch(this.arr, k + 1) - 1;
  k -= this.arr[rectIndex];
  const rect = this.rects[rectIndex];
  const a = rect[0],
    b = rect[1],
    y = rect[3];
  const col = y - b + 1;
  const da = Math.floor(k / col);
  const db = k - col * da;
  return [a + da, b + db];
};

const binarySearch = (arr, target) => {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = arr[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
