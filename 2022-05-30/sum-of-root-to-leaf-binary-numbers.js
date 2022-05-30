/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 题目链接：
 * https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers/
 *
 * @param {TreeNode} root
 * @return {number}
 */
function sumRootToLeaf(root) {
  let sum = 0;
  const paths = [];
  backtrack(root);
  return sum;

  function backtrack(node) {
    if (!node) return;
    paths.push(node.val);
    if (!node.left && !node.right) {
      sum += parseInt(paths.join(''), 2);
    } else {
      backtrack(node.left);
      backtrack(node.right);
    }
    paths.pop();
  }
};
