/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  let sum = 0;
  let maxNum = 0;
  nums.forEach(num => {
    sum += num;
    maxNum = Math.max(maxNum, num);
  });
  if (sum & 1) return false; // 奇数，不能等分
  const target = sum / 2;
  if (maxNum > target) return false; // 单个元素最大值超出

  // 0-1背包
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  nums.forEach(num => {
    // 滚动数组优化，倒序计算
    for (let j = target; j >= num; j--) {
      dp[j] += dp[j - num];
    }
  })
  return dp[target] !== 0;
};
