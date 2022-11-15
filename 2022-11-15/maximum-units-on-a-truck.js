/**
 * 题目链接：
 * https://leetcode.cn/problems/maximum-units-on-a-truck/
 *
 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let res = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  for (const boxType of boxTypes) {
    const n = Math.min(boxType[0], truckSize);
    res += n * boxType[1];
    truckSize -= n;
    if (truckSize === 0) break;
  }
  return res;
};
