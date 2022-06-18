/**
 * 题目链接：
 * https://leetcode.cn/problems/most-frequent-subtree-sum/
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
 * @return {number[]}
 */
function findFrequentTreeSum(root) {
  // 返回最多的子树元素和的集合，注意是最多的
  const res = [];
  const map = new Map();
  let maxCount = 0;

  const dfs = (node) => {
    if (!node) return 0;
    const sum = node.val + dfs(node.left) + dfs(node.right);
    const count = (map.get(sum) ?? 0) + 1;
    maxCount = Math.max(maxCount, count);
    map.set(sum, count);
    return sum;
  }
  dfs(root);

  map.forEach((count, sum) => {
    if (count === maxCount) {
      res.push(sum);
    }
  });
  return res;
};
