/**
 * 题目链接：
 * https://leetcode.cn/problems/deepest-leaves-sum/
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
function deepestLeavesSum(root) {
  // 广度优先搜索
  let sum = 0;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    sum = 0;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return sum;
}

function deepestLeavesSum1(root) {
  // 深度优先搜索
  let sum = 0;
  let level = 0;
  let maxLevel = 0;

  const dfs = (node) => {
    if (!node) return;

    if (level > maxLevel) {
      maxLevel = level;
      sum = 0;
    }

    if (!node.left && !node.right && level === maxLevel) {
      sum += node.val;
    }

    level++;
    dfs(node.left);
    dfs(node.right);
    level--;
  }

  dfs(root);
  return sum;
}

function deepestLeavesSum2(root) {
  // 层序遍历，效率比较低
  const queue = [];
  let sum = 0;

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    sum = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const { val, left, right } = queue.shift();
      sum += val;
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  return sum;
};
