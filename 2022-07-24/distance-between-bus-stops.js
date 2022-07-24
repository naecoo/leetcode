/**
 * 题目链接：
 * https://leetcode.cn/problems/distance-between-bus-stops/
 *
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
  let cost1 = 0;
  let cost2 = 0;
  for (let i = start; i !== destination; i = (i + 1) % distance.length) {
    cost1 += distance[i];
  }
  for (let i = destination; i !== start; i = (i + 1) % distance.length) {
    cost2 += distance[i];
  }
  return Math.min(cost1, cost2);
};

function distanceBetweenBusStops2(distance, start, destination) {
  let cost1 = 0;
  let cost2 = 0;

  if (start > destination) {
    [start, destination] = [destination, start];
  }

  for (let i = start; i < destination; i++) {
    cost1 += distance[i];
  }

  for (let i = destination; i !== start; i = (i + 1) % distance.length) {
    cost2 += distance[i];
  }

  return Math.min(cost1, cost2);
};
