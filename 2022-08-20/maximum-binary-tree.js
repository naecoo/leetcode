/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-binary-tree/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
  // 单调栈
  const n = nums.length;
  const stack = [];
  const tree = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    tree[i] = new TreeNode(nums[i]);
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      tree[i].left = tree[stack[stack.length - 1]];
      stack.pop();
    }
    if (stack.length) {
      tree[stack[stack.length - 1]].right = tree[i];
    }
    stack.push(i);
  }
  return tree[stack[0]];
}

function constructMaximumBinaryTree2(nums) {

  const dfs = (lo, hi) => {
    if (lo > hi) return null;

    let max = nums[lo];
    let index = lo;
    for (let i = lo + 1; i <= hi; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }

    const head = new TreeNode(nums[index]);
    head.left = dfs(lo, index - 1);
    head.right = dfs(index + 1, hi);

    return head;
  }

  return dfs(0, nums.length - 1);
};

function constructMaximumBinaryTree1(nums) {
  if (nums.length <= 0) return null;

  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  const head = new TreeNode(nums[index]);
  head.left = constructMaximumBinaryTree(nums.slice(0, index));
  head.right = constructMaximumBinaryTree(nums.slice(index + 1));

  return head;
}
