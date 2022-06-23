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
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
  const queue = [];
  const res = [];
  if (root) queue.push(root);
  while (queue.length) {
    let max = Number.MIN_SAFE_INTEGER;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const { left, right, val } = queue.shift();
      max = Math.max(max, val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    res.push(max);
  }
  return res;
};
