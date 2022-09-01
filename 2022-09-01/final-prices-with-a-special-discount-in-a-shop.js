/**
 * 题目链接：
 * https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/
 *
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = (prices) => {
  const stack = [];
  const res = new Array(prices.length).fill(0);

  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    res[i] = prices[i];
    if (stack.length) {
      res[i] -= stack[stack.length - 1];
    }

    stack.push(prices[i]);
  }

  return res;
};
