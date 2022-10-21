/**
 * 题目链接：
 * https://leetcode.cn/problems/online-stock-span/
 *
 */

class StockSpanner {
  constructor() {
    this.stack = [];
    this.index = 0;
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    const stack = this.stack;
    let k = stack.length - 1;
    let preIndex = -1;
    while (k >= 0 && stack[k].price <= price) {
      preIndex = k;
      k = stack[k].index - stack[k].count;
    }

    while (preIndex - 1 >= 0 && stack[preIndex - 1].price <= price) {
      preIndex--;
    }

    let count = 1;
    const index = this.index++;
    if (preIndex >= 0) {
      count += index - preIndex;
    }
    stack.push({
      count,
      price,
      index
    });

    return count;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
