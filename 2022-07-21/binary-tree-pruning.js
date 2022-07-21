/**
 * 题目链接：
 * https://leetcode.cn/problems/binary-tree-pr  uning/
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
 * @return {TreeNode}
 */
function pruneTree(root) {
  if (!root) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  return root;
};

function pruneTree1(root) {
  const dfs = (node) => {
    if (!node) return 0;

    const leftCount = dfs(node.left);
    if (leftCount === 0) {
      node.left = null;
    }

    const rightCount = dfs(node.right);
    if (rightCount === 0) {
      node.right = null;
    }

    return node.val + leftCount + rightCount;
  }

  const tmp = new TreeNode(0, root);
  dfs(tmp);
  return tmp.left;
};
