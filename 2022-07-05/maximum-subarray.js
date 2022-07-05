/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let curr = 0;
  nums.forEach(num => {
    curr = Math.max(curr + num, num);
    max = Math.max(max, curr);
  });
  return max;
};
