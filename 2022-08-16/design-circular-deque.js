/**
 * 题目链接：
 * https://leetcode.cn/problems/design-circular-deque/
 *

 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = 0;
  this.limit = k;
  this.queue = new Array(k);
  this.tail = -1;
  this.head = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  this.size++;
  this.head = (this.head + 1) % this.limit;
  this.queue[this.head] = value;

  if (this.tail === -1) {
    const tmp = this.head - this.size + 1;
    this.tail = tmp >= 0 ? tmp : this.limit + tmp;
  }

  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  this.size++;
  this.tail = this.tail - 1 >= 0 ? this.tail - 1 : this.limit - 1;
  this.queue[this.tail] = value;

  if (this.head === -1) {
    this.head = (this.tail + this.size - 1) % this.limit;
  }

  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  this.size--;
  this.queue[this.head--] = undefined;
  if (this.size === 0) {
    this.head = this.tail = -1;
  } else if (this.head <= 0) {
    this.head = (this.tail + this.size - 1) % this.limit;
  }
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  this.size--;
  this.queue[this.tail++] = undefined;
  if (this.size === 0) {
    this.tail = this.head = -1;
  } else if (this.tail >= this.limit) {
    const tmp = this.head - this.size + 1;
    this.tail = tmp >= 0 ? tmp : this.limit + tmp;
  }
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.limit === this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
