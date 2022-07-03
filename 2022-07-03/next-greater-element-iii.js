/**
 * 题目链接：
 * https://leetcode.cn/problems/next-greater-element-iii/
 *
 * @param {number} n
 * @return {number}
 */
function nextGreaterElement(n) {
  const arr = n.toString().split('');
  const len = arr.length;
  if (len < 2) return -1;

  let j = len - 2;
  while (j >= 0 && arr[j + 1] <= arr[j]) {
    j--;
  }
  if (j < 0) return -1;

  let i = len - 1;
  while (i > j && arr[i] <= arr[j]) {
    i--;
  }
  if (i === j) return -1;

  swap(arr, i, j);
  reverse(arr, j + 1, len - 1);
  const res = parseInt(arr.join(''));

  if (res > Math.pow(2, 31) - 1) return -1;
  return res;
};

function reverse(arr, lo, hi) {
  while (lo < hi) {
    swap(arr, lo++, hi--);
  }
}
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
