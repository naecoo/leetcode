/**
 * 题目链接：
 * https://leetcode.cn/problems/validate-stack-sequences/
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = (pushed, popped) => {
  const stack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  while (stack.length && stack[stack.length - 1] === popped[j]) {
    stack.pop();
    j++;
  }

  return stack.length === 0;
};
