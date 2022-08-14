/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxLevelSum(root) {
  const queue = [];
  let floor = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let maxFloor = 1;

  if (root) {
    queue.push(root);
  }

  while (queue.length !== 0) {
    floor++;
    const len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      const { left, right, val } = queue.shift();
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    if (sum > max) {
      max = sum;
      maxFloor = floor;
    }
  }

  return maxFloor
};
