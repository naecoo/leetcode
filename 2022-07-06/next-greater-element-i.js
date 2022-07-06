/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
  return res;
}

// 暴力
var nextGreaterElement1 = function (nums1, nums2) {
  const ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let j = 0;
    while (j < nums1.length && nums2[j] !== nums1[i]) {
      j++;
    }

    let r = -1;
    while (++j < nums2.length) {
      if (nums2[j] > nums1[i]) {
        r = nums2[j];
        break;
      }
    }
    ans.push(r)
  }
  return ans;
};
