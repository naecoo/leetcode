/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
  if (root === null || k < 0) return
  var n = 0, ans
  travel(root)
  return ans

  function travel(node) {
    if (node === null || n > k) return
    node.left && travel(node.left)
    if (++n === k) {
      ans = node.val
      return
    }
    node.right && travel(node.right)
  }
}
