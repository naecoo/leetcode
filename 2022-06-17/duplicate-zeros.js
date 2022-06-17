/**
 * 题目链接：
 * https://leetcode.cn/problems/duplicate-zeros/
 *
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  // 双指针
  const n = arr.length;
  let top = 0;
  let i = -1;
  while (top < n) {
    i++;
    if (arr[i] !== 0) {
      top++;
    } else {
      top += 2;
    }
  }
  let j = n - 1;
  if (top === n + 1) {
    arr[j] = 0;
    j--;
    i--;
  }
  while (j >= 0) {
    arr[j] = arr[i];
    j--;
    if (arr[i] === 0) {
      arr[j] = arr[i];
      j--;
    }
    i--;
  }
}

function duplicateZeros1(arr) {
  const temp = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp.push(0);
      temp.push(0);
    } else {
      temp.push(arr[i]);
    }
    arr[i] = temp[index++];
  }
};
