/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-width-of-binary-tree/
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
const widthOfBinaryTree = (root) => {
  const levelMin = new Map();
  const dfs = (node, depth, index) => {
    if (!node) return 0;

    if (!levelMin.has(depth)) {
      levelMin.set(depth, index);
    }

    return Math.max(
      index - levelMin.get(depth) + 1,
      Math.max(dfs(node.left, depth + 1, index * 2), dfs(node.right, depth + 1, index * 2 + 1))
    );
  };

  return dfs(root, 1, 1);
};
