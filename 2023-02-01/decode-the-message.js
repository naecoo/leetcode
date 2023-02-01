/**
 * 题目链接：
 * https://leetcode.cn/problems/decode-the-message/
 *
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let res = '';
  const map = buildMap(key);

  for (const c of message) {
    res += c === ' ' ? ' ' : map.get(c);
  }

  return res;
};

const buildMap = (key) => {
  const map = new Map();
  const set = new Set();
  let seed = 97;

  for (const k of key) {
    if (set.size === 26) break;
    if (k === ' ' || set.has(k)) continue;

    set.add(k);
    map.set(k, String.fromCharCode(seed));
    seed++;
  }

  return map;
};
