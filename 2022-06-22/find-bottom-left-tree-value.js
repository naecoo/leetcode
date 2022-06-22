/**
 * 题目链接：
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
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
// dfs
function findBottomLeftValue(root) {
  let leftNode = root;
  const dfs = (node, height) => {
    if (!node) return;
    height++;
    dfs(node.left, height);
    dfs(node.right, height);
    // 有更深的节点（首先遍历的是最左边的）
    if (height > curHeight) {
      curHeight = height;
      leftNode = node;
    }
  }

  let curHeight = 0;
  dfs(root, 0);
  return leftNode.val;
};

// bfs
function findBottomLeftValue1(root) {
  let leftNode = 0;
  const queue = [root];
  while (queue.length) {
    const p = queue.shift();
    // 先放置最右的
    if (p.right) {
      queue.push(p.right);
    }
    // 再放置最左的，保证最后遍历到的是最左边的元素
    if (p.left) {
      queue.push(p.left);
    }
    leftNode = p;
  }
  return leftNode.val;
};

// 层序遍历
function findBottomLeftValue2(root) {
  const queue = [root];
  let leftNode = root;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === 0) {
        leftNode = node;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return leftNode.val;
};
