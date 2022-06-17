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
  const dfs = (node, val) => {
    if (!node) return 0;
    val = (val << 1) | node.val;
    if (!node.left && !node.right) return val;
    return dfs(node.left, val) + dfs(node.right, val);
  };
  return dfs(root, 0);
}

// 迭代
function sumRootToLeaf1(root) {
  const stack = [];
  let val = 0,
    ret = 0;
  let prev = null;
  while (root || stack.length) {
    while (root) {
      val = (val << 1) | root.val;
      stack.push(root);
      root = root.left;
    }
    root = stack[stack.length - 1];
    if (!root.right || root.right === prev) {
      if (!root.left && !root.right) {
        ret += val;
      }
      val >>= 1;
      stack.pop();
      prev = root;
      root = null;
    } else {
      root = root.right;
    }
  }
  return ret;
}

function sumRootToLeaf2(root) {
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
}
