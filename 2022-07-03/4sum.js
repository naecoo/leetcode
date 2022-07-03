function fourSum(nums, target) {
  //sort
  nums = nums.sort((a, b) => a - b)

  let i, j, k, m, sum
  let len = nums.length
  let res = []
  for (i = 0; i < len - 3; i++) {
    //avoid repetitive values
    if (i > 0 && nums[i] === nums[i - 1]) continue

    for (j = i + 1; j < len - 2; j++) {
      //avoid repetitive values
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue

      k = j + 1
      m = len - 1
      while (k < m) {
        sum = nums[i] + nums[j] + nums[k] + nums[m]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[m]])

          //avoid repetitive values
          while (nums[k + 1] === nums[k]) k++
          while (nums[m - 1] === nums[m]) m--

          k++
          m--
        } else if (sum > target) {
          m--
        } else {
          k++
        }
      }

    }
  }
  return res
};
